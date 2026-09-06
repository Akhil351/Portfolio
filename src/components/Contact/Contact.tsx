import { lazy, Suspense, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

const ContactForm = lazy(() => import("./ContactForm"));
export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="contact-layout">
          <div>
            <p className="eyebrow">
              <span>06</span>Let’s connect
            </p>
            <h2>
              Let’s build something
              <br />
              <em>meaningful.</em>
              <span className="contact-period" aria-hidden="true">
                ✳
              </span>
            </h2>
            <p className="contact-description">
              Looking for a backend or AI systems engineer?
              <br />
              I’d love to hear what you’re working on.
            </p>
            <a className="contact-email" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
              <ArrowUpRight />
            </a>
          </div>
          <div className="contact-aside">
            <p className="availability">
              <span />
              Open to engineering opportunities
            </p>
            <p>
              Based in {personalInfo.location}.<br />
              Let’s start a conversation.
            </p>
            <button
              className="button button-secondary"
              aria-expanded={formOpen}
              aria-controls="contact-form"
              onClick={() => setFormOpen((value) => !value)}
            >
              <Mail size={16} />
              {formOpen ? "Close message form" : "Send a message"}
              <ArrowRight size={16} />
            </button>
            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
                <ArrowUpRight size={13} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
              <a href={`tel:${personalInfo.phone.replace(/ /g, "")}`}>
                <Phone size={16} />
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </Reveal>
        <div id="contact-form" hidden={!formOpen}>
          {formOpen && (
            <Suspense fallback={<p role="status">Loading message form…</p>}>
              <ContactForm />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
