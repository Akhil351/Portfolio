import React, { useState, useEffect, useRef } from "react";
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
import project2 from "./assets/ChatApplication.png";
import project3 from "./assets/Ecommerce.jpg";
import project4 from "./assets/Real Estate.avif";
import project5 from "./assets/researchAssistant.jpeg";
import project6 from "./assets/fitness.jpg";

// Data
const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Associate Software Engineer",
    company: "Ideyalabs",
    description: `I am currently working as a Backend Developer, specializing in building RESTful APIs using Go to facilitate secure and efficient communication with a Hyperledger Fabric blockchain network. My responsibilities include designing and implementing the API layer as well as authoring and deploying smart contract functions (chaincode) within the Hyperledger Fabric ecosystem to support complex business logic and secure transaction workflows.

In addition, I have successfully led the migration of blockchain transactions from a Corda network to Hyperledger Fabric, utilizing Go to ensure seamless integration and enhanced system performance. Alongside my blockchain-related work, I am also actively involved in developing RESTful APIs using Spring Boot as part of a microservices architecture, contributing to scalable and maintainable backend systems.`,
    technologies: [
      "Spring Boot",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Hyperledger Fabric",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Red Hat Certified Enterprise Application Developer",
    link: "https://rhtapps.redhat.com/verify?certId=230-171-886",
    details: [
      "Certification: EX183 - Red Hat Certified Enterprise Application Developer",
      "Technologies: Red Hat JBoss Enterprise Application Platform 7.0",
    ],
  },
];

const PROJECTS = [
  {
    title: "Linklytics",
    image: project1,
    description:
      "Developed a URL shortening platform with an intuitive interface for creating, managing, and tracking shortened links. Integrated powerful analytics for performance tracking, enhanced security with encryption, and optimized for fast, reliable redirects to ensure a seamless user experience.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT", "Redis"],
    link: "https://akhil-amber.vercel.app/",
    github: "https://github.com/Akhil351/Linklytics",
  },
  {
    title: "Real-time Chat Application",
    image: project2,
    description:
      "Developed a real-time chat application using Spring Boot, WebSocket, and MongoDB for seamless, scalable communication. Built a responsive React JSX frontend with Tailwind CSS, supporting one-on-one and group messaging with low-latency interactions.",
    technologies: [
      "Spring Boot",
      "WebSocket",
      "MongoDB",
      "React",
      "Tailwind CSS",
    ],
    link: "https://chat-app-six-sandy-60.vercel.app",
    github: "https://github.com/Akhil351/chat-app",
  },
  {
    title: "Blockchain Real Estate Platform",
    image: project4,
    description:
      "Developed a blockchain-based real estate management platform using Hyperledger Fabric, enabling secure, transparent property transactions with end-to-end traceability. Implemented Go-based RESTful APIs, JWT authentication, PostgreSQL, and chaincode for ledger integrity.",
    technologies: ["Go", "Hyperledger Fabric", "PostgreSQL", "JWT", "Docker"],
    link: "https://github.com/Akhil351/Real-Estate-Management-System",
    github: "https://github.com/Akhil351/Real-Estate-Management-System",
  },
  {
    title: "Fitness AI Platform",
    image: project6,
    description:
      "A full-stack fitness tracking application with a React frontend and Spring Boot microservices backend. Integrates AI to provide personalized activity insights, recommendations, and safety tips. Implements secure authentication and authorization using Keycloak. Designed for scalability, maintainability, and a seamless user experience.",
    technologies: [
      "Spring Boot Microservice",
      "React",
      "Postgres",
      "Mongo DB",
      "Rabbit MQ",
      "KeyCloak",
      "AWS",
    ],
    link: "https://github.com/Akhil351/fitness",
    github: "https://github.com/Akhil351/fitness",
  },
  {
    title: "AI Research Assistant",
    image: project5,
    description:
      "Research Assistant Extension: A Chrome extension powered by Spring AI that summarizes copied text and provides concise notes. Built with Manifest V3, it helps users quickly extract key insights from any content.",
    technologies: ["Spring Ai", "Manifest V3", "Chrome APIs"],
    link: "https://github.com/Akhil351/research-assistant",
    github: "https://github.com/Akhil351/research-assistant",
  },
  {
    title: "E-commerce Microservices",
    image: project3,
    description:
      "Developed an e-commerce platform using Spring Boot and microservices architecture, enabling secure online transactions and order management. Integrated Spring Security, JWT authentication, Spring Data JPA, PostgreSQL, and MongoDB for a scalable and efficient shopping experience.",
    technologies: [
      "Spring Boot",
      "Microservices",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
      "Redis",
    ],
    link: "https://github.com/Akhil351/Ecommerce",
    github: "https://github.com/Akhil351/Ecommerce",
  },
];

const CONTACT = {
  address: "Kondapur, Hyderabad, Telangana, 500084, India",
  phoneNo: "+91 8500618999",
  email: "akhil.vathaluru@gmail.com",
};

const technologies = [
  { icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" },
  { icon: FaGolang, name: "Go", color: "text-blue-500" },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-blue-600" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: DiRedis, name: "Redis", color: "text-red-500" },
  { icon: SiApachekafka, name: "Kafka", color: "text-purple-500" },
  { icon: SiRabbitmq, name: "RabbitMQ", color: "text-orange-500" },
];

// Enhanced animations
const smoothFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smoother motion
    },
  },
};

const smoothScaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const smoothCardHover = {
  scale: 1.02,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 15,
    mass: 0.5,
  },
};

const smoothGradientAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myzerepa");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-green-400 text-xl font-medium mb-2"
        >
          Message sent successfully!
        </motion.div>
        <p className="text-gray-400">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div variants={smoothFadeIn}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your name"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div variants={smoothFadeIn} transition={{ delay: 0.1 }}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="your.email@example.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div variants={smoothFadeIn} transition={{ delay: 0.2 }}>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Subject"
          required
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </motion.div>

      <motion.div variants={smoothFadeIn} transition={{ delay: 0.3 }}>
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
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your message..."
          required
        ></textarea>
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
        variants={smoothFadeIn}
        transition={{ delay: 0.4 }}
      >
        {state.submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
};

const FloatingTechIcons = () => {
  const icons = [
    { icon: SiSpringboot, color: "#68D391" },
    { icon: FaGolang, color: "#4299E1" },
    { icon: RiReactjsLine, color: "#76E4F7" },
    { icon: BiLogoPostgresql, color: "#3182CE" },
    { icon: SiMongodb, color: "#68D391" },
    { icon: DiRedis, color: "#F56565" },
    { icon: SiApachekafka, color: "#9F7AEA" },
    { icon: SiRabbitmq, color: "#ED8936" },
  ];

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {icons.map((tech, index) => {
        const size = Math.random() * 40 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = 0.1;
        const duration = Math.random() * 20 + 20;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full flex items-center justify-center text-blue-500/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              color: tech.color,
              opacity: opacity,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <tech.icon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const sections = [
      "home",
      "skills",
      "projects",
      "experience",
      "certifications",
      "contact",
    ];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-stone-200 font-sans overflow-x-hidden antialiased transition-all duration-500"
      ref={containerRef}
    >
      {/* Enhanced 3D Background */}
      <div className="fixed inset-0 -z-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={0.8}
          />
        </Canvas>
      </div>

      {/* Enhanced Gradient Mesh Background */}
      <div className="fixed inset-0 -z-40">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent"
          variants={smoothGradientAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"
          variants={smoothGradientAnimation}
          initial="initial"
          animate="animate"
        />
      </div>

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-800/90 shadow-lg"
          whileTap={{ scale: 0.9 }}
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
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-xl z-40 p-6"
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
                        : "text-gray-400"
                    }`}
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

      {/* Enhanced Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/20 transition-all duration-300"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.2 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                }}
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
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
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
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Akhil___351/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-20 mt-24">
        {/* Enhanced Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center lg:flex-row py-28 lg:py-36 gap-16 min-h-screen"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={smoothScaleUp}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse transition-all duration-500"></div>
            <motion.div
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            />
            <Tilt
              options={{
                max: 15,
                scale: 1.05,
                glare: true,
                "max-glare": 0.2,
                speed: 1000,
                transition: true,
              }}
              className="relative w-full h-full rounded-full z-10"
            >
              <img
                src={profilePic}
                alt="Akhileswar Vathaluru"
                className="w-full h-full rounded-full object-cover border-4 border-gray-700 shadow-xl shadow-blue-500/20 transition-all duration-500"
              />
            </Tilt>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full mb-4 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-400">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Akhileswar{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vathaluru
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              👋 I&apos;m Akhil — a full-stack developer proficient in Spring
              Boot, GoLang, and React. I design and develop scalable end-to-end
              solutions, combining robust backend architectures with seamless,
              responsive frontends.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.a
                href="https://github.com/Akhil351/Resume/blob/master/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20 font-medium"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <FiFileText /> View Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-transparent text-blue-400 hover:text-white border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-20 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              TECHNICAL EXPERTISE
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Technologies I&apos;ve mastered to build robust, scalable
              applications
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Tilt
                key={index}
                options={{
                  max: 15,
                  scale: 1.05,
                  glare: true,
                  "max-glare": 0.1,
                  speed: 1000,
                  transition: true,
                }}
              >
                <motion.div
                  className="flex flex-col items-center bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 p-6 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                  variants={smoothFadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={smoothCardHover}
                >
                  <motion.div
                    className="p-4 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 mb-4 transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <tech.icon className={`text-3xl ${tech.color}`} />
                  </motion.div>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                    <motion.div
                      className={`${tech.color} h-1.5 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              PROJECT SHOWCASE
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Selected projects demonstrating my technical capabilities
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <Tilt
                key={index}
                options={{
                  max: 5,
                  scale: 1.01,
                  glare: true,
                  "max-glare": 0.1,
                }}
              >
                <motion.div
                  className="bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 rounded-xl overflow-hidden backdrop-blur-sm transition-all group"
                  variants={smoothFadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={smoothCardHover}
                >
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="GitHub"
                          title="View code on GitHub"
                          whileHover={{ y: -3, scale: 1.2 }}
                        >
                          <FaGithub className="text-lg" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          aria-label="Live Demo"
                          title="View live demo"
                          whileHover={{ y: -3, scale: 1.2 }}
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </motion.a>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-1.5 text-sm bg-gray-800/50 text-blue-400 border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300"
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.05 }}
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
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              PROFESSIONAL JOURNEY
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              My career path and professional achievements
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <Tilt
                key={index}
                options={{
                  max: 3,
                  scale: 1.01,
                }}
              >
                <motion.div
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/30 p-8 rounded-xl border transition-all"
                  variants={smoothFadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
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
                      {experience.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-1.5 text-sm bg-gray-800/50 text-blue-400 border border-gray-700/50 rounded-full hover:border-blue-500/30 transition-all duration-300"
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.05 }}
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
          </div>
        </section>

        {/* Enhanced Certifications Section */}
        <section id="certifications" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              CERTIFICATIONS
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {CERTIFICATIONS.map((certification, index) => (
              <Tilt
                key={index}
                options={{
                  max: 5,
                  scale: 1.01,
                }}
              >
                <motion.div
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/30 p-6 rounded-xl border transition-all"
                  variants={smoothFadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col">
                    <motion.a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white hover:text-blue-400 mb-2"
                      whileHover={{ x: 3 }}
                    >
                      {certification.title}
                    </motion.a>
                    <div className="space-y-2 mt-2">
                      {certification.details.map((detail, i) => (
                        <motion.p
                          key={i}
                          className="text-sm text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          • {detail}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              LET&apos;S CONNECT
            </motion.h2>
            <motion.p
              className="text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Interested in working together or have questions? Reach out below.
            </motion.p>
          </motion.div>

          <Tilt
            options={{
              max: 3,
              scale: 1.01,
              glare: true,
              "max-glare": 0.1,
            }}
          >
            <motion.div
              className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
              variants={smoothScaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 bg-gray-900/30 border-b md:border-b-0 md:border-r border-gray-800/50">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start gap-4"
                      variants={smoothFadeIn}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.1 }}
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
                      variants={smoothFadeIn}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.2 }}
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
                      variants={smoothFadeIn}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.3 }}
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

      {/* Enhanced Footer */}
      <footer className="py-8 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Akhileswar. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/Akhil351"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/Akhil___351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
        {activeSection !== "home" && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 z-50 bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <FaArrowUp className="text-lg text-blue-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
