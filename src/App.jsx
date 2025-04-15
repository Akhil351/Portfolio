import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

// Assets
import profilePic from "./assets/Akhil.jpeg";
import logo from "./assets/AK.jpg";
import project1 from "./assets/Linklytics.avif";
import project2 from "./assets/ChatApplication.png";
import project3 from "./assets/Ecommerce.jpg";
import project4 from "./assets/Real Estate.avif";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";

// Data
const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Back End Developer",
    company: "Ideyalabs",
    description: `As a Backend Developer, I specialize in building robust and scalable RESTful APIs with Spring Boot and crafting efficient Hyperledger Fabric chaincode using Go for secure blockchain transactions. My expertise lies in integrating services seamlessly with PostgreSQL and MongoDB, ensuring high-performance data management while maintaining security and efficiency in a distributed ledger network.`,
    technologies: [
      "Spring Boot",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Hyperledger Fabric",
    ],
  },
];

const PROJECTS = [
  {
    title: "Linklytics",
    image: project1,
    description:
      "Developed a URL shortening platform with an intuitive interface for creating, managing, and tracking shortened links. Integrated powerful analytics for performance tracking, enhanced security with encryption, and optimized for fast, reliable redirects to ensure a seamless user experience.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    link: "https://akhil-amber.vercel.app/",
  },
  {
    title: "Chat Application",
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
  },
  {
    title: "E-commerce Platform",
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
    ],
    link: "https://github.com/Akhil351/Ecommerce",
  },
  {
    title: "Blockchain Real Estate System",
    image: project4,
    description:
      "Developed a blockchain-based real estate management platform using Hyperledger Fabric, enabling secure, transparent property transactions with end-to-end traceability. Implemented Go-based RESTful APIs, JWT authentication, PostgreSQL, and chaincode for ledger integrity.",
    technologies: ["Go", "Hyperledger Fabric", "PostgreSQL", "JWT"],
    link: "https://github.com/Akhil351/Real-Estate-Management-System",
  },
  {
    title: "Cricket Game App",
    image: project5,
    description:
      "Developed a Cricket-themed Rock Paper Scissors game using React.js and Tailwind CSS with real-time winner calculation and score tracking via local storage. Designed an intuitive, responsive UI with Indian flag-inspired gradients and smooth hover effects.",
    technologies: ["ReactJsx", "Tailwind Css"],
    link: "https://akhil10.vercel.app/",
  },
  {
    title: "Productivity Application",
    image: project6,
    description:
      "A simple Todo App that allows users to add, edit, and delete tasks while storing data in localStorage for persistence. Features a clean UI and real-time task management functionality with Spring Boot backend.",
    technologies: ["Spring Boot", "Thymeleaf"],
    link: "https://todoapp-latest-et7b.onrender.com/tasks",
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
  //{ icon: SiHyperledger, name: "Hyperledger", color: "text-purple-500" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-stone-200 font-sans overflow-x-hidden antialiased">
      {/* Premium Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0,_transparent_70%)]"></div>
      </div>

      {/* Executive NavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between px-8 py-5">
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto rounded-full border border-blue-500/30"
            />
          </motion.a>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/Akhil351"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/Akhil___351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
          </motion.div>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-20 mt-24">
        {/* Executive Hero Section */}
        <section className="flex flex-col items-center lg:flex-row py-28 lg:py-36 gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin-slow [animation-duration:20s]"></div>
            <img
              src={profilePic}
              alt="Akhileswar"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-700 z-10"
            />
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-4">
              <span className="text-sm font-medium text-blue-400">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Akhileswar <span className="text-blue-400">Vathaluru</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
              Enterprise-grade software engineer specializing in distributed
              systems, blockchain technology, and scalable backend architectures
              with Spring Boot and Go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="/akhil.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload /> Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-transparent text-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all border border-gray-700 hover:border-blue-400 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Core Technologies Section */}
        <section className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              TECHNOLOGY STACK
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`p-4 rounded-lg bg-gray-800/50 mb-4 ${tech.color} group-hover:bg-gray-800 transition-all`}
                >
                  <tech.icon className="text-3xl" />
                </div>
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Projects Section */}
        <section className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Project</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="View project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-800 text-blue-400 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">CAREER</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
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
                  <span className="text-sm text-gray-400 mt-1 md:mt-0 bg-gray-800 px-3 py-1 rounded-full">
                    {experience.year}
                  </span>
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
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-800 text-blue-400 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Executive Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">CONTACT</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 bg-gray-900/30 border-b md:border-b-0 md:border-r border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <FiMapPin className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        LOCATION
                      </h4>
                      <p className="text-gray-300">{CONTACT.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <FiPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        PHONE
                      </h4>
                      <p className="text-gray-300">{CONTACT.phoneNo}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
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
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all font-medium mt-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Akhileswar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
