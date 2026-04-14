import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { personalInfo } from "../../data/portfolio";
import { MapPin, GraduationCap, Briefcase, Brain, Cloud, ExternalLink } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    color: "#00d4ff",
    title: "Backend Engineering",
    desc: "Production-grade FastAPI, Spring Boot, and Go systems with domain-driven design and serverless AWS deployments achieving 80%+ test coverage.",
    tag: "FastAPI · Spring Boot · Go",
  },
  {
    icon: Brain,
    color: "#ff6b35",
    title: "AI Agent Development",
    desc: "Expert in LangGraph and LangChain for conversational AI with multi-turn dialogue, custom tool integration, and Pinecone vector databases.",
    tag: "LangGraph · LangChain · OpenAI",
  },
  {
    icon: Cloud,
    color: "#00ff9f",
    title: "Microservices & Cloud",
    desc: "Event-driven architectures with RabbitMQ, Spring Cloud microservices, RESTful APIs with OAuth2/JWT on AWS Lambda infrastructure.",
    tag: "AWS · Docker · RabbitMQ",
  },
];

const stats = [
  { value: 2, suffix: "+", label: "Years Experience", color: "#00d4ff" },
  { value: 15, suffix: "+", label: "AI Projects Built", color: "#ff6b35" },
  { value: 530, suffix: "+", label: "LeetCode Problems", color: "#ffd700" },
  { value: 9.43, suffix: "", label: "CGPA", color: "#00ff9f" },
];

function AnimatedCounter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 40, damping: 18 });
  const isDecimal = !Number.isInteger(value);
  const display = useTransform(spring, (v) => (isDecimal ? v.toFixed(2) : Math.floor(v).toString()));

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-black font-mono leading-none" style={{ color }}>
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 bg-[#020408] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030810]/60 to-transparent pointer-events-none" />

      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)", filter: "blur(120px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">About Me</span>
          <span className="text-gray-700 font-mono text-xs">// 01</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-white mb-16 leading-tight"
        >
          I build systems that{" "}
          <span className="gradient-text-cyan">scale and think</span>
        </motion.h2>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mb-14 text-center"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
          <div className="relative inline-block px-8 py-5 rounded-sm border border-cyan-400/15 bg-cyan-400/3 backdrop-blur-sm max-w-3xl mx-auto">
            <span className="absolute -top-4 left-6 text-5xl text-cyan-400/30 font-serif leading-none select-none">"</span>
            <p className="text-cyan-300/80 font-mono text-base md:text-lg italic leading-relaxed tracking-wide">
              Always hungry to explore new technologies, solve complex problems,
              and push the boundaries of what I can build.
            </p>
            <span className="absolute -bottom-6 right-6 text-5xl text-cyan-400/30 font-serif leading-none select-none">"</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: bio text + info */}
          <div>
            <div className="space-y-5">
              {personalInfo.summary.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                  className="text-gray-400 leading-relaxed text-[15px] border-l-2 border-gray-800 pl-4 hover:border-cyan-400/40 transition-colors"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} className="text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <GraduationCap size={14} className="text-cyan-400" />
                <span>B.Tech CSE — KL University</span>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 text-sm transition-colors font-mono"
              >
                <ExternalLink size={14} />
                <span>github.com/Akhil351</span>
              </a>
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="space-y-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.15, duration: 0.6 }}
                  className="group relative flex gap-4 p-5 rounded-sm border border-gray-800 bg-gray-900/20 hover:border-gray-700 transition-all overflow-hidden"
                  whileHover={{ x: 4 }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${h.color}60, transparent)` }}
                  />
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-sm flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${h.color}12`, border: `1px solid ${h.color}25` }}
                  >
                    <Icon size={20} style={{ color: h.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold mb-1 text-sm">{h.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-2">{h.desc}</p>
                    <span className="text-[10px] font-mono tracking-wide" style={{ color: `${h.color}80` }}>
                      {h.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-800/60"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="group relative p-5 rounded-sm border border-gray-800/60 bg-gray-900/10 hover:border-gray-700 transition-all text-center overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${s.color}08, transparent)` }}
              />
              <AnimatedCounter value={s.value} suffix={s.suffix} color={s.color} />
              <div className="text-gray-500 text-xs mt-2 tracking-wide font-mono">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
