import { ArrowDown, ArrowRight, Workflow } from "lucide-react";
import type { Project } from "../../data/portfolio";

export default function ArchitectureDiagram({ project }: { project: Project }) {
  return (
    <div className={`architecture architecture-${project.icon}`}>
      <div className="architecture-heading">
        <span>ARCHITECTURE AT A GLANCE</span>
        <Workflow size={16} />
      </div>
      <ol className="architecture-flow">
        {project.architecture.map((step, i) => (
          <li key={step}>
            <div className={`architecture-node ${i === 1 ? "node-core" : ""}`}>
              <span>0{i + 1}</span>
              <strong>{step}</strong>
              <i />
            </div>
            {i < project.architecture.length - 1 && (
              <span className="architecture-connector" aria-hidden="true">
                <ArrowDown size={13} />
                <ArrowRight size={13} />
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="architecture-footer">
        <span className="status-dot" />
        {project.category}
        <span>A / 0{project.id}</span>
      </div>
    </div>
  );
}
