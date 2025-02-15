import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiSpringboot } from "react-icons/si";

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
    description: `As a Backend Developer, I specialize in building robust and scalable RESTful APIs with Spring Boot and crafting efficient Hyperledger Fabric chaincode using Go for secure blockchain transactions. My expertise lies in integrating services seamlessly with PostgreSQL and MongoDB, ensuring high-performance data management while maintaining security and efficiency in a distributed ledger network. 🚀`,
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
    title: "E-commerce",
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
    title: "Real Estate Management System (Blockchain-Powered)",
    image: project4,
    description:
      "Developed a blockchain-based real estate management platform using Hyperledger Fabric, enabling secure, transparent property transactions with end-to-end traceability. Implemented Go-based RESTful APIs, JWT authentication, PostgreSQL, and chaincode for ledger integrity.",
    technologies: ["Go", "Hyperledger Fabric", "PostgreSQL", "JWT"],
    link: "https://github.com/Akhil351/Real-Estate-Management-System",
  },
  {
    title: "Bat Ball Stump Game",
    image: project5,
    description:
      "Developed a Cricket-themed Rock Paper Scissors game using React.js and Tailwind CSS with real-time winner calculation and score tracking via local storage. Designed an intuitive, responsive UI with Indian flag-inspired gradients and smooth hover effects for an enhanced user experience.",
    technologies: ["ReactJsx", "Tailwind Css"],
    link: "https://akhil10.vercel.app/",
  },
  {
    title: "To Do Application",
    image: project6,
    description:
      "This is a simple Todo App that allows users to add, edit, and delete tasks while storing data in localStorage for persistence. It features a clean UI and real-time task management functionality",
    technologies: ["Spring Boot", "Thymeleaf"],
    link: "https://todoapp-latest-et7b.onrender.com/tasks",
  },
];

const CONTACT = {
  address:
    "Flat No 208, Udaya South End, Road No 7, Jubilee Garden, Kondapur, K.V. Ranga Reddy, Telangana, 500084, India",
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
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-stone-300 font-sans overflow-x-hidden antialiased">
      {/* NavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-8 py-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </a>
          <div className="flex gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/v-akhileswar-a46062250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://github.com/Akhil351"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/Akhil___351/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-400 hover:text-pink-600 transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-20 mt-20">
        {/* Akhil Component */}
        <section className="flex flex-col items-center text-center lg:flex-row lg:text-left py-20">
          <img
            src={profilePic}
            alt="Akhileswar"
            className="w-56 h-56 lg:w-80 lg:h-80 rounded-full border-4 border-gray-600 shadow-xl"
          />
          <div className="lg:ml-16 mt-6 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Akhileswar
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 mt-2">
              Full Stack Developer
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400">
              Passionate Full-Stack Developer with expertise in Go, Java, Spring
              Boot, React, and Hyperledger Fabric. Skilled in architecting
              scalable microservices and crafting high-performance RESTful APIs
              using PostgreSQL and MongoDB.
            </p>
            <a
              href="/akhil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Technologies Component */}
        <section className="py-20">
          <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-all"
              >
                <tech.icon className={`text-5xl ${tech.color}`} />
                <span className="mt-2 text-gray-300 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Component */}
        <section className="py-20">
          <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-800/50 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-blue-400">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Component */}
        <section className="py-20">
          <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-5xl mx-auto">
            {EXPERIENCES.map((experience, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-700 transition-all"
              >
                <h3 className="text-xl font-bold text-blue-400">
                  {experience.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {experience.company} ({experience.year})
                </span>
                <p className="mt-2 text-gray-300">{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Component */}
        <section className="py-20 border-t border-gray-700">
          <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="my-4 text-lg text-gray-300">{CONTACT.address}</p>
            <p className="my-4 text-lg text-gray-300">{CONTACT.phoneNo}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-blue-400 text-lg border-b border-blue-400 hover:text-blue-500 transition-all"
            >
              {CONTACT.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;