import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Testimonials", href: "#testimonials" },
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
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-label="Akhileswar Reddy — Back to top"
            className="font-mono text-white tracking-widest text-sm flex items-center gap-1.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408] rounded-sm"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-cyan-400 group-hover:text-white transition-colors" aria-hidden="true">&lt;</span>
            <span className="group-hover:text-cyan-400 transition-colors">AKHIL</span>
            <span className="text-cyan-400" aria-hidden="true">.</span>
            <span className="group-hover:text-cyan-400 transition-colors">DEV</span>
            <span className="text-cyan-400 group-hover:text-white transition-colors" aria-hidden="true">/&gt;</span>
          </motion.a>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={isActive ? "location" : undefined}
                  className="relative text-sm font-mono tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408] rounded-sm px-1"
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

          <motion.a
            href="mailto:akhil.vathaluru@gmail.com"
            aria-label="Hire Akhileswar — send email"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 text-cyan-400 text-xs font-mono rounded-sm hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408]"
            whileHover={{ scale: 1.03, boxShadow: "0 0 15px #00d4ff20" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Hire Me
          </motion.a>

          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408] rounded-sm p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="md:hidden bg-[#020408]/98 border-t border-cyan-400/08 px-6 py-5 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                aria-current={activeSection === item.href ? "location" : undefined}
                className={`text-sm font-mono text-left transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-[#020408] rounded-sm ${
                  activeSection === item.href ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.href ? "▸ " : ""}{item.label}
              </button>
            ))}
            <a
              href="mailto:akhil.vathaluru@gmail.com"
              className="text-sm font-mono text-cyan-400 border-t border-gray-800 pt-4 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm"
            >
              akhil.vathaluru@gmail.com
            </a>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
