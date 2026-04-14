import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../data/portfolio";

const proficiencyMap: Record<string, number> = {
  FastAPI: 95, "Spring Boot": 90, Go: 82, "Express.js": 75, Python: 95, Java: 88,
  LangGraph: 92, LangChain: 90, "OpenAI API": 88, Tavily: 80, "Inngest Agent Kit": 75, "Google Gemini": 78,
  "AWS Lambda": 88, "AWS CDK": 82, Docker: 80, "GitHub Actions": 85, "AWS S3": 85, "AWS Cognito": 80,
  PostgreSQL: 90, MongoDB: 82, Redis: 75, Pinecone: 80, MySQL: 78, SQLAlchemy: 88,
  "Spring Cloud": 85, RabbitMQ: 80, Eureka: 82, "API Gateway": 80, "Spring WebFlux": 75, OAuth2: 85,
  JavaScript: 82, C: 70, "C++": 72,
};

function SkillBar({ name, color, index }: { name: string; color: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const pct = proficiencyMap[name] ?? 75;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-mono" style={{ color: `${color}cc` }}>{name}</span>
        <motion.span
          className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: `${color}80` }}
        >
          {pct}%
        </motion.span>
      </div>
      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 shimmer opacity-60" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCategory({ category, color, items, index }: {
  category: string; color: string; items: string[]; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="relative p-6 rounded-sm border border-gray-800 bg-gradient-to-b from-gray-900/40 to-transparent
                 hover:border-gray-700 transition-all group overflow-hidden"
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}70, transparent)` }}
      />
      {/* Left glow on hover */}
      <div
        className="absolute top-0 left-0 w-px h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(180deg, ${color}60, transparent)` }}
      />
      {/* Ambient corner glow */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${color}10, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-2.5 h-2.5 rounded-full transition-all group-hover:scale-125"
            style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
          />
          <h3 className="text-white font-semibold text-sm tracking-wide">{category}</h3>
        </div>
        <span className="text-[10px] font-mono text-gray-600">{items.length} skills</span>
      </div>

      {/* Skill bars */}
      <div className="space-y-3.5">
        {items.map((item, i) => (
          <SkillBar key={item} name={item} color={color} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function TopProficiencyBar({ name, level, color, index, parentInView }: {
  name: string; level: number; color: string; index: number; parentInView: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldAnimate = inView && parentInView;
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between">
        <span className="text-xs font-mono text-gray-300">{name}</span>
        <span className="text-[10px] font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
          initial={{ width: 0 }}
          animate={shouldAnimate ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.06 + 0.3, duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function TopProficiencies({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 }}
      className="mb-12 p-6 rounded-sm border border-gray-800 bg-gray-900/20"
    >
      <div className="text-gray-600 font-mono text-[10px] tracking-widest mb-5 uppercase">Top Proficiencies</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
        {topSkills.map((s, i) => (
          <TopProficiencyBar
            key={s.name}
            name={s.name}
            level={s.level}
            color={s.color}
            index={i}
            parentInView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

const topSkills = [
  { name: "FastAPI", level: 95, color: "#00d4ff" },
  { name: "LangGraph", level: 92, color: "#ff6b35" },
  { name: "Spring Boot", level: 90, color: "#ffd700" },
  { name: "LangChain", level: 90, color: "#ff6b35" },
  { name: "PostgreSQL", level: 90, color: "#00ff9f" },
  { name: "AWS Lambda", level: 88, color: "#00d4ff" },
  { name: "SQLAlchemy", level: 88, color: "#00d4ff" },
  { name: "Java", level: 88, color: "#ffd700" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 bg-[#020408] overflow-hidden">
      {/* Radial ambient */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, #001a2e 0%, transparent 70%)" }}
      />
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">Technical Arsenal</span>
          <span className="text-gray-700 font-mono text-xs">// 02</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-3"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mb-12 max-w-xl text-[15px]"
        >
          Tools I use to architect backends, orchestrate AI agents, and ship to production.
        </motion.p>

        {/* Top skills highlight */}
        <TopProficiencies inView={inView} />

        {/* Category grids */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCategory
              key={skill.category}
              category={skill.category}
              color={skill.color}
              items={skill.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
