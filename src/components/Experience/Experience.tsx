import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../data/portfolio";
import { Building2, Calendar, ChevronRight, Zap } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-16 sm:py-28 bg-[#020408] overflow-hidden">
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 50%, #001a2e 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">Work History</span>
          <span className="text-gray-700 font-mono text-xs">// 03</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline spine */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] md:left-[22px] top-5 z-10">
                  <div
                    className="relative w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#020408] flex items-center justify-center"
                    style={{ boxShadow: "0 0 12px #00d4ff60" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    {/* Pulse ring for current job */}
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-sm border tracking-wider ${
                      exp.type === "full-time"
                        ? "bg-cyan-400/8 text-cyan-400 border-cyan-400/20"
                        : "bg-orange-400/8 text-orange-400 border-orange-400/20"
                    }`}
                  >
                    {exp.type === "full-time" ? "● FULL TIME" : "● INTERNSHIP"}
                  </span>
                  {i === 0 && (
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm border bg-green-400/8 text-green-400 border-green-400/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className="group relative p-6 border border-gray-800 rounded-sm bg-gray-900/20
                             hover:border-gray-600 hover:bg-gray-900/40 transition-all duration-500 overflow-hidden"
                  whileHover={{ x: 4 }}
                >
                  {/* Top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(90deg, #00d4ff60, transparent)" }}
                  />
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at top right, #00d4ff08, transparent)" }}
                  />

                  {/* Header row */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1.5">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <Building2 size={13} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 font-semibold text-sm">{exp.company}</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-gray-500 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 font-mono text-sm bg-gray-800/40 px-3 py-1.5 rounded-sm border border-gray-700/50">
                      <Calendar size={12} className="text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Project name */}
                  <div className="mb-5 flex items-center gap-2">
                    <Zap size={13} className="text-yellow-400/70" />
                    <span className="text-xs font-mono text-gray-500 tracking-wide">Project: </span>
                    <span className="text-gray-200 text-sm font-semibold">{exp.project}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hi * 0.06 }}
                        className="flex gap-3 text-gray-400 text-sm leading-relaxed group/item"
                      >
                        <ChevronRight
                          size={14}
                          className="text-cyan-400/50 group-hover/item:text-cyan-400 flex-shrink-0 mt-0.5 transition-colors"
                        />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[11px] font-mono text-gray-500 border border-gray-800 rounded-sm
                                   hover:border-cyan-400/30 hover:text-cyan-400/80 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
