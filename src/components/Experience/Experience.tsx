import { ArrowDownRight, Briefcase } from "lucide-react";
import { experiences, personalInfo } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechTags from "../ui/TechTags";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="Experience"
          title={
            <>
              Real systems.
              <br />
              <em>Real responsibility.</em>
            </>
          }
          action={
            <a
              className="text-link"
              href={personalInfo.resume}
              download="Akhil-Vathaluru-Resume.pdf"
            >
              The full story, in my resume <ArrowDownRight size={17} />
            </a>
          }
        />
        <div className="timeline">
          {experiences.map((role, i) => (
            <Reveal key={role.id} className="timeline-entry">
              <div className="career-date">
                <span className={`timeline-dot ${i === 0 ? "current" : ""}`} />
                <p>{role.period}</p>
                <span>
                  {role.type === "full-time"
                    ? "FULL TIME · CURRENT"
                    : "INTERNSHIP"}
                </span>
                <p className="career-location">{role.location}</p>
              </div>
              <article className="career-content">
                <div className="career-heading">
                  <div>
                    <p className="company-name">
                      <Briefcase size={15} />
                      {role.company}
                    </p>
                    <h3>{role.role}</h3>
                  </div>
                  <span className="career-index">0{role.id}</span>
                </div>
                <h4>{role.project}</h4>
                <ul className="career-highlights">
                  {(i === 0
                    ? [
                        role.highlights[0],
                        role.highlights[5],
                        role.highlights[6],
                      ]
                    : role.highlights
                  ).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {i === 0 && (
                  <details className="career-details">
                    <summary>
                      Explore workflows & integrations<span>+</span>
                    </summary>
                    <ul className="career-highlights">
                      {role.highlights.slice(1, 5).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <TechTags items={role.tech} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
