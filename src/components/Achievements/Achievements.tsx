import { ArrowUpRight, GraduationCap } from "lucide-react";
import { achievements, education } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import AnimatedValue from "../ui/AnimatedValue";

export default function Achievements() {
  return (
    <section id="achievements" className="section recognition-section">
      <div className="container">
        <SectionHeading
          number="05"
          label="Recognition & education"
          title={
            <>
              The work behind
              <br />
              <em>the milestones.</em>
            </>
          }
        />
        <div className="achievement-grid">
          {achievements.slice(0, 3).map((item, index) => (
            <Reveal className="achievement" key={item.id} delay={index * 0.07}>
              <p className="achievement-index">
                0{index + 1} / {item.title}
              </p>
              <div className="achievement-value">
                <AnimatedValue value={item.value} />
              </div>
              <p className="achievement-label">{item.label}</p>
              <p className="achievement-description">{item.description}</p>
              {item.link && (
                <a
                  className="text-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {index === 0 ? "View coding profile" : "Verify credential"}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal className="education">
          <div className="education-icon">
            <GraduationCap size={28} strokeWidth={1.3} />
          </div>
          <div>
            <p className="eyebrow">Education / {education.period}</p>
            <h3>{education.school}</h3>
            <p>
              {education.degree} · {education.field}
            </p>
            <span>{education.location}</span>
          </div>
          <div className="education-score">
            <strong>{education.cgpa}</strong>
            <span>CGPA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
