import { ArrowUp, Instagram, Twitter } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <a
          className="brand"
          href="#hero"
          aria-label={`${personalInfo.displayName}, home`}
        >
          <span className="brand-mark" aria-hidden="true">
            a<span>·</span>
          </span>
          <span>
            © {new Date().getFullYear()} {personalInfo.displayName}
          </span>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-socials">
          <a
            className="icon-button"
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
          >
            <Instagram size={16} />
          </a>
          <a
            className="icon-button"
            href={personalInfo.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X profile"
          >
            <Twitter size={16} />
          </a>
          <a className="back-top" href="#hero">
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
