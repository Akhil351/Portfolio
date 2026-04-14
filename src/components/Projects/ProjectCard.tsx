import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Bot, Plane, Wallet, Activity, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  bot: Bot,
  plane: Plane,
  wallet: Wallet,
  activity: Activity,
  image: ImageIcon,
};

/* Mock terminal lines per project */
const mockLines: Record<number, string[]> = {
  1: [
    "$ uvicorn main:app --reload",
    "> LangGraph agent initialized",
    "> GPT-4 tools loaded: [tavily_search]",
    "> PostgreSQL session: CONNECTED",
    "✓ Multi-thread conv ready",
  ],
  2: [
    "$ python travel_agent.py",
    "> Pinecone index: travel-ctx loaded",
    "> Tools: [flight_search, hotel_search]",
    "> SerpAPI: authorized",
    "✓ Agent listening on :8000",
  ],
  3: [
    "$ python budget_buddy.py",
    "> LangGraph state machine: READY",
    "> Tracking: income / expenses",
    "> Balance monitor: ACTIVE",
    "✓ Finance assistant online",
  ],
  4: [
    "$ mvn spring-boot:run",
    "> Eureka: registered 3 services",
    "> RabbitMQ: queue bound",
    "> Gemini AI: recommendation svc",
    "✓ Microservices cluster UP",
  ],
  5: [
    "$ mvn spring-boot:run -Dport=8080",
    "> Clerk webhook: synchronized",
    "> ClipDrop API: connected",
    "> Razorpay: payment gateway UP",
    "✓ BG removal service ready",
  ],
};

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  color: string;
  icon: string;
}

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const Icon = iconMap[project.icon] || Bot;
  const cardRef = useRef<HTMLDivElement>(null);

  /* 3D tilt with springs */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const lines = mockLines[project.id] ?? [];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-sm border border-gray-800 bg-gray-900/25 overflow-hidden
                 hover:border-gray-600 transition-all duration-500 flex flex-col"
    >
      {/* Top neon bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-50 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${project.color}10, transparent)` }}
      />

      {/* Mock terminal preview */}
      <div
        className="relative border-b border-gray-800/60 bg-[#010306] font-mono text-[10px] leading-relaxed overflow-hidden"
        style={{ height: "108px" }}
      >
        {/* Terminal chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800/40">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <span className="ml-2 text-gray-600 text-[9px] tracking-widest truncate min-w-0">~/projects/{project.title.toLowerCase().replace(/\s/g, "-")}</span>
        </div>
        {/* Lines */}
        <div className="p-3 space-y-0.5">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.08 + 0.3 }}
              className={
                line.startsWith("$")
                  ? "text-cyan-400/80"
                  : line.startsWith("✓")
                  ? "text-green-400/80"
                  : "text-gray-500"
              }
            >
              {line}
            </motion.div>
          ))}
        </div>
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${project.color}12`, border: `1px solid ${project.color}25` }}
          >
            <Icon size={20} style={{ color: project.color }} />
          </div>
          <div className="flex items-center gap-2">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors p-1"
                whileHover={{ scale: 1.2 }}
              >
                <ExternalLink size={15} />
              </motion.a>
            )}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors p-1"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={15} />
            </motion.a>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg mb-0.5 leading-tight">{project.title}</h3>
        <p className="text-[11px] font-mono mb-3" style={{ color: project.color }}>{project.subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded-sm border transition-all duration-300 group-hover:border-opacity-40"
              style={{
                color: `${project.color}bb`,
                borderColor: `${project.color}18`,
                backgroundColor: `${project.color}06`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-white group/link transition-colors"
          whileHover={{ x: 3 }}
        >
          <Github size={12} />
          <span>View Source</span>
          <ExternalLink size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity ml-auto" />
        </motion.a>
      </div>
    </motion.div>
  );
}
