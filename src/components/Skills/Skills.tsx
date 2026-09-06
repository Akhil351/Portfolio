import {
  Braces,
  BrainCircuit,
  Cloud,
  Database,
  Network,
  ShieldCheck,
  Code2,
  PanelsTopLeft,
} from "lucide-react";
import { engineeringStack } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const icons = [
  Braces,
  BrainCircuit,
  Cloud,
  Database,
  Network,
  ShieldCheck,
  Code2,
  PanelsTopLeft,
];
export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          number="03"
          label="Engineering stack"
          title={
            <>
              The right tools.
              <br />
              <em>Connected with intention.</em>
            </>
          }
          description="From the first API call to the infrastructure underneath. The technologies I use to bring systems together."
        />
        <div className="stack-grid">
          {engineeringStack.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={group.category}
                className={`stack-group stack-group-${index}`}
                delay={(index % 4) * 0.05}
              >
                <div className="stack-heading">
                  <Icon size={21} strokeWidth={1.5} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="stack-caption">
          <span className="status-dot" />
          <p>
            Strong foundations. Thoughtful integrations. Systems that work
            together.
          </p>
          <span className="mono">BUILD → CONNECT → SHIP</span>
        </Reveal>
      </div>
    </section>
  );
}
