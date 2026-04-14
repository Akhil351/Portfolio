import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY, scrollYProgress } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(2,4,8,0)", "rgba(2,4,8,0.95)"]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  /* Intersection observer for active section */
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #00d4ff, #0066ff, #00ff9f)",
        }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300"
        style={{ backgroundColor: bg, borderBottom: `1px solid ${scrolled ? "rgba(0,212,255,0.08)" : "transparent"}` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-mono text-white tracking-widest text-sm flex items-center gap-1.5 group"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-cyan-400 group-hover:text-white transition-colors">&lt;</span>
            <span className="group-hover:text-cyan-400 transition-colors">AKHIL</span>
            <span className="text-cyan-400">.</span>
            <span className="group-hover:text-cyan-400 transition-colors">DEV</span>
            <span className="text-cyan-400 group-hover:text-white transition-colors">/&gt;</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="relative text-sm font-mono tracking-wide transition-colors"
                  style={{ color: isActive ? "#00d4ff" : "#6b7280" }}
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </nav>

          {/* Hire me CTA */}
          <motion.a
            href="mailto:akhil.vathaluru@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 text-cyan-400
                       text-xs font-mono rounded-sm hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all"
            whileHover={{ scale: 1.03, boxShadow: "0 0 15px #00d4ff20" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Hire Me
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="md:hidden bg-[#020408]/98 border-t border-cyan-400/08 px-6 py-5 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-mono text-left transition-colors ${
                  activeSection === item.href ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.href ? "▸ " : ""}{item.label}
              </button>
            ))}
            <a
              href="mailto:akhil.vathaluru@gmail.com"
              className="text-sm font-mono text-cyan-400 border-t border-gray-800 pt-4 mt-1"
            >
              akhil.vathaluru@gmail.com
            </a>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
