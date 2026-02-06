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
  FaLink,
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
import { FiMail, FiPhone, FiMapPin, FiFileText, FiDatabase } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { Tilt } from "react-tilt";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Assets
import profilePic from "./assets/Akhil.jpeg";
import logo from "./assets/AK.jpg";
import project1 from "./assets/linklytics.png";
import project3 from "./assets/clear_bg.png";
import project4 from "./assets/real_estate.png";
import project5 from "./assets/buget_buddy_ai.png";
import project6 from "./assets/fitness_ai.png";
import FastapiIcon from "./FastapiIcon";
import langgraphImg from "./assets/langgraph.jpg";
import chatbotImg from "./assets/chat_bot.png";

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
    role: "Backend Developer",
    company: "Ideyalabs",
    projects: [
      {
        name: "APEX - Transportation Back Office System",
        description: [
          "Developed a FastAPI backend with domain-driven architecture for transportation operations, pricing/rating, and shipment management.",
          "Deployed a serverless application on AWS Lambda using Serverless Framework with CI/CD pipelines via GitHub Actions.",
          "Integrated external services (SMC3, HERE.com, AWS S3, SES) and utilized PostgreSQL with SQLAlchemy ORM.",
        ],
      },
      {
        name: "HLF - Blockchain Transaction System",
        description: [
          "Built RESTful APIs using Go to store blockchain transactions and manage issue, redeem, and transfer operations.",
          "Engineered Go-based smart contracts (chaincode) for Hyperledger Fabric to enforce business logic for transaction operations.",
          "Led migration from Corda-based blockchain system to Hyperledger Fabric, improving performance and interoperability.",
        ],
      },
    ],
    technologies: [
      "FastAPI",
      "Go",
      "AWS Lambda",
      "Serverless Framework",
      "GitHub Actions",
      "PostgreSQL",
      "SQLAlchemy",
      "AWS S3",
      "AWS SES",
      "Hyperledger Fabric",
      "Smart Contracts",
      "Chaincode",
      "SMC3",
      "HERE.com",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Red Hat Certified Enterprise Application Developer (EX183)",
    link: "https://rhtapps.redhat.com/verify?certId=230-171-886",
    details: [
      "Demonstrated expertise in building enterprise applications using Red Hat JBoss Enterprise Application Platform 7.0",
      "Skills validated: Java EE application development, RESTful web services, CDI, JPA, and deployment on JBoss EAP",
    ],
  },
  {
    title: "Google Cloud Agentic AI Day — Hack2skill (2025) — Finalist",
    link: "https://certificate.hack2skill.com/user/aidayfinalist-1/2025H2S06AID-F01638",
    details: [
      "Achieved Finalist position — Top 700 out of 57,000+ participants in national-level AI hackathon",
      "Built an AI-powered monitoring system using Vertex AI, Gemini, Next.js, and ESP32 hardware in 30-hour timeframe",
    ],
  },
];

const PROJECTS = [
  {
    title: "Chat Bot",
    image: chatbotImg,
    description: [
      "Built a full-stack AI chat application using FastAPI, React, LangGraph, and LangChain with PostgreSQL chat history.",
      "Connected OpenAI GPT-4 with custom tools (Tavily web search, date utilities) for real-time information retrieval.",
      "Designed a service layer architecture with SQLAlchemy ORM for multi-threaded conversations and persistent message storage.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4",
      "PostgreSQL",
      "SQLAlchemy",
      "Tavily",
    ],
    link: "https://github.com/Akhil351/langgraph-chatbot",
    github: "https://github.com/Akhil351/langgraph-chatbot",
  },
  {
    title: "Budget Buddy",
    image: project5,
    description: [
      "Created a CLI finance assistant using LangGraph, LangChain, OpenAI GPT-4o with conversation memory persistence.",
      "Built custom financial tools for income/expense tracking with date-range analytics and Tavily web search integration.",
      "Implemented a modular architecture with PostgreSQL, SQLAlchemy ORM, and dependency injection for database management.",
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4o",
      "SQLAlchemy",
      "PostgreSQL",
      "Tavily",
      "Python",
    ],
    link: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
    github: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
  },
  {
    title: "Fitness AI Platform",
    image: project6,
    description: [
      "Built a microservices platform using Spring Boot, Eureka, Spring Cloud Gateway with Google Gemini AI recommendations.",
      "Implemented an event-driven architecture with RabbitMQ messaging for asynchronous communication between services.",
      "Configured Keycloak for OAuth2 authentication and centralized configuration server for microservice properties.",
    ],
    technologies: [
      "Spring Boot",
      "React",
      "Google Gemini AI",
      "Eureka",
      "Spring Cloud Gateway",
      "RabbitMQ",
      "Keycloak",
      "OAuth2",
    ],
    link: "https://github.com/Akhil351/fitness",
    github: "https://github.com/Akhil351/fitness",
  },
  {
    title: "ClearBG",
    image: project3,
    description: [
      "Developed a full-stack image background removal application using Spring Boot, React, and ClipDrop API.",
      "Configured Clerk authentication with webhook synchronization and JWT-based API security for user management.",
      "Incorporated Razorpay payment gateway for credit-based system and reactive Spring WebClient for AI service integration.",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "ClipDrop API",
      "Clerk",
      "Razorpay",
      "Spring WebClient",
      "JWT",
    ],
    link: "https://github.com/Akhil351/ClearBG",
    github: "https://github.com/Akhil351/ClearBG",
  },
  {
    title: "Linklytics",
    image: project1,
    description: [
      "Built a URL shortener with analytics using Spring Boot, React, Redis, and PostgreSQL.",
      "Established click event tracking with date-range filtering for monitoring URL performance metrics.",
      "Designed RESTful APIs with JWT authentication and role-based access control for user-specific URL management.",
    ],
    technologies: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Redis",
      "JWT",
      "RESTful APIs",
      "TailwindCSS",
    ],
    link: "https://akhil-amber.vercel.app/",
    github: "https://github.com/Akhil351/Linklytics",
  },
  {
    title: "Real Estate Management System",
    image: project4,
    description: [
      "Built a blockchain property management system using Hyperledger Fabric with Go-based smart contracts (chaincode).",
      "Applied composite key-based chaincode for user registration, property listing, and transaction recording.",
      "Developed RESTful APIs in Go for property operations, ownership transfer, and transaction history on distributed ledger.",
    ],
    technologies: [
      "Go",
      "Hyperledger Fabric",
      "Smart Contracts",
      "Chaincode",
      "RESTful APIs",
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
  {
    icon: FaLink,
    name: "LangChain",
    color: "text-emerald-400",
    rating: 88,
    progressColor: "bg-gradient-to-r from-emerald-400 to-teal-600",
  },
  {
    icon: FiDatabase,
    name: "RAG",
    color: "text-indigo-400",
    rating: 85,
    progressColor: "bg-gradient-to-r from-indigo-400 to-purple-600",
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
          className="p-3 rounded-full bg-gray-900/90 backdrop-blur-md border border-white/10 shadow-xl"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
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
            className="fixed inset-y-0 right-0 w-72 bg-gray-900/98 shadow-2xl z-40 p-8 backdrop-blur-xl border-l border-white/10"
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
                    className={`text-left text-xl font-semibold px-4 py-2 rounded-lg ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-500/10 border-l-4 border-blue-400"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    } transition-all`}
                    whileHover={{ x: 8, scale: 1.05 }}
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
      <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 bg-gray-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
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
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto rounded-full border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 relative z-10"
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
                  className={`relative text-sm font-semibold px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg -z-10"
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
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all border border-transparent hover:border-blue-500/30"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all border border-transparent hover:border-gray-600/50"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Akhil___351/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 text-gray-400 hover:text-pink-400 transition-all border border-transparent hover:border-pink-500/30"
                aria-label="Instagram"
                whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 rounded-full mb-6 backdrop-blur-md shadow-xl shadow-blue-500/10"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Backend Developer
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
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200%",
                }}
              >
                Vathaluru
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              viewport={{ once: true }}
            >
              I'm Akhil — a backend developer at Ideyalabs specializing in{" "}
              <span className="text-blue-400 font-semibold">FastAPI</span>,{" "}
              <span className="text-blue-400 font-semibold">Go</span>, and{" "}
              <span className="text-green-400 font-semibold">Spring Boot</span>.
              I build domain-driven FastAPI backends deployed on AWS Lambda with
              Serverless Framework and CI/CD pipelines via GitHub Actions. I
              develop Go RESTful APIs and smart contracts (chaincode) for
              Hyperledger Fabric blockchain systems. I also design and deploy
              intelligent AI agents using LangGraph and LangChain with RAG and
              vector search capabilities.
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
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/40 font-semibold text-lg transition-all duration-300 overflow-hidden"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <FiFileText className="text-xl group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">View Resume</span>
              </motion.a>

              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-blue-400 hover:text-white border-2 border-white/20 hover:border-blue-400/60 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/15"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-blue-400 hover:text-white border-2 border-white/20 hover:border-purple-400/60 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/15"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
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
                  className={`${glassmorphismCard} ${glassmorphismCardHover} flex flex-col items-center p-8 rounded-3xl transition-all duration-500 group cursor-pointer relative overflow-hidden`}
                  whileHover={smoothCardHover}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                    initial={false}
                  />
                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 group-hover:from-white/25 group-hover:to-white/15 mb-6 transition-all duration-300 relative z-10 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <tech.icon
                      className={`text-5xl ${tech.color} group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg`}
                    />
                  </motion.div>
                  <span className="text-gray-200 font-bold text-lg text-center group-hover:text-white transition-colors duration-300 relative z-10">
                    {tech.name}
                  </span>
                  <div className="w-full bg-white/10 rounded-full h-3 mt-4 overflow-hidden relative z-10 shadow-inner">
                    <motion.div
                      className={`${tech.progressColor} h-3 rounded-full shadow-lg relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.rating}%` }}
                      transition={{
                        delay: index * 0.08 + 0.45,
                        duration: 1.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    </motion.div>
                  </div>
                  <motion.span
                    className="text-sm text-gray-300 mt-2 font-bold group-hover:text-blue-400 transition-colors duration-300 relative z-10"
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
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden group/image">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover bg-gray-800/20 rounded-t-2xl"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"
                      initial={false}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        className="flex gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-5 bg-white/25 backdrop-blur-md rounded-full text-white hover:bg-white/40 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-xl"
                          aria-label="GitHub"
                          title="View code on GitHub"
                          whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="text-2xl" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-5 bg-white/25 backdrop-blur-md rounded-full text-white hover:bg-white/40 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-xl"
                          aria-label="Live Demo"
                          title="View live demo"
                          whileHover={{ y: -8, scale: 1.15, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-2xl" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-b from-transparent to-gray-900/30">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {project.title}
                      </h3>
                    </div>
                    {Array.isArray(project.description) ? (
                      <ul className="text-gray-300 mb-8 leading-relaxed text-base space-y-3">
                        {project.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx2) => (
                        <motion.span
                          key={idx2}
                          className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 text-blue-200 border border-blue-500/40 rounded-full hover:border-blue-400/70 hover:text-white hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-blue-500/20"
                          initial={{ scale: 0.96, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
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
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border-gray-700/50 hover:border-blue-500/50 p-8 rounded-2xl border-2 transition-all backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden group"
                  whileHover={smoothCardHover}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <span className="text-blue-400 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        {experience.company}
                      </span>
                    </div>
                    <motion.span
                      className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-4 py-2 rounded-full font-semibold text-blue-300 hover:text-white hover:border-blue-400/50 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {experience.year}
                    </motion.span>
                  </div>
                  {experience.projects && experience.projects.length > 0 ? (
                    <div className="space-y-6 mb-6 relative z-10">
                      {experience.projects.map((project, projIdx) => (
                        <div key={projIdx}>
                          <h4 className="text-lg font-bold text-white mb-3">
                            {project.name}
                          </h4>
                          <ul className="text-gray-300 leading-relaxed text-base space-y-2">
                            {project.description.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300 mb-6 leading-relaxed text-base relative z-10">
                      {experience.description}
                    </p>
                  )}

                  <div className="pt-4 border-t border-gray-700/50 relative z-10">
                    <h4 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/40 rounded-full hover:border-blue-400/60 hover:text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                          initial={{ scale: 0.96, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
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
