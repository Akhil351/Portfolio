export const personalInfo = {
  name: "Vathaluru Akhileswar Reddy",
  shortName: "Akhileswar",
  role: "Backend Developer at IdeyaLabs",
  tagline: "Building Scalable Backend Systems & AI Agents",
  email: "akhil.vathaluru@gmail.com",
  phone: "+91 8500618999",
  github: "https://github.com/Akhil351",
  linkedin: "https://www.linkedin.com/in/v-akhileswar-a46062250/",
  leetcode: "https://leetcode.com/u/akhil2004/",
  instagram: "https://www.instagram.com/akhil___351/",
  twitter: "https://x.com/Akhil_351",
  portfolio: "https://www.akhileswar.com/",
  resume: "/resume.pdf",
  detailedResume: "/detailed_resume.pdf",
  location: "Hyderabad, India",
  summary: [
    "Backend engineer specializing in production-grade systems with FastAPI and Spring Boot, featuring domain-driven design, microservices architecture, and serverless AWS deployments.",
    "Expert in AI agent development using LangGraph and LangChain for conversational AI with multi-turn dialogue management, custom tool integration, and vector databases.",
    "Proven track record designing scalable architectures including event-driven RabbitMQ systems, RESTful APIs with OAuth2/JWT authentication, and CI/CD pipelines with Pytest, Ruff, Mypy, and 80%+ test coverage.",
  ],
};

export const skills = [
  {
    "category": "Languages",
    "color": "#38bdf8",
    "items": [
      "Python",
      "Java",
      "Go",
      "JavaScript",
      "C",
      "C++",
      "SQL"
    ]
  },
  {
    "category": "Backend & Frontend",
    "color": "#00d4ff",
    "items": [
      "FastAPI",
      "Spring Boot",
      "Express.js",
      "REST APIs",
      "Pydantic",
      "React",
      "Tailwind CSS",
      "Vite"
    ]
  },
  {
    "category": "AI & LLM",
    "color": "#ff6b35",
    "items": [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "Tavily",
      "Inngest Agent Kit",
      "Google Gemini"
    ]
  },
  {
    "category": "Microservices",
    "color": "#ff4d8d",
    "items": [
      "Spring Cloud",
      "Spring Cloud Gateway",
      "Eureka",
      "Spring Cloud Config",
      "RabbitMQ",
      "Spring WebFlux"
    ]
  },
  {
    "category": "Databases & ORM",
    "color": "#ffd700",
    "items": [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Pinecone",
      "SQLAlchemy",
      "Spring Data JPA",
      "Mongoose",
      "Hibernate"
    ]
  },
  {
    "category": "Cloud & DevOps",
    "color": "#00ff9f",
    "items": [
      "AWS Lambda",
      "API Gateway",
      "AWS S3",
      "AWS SES",
      "SQS",
      "EventBridge",
      "Secrets Manager",
      "AWS CDK",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    "category": "APEX Integrations",
    "color": "#38bdf8",
    "items": [
      "SMC3",
      "EIA",
      "HERE",
      "Google Maps",
      "Falvey",
      "NMFTA",
      "Shiplify",
      "Daylight",
      "Nager.Date",
      "Calendar Admin"
    ]
  },
  {
    "category": "Authentication & Payments",
    "color": "#a78bfa",
    "items": [
      "OAuth2",
      "JWT",
      "RBAC",
      "AWS Cognito",
      "Clerk",
      "Razorpay"
    ]
  },
  {
    "category": "Testing & Quality",
    "color": "#ff6b35",
    "items": [
      "Pytest",
      "JUnit",
      "Mockito",
      "Ruff",
      "Mypy"
    ]
  },
  {
    "category": "Blockchain",
    "color": "#00d4ff",
    "items": [
      "Hyperledger Fabric",
      "Chaincode",
      "Blockchain",
      "Corda",
      "Smart Contracts"
    ]
  }
];

export const experiences = [
  {
    "id": 1,
    "role": "Backend Developer",
    "company": "IdeyaLabs",
    "location": "Hyderabad, India",
    "period": "June 2025 – Present",
    "project": "APEX — Transportation Back Office System",
    "type": "full-time",
    "current": true,
    "highlights": [
      "Developed production-grade REST APIs using FastAPI, Pydantic, SQLAlchemy, and multi-schema PostgreSQL, following a domain-driven modular architecture.",
      "Built backend workflows for account lookup, shipment creation, listing and export, pickup scheduling/rescheduling, quick quotes, freight rating, freight density calculations, ZIP search, shipping instructions, and lookup APIs.",
      "Implemented Pricing & Rating modules including fuel prices, fuel surcharge scales, accessorial charges and schedules, rate bases, lane minimums, high-cost ZIPs, pricing rules, and global and volume rates.",
      "Developed and maintained domain modules for Client Management, Customer Profiles, Billing, Claims, and Transit Times, supporting customer configuration and transportation operations.",
      "Integrated external services including SMC3 freight rating, EIA fuel data, HERE and Google geocoding, Falvey insurance, Daylight services, NMFTA, and Shiplify, with AWS Secrets Manager for secrets management.",
      "Developed document workflows involving bill of lading PDFs, shipping labels, blind shipment forms, billing and claims document uploads, reusable templates, and Excel/CSV exports using AWS S3 and SES, including pickup and shipping label emails.",
      "Implemented role-based access control (RBAC) for backend REST APIs using AWS Cognito-issued JWTs, with centralized exception handling, typed response wrappers, and structured JSON logging.",
      "Deployed the application on AWS Lambda using Mangum and AWS CDK, with GitHub Actions CI/CD and Pytest, Ruff, and Mypy. Maintained 80%+ test coverage."
    ],
    "tech": [
      "Python",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "SQLAlchemy",
      "AWS Lambda",
      "AWS CDK",
      "AWS Cognito",
      "RBAC",
      "Pytest",
      "Ruff",
      "Mypy"
    ]
  },
  {
    "id": 2,
    "role": "Blockchain Developer",
    "company": "IdeyaLabs",
    "location": "Hyderabad, India",
    "period": "December 2024 – June 2025",
    "project": "HLF — Blockchain Transaction System",
    "type": "full-time",
    "current": false,
    "highlights": [
      "Developed Go-based Hyperledger Fabric chaincode for asset issue, redeem, and transfer operations, including ledger-state validation and transaction processing.",
      "Implemented RESTful APIs in Go for blockchain transaction submission, asset queries, and integration with enterprise systems.",
      "Worked on multi-organization Hyperledger Fabric workflows, including secure transaction handling, chaincode integration, and network interoperability.",
      "Migrated blockchain transaction workflows from Corda to Hyperledger Fabric, adapting transaction logic and enterprise integrations."
    ],
    "tech": [
      "Go",
      "Hyperledger Fabric",
      "Chaincode",
      "REST APIs",
      "Blockchain",
      "Corda",
      "Smart Contracts"
    ]
  },
  {
    "id": 3,
    "role": "Java Backend Developer Intern",
    "company": "IdeyaLabs",
    "location": "Hyderabad, India",
    "period": "June 2024 – December 2024",
    "project": "Fintech Application — Java Backend Services",
    "type": "internship",
    "current": false,
    "highlights": [
      "Developed Spring Boot RESTful APIs for account management, payment processing, and transaction operations with secure request handling.",
      "Built backend service layers and JPA/Hibernate persistence for account records, fund transfers, and financial transactions.",
      "Created unit and service tests using JUnit and Mockito to validate business logic and critical financial workflows.",
      "Participated in Agile sprint planning, code reviews, CI/CD activities, and collaboration with backend developers."
    ],
    "tech": [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "JUnit",
      "Mockito"
    ]
  }
];

export const projects = [
  {
    id: 6,
    title: "Data Agent",
    subtitle: "AI-Powered ETL & SQL Analysis Agent",
    description:
      "Engineered a LangGraph and LangChain data agent that routes natural-language requests to ETL and SQL analysis workflows. Built API and file extraction pipelines, Pandas-based transformations, CSV/JSON/Parquet exports, database schema inspection, and SQL generation with validation.",
    tech: ["Python", "LangGraph", "LangChain", "Pydantic", "Pandas", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Akhil351/Data_Agent",
    demo: null,
    color: "#a78bfa",
    icon: "database",
  },
  {
    id: 2,
    title: "Travel Agent AI",
    subtitle: "Intelligent AI Travel Assistant",
    description:
      "Developed a FastAPI and LangGraph travel assistant supporting natural-language flight and hotel searches using SerpAPI. Integrated Pinecone for context retrieval, PostgreSQL for conversation persistence, and LangChain for tool orchestration.",
    tech: ["LangGraph", "FastAPI", "Pinecone", "PostgreSQL", "LangChain", "SerpAPI"],
    github: "https://github.com/Akhil351/Travel_Agent",
    demo: null,
    color: "#ff6b35",
    icon: "plane",
  },
  {
    id: 1,
    title: "AI Chatbot",
    subtitle: "LangGraph + GPT-4 Powered",
    description:
      "Full-stack AI chat application with React + Tailwind CSS frontend and FastAPI backend supporting multi-threaded conversations with PostgreSQL-backed persistent history. Integrated OpenAI GPT-4 with LangGraph for stateful conversation management, custom tools, Tavily web search, and SQLAlchemy session handling.",
    tech: ["FastAPI", "LangGraph", "OpenAI GPT-4", "PostgreSQL", "React", "Tavily"],
    github: "https://github.com/Akhil351/langgraph-chatbot",
    demo: null,
    color: "#00d4ff",
    icon: "bot",
  },
  {
    id: 3,
    title: "Budget Buddy",
    subtitle: "AI Finance Assistant",
    description:
      "AI-powered command-line finance assistant using LangGraph and LangChain with income/expense tracking, date-range analytics, real-time balance monitoring, web search integration, dependency injection, PostgreSQL persistence, and conversation memory.",
    tech: ["LangGraph", "LangChain", "PostgreSQL", "SQLAlchemy", "Python"],
    github: "https://github.com/Akhil351/budget-buddy/tree/langgraph-version",
    demo: null,
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
    demo: null,
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
    description: "Red Hat Certified Enterprise Application Developer (EX183) — validated expertise in Java EE, RESTful services, CDI, JPA, and JBoss EAP deployment.",
    link: "https://rhtapps.redhat.com/verify?certId=230-171-886",
    color: "#ff6b35",
    icon: "shield",
  },
  {
    id: 3,
    title: "Hackathon Finalist",
    value: "Top 700",
    label: "of 57,000+ participants",
    description: "Google Cloud Agentic AI Day (Hack2skill, 2025) — Built an AI-powered emergency and environmental monitoring system using Vertex AI, Gemini, Next.js, and ESP32 within 30 hours.",
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
