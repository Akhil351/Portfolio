import project1 from "../assets/Linklytics.avif";
import project2 from "../assets/ChatApplication.png";
import project3 from "../assets/Ecommerce.jpg";
import project4 from "../assets/Real Estate.avif";



export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Back End Developer",
    company: "Ideyalabs",
    description: `Working as a Back End Developer in the BlockApi (Spring Boot) and Hyperledger (Go) BlockChain Network. Focused on designing and implementing robust backend systems using Spring Boot for RESTful APIs and Go for blockchain-based solutions with Hyperledger Fabric. Responsible for integrating backend services with databases like PostgreSQL and MongoDB, ensuring secure and efficient transactions on the blockchain.`,
    technologies: ["Spring Boot", "Go", "PostgreSQL", "MongoDB", "Hyperledger Fabric"],
  },
];


export const PROJECTS = [
  {
    title: "Linklytics",
    image: project1,
    description:
      "Developed a URL shortening platform with an intuitive interface for creating, managing, and tracking shortened links. Integrated powerful analytics for performance tracking, enhanced security with encryption, and optimized for fast, reliable redirects to ensure a seamless user experience.",
    technologies: ["Spring Boot", "React", "PostgreSQL","JWT"],
    link: "https://akhil-amber.vercel.app/",
  },
  {
    title: "Chat Application",
    image: project2,
    description:
      "Developed a real-time chat application using Spring Boot, WebSocket, and MongoDB for seamless, scalable communication. Built a responsive React JSX frontend with Tailwind CSS, supporting one-on-one and group messaging with low-latency interactions.",
    technologies: ["Spring Boot", "WebSocket", "MongoDB", "React", "Tailwind CSS"],
    link: "https://akhil351.vercel.app/",
  },
  {
    title: "E-commerce",
    image: project3,
    description:
      "Developed an e-commerce platform using Spring Boot and microservices architecture, enabling secure online transactions and order management. Integrated Spring Security, JWT authentication, Spring Data JPA, PostgreSQL, and MongoDB for a scalable and efficient shopping experience.",
    technologies: ["Spring Boot", "Microservices", "JWT", "PostgreSQL", "MongoDB","Kafka"],
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
];



export const CONTACT = {
  address: "Flat No 208, Udaya South End, Road No 7, Jubilee Garden, Kondapur, K.V. Ranga Reddy, Telangana, 500084, India",
  phoneNo: "+91 8500618999",
  email: "akhil.vathaluru@gmail.com",
};
