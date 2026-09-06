import { ArrowUpRight, Braces, Workflow, Cloud, Layers } from "lucide-react";
import { personalInfo, profileMilestones } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import AnimatedValue from "../ui/AnimatedValue";
import SectionHeading from "../ui/SectionHeading";

const specialties = [
  {
    icon: Braces,
    title: "Backend, built to last.",
    description:
      "Production APIs, domain-driven architecture, and the details that make a system dependable.",
    stack: "FastAPI / Spring Boot / Go",
  },
  {
    icon: Workflow,
    title: "AI with a purpose.",
    description:
      "Stateful agents with conversation memory, custom tools, and real-world integrations.",
    stack: "LangGraph / LangChain / OpenAI",
  },
  {
    icon: Cloud,
    title: "Designed for the cloud.",
    description:
      "Serverless infrastructure, asynchronous services, and automated paths to production.",
    stack: "AWS / Docker / RabbitMQ",
  },
  {
    icon: Layers,
    title: "The complete picture.",
    description:
      "From React interfaces to secure APIs, databases, and distributed blockchain workflows.",
    stack: "React / PostgreSQL / Hyperledger Fabric",
  },
];
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          number="01"
          label="The engineer behind the systems"
          title={
            <>
              Built with curiosity.
              <br />
              <em>Grounded in engineering.</em>
            </>
          }
        />
        <div className="about-layout">
          <Reveal className="about-editorial">
            <p className="about-lead">
              I’m Akhil, a backend engineer who cares about what happens{" "}
              <span>beneath the interface.</span>
            </p>
            <p>
              At Ideyalabs, I build production systems with FastAPI, PostgreSQL,
              and AWS. My work spans transportation platforms, blockchain
              transactions, and AI agents that can reason, remember, and act.
            </p>
            <p>
              I enjoy connecting the pieces: a well-designed API, a reliable
              service, an intelligent workflow. The goal is always the same —
              make complex systems useful.
            </p>
            <div className="about-note">
              <span className="status-dot" />
              {personalInfo.location}
              <span className="note-divider">/</span>Open to what’s next
            </div>
            <a className="text-link" href="#experience">
              Explore my experience <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <div className="specialty-grid">
            {specialties.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="specialty">
                <item.icon size={23} strokeWidth={1.4} />
                <span className="specialty-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="specialty-stack">{item.stack}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="profile-milestones">
          {profileMilestones.map((item) => (
            <div key={item.label}>
              <strong>
                <AnimatedValue value={item.value} />
              </strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
