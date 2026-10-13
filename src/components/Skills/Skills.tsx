import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { skills } from "../../data/portfolio";

/* "Core" = primary production stack; every other skill is "Proficient" */
const coreSkills = new Set([
  "FastAPI", "LangGraph", "Spring Boot", "LangChain", "PostgreSQL", "AWS Lambda", "SQLAlchemy", "Java",
]);

function SkillBadge({ name, color, index, inView }: { name: string; color: string; index: number; inView: boolean }) {
  const isCore = coreSkills.has(name);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono rounded-sm border cursor-default
                 transition-all duration-300 hover:-translate-y-0.5 hover:[box-shadow:0_0_14px_var(--glow)]"
      style={{
        color: `${color}e6`,
        borderColor: isCore ? `${color}60` : `${color}25`,
        backgroundColor: `${color}0a`,
        "--glow": `${color}66`,
      } as CSSProperties}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={
          isCore
            ? { backgroundColor: color, boxShadow: `0 0 6px ${color}` }
            : { border: `1px solid ${color}80` }
        }
      />
      {name}
    </motion.span>
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
                 hover:border-gray-700 hover:[box-shadow:0_0_40px_-18px_var(--accent)] transition-all duration-500 group overflow-hidden"
      style={{ "--accent": color } as CSSProperties}
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

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, i) => (
          <SkillBadge key={item} name={item} color={color} index={i} inView={inView} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 sm:py-28 bg-[#020408] overflow-hidden">
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
          className="text-gray-500 mb-8 max-w-xl text-[15px]"
        >
          Tools I use to architect backends, orchestrate AI agents, and ship to production.
        </motion.p>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 font-mono text-[11px] text-gray-500"
        >
          <span className="text-gray-600 text-[10px] tracking-widest uppercase">Proficiency</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            Core · primary stack
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full border border-gray-500" />
            Proficient · hands-on
          </span>
        </motion.div>

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
