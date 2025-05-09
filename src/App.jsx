import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaExternalLinkAlt,
  FaSun,
  FaMoon,
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
    description: `I am currently working as a Backend Developer, building RESTful APIs using Go to enable secure and efficient communication with a Hyperledger Fabric blockchain network. In addition to developing the API layer, I have authored and deployed smart contract functions (chaincode) within the Hyperledger Fabric network to support custom business logic and secure transaction workflows. I have also successfully migrated blockchain transactions from a Corda network to Hyperledger Fabric using Go, ensuring seamless integration and improved system performance.`,
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const ContactForm = ({ darkMode }) => {
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
          className={`text-${
            darkMode ? "green-400" : "green-600"
          } text-xl font-medium mb-2`}
        >
          Message sent successfully!
        </motion.div>
        <p className={`text-${darkMode ? "gray-400" : "gray-600"}`}>
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div variants={fadeIn}>
        <label
          htmlFor="name"
          className={`block text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-1`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
          } border ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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

      <motion.div variants={fadeIn} transition={{ delay: 0.1 }}>
        <label
          htmlFor="email"
          className={`block text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-1`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
          } border ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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

      <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
        <label
          htmlFor="subject"
          className={`block text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-1`}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`w-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
          } border ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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

      <motion.div variants={fadeIn} transition={{ delay: 0.3 }}>
        <label
          htmlFor="message"
          className={`block text-sm font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-1`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className={`w-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
          } border ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
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
        className={`w-full bg-gradient-to-r ${
          darkMode
            ? "from-blue-600 to-purple-600"
            : "from-blue-500 to-purple-500"
        } text-white px-6 py-3 rounded-lg font-medium mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
          darkMode ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/30"
        } transition-all`}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variants={fadeIn}
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

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("darkMode") !== "false")
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-950" : "bg-gray-50"
      } text-${
        darkMode ? "stone-200" : "gray-900"
      } font-sans overflow-x-hidden antialiased transition-colors duration-300`}
    >
      {/* Theme-aware background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
              : "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
          }`}
        ></div>
        <div
          className={`absolute inset-0 opacity-20 ${
            darkMode
              ? 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")]'
              : 'bg-[url("https://grainy-gradients.vercel.app/noise-light.svg")]'
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0,_transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.05)_0,_transparent_70%)]"
          }`}
        ></div>
      </div>

      {/* Enhanced NavBar with theme toggle */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 ${
          darkMode ? "bg-gray-950/90" : "bg-white/90"
        } backdrop-blur-sm border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <motion.div whileHover={{ rotate: 10 }} className="relative">
              <img
                src={logo}
                alt="Logo"
                className={`h-10 w-auto rounded-full border ${
                  darkMode ? "border-blue-500/30" : "border-blue-500/50"
                }`}
              />
              <motion.div
                className={`absolute inset-0 rounded-full border-2 ${
                  darkMode ? "border-blue-500" : "border-blue-400"
                } opacity-0 group-hover:opacity-100`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.2 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              />
            </motion.div>
          </motion.a>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </motion.button>

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
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/Akhil351"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
                aria-label="GitHub"
                whileHover={{ y: -3 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Akhil___351/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-pink-500"
                    : "text-gray-600 hover:text-pink-600"
                } transition-colors`}
                aria-label="Instagram"
                whileHover={{ y: -3 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-20 mt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center lg:flex-row py-28 lg:py-36 gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleUp}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div
              className={`absolute inset-0 ${
                darkMode
                  ? "bg-gradient-to-br from-blue-600 to-purple-600"
                  : "bg-gradient-to-br from-blue-400 to-purple-400"
              } rounded-full opacity-20 blur-xl animate-pulse`}
            ></div>
            <motion.div
              className={`absolute inset-0 border-2 ${
                darkMode ? "border-blue-500/30" : "border-blue-400/30"
              } rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            />
            <img
              src={profilePic}
              alt="Akhileswar Vathaluru"
              className={`relative w-full h-full rounded-full object-cover border-4 ${
                darkMode ? "border-gray-700" : "border-gray-300"
              } z-10`}
            />
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className={`inline-flex items-center px-4 py-2 ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-100 border-gray-200"
              } rounded-full border mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-2 h-2 ${
                  darkMode ? "bg-blue-400" : "bg-blue-500"
                } rounded-full mr-2 animate-pulse`}
              ></div>
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className={`text-5xl lg:text-6xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4 leading-tight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Akhileswar{" "}
              <span
                className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
              >
                Vathaluru
              </span>
            </motion.h1>

            <motion.p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mb-8 leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              👋 I'm Akhil — a full-stack developer proficient in Spring Boot,
              GoLang, and React. I design and develop scalable end-to-end
              solutions, combining robust backend architectures with seamless,
              responsive frontends.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/Akhil351/Resume/blob/master/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                } px-6 py-3 rounded-lg transition-all shadow-lg ${
                  darkMode
                    ? "hover:shadow-blue-500/20"
                    : "hover:shadow-blue-500/30"
                } font-medium`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiFileText /> View Resume
              </motion.a>

              <motion.a
                href="#contact"
                className={`flex items-center justify-center gap-2 bg-transparent ${
                  darkMode
                    ? "text-blue-400 hover:text-white border-gray-700 hover:border-blue-400"
                    : "text-blue-500 hover:text-blue-700 border-gray-300 hover:border-blue-500"
                } px-6 py-3 rounded-lg transition-all border font-medium`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              TECHNICAL EXPERTISE
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-500" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Technologies I've mastered to build robust, scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/30"
                    : "bg-white border-gray-200 hover:border-blue-400/50"
                } p-6 rounded-xl border transition-all group`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <motion.div
                  className={`p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-800/50 group-hover:bg-gray-800"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  } mb-4 ${tech.color} transition-all`}
                  whileHover={{ rotate: 10 }}
                >
                  <tech.icon className="text-3xl" />
                </motion.div>
                <span
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } font-medium`}
                >
                  {tech.name}
                </span>
                <div
                  className={`w-full ${
                    darkMode ? "bg-gray-800" : "bg-gray-200"
                  } rounded-full h-1.5 mt-2`}
                >
                  <motion.div
                    className={`${
                      darkMode ? "bg-blue-500" : "bg-blue-400"
                    } h-1.5 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              PROJECT SHOWCASE
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-500" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Selected projects demonstrating my technical capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/30"
                    : "bg-white border-gray-200 hover:border-blue-400/50"
                } rounded-xl overflow-hidden border transition-all group`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode
                        ? "from-gray-900/90 via-gray-900/30"
                        : "from-gray-900/70 via-gray-900/10"
                    } to-transparent`}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          darkMode
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors`}
                        aria-label="GitHub"
                        title="View code on GitHub"
                        whileHover={{ y: -3 }}
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          darkMode
                            ? "text-gray-400 hover:text-blue-400"
                            : "text-gray-600 hover:text-blue-600"
                        } transition-colors`}
                        aria-label="Live Demo"
                        title="View live demo"
                        whileHover={{ y: -3 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    </div>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mb-5`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 py-1 text-xs ${
                          darkMode
                            ? "bg-gray-800 text-blue-400 border-gray-700"
                            : "bg-gray-100 text-blue-600 border-gray-300"
                        } rounded-full border`}
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
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              PROFESSIONAL JOURNEY
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-500" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              My career path and professional achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/30"
                    : "bg-white border-gray-200 hover:border-blue-400/50"
                } p-8 rounded-xl border transition-all`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {experience.role}
                    </h3>
                    <span
                      className={`${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      } font-medium`}
                    >
                      {experience.company}
                    </span>
                  </div>
                  <motion.span
                    className={`text-sm ${
                      darkMode
                        ? "text-gray-400 bg-gray-800"
                        : "text-gray-600 bg-gray-100"
                    } px-3 py-1 rounded-full`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {experience.year}
                  </motion.span>
                </div>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-6 leading-relaxed`}
                >
                  {experience.description}
                </p>

                <div
                  className={`pt-4 border-t ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mb-3`}
                  >
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 py-1 text-xs ${
                          darkMode
                            ? "bg-gray-800 text-blue-400 border-gray-700"
                            : "bg-gray-100 text-blue-600 border-gray-300"
                        } rounded-full border`}
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
            ))}
          </div>
        </section>

        {/* Certifications Section with Theme Support */}
        <section id="certifications" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              CERTIFICATIONS
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {CERTIFICATIONS.map((certification, index) => (
              <motion.div
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/30"
                    : "bg-white border-gray-200 hover:border-blue-400/50"
                } p-6 rounded-xl border transition-all`}
                variants={fadeIn}
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
                    className={`text-xl font-bold ${
                      darkMode
                        ? "text-white hover:text-blue-400"
                        : "text-gray-900 hover:text-blue-600"
                    } transition-colors mb-2`}
                    whileHover={{ x: 3 }}
                  >
                    {certification.title}
                  </motion.a>
                  <div className="space-y-2 mt-2">
                    {certification.details.map((detail, i) => (
                      <motion.p
                        key={i}
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
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
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section with Theme Support */}
        <section id="contact" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              LET'S CONNECT
            </h2>
            <p
              className={`${
                darkMode ? "text-gray-500" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Interested in working together or have questions? Reach out below.
            </p>
          </motion.div>

          <motion.div
            className={`max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl ${
              darkMode
                ? "bg-gray-900/50 border-gray-800"
                : "bg-white border-gray-200"
            } border`}
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className={`p-8 md:p-10 ${
                  darkMode
                    ? "bg-gray-900/30 border-gray-800"
                    : "bg-gray-50 border-gray-200"
                } border-b md:border-b-0 md:border-r`}
              >
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-6`}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <FiMapPin className="text-xl" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}
                      >
                        LOCATION
                      </h4>
                      <p
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        {CONTACT.address}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <FiPhone className="text-xl" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}
                      >
                        PHONE
                      </h4>
                      <a
                        href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
                        className={`${
                          darkMode
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-700 hover:text-blue-600"
                        } transition-colors`}
                      >
                        {CONTACT.phoneNo}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        darkMode
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}
                      >
                        EMAIL
                      </h4>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className={`${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        } hover:underline`}
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <ContactForm darkMode={darkMode} />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Enhanced Footer with Theme Support */}
      <footer
        className={`py-8 border-t ${
          darkMode
            ? "border-gray-800 bg-gray-900/50"
            : "border-gray-200 bg-white/50"
        } backdrop-blur-sm`}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className={`${
              darkMode ? "text-gray-500" : "text-gray-600"
            } text-sm`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Akhileswar. All rights reserved.
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-500 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors`}
              whileHover={{ y: -2 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://github.com/Akhil351"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
              whileHover={{ y: -2 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/Akhil___351/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "text-gray-500 hover:text-pink-500"
                  : "text-gray-600 hover:text-pink-600"
              } transition-colors`}
              whileHover={{ y: -2 }}
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button with Theme Support */}
      <motion.a
        href="#"
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all z-50 ${
          darkMode
            ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700"
            : "bg-white/80 border-gray-300 hover:bg-white"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${darkMode ? "text-blue-400" : "text-blue-500"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default App;
