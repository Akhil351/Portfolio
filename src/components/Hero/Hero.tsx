import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Suspense, lazy, useState, useEffect } from "react";
import { personalInfo } from "../../data/portfolio";

const ParticleField = lazy(() => import("./ParticleField"));

const roles = [
  "Backend Systems Engineer",
  "AI Agent Developer",
  "Microservices Architect",
  "Cloud Infrastructure Builder",
  "LangGraph Specialist",
];

function TypewriterCycler() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 300);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, index]);

  return (
    <div className="flex items-center gap-2 min-h-[28px]" aria-live="polite" aria-atomic="true">
      <span className="text-cyan-400 font-mono text-sm tracking-wide">{displayed}</span>
      <span className="w-0.5 h-4 bg-cyan-400 cursor-blink inline-block" aria-hidden="true" />
    </div>
  );
}

const floatingBadges = [
  { label: "FastAPI", color: "#00d4ff", x: "right-[8%]", y: "top-[22%]", delay: 0.3 },
  { label: "LangGraph", color: "#ff6b35", x: "right-[3%]", y: "top-[42%]", delay: 0.6 },
  { label: "AWS Lambda", color: "#00ff9f", x: "right-[10%]", y: "top-[62%]", delay: 0.9 },
  { label: "PostgreSQL", color: "#ffd700", x: "right-[20%]", y: "top-[78%]", delay: 1.2 },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" aria-label="Introduction" className="relative min-h-screen flex items-center overflow-hidden bg-[#020408]">
      <div className="scanline" aria-hidden="true" />

      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 ambient-blob pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 ambient-blob pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6b35, transparent)", animationDelay: "-4s" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020408] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/70 via-transparent to-[#020408]/30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400 flex-shrink-0" aria-hidden="true" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/20 bg-green-400/5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-green-400 font-mono text-[11px] tracking-[0.2em] uppercase">Open to Opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <div className="text-gray-500 font-mono text-sm tracking-[0.25em] mb-2 uppercase" aria-hidden="true">
              &lt; Vathaluru
            </div>
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black text-white leading-[0.95] tracking-tight">
              Akhileswar
              <br />
              <span className="gradient-text-cyan glow-cyan-text">Reddy</span>
            </h1>
            <div className="text-gray-500 font-mono text-sm tracking-[0.25em] mt-2 uppercase text-right max-w-xs" aria-hidden="true">
              /&gt;
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-2"
          >
            <span className="text-gray-600 font-mono text-xs mr-2 tracking-wide" aria-hidden="true">const role =</span>
            <TypewriterCycler />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mt-6 mb-10 max-w-xl"
          >
            {personalInfo.tagline} — crafting production-grade APIs,
            intelligent LLM agents, and cloud-native microservices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              aria-label="View my projects"
              className="relative px-8 py-3.5 bg-cyan-400 text-[#020408] font-bold text-sm tracking-wide rounded-sm overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contact")}
              aria-label="Go to contact section"
              className="px-8 py-3.5 border border-gray-700 text-gray-300 text-sm font-medium rounded-sm hover:border-cyan-400/60 hover:text-white hover:bg-cyan-400/5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="akhileswar.pdf"
              aria-label="Download Akhileswar Reddy's resume PDF"
              className="flex items-center gap-2 px-6 py-3.5 border border-gray-700 text-gray-300 text-sm font-medium rounded-sm hover:border-cyan-400/60 hover:text-white hover:bg-cyan-400/5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </motion.a>
          </motion.div>

        </div>

        <div className="hidden xl:block" aria-hidden="true">
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className={`absolute ${badge.x} ${badge.y}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + badge.delay, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono backdrop-blur-sm"
                style={{
                  borderColor: `${badge.color}30`,
                  color: badge.color,
                  backgroundColor: `${badge.color}08`,
                  boxShadow: `0 0 20px ${badge.color}15`,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badge.color }} />
                {badge.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-gray-700 font-mono text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
