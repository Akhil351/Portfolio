import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Mail, ArrowUp, Code2, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-gray-800/60 bg-[#020408] pt-14 pb-8 overflow-hidden">
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 opacity-30"
        style={{ background: "radial-gradient(ellipse, #00d4ff, transparent)", filter: "blur(8px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono text-white text-base tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
              <span className="text-cyan-400">&lt;</span>
              AKHIL<span className="text-cyan-400">.</span>DEV
              <span className="text-cyan-400">/&gt;</span>
            </div>
            <p className="text-gray-600 text-xs font-mono">{personalInfo.name}</p>
            <p className="text-gray-700 text-xs font-mono">{personalInfo.role}</p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
            {[
              { href: personalInfo.github, Icon: Github, label: "GitHub", color: "hover:text-white" },
              { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn", color: "hover:text-cyan-400" },
              { href: personalInfo.leetcode, Icon: Code2, label: "LeetCode", color: "hover:text-orange-400" },
              { href: personalInfo.instagram, Icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
              { href: personalInfo.twitter, Icon: Twitter, label: "Twitter / X", color: "hover:text-sky-400" },
              { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email", color: "hover:text-cyan-400" },
            ].map(({ href, Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`text-gray-600 ${color} transition-colors p-2 rounded-sm border border-transparent hover:border-gray-800`}
                whileHover={{ scale: 1.15, y: -2 }}
                title={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-7" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-[11px] font-mono text-center">
            Built with{" "}
            <span className="text-gray-600">React</span> ·{" "}
            <span className="text-gray-600">Three.js</span> ·{" "}
            <span className="text-gray-600">Framer Motion</span> ·{" "}
            <span className="text-gray-600">Tailwind CSS</span>
          </p>

          <motion.button
            onClick={scrollTop}
            className="flex items-center gap-2 text-gray-600 hover:text-cyan-400 text-[11px] font-mono transition-colors group"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <div className="p-1 border border-gray-800 rounded-sm group-hover:border-cyan-400/30 transition-colors">
              <ArrowUp size={10} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
