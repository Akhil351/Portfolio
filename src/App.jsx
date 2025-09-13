// App.jsx
import { useState, useEffect, useRef, useMemo } from "react";
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowUp,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiSpringboot,
  SiApachekafka,
  SiRabbitmq,
} from "react-icons/si";
import { FiMail, FiPhone, FiMapPin, FiFileText } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { Tilt } from "react-tilt";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Assets
import profilePic from "./assets/Akhil.jpeg";
import logo from "./assets/AK.jpg";
import project1 from "./assets/Linklytics.avif";
import project3 from "./assets/clearbg.png";
import project4 from "./assets/Real Estate.avif";
import project5 from "./assets/buget_buddy.jpeg";
import project6 from "./assets/fitness.jpg";
import FastapiIcon from "./FastapiIcon";
import langgraphImg from "./assets/langgraph.jpg";
import chatbotImg from "./assets/chatbot.avif";

// ------------------------ helper: seeded deterministic random ------------------------
function seededRandom(seed) {
  // simple deterministic generator returning [0,1)
  let t = seed >>> 0;
  t = (t + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967295;
}

// ------------------------ Data (updated per resume) ------------------------
const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Associate Software Engineer",
    company: "Ideyalabs",
    description: `Working as a Backend Developer building scalable microservices and serverless services. I design and implement secure RESTful APIs using FastAPI and Go, deploy services to AWS Lambda with the Serverless Framework, and build resilient Spring Boot microservices where appropriate. I implemented CI/CD pipelines using AWS CodePipeline and CodeBuild (with pipeline stages and buildspecs) to automate testing and deployment. I also designed and developed chaincode (smart contracts) in Go for Hyperledger Fabric integration, led migration efforts from a Corda-based blockchain to Hyperledger Fabric, and worked on performance and interoperability improvements while maintaining Spring Boot microservices for transaction coordination.`,
    technologies: [
      "FastAPI",
      "Go",
      "Spring Boot",
      "AWS Lambda",
      "Serverless Framework",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Hyperledger Fabric",
      "CI/CD (CodePipeline & CodeBuild)",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Red Hat Certified Enterprise Application Developer (EX183)",
    link: "https://rhtapps.redhat.com/verify?certId=230-171-886",
    details: [
      "Certification: EX183 - Red Hat Certified Enterprise Application Developer",
      "Technologies: Red Hat JBoss Enterprise Application Platform 7.0",
    ],
  },
  {
    title: "Google Cloud Agentic AI Day — Hack2skill (2025) — Finalist",
    link: "https://certificate.hack2skill.com/user/aidayfinalist-1/2025H2S06AID-F01638",
    details: [
      "Finalist — Top 700 of 57,000+. Built an AI-powered monitoring system using Vertex AI, Gemini, Next.js, and ESP32 in a 30-hour hackathon.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Chat Bot",
    image: chatbotImg,
    description:
      "Developed a full-stack AI chat platform using React, Tailwind CSS, FastAPI, and LangGraph with OpenAI integration. Implemented persistent chat history, multi-threaded conversations, and modular backend architecture.",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "PostgreSQL",
    ],
    link: "https://github.com/Akhil351/langgraph-chatbot",
    github: "https://github.com/Akhil351/langgraph-chatbot",
  },
  {
    title: "Budget Buddy",
    image: project5,
    description:
      "Designed a CLI-based finance assistant using LangGraph, GPT-4o, and SQLAlchemy. Enabled expense tracking, Tavily web search, and persistent memory via PostgreSQL.",
    technologies: [
      "LangGraph",
      "GPT-4o",
      "SQLAlchemy",
      "PostgreSQL",
      "Tavily",
      "CLI",
    ],
    link: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
    github: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
  },
  {
    title: "Fitness AI Platform",
    image: project6,
    description:
      "Created a full-stack fitness tracking platform with AI-driven insights and analytics. Implemented user authentication and role management using Keycloak.",
    technologies: [
      "Spring Boot",
      "React",
      "Keycloak",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "AI/ML",
    ],
    link: "https://github.com/Akhil351/fitness",
    github: "https://github.com/Akhil351/fitness",
  },
  {
    title: "ClearBG",
    image: project3,
    description:
      "Developed an AI-powered image processing tool with real-time background removal. Integrated Clerk authentication, Razorpay payments, and a microservice-based backend architecture.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Clerk",
      "Razorpay",
      "AI/ML",
      "Microservices",
    ],
    link: "https://github.com/Akhil351/ClearBG",
    github: "https://github.com/Akhil351/ClearBG",
  },
  {
    title: "Linklytics",
    image: project1,
    description:
      "Engineered a secure, scalable URL shortening platform with real-time analytics and encryption. Optimized for performance and user experience using a modern tech stack.",
    technologies: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "JWT",
      "TailwindCSS",
    ],
    link: "https://akhil-amber.vercel.app/",
    github: "https://github.com/Akhil351/Linklytics",
  },
  {
    title: "Real Estate Management System",
    image: project4,
    description:
      "Built a blockchain-based property management system using Hyperledger Fabric and Go. Implemented smart contracts, JWT authentication, and PostgreSQL-backed ledger storage.",
    technologies: [
      "Go",
      "Hyperledger Fabric",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Blockchain",
    ],
    link: "https://github.com/Akhil351/Real-Estate-Management-System",
    github: "https://github.com/Akhil351/Real-Estate-Management-System",
  },
];

const CONTACT = {
  address: "Kondapur, Hyderabad, Telangana, 500084, India",
  phoneNo: "+91 8500618999",
  email: "akhil.vathaluru@gmail.com",
};

// LangGraph small icon wrapper
const LangGraphIcon = (props) => (
  <img
    src={langgraphImg}
    alt="LangGraph"
    style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover" }}
    {...props}
  />
);

const technologies = [
  {
    icon: SiSpringboot,
    name: "Spring Boot",
    color: "text-green-500",
    rating: 95,
    progressColor: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    icon: FaGolang,
    name: "Go",
    color: "text-blue-500",
    rating: 90,
    progressColor: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    icon: RiReactjsLine,
    name: "React",
    color: "text-cyan-400",
    rating: 92,
    progressColor: "bg-gradient-to-r from-cyan-400 to-blue-500",
  },
  {
    icon: BiLogoPostgresql,
    name: "PostgreSQL",
    color: "text-blue-600",
    rating: 88,
    progressColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "text-green-500",
    rating: 85,
    progressColor: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    icon: DiRedis,
    name: "Redis",
    color: "text-red-500",
    rating: 87,
    progressColor: "bg-gradient-to-r from-red-400 to-red-600",
  },
  {
    icon: SiApachekafka,
    name: "Kafka",
    color: "text-purple-500",
    rating: 82,
    progressColor: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    icon: SiRabbitmq,
    name: "RabbitMQ",
    color: "text-orange-500",
    rating: 80,
    progressColor: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    icon: FastapiIcon,
    name: "FastAPI",
    color: "text-teal-400",
    rating: 88,
    progressColor: "bg-gradient-to-r from-teal-400 to-teal-600",
  },
  {
    icon: LangGraphIcon,
    name: "LangGraph",
    color: "text-violet-400",
    rating: 85,
    progressColor: "bg-gradient-to-r from-violet-400 to-purple-600",
  },
];

// ------------------------ Motion variants (improved/smoother) ------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const smoothCardHover = {
  scale: 1.035,
  y: -8,
  transition: { type: "spring", stiffness: 380, damping: 26, mass: 0.75 },
};

const smoothScaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingAnimation = {
  y: [0, -14, 0],
  transition: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
};

// glass styles unchanged
const glassmorphismCard =
  "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20";
const glassmorphismCardHover =
  "hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:shadow-blue-500/10";

// ------------------------ ContactForm ------------------------
const ContactForm = () => {
  const [state, handleSubmit] = useForm("myzerepa");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="text-green-400 text-xl font-medium mb-2"
        >
          Message sent successfully!
        </motion.div>
        <p className="text-gray-400">
          Thank you — I’ll respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.05 }}
        viewport={{ once: true }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="your.email@example.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Subject"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/20 transition-all"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
};

// ------------------------ FloatingTechIcons (DETERMINISTIC + PERF) ------------------------
const FloatingTechIcons = () => {
  const iconDefinitions = useMemo(
    () => [
      { icon: SiSpringboot, color: "#68D391" },
      { icon: FaGolang, color: "#4299E1" },
      { icon: RiReactjsLine, color: "#76E4F7" },
      { icon: BiLogoPostgresql, color: "#3182CE" },
      { icon: SiMongodb, color: "#68D391" },
      { icon: DiRedis, color: "#F56565" },
      { icon: SiApachekafka, color: "#9F7AEA" },
      { icon: SiRabbitmq, color: "#ED8936" },
      { icon: FastapiIcon, color: "#14B8A6" },
      { icon: LangGraphIcon, color: "#A78BFA" },
    ],
    []
  );

  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const positions = useMemo(() => {
    return iconDefinitions.map((_, i) => {
      const seed = Math.floor((i + 1) * 918273 + 12345);
      const r = seededRandom(seed);
      const size = Math.round(20 + r * 36); // 20-56 px
      const left = Math.round(r * 86 + 7); // 7..93%
      const top = Math.round(((r * 73) % 90) + 5); // 5..95%
      return { size, left, top, r };
    });
  }, [iconDefinitions]);

  return (
    <motion.div
      className="fixed inset-0 -z-40 pointer-events-none"
      style={{ translateY: parallax }}
    >
      {iconDefinitions.map((tech, idx) => {
        const pos = positions[idx];
        const Icon = tech.icon;
        const style = {
          width: `${pos.size}px`,
          height: `${pos.size}px`,
          left: `${pos.left}%`,
          top: `${pos.top}%`,
          opacity: 0.12,
          color: tech.color,
          transform: `translate3d(0,0,0)`,
        };

        const duration = 8 + (idx % 5) * 0.8;

        return (
          <motion.div
            key={idx}
            className="absolute rounded-full flex items-center justify-center"
            style={style}
            animate={{
              y: [0, -12 - pos.r * 20, 0],
              rotate: [0, 45 * pos.r, 0],
              x: [0, -6 + pos.r * 12, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: pos.r * 0.6,
            }}
            aria-hidden
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// ------------------------ App (main) ------------------------
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // handle scrolling + active section
  useEffect(() => {
    const sections = [
      "home",
      "skills",
      "projects",
      "experience",
      "certifications",
      "contact",
    ];
    const handler = () => {
      const checkPoint = window.scrollY + window.innerHeight * 0.3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (checkPoint >= top && checkPoint < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // small loader for polish
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // keyboard to close menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
          />
          <p className="text-blue-400 font-medium">Loading</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-sans overflow-x-hidden antialiased relative"
      ref={containerRef}
    >
      {/* progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50 shadow-lg"
        style={{ width: progressBarWidth }}
        aria-hidden
      />

      {/* 3D background (reduced count for perf) */}
      <div className="fixed inset-0 -z-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.35} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars
            radius={100}
            depth={50}
            count={1200}
            factor={4}
            saturation={0}
            fade
            speed={0.7}
          />
        </Canvas>
      </div>

      {/* subtle gradient mesh */}
      <div className="fixed inset-0 -z-40">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.28)_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.22)_0%,_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.18)_0%,_transparent_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/6 to-pink-500/10"
          animate={{ opacity: [0.28, 0.58, 0.28], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </div>

      {/* floating tech icons */}
      <FloatingTechIcons />

      {/* mobile nav button */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-800/90 shadow-lg"
          whileTap={{ scale: 0.92 }}
          aria-label="Open menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <motion.span
              className="block h-0.5 w-full bg-white rounded-full"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
              }}
            />
            <motion.span
              className="block h-0.5 w-full bg-white rounded-full"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-white rounded-full"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
              }}
            />
          </div>
        </motion.button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ type: "spring", damping: 26 }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-900/95 shadow-xl z-40 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {[
                  { id: "home", label: "Home" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "experience", label: "Experience" },
                  { id: "certifications", label: "Certifications" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-xl font-medium ${
                      activeSection === item.id
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    } transition-colors`}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* desktop nav */}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 bg-gray-950/78 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ duration: 0.26 }}
              className="relative"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto rounded-full border border-blue-500/25 shadow-sm"
              />
            </motion.div>
          </motion.a>

          <div className="flex items-center gap-10">
            <div className="flex gap-8">
              {[
                { id: "home", label: "Home" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "certifications", label: "Certifications" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  } transition-colors`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Akhil___351/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-20 mt-24">
        {/* HERO */}
        <section
          id="home"
          className="flex flex-col items-center lg:flex-row py-32 lg:py-40 gap-20 min-h-screen relative"
        >
          {/* LEFT: Photo */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center"
          >
            {/* soft radial glow behind */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.28) 0%, rgba(139,92,246,0.18) 36%, rgba(236,72,153,0.12) 62%, transparent 86%)",
                filter: "blur(36px)",
              }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />

            {/* single elegant ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                padding: "6px",
                borderRadius: "9999px",
                background:
                  "conic-gradient(from 120deg, rgba(59,130,246,0.95), rgba(139,92,246,0.95) 35%, rgba(236,72,153,0.95) 68%, rgba(59,130,246,0.95))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                boxShadow: "0 12px 45px rgba(99,102,241,0.06)",
                pointerEvents: "none",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
              aria-hidden
            />

            {/* subtle inner stroke for depth */}
            <div
              className="absolute inset-2 rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              aria-hidden
            />

            {/* PROFILE: use background-image for precise crop */}
            <Tilt
              options={{ max: 10, scale: 1.02, glare: false }}
              className="relative w-full h-full rounded-full overflow-hidden z-10"
            >
              <div
                aria-hidden
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: `url(${profilePic})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // tweak this pair to center the face precisely: "50% 30%" is a good start
                  backgroundPosition: "50% 30%",
                  transformOrigin: "center",
                  willChange: "transform",
                }}
              />

              {/* Inner vignette - dims background and focuses face */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.36) 100%)",
                }}
                aria-hidden
              />

              {/* gentle float */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 6.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              />
            </Tilt>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            className="flex-1 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/18 to-purple-500/18 border border-white/20 rounded-full mb-6 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              viewport={{ once: true }}
            >
              Akhileswar{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Vathaluru
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              viewport={{ once: true }}
            >
              I’m Akhil — a full-stack engineer specializing in FastAPI, Go, and
              Spring Boot. I build high-performance microservices, architect
              cloud-native solutions on AWS (Lambda & Serverless), and implement
              CI/CD with CodePipeline & CodeBuild. I also design and deploy
              intelligent AI agents using LangGraph and LangChain, and develop
              blockchain solutions with Hyperledger Fabric and Go smart
              contracts.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://github.com/Akhil351/Resume/blob/master/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <FiFileText className="text-xl group-hover:scale-110 transition-transform" />{" "}
                View Resume
              </motion.a>

              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm text-blue-400 hover:text-white border border-white/20 hover:border-blue-400/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />{" "}
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm text-blue-400 hover:text-white border border-white/20 hover:border-blue-400/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TECHNICAL EXPERTISE
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technologies I've mastered to build robust, scalable applications
              with cutting-edge solutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <Tilt
                key={index}
                options={{
                  max: 18,
                  scale: 1.04,
                  glare: true,
                  "max-glare": 0.18,
                }}
              >
                <motion.div
                  variants={fadeInUp}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${glassmorphismCard} ${glassmorphismCardHover} flex flex-col items-center p-8 rounded-2xl transition-all duration-500 group cursor-pointer`}
                  whileHover={smoothCardHover}
                >
                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 mb-6 transition-all duration-300"
                    whileHover={{ rotate: 15, scale: 1.08 }}
                  >
                    <tech.icon
                      className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </motion.div>
                  <span className="text-gray-200 font-semibold text-lg text-center group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-4 overflow-hidden">
                    <motion.div
                      className={`${tech.progressColor} h-2 rounded-full shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.rating}%` }}
                      transition={{
                        delay: index * 0.08 + 0.45,
                        duration: 1.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <motion.span
                    className="text-sm text-gray-400 mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 1.2, duration: 0.45 }}
                    viewport={{ once: true }}
                  >
                    {tech.rating}%
                  </motion.span>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                PROJECT SHOWCASE
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Selected projects demonstrating my technical capabilities and
              innovative solutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
          >
            {PROJECTS.map((project, index) => (
              <Tilt
                key={index}
                options={{
                  max: 8,
                  scale: 1.02,
                  glare: true,
                  "max-glare": 0.12,
                }}
              >
                <motion.div
                  variants={fadeInUp}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${glassmorphismCard} ${glassmorphismCardHover} rounded-2xl overflow-hidden transition-all duration-500 group cursor-pointer`}
                  whileHover={smoothCardHover}
                >
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover bg-gray-800/20 rounded-t-2xl"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          aria-label="GitHub"
                          title="View code on GitHub"
                          whileHover={{ y: -5, scale: 1.08 }}
                        >
                          <FaGithub className="text-2xl" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          aria-label="Live Demo"
                          title="View live demo"
                          whileHover={{ y: -5, scale: 1.08 }}
                        >
                          <FaExternalLinkAlt className="text-2xl" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx2) => (
                        <motion.span
                          key={idx2}
                          className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 rounded-full hover:border-blue-400/50 hover:text-blue-200 transition-all duration-300"
                          initial={{ scale: 0.96, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: idx2 * 0.04 + 0.1,
                            duration: 0.28,
                          }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              PROFESSIONAL JOURNEY
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              My career path and professional achievements
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {EXPERIENCES.map((experience, index) => (
              <Tilt key={index} options={{ max: 3, scale: 1.01 }}>
                <motion.div
                  variants={fadeInUp}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/30 p-8 rounded-xl border transition-all"
                  whileHover={smoothCardHover}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.role}
                      </h3>
                      <span className="text-blue-400 font-medium">
                        {experience.company}
                      </span>
                    </div>
                    <motion.span
                      className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {experience.year}
                    </motion.span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">
                      TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-800/50 text-blue-400 border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300"
                          initial={{ scale: 0.96 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              CERTIFICATIONS
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <Tilt key={idx} options={{ max: 5, scale: 1.01 }}>
                <motion.div
                  variants={fadeInUp}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/30 p-6 rounded-xl border transition-all"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col">
                    <motion.a
                      href={cert.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white hover:text-blue-400 mb-2"
                      whileHover={{ x: 3 }}
                    >
                      {cert.title}
                    </motion.a>
                    <div className="space-y-2 mt-2">
                      {cert.details.map((d, i) => (
                        <motion.p
                          key={i}
                          className="text-sm text-gray-400"
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 + 0.12 }}
                          viewport={{ once: true }}
                        >
                          • {d}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              LET'S CONNECT
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
            >
              Interested in working together or have questions? Reach out below.
            </motion.p>
          </motion.div>

          <Tilt
            options={{ max: 3, scale: 1.01, glare: true, "max-glare": 0.1 }}
          >
            <motion.div
              variants={smoothScaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 bg-gray-900/30 border-b md:border-b-0 md:border-r border-gray-800/50">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start gap-4"
                      variants={fadeInUp}
                      custom={0}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <FiMapPin className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">
                          LOCATION
                        </h4>
                        <p className="text-gray-300">{CONTACT.address}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      variants={fadeInUp}
                      custom={1}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.18 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <FiPhone className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">
                          PHONE
                        </h4>
                        <a
                          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {CONTACT.phoneNo}
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-4"
                      variants={fadeInUp}
                      custom={2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.28 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <FiMail className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">
                          EMAIL
                        </h4>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-blue-400 hover:underline"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </Tilt>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Akhileswar. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/Akhil351"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/Akhil___351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {activeSection !== "home" && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 z-50 bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
