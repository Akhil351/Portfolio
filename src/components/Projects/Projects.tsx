import { ArrowUpRight, Github } from "lucide-react";
import { projects, personalInfo } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          number="04"
          label="Selected work"
          title={
            <>
              Ideas, engineered
              <br />
              <em>into something useful.</em>
            </>
          }
          action={
            <a
              className="text-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub
              <ArrowUpRight size={16} />
            </a>
          }
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <Reveal className="github-profile">
          <div className="github-profile-icon">
            <Github size={29} strokeWidth={1.3} />
          </div>
          <div>
            <h3>Always building. Always learning.</h3>
            <p>
              Explore the code, architecture, and experiments behind my work.
            </p>
          </div>
          <a
            className="text-link"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/Akhil351
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
