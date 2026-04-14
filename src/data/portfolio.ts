export const personalInfo = {
  name: "Vathaluru Akhileswar Reddy",
  shortName: "Akhileswar",
  role: "Backend & AI Systems Engineer",
  tagline: "Building Scalable Backend Systems & AI Agents",
  email: "akhil.vathaluru@gmail.com",
  phone: "+91 8500618999",
  github: "https://github.com/Akhil351",
  linkedin: "https://www.linkedin.com/in/v-akhileswar-a46062250/",
  leetcode: "https://leetcode.com/u/akhil2004/",
  instagram: "https://www.instagram.com/akhil___351/",
  twitter: "https://x.com/Akhil_351",
  location: "Kondapur, Hyderabad, Telangana, 500084, India",
  summary: [
    "Backend engineer specializing in production-grade systems with FastAPI and Spring Boot, featuring domain-driven design, microservices architecture, and serverless AWS deployments.",
    "Expert in AI agent development using LangGraph and LangChain for conversational AI with multi-turn dialogue management, custom tool integration, and vector databases.",
    "Proven track record designing scalable architectures including event-driven systems with RabbitMQ, RESTful APIs with OAuth2/JWT authentication, and CI/CD pipelines achieving 80%+ test coverage.",
  ],
};

export const skills = [
  {
    category: "Backend",
    color: "#00d4ff",
    items: ["FastAPI", "Spring Boot", "Go", "Express.js", "Python", "Java"],
  },
  {
    category: "AI / LLM",
    color: "#ff6b35",
    items: ["LangGraph", "LangChain", "OpenAI API", "Tavily", "Inngest Agent Kit", "Google Gemini"],
  },
  {
    category: "Cloud & DevOps",
    color: "#00ff9f",
    items: ["AWS Lambda", "AWS CDK", "Docker", "GitHub Actions", "AWS S3", "AWS Cognito"],
  },
  {
    category: "Databases",
    color: "#ffd700",
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "MySQL", "SQLAlchemy"],
  },
  {
    category: "Microservices",
    color: "#ff4d8d",
    items: ["Spring Cloud", "RabbitMQ", "Eureka", "API Gateway", "Spring WebFlux", "OAuth2"],
  },
  {
    category: "Languages",
    color: "#a78bfa",
    items: ["Python", "Go", "Java", "JavaScript", "C", "C++"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Ideyalabs",
    location: "Hyderabad, India",
    period: "2025 – Present",
    project: "APEX – Transportation Back Office System",
    type: "full-time",
    highlights: [
      "Architected a FastAPI backend with domain-driven design supporting multiple core domains (Clients, Pricing & Rating, Transit Times, Billing) with clean separation between API, service, and data layers.",
      "Deployed serverless application on AWS Lambda using AWS CDK for infrastructure-as-code, with CI/CD pipelines via GitHub Actions achieving 80%+ test coverage.",
      "Designed comprehensive RESTful APIs with JWT authentication via AWS Cognito, input validation, and structured error handling.",
      "Engineered PostgreSQL persistence using SQLAlchemy ORM with a multi-schema architecture.",
      "Integrated SMC3 (freight rating), HERE.com (geocoding), EIA (fuel pricing), AWS S3, and AWS SES.",
      "Implemented Excel/CSV export generation, PDF generation for quotes, and structured JSON logging.",
    ],
    tech: ["FastAPI", "AWS Lambda", "PostgreSQL", "AWS CDK", "SQLAlchemy", "JWT"],
  },
  {
    id: 2,
    role: "Backend Developer Intern",
    company: "Ideyalabs",
    location: "Hyderabad, India",
    period: "2024 – 2025",
    project: "HLF – Blockchain Transaction System",
    type: "internship",
    highlights: [
      "Implemented RESTful APIs in Go for blockchain transaction management including issue, redeem, and transfer operations.",
      "Engineered Go-based smart contracts (chaincode) for Hyperledger Fabric to enforce business logic across multiple workflows.",
      "Led migration from Corda-based blockchain to Hyperledger Fabric, improving performance and interoperability.",
    ],
    tech: ["Go", "Hyperledger Fabric", "Blockchain", "Smart Contracts"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    subtitle: "LangGraph + GPT-4 Powered",
    description:
      "Full-stack AI chat application with React + Tailwind CSS frontend and FastAPI backend supporting multi-threaded conversations with PostgreSQL-backed persistent history. Integrated OpenAI GPT-4 with LangGraph for stateful conversation management.",
    tech: ["FastAPI", "LangGraph", "OpenAI GPT-4", "PostgreSQL", "React", "Tavily"],
    github: "https://github.com/Akhil351/langgraph-chatbot",
    demo: null,
    color: "#00d4ff",
    icon: "bot",
  },
  {
    id: 2,
    title: "Travel Agent AI",
    subtitle: "Intelligent Travel Planning",
    description:
      "AI travel assistant using LangGraph with FastAPI backend providing intelligent flight and hotel search through natural language. Integrated Pinecone vector database for conversation context retrieval and SerpAPI-based search.",
    tech: ["LangGraph", "FastAPI", "Pinecone", "PostgreSQL", "LangChain", "SerpAPI"],
    github: "https://github.com/Akhil351/Travel_Agent",
    demo: null,
    color: "#ff6b35",
    icon: "plane",
  },
  {
    id: 3,
    title: "Budget Buddy",
    subtitle: "AI Finance Assistant",
    description:
      "AI-powered finance assistant using LangGraph and LangChain with intelligent financial tracking, income/expense analytics, real-time balance monitoring, and web search integration with persistent conversation memory.",
    tech: ["LangGraph", "LangChain", "PostgreSQL", "SQLAlchemy", "Python"],
    github: "https://github.com/Akhil351/budget-buddy",
    demo: null,
    color: "#00ff9f",
    icon: "wallet",
  },
  {
    id: 4,
    title: "Fitness AI Platform",
    subtitle: "Microservices + AI Recommendations",
    description:
      "Microservices platform using Spring Boot with Eureka service discovery, Spring Cloud Gateway, and RabbitMQ for event-driven communication. AI recommendation service powered by Google Gemini with Spring WebFlux.",
    tech: ["Spring Boot", "RabbitMQ", "Google Gemini", "MongoDB", "Spring WebFlux", "OAuth2"],
    github: "https://github.com/Akhil351/fitness",
    demo: null,
    color: "#ffd700",
    icon: "activity",
  },
  {
    id: 5,
    title: "ClearBG",
    subtitle: "AI Background Removal",
    description:
      "Full-stack image background removal application using Spring Boot backend, React frontend, and ClipDrop API. Features Clerk authentication, webhook synchronization, JWT security, and Razorpay credit-based payments.",
    tech: ["Spring Boot", "React", "Clerk", "Razorpay", "ClipDrop API", "JWT"],
    github: "https://github.com/Akhil351/ClearBG",
    demo: null,
    color: "#ff4d8d",
    icon: "image",
  },
];

export const achievements = [
  {
    id: 1,
    title: "LeetCode",
    value: "530+",
    label: "Problems Solved",
    description: "Solved 530+ problems across Easy, Medium, and Hard difficulty covering arrays, trees, graphs, recursion, and dynamic programming.",
    link: "https://leetcode.com/u/akhil2004/",
    color: "#ffd700",
    icon: "code",
  },
  {
    id: 2,
    title: "Red Hat Certified",
    value: "EX183",
    label: "Enterprise Developer",
    description: "Enterprise Application Developer — validated expertise in Java EE, RESTful services, CDI, JPA, and JBoss EAP deployment.",
    link: "https://rhtapps.redhat.com/verify?certId=230-171-886",
    color: "#ff6b35",
    icon: "shield",
  },
  {
    id: 3,
    title: "Hackathon Finalist",
    value: "Top 700",
    label: "of 57,000+ participants",
    description: "Google Cloud Agentic AI Day (Hack2skill, 2025) — Built an AI-powered monitoring system using Vertex AI, Gemini, Next.js, and ESP32 within 30 hours.",
    link: "https://certificate.hack2skill.com/user/aidayfinalist-1/2025H2S06AID-F01638",
    color: "#00ff9f",
    icon: "trophy",
  },
  {
    id: 4,
    title: "CGPA",
    value: "9.43",
    label: "KL University",
    description: "Bachelor of Technology in Computer Science and Engineering at KL University, Guntur (2021–2025).",
    link: null,
    color: "#00d4ff",
    icon: "graduation",
  },
];
