import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const count = 2500;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#00d4ff"),
      new THREE.Color("#0066ff"),
      new THREE.Color("#00ff9f"),
      new THREE.Color("#ff6b35"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function GridLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts: number[] = [];
    const size = 24;
    const step = 3;
    for (let i = -size; i <= size; i += step) {
      verts.push(i, -0.5, -size, i, -0.5, size);
      verts.push(-size, -0.5, i, size, -0.5, i);
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.position.z = ((state.clock.elapsedTime * 0.8) % 3) - 1.5;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#00d4ff" transparent opacity={0.07} />
    </lineSegments>
  );
}

function FloatingSphere({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = useRef(Math.random() * 0.5 + 0.3);
  const offset = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed.current + offset.current) * 0.4;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.4} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 2, 12], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1} />
      <pointLight position={[-5, -3, -5]} color="#ff6b35" intensity={0.5} />
      <Particles />
      <GridLines />
      <FloatingSphere position={[-5, 1, -2]} color="#00d4ff" size={0.6} />
      <FloatingSphere position={[6, -1, -4]} color="#ff6b35" size={0.4} />
      <FloatingSphere position={[2, 3, -6]} color="#00ff9f" size={0.5} />
      <FloatingSphere position={[-3, -2, -3]} color="#ffd700" size={0.35} />
    </Canvas>
  );
}
