import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import * as THREE from "three";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type Position = [number, number, number];
const nodes: Position[] = [
  [-2.55, -0.2, 0.3],
  [2.55, 0.3, -0.4],
  [0.2, -0.45, 2.6],
  [-0.2, 0.5, -2.6],
];

function Wire({
  points,
  color = "#5c83c9",
  opacity = 0.5,
}: {
  points: Position[];
  color?: string;
  opacity?: number;
}) {
  const positions = useMemo(() => new Float32Array(points.flat()), [points]);
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </lineSegments>
  );
}

function Board({ y, size, color }: { y: number; size: number; color: string }) {
  const edge = size / 2;
  const traces = useMemo(() => {
    const result: Position[] = [];
    for (let i = 0; i < 7; i++) {
      const n = (i - 3) * 0.16;
      result.push([-edge + 0.08, 0.095, n], [-0.42, 0.095, n]);
      result.push([0.42, 0.095, n], [edge - 0.08, 0.095, n]);
      result.push([n, 0.095, -edge + 0.08], [n, 0.095, -0.42]);
      result.push([n, 0.095, 0.42], [n, 0.095, edge - 0.08]);
    }
    return result;
  }, [edge]);
  return (
    <group position={[0, y, 0]}>
      <RoundedBox args={[size, 0.16, size]} radius={0.07} smoothness={3}>
        <meshStandardMaterial
          color="#14243b"
          metalness={0.75}
          roughness={0.25}
        />
      </RoundedBox>
      <RoundedBox
        args={[size + 0.008, 0.027, size + 0.008]}
        position={[0, -0.035, 0]}
        radius={0.012}
        smoothness={2}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </RoundedBox>
      <Wire points={traces} color={color} opacity={0.55} />
      {[-1, 1].flatMap((x) =>
        [-1, 1].map((z) => (
          <mesh
            key={`${x}${z}`}
            position={[x * (edge - 0.16), 0.1, z * (edge - 0.16)]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <ringGeometry args={[0.035, 0.055, 12]} />
            <meshBasicMaterial color={color} />
          </mesh>
        )),
      )}
    </group>
  );
}

function DataFlow({ mobile }: { mobile: boolean }) {
  const instance = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tick = useRef(0);
  const count = mobile ? 12 : 28;
  useFrame((_, delta) => {
    if (!instance.current) return;
    tick.current += Math.min(delta, 0.05);
    for (let i = 0; i < count; i++) {
      const node = nodes[i % nodes.length];
      const t = (tick.current * 0.15 + i / count) % 1;
      dummy.position.set(
        node[0] * t,
        node[1] * t + Math.sin(t * Math.PI) * 0.18,
        node[2] * t,
      );
      dummy.scale.setScalar(0.018 + Math.sin(t * Math.PI) * 0.012);
      dummy.updateMatrix();
      instance.current.setMatrixAt(i, dummy.matrix);
    }
    instance.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh
      ref={instance}
      args={[undefined, undefined, count]}
      frustumCulled={false}
    >
      <boxGeometry />
      <meshBasicMaterial color="#a9e9ff" toneMapped={false} />
    </instancedMesh>
  );
}

function SystemsCore({
  mobile,
  reduced,
}: {
  mobile: boolean;
  reduced: boolean;
}) {
  const assembly = useRef<THREE.Group>(null);
  const chip = useRef<THREE.Group>(null);
  const tick = useRef(0);
  const scroll = useRef(0);
  useEffect(() => {
    const update = () => {
      scroll.current = Math.min(window.scrollY / 900, 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useFrame((state, delta) => {
    if (reduced) return;
    tick.current += Math.min(delta, 0.05);
    const t = tick.current;
    if (assembly.current) {
      assembly.current.rotation.y = THREE.MathUtils.damp(
        assembly.current.rotation.y,
        -0.2 + (mobile ? 0 : state.pointer.x * 0.15) + scroll.current * 0.12,
        3,
        delta,
      );
      assembly.current.position.y = Math.sin(t * 0.55) * 0.055;
      assembly.current.rotation.x = THREE.MathUtils.damp(
        assembly.current.rotation.x,
        mobile ? 0 : state.pointer.y * 0.035,
        3,
        delta,
      );
    }
    if (chip.current) chip.current.position.y = 0.8 + Math.sin(t * 0.7) * 0.06;
  });
  const routes = useMemo(
    () => nodes.flatMap((node) => [[0, 0, 0] as Position, node]),
    [],
  );
  return (
    <group ref={assembly} rotation={[0, -0.2, 0]}>
      <Board y={-0.75} size={2.1} color="#5367c9" />
      <Board y={-0.3} size={1.95} color="#538de8" />
      <Board y={0.18} size={1.8} color="#73c9f1" />
      <group ref={chip} position={[0, 0.8, 0]}>
        <RoundedBox args={[0.94, 0.6, 0.94]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#619acf"
            metalness={0.55}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.18}
          />
        </RoundedBox>
        <RoundedBox args={[0.96, 0.035, 0.96]} radius={0.014} smoothness={2}>
          <meshBasicMaterial color="#bcefff" toneMapped={false} />
        </RoundedBox>
        <mesh
          position={[0, 0.307, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
        >
          <ringGeometry args={[0.14, 0.175, 4]} />
          <meshBasicMaterial color="#d6f5ff" toneMapped={false} />
        </mesh>
      </group>
      <Wire points={routes} color="#659bd4" opacity={0.6} />
      {nodes.map((node, i) => (
        <group key={i} position={node}>
          <RoundedBox args={[0.5, 0.27, 0.5]} radius={0.045} smoothness={3}>
            <meshStandardMaterial
              color="#243c60"
              metalness={0.7}
              roughness={0.25}
            />
          </RoundedBox>
          <RoundedBox args={[0.51, 0.018, 0.51]} radius={0.008} smoothness={2}>
            <meshBasicMaterial color={i % 2 ? "#9eabff" : "#85d9ed"} />
          </RoundedBox>
          <mesh position={[0, 0.17, 0]}>
            <boxGeometry args={[0.13, 0.035, 0.13]} />
            <meshBasicMaterial color="#b4dfff" />
          </mesh>
        </group>
      ))}
      <DataFlow mobile={mobile} />
      <gridHelper
        args={[8, 16, "#294368", "#172438"]}
        position={[0, -1.06, 0]}
      />
      {[0, 1].map((i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.02, 0]}>
          <ringGeometry
            args={[2.95 + i * 0.4, 2.96 + i * 0.4, mobile ? 64 : 120]}
          />
          <meshBasicMaterial
            color="#49618a"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function StaticCore() {
  return (
    <div className="scene-fallback">
      <div className="fallback-stack" aria-hidden="true">
        ◇
      </div>
      <span>BACKEND · AI · CLOUD</span>
    </div>
  );
}
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <StaticCore /> : this.props.children;
  }
}

export default function CoreScene() {
  const region = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [paused, setPaused] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const reduced = !!useReducedMotion();
  const mobile = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    if (region.current) observer.observe(region.current);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const animate = inView && pageVisible && !paused && !reduced;
  return (
    <div className="core-scene" ref={region}>
      <div
        className="canvas-wrap"
        aria-hidden="true"
        onContextMenu={(event) => event.preventDefault()}
      >
        <SceneBoundary>
          {contextLost ? (
            <StaticCore />
          ) : (
            <Canvas
              camera={{ position: [5.5, 4.2, 6.6], fov: 38 }}
              dpr={mobile ? 1 : [1, 1.5]}
              frameloop={animate ? "always" : "demand"}
              gl={{
                alpha: true,
                antialias: !mobile,
                powerPreference: "low-power",
              }}
              onCreated={({ gl }) => {
                gl.domElement.addEventListener(
                  "webglcontextlost",
                  () => setContextLost(true),
                  { once: true },
                );
              }}
              fallback={<StaticCore />}
            >
              <ambientLight intensity={1.1} />
              <directionalLight
                position={[2, 6, 3]}
                intensity={3}
                color="#d1e7ff"
              />
              <pointLight
                position={[-3, 2, -2]}
                intensity={18}
                color="#8b80ff"
              />
              <pointLight position={[2, 1, 3]} intensity={12} color="#77d7ff" />
              <SystemsCore mobile={mobile} reduced={reduced || paused} />
            </Canvas>
          )}
        </SceneBoundary>
      </div>
      {!reduced && !contextLost && (
        <button
          className="scene-control"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      )}
    </div>
  );
}
