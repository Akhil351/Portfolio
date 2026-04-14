import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";
import { Github, ArrowRight } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28 bg-[#020408] overflow-hidden">
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 60% at 20% 50%, #001833 0%, transparent 60%)" }}
      />
      {/* Floating code fragments background */}
      <div className="absolute right-8 top-20 font-mono text-[10px] text-gray-800 pointer-events-none hidden xl:block leading-relaxed">
        {`async def run_agent(query: str):\n    state = AgentState(messages=[query])\n    return await graph.ainvoke(state)\n\n@app.post("/chat")\nasync def chat(req: ChatRequest):\n    return await run_agent(req.message)`}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">Featured Work</span>
          <span className="text-gray-700 font-mono text-xs">// 04</span>
        </motion.div>

        <div className="flex flex-wrap justify-between items-end gap-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white"
          >
            Projects
          </motion.h2>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors font-mono
                       px-4 py-2 border border-gray-800 rounded-sm hover:border-cyan-400/30"
            whileHover={{ x: 2 }}
          >
            <Github size={14} />
            <span>More on GitHub</span>
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
