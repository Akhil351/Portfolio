import { lazy, Suspense } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

const CoreScene = lazy(() => import("./CoreScene"));

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal>
            <p className="availability">
              <span />
              Open to engineering opportunities
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-intro">
              ENGINEERING SYSTEMS. CREATING POSSIBILITIES.
            </p>
            <h1 id="hero-title">
              {personalInfo.displayName.toUpperCase()}
              <span className="name-period" aria-hidden="true">
                .
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="hero-role">
              Backend Engineer <span>•</span> AI Systems Engineer
            </p>
            <p className="hero-description">
              I build scalable backends, cloud-native applications,
              <br className="desktop-break" /> and AI agents that turn
              complexity into capability.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.2}>
            <a className="button button-primary" href="#projects">
              View my work <ArrowDownRight size={18} />
            </a>
            <a
              className="button button-secondary"
              href={personalInfo.resume}
              download={personalInfo.resumeFilename}
            >
              <Download size={16} />
              Download resume
            </a>
          </Reveal>
          <Reveal className="hero-socials" delay={0.25}>
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
            <a href="#contact">
              Contact me
              <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
        <div className="hero-visual">
          <div className="core-ambient" aria-hidden="true" />
          <div className="visual-caption">
            <span className="tiny-cross">+</span> DIGITAL SYSTEMS CORE{" "}
            <span>A — 01</span>
          </div>
          <Suspense
            fallback={
              <div className="scene-fallback">
                <span>BACKEND · AI · CLOUD</span>
              </div>
            }
          >
            <CoreScene />
          </Suspense>
          <div className="core-label core-label-top">
            <i />
            Cloud infrastructure<span>AWS / SERVERLESS</span>
          </div>
          <div className="core-label core-label-bottom">
            <i />
            Intelligent orchestration<span>AGENTS / DISTRIBUTED SYSTEMS</span>
          </div>
          <div className="visual-footnote">
            <span className="status-dot" />
            Connected by design<span>01 / SYSTEM ARCHITECTURE</span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <p>BASED IN {personalInfo.location.toUpperCase()}</p>
        <a href="#about">
          A little further, a lot more <ArrowDown size={15} />
        </a>
        <p>BACKEND · AI · CLOUD</p>
      </div>
    </section>
  );
}
