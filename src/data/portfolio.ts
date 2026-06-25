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
  location: "Hyderabad, India",
  summary: [
    "Backend engineer specializing in production-grade systems with FastAPI and Spring Boot, featuring domain-driven design, microservices architecture, and serverless AWS deployments.",
    "Expert in AI agent development using LangGraph and LangChain for conversational AI with multi-turn dialogue management, custom tool integration, and vector databases.",
    "Proven track record designing scalable architectures including event-driven RabbitMQ systems, RESTful APIs with OAuth2/JWT authentication, and CI/CD pipelines with Pytest, Ruff, Mypy, and 80%+ test coverage.",
  ],
};

export const skills = [
  {
    category: "Backend",
    color: "#00d4ff",
    items: ["FastAPI", "Spring Boot", "Express.js", "REST APIs", "Pydantic", "SQLAlchemy"],
  },
  {
    category: "AI / LLM",
    color: "#ff6b35",
    items: ["LangGraph", "LangChain", "OpenAI API", "Tavily", "Pinecone", "Google Gemini"],
  },
  {
    category: "Cloud & DevOps",
    color: "#00ff9f",
    items: ["AWS Lambda", "AWS CDK", "Docker", "GitHub Actions", "AWS S3", "AWS SES"],
  },
  {
    category: "Databases",
    color: "#ffd700",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Spring Data JPA", "Mongoose"],
  },
  {
    category: "Microservices",
    color: "#ff4d8d",
    items: ["Spring Cloud", "RabbitMQ", "Eureka", "API Gateway", "Spring WebFlux", "Spring Config"],
  },
  {
    category: "Auth & Testing",
    color: "#a78bfa",
    items: ["OAuth2", "JWT", "AWS Cognito", "Clerk", "Pytest", "JUnit"],
  },
  {
    category: "Languages",
    color: "#38bdf8",
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
      "Developed a production-grade transportation back-office backend using FastAPI, PostgreSQL, SQLAlchemy, Pydantic, and domain-driven module architecture.",
      "Built client workflows for account lookup, shipment creation/listing/export, pickup scheduling and rescheduling, quick quotes, freight density calculation, ZIP search, and lookup APIs.",
      "Implemented Pricing & Rating modules for fuel prices, fuel scales, accessorial charges, rate bases, lane minimums, high-cost ZIPs, global rates, pricing rules, and volume rates.",
      "Integrated SMC3 freight rating, HERE geocoding, EIA fuel pricing, Daylight services, Falvey insurance, AWS S3, AWS SES, and AWS Secrets Manager.",
      "Built document workflows for bill of lading PDFs, shipping labels, blind shipment forms, pickup/shipping label emails, reusable templates, and Excel/CSV exports.",
      "Designed secured REST APIs with AWS Cognito/JWT authentication, centralized exception handling, typed response wrappers, multi-schema persistence, and structured JSON logging.",
      "Deployed serverless AWS Lambda infrastructure using Mangum and AWS CDK, with GitHub Actions CI/CD, Pytest, Ruff, Mypy, and 80%+ test coverage.",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "AWS Lambda", "AWS CDK", "Cognito", "Pytest"],
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
      "Full-stack AI chat application with React + Tailwind CSS frontend and FastAPI backend supporting multi-threaded conversations with PostgreSQL-backed persistent history. Integrated OpenAI GPT-4 with LangGraph for stateful conversation management, custom tools, Tavily web search, and SQLAlchemy session handling.",
    tech: ["FastAPI", "LangGraph", "OpenAI GPT-4", "PostgreSQL", "React", "Tavily"],
    github: "https://github.com/Akhil351/langgraph-chatbot",
    demo: "https://github.com/Akhil351/langgraph-chatbot",
    color: "#00d4ff",
    icon: "bot",
  },
  {
    id: 2,
    title: "Travel Agent AI",
    subtitle: "Intelligent Travel Planning",
    description:
      "AI travel assistant using LangGraph with a FastAPI backend for natural-language flight and hotel search. Integrated Pinecone for conversation context retrieval, SerpAPI tools with structured JSON responses, PostgreSQL persistence, and LangChain tool orchestration.",
    tech: ["LangGraph", "FastAPI", "Pinecone", "PostgreSQL", "LangChain", "SerpAPI"],
    github: "https://github.com/Akhil351/Travel_Agent",
    demo: "https://github.com/Akhil351/Travel_Agent",
    color: "#ff6b35",
    icon: "plane",
  },
  {
    id: 3,
    title: "Budget Buddy",
    subtitle: "AI Finance Assistant",
    description:
      "AI-powered command-line finance assistant using LangGraph and LangChain with income/expense tracking, date-range analytics, real-time balance monitoring, web search integration, dependency injection, PostgreSQL persistence, and conversation memory.",
    tech: ["LangGraph", "LangChain", "PostgreSQL", "SQLAlchemy", "Python"],
    github: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
    demo: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
    color: "#00ff9f",
    icon: "wallet",
  },
  {
    id: 4,
    title: "Fitness AI Platform",
    subtitle: "Microservices + AI Recommendations",
    description:
      "Microservices platform using Spring Boot with Eureka service discovery, Spring Cloud Gateway, centralized configuration, and RabbitMQ for asynchronous communication between user, activity, and AI recommendation services. Built a Gemini-powered recommendation service with Spring WebFlux, MongoDB, and OAuth2.",
    tech: ["Spring Boot", "RabbitMQ", "Google Gemini", "MongoDB", "Spring WebFlux", "OAuth2"],
    github: "https://github.com/Akhil351/fitness",
    demo: "https://github.com/Akhil351/fitness",
    color: "#ffd700",
    icon: "activity",
  },
  {
    id: 5,
    title: "ClearBG",
    subtitle: "AI Background Removal",
    description:
      "Full-stack image background removal application using Spring Boot, React, and ClipDrop API. Integrated Clerk authentication with webhook synchronization, JWT-based API security using custom filters, Razorpay credit payments, and reactive Spring WebClient for asynchronous AI service calls.",
    tech: ["Spring Boot", "React", "Clerk", "Razorpay", "ClipDrop API", "JWT"],
    github: "https://github.com/Akhil351/ClearBG",
    demo: "https://github.com/Akhil351/ClearBG",
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
