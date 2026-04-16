import { useState, lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return <div className="py-28 bg-[#020408]" />;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-cyan-400 focus:text-black focus:font-mono focus:text-sm focus:rounded-sm focus:shadow-lg"
          >
            Skip to main content
          </a>
          <CustomCursor />
          <Navbar />
          <main id="main-content">
            <Hero />
            <Suspense fallback={<SectionFallback />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Achievements />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}
