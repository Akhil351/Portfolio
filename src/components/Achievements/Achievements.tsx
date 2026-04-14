import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { achievements } from "../../data/portfolio";
import { Code2, Shield, Trophy, GraduationCap, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  shield: Shield,
  trophy: Trophy,
  graduation: GraduationCap,
};

function AnimatedValue({ value, color }: { value: string; color: string }) {
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 40, damping: 18 });
  const display = useTransform(spring, (v) =>
    Number.isInteger(numericPart) ? Math.floor(v).toString() : v.toFixed(2)
  );
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) motionVal.set(numericPart);
  }, [inView, numericPart, motionVal]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl font-black font-mono leading-none"
      style={{ color, textShadow: `0 0 40px ${color}60` }}
    >
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </div>
  );
}

const highlights = [
  { icon: "💡", label: "AI Systems", desc: "Built 15+ production AI projects" },
  { icon: "⚡", label: "Performance", desc: "80%+ test coverage on AWS Lambda" },
  { icon: "🔗", label: "Integrations", desc: "10+ external API integrations" },
  { icon: "🏗️", label: "Architecture", desc: "DDD + microservices expertise" },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-28 bg-[#020408] overflow-hidden">
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 80% 50%, #001a10 0%, transparent 60%)" }}
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
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">Recognition</span>
          <span className="text-gray-700 font-mono text-xs">// 05</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-16"
        >
          Achievements
        </motion.h2>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 border border-gray-800 rounded-sm bg-gray-900/20
                           hover:border-gray-600 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
                {/* Inner ambient glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 100% 80% at 50% -20%, ${item.color}10, transparent)` }}
                />
                {/* Bottom glow ring */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${item.color}15, transparent)`, filter: "blur(20px)" }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}25`, boxShadow: `0 0 20px ${item.color}15` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                {/* Animated number */}
                <div className="mb-2">
                  <AnimatedValue value={item.value} color={item.color} />
                </div>
                <p className="text-xs font-mono mb-4" style={{ color: `${item.color}80` }}>
                  {item.label}
                </p>

                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>

                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-mono transition-all border-b border-transparent hover:border-current pb-px"
                    style={{ color: `${item.color}70` }}
                    whileHover={{ color: item.color, x: 2 }}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={10} />
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-sm border border-gray-800/60 bg-gray-900/10"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-2xl">{h.icon}</span>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                  {h.label}
                </div>
                <div className="text-gray-600 text-xs">{h.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
