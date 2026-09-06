import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { PointerEvent } from "react";
import type { Project } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import TechTags from "../ui/TechTags";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 25 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 25 });
  const move = (event: PointerEvent<HTMLElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((0.5 - (event.clientY - rect.top) / rect.height) * 2);
    y.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
  };
  return (
    <Reveal className={index === 0 || index === 3 ? "project-wide" : ""}>
      <motion.article
        className={`project-card project-${project.icon}`}
        style={{ rotateX, rotateY }}
        onPointerMove={move}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <div className="project-body">
          <div className="project-meta">
            <span>
              0{index + 1} / {project.category}
            </span>
            <ArrowUpRight size={19} />
          </div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-description">{project.description}</p>
          <TechTags items={project.tech} />
          <div className="project-links">
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={15} />
              View source
              <ArrowUpRight size={15} />
            </a>
            {project.demo && project.demo !== project.github && (
              <a
                className="text-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
        <ArchitectureDiagram project={project} />
      </motion.article>
    </Reveal>
  );
}
