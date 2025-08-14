export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  details: { title: string; points: string[] }[];
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  awsServices?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Intern",
    company: "UDig",
    location: "Richmond, VA",
    period: "Summer 2025",
    description:
      "Built a full-stack AI-powered product search application using CLIP-based vector embeddings, multi-view image fusion, real-time product availability, and location data to help store employees quickly find products across 300K+ catalog images.",
    details: [
      {
        title: "🎯 Project Goals & Scope",
        points: [
          "Built a full-stack AI-powered product search application that combines CLIP-based visual search with real-time product matching and availability checking. The system enables store employees to upload product images and instantly find similar products using advanced vector embeddings and intelligent ranking algorithms, significantly improving in-store search efficiency.",
          "Worked in a 4-person intern team alongside full-time engineers, participating in Agile sprints, daily standups, and code reviews.",
          "Collaborated on architectural decisions, testing workflows, and production-readiness criteria aligned with client goals.",
          "Received mentorship from engineers across different projects in the company, gaining insights into various technical approaches and best practices.",
        ],
      },
      {
        title: "🏗️ Enterprise Architecture & System Design",
        points: [
          "Designed production-ready microservices architecture using FastAPI, PostgreSQL with pgvector, Docker orchestration, and React/TypeScript frontend with Redux state management for enterprise scalability.",
          "Built comprehensive authentication system with Azure AD OAuth2 integration, automatic token refresh, rate limiting, and role-based access control across all endpoints.",
          "Implemented enterprise-grade ingestion pipeline for 400K+ product images with resume logic, batch control, progress tracking, real-time monitoring, and automated error recovery.",
          "Containerized entire system using Docker with multi-service orchestration, health checks, volume persistence, and production-ready deployment configuration.",
        ],
      },
      {
        title: "🤖 AI/ML Pipeline & Vector Search",
        points: [
          "Developed a production CLIP (OpenAI based model) for embedding system converting 300K+ catalog images into 512-dimensional vectors with optimized batch processing and real-time performance monitoring.",
          "Implemented sophisticated multi-view image fusion algorithm using weighted cosine similarity with pgvector HNSW indexing, achieving 95%+ accuracy and sub-2-second latency.",
          "Built confidence scoring, similarity thresholds, and intelligent result ranking with support for top-k retrieval and multi-view result merging.",
        ],
      },
      {
        title: "💻 Full-Stack Frontend & Mobile Experience",
        points: [
          "Engineered a production PWA with mobile-first React architecture featuring drag-and-drop uploads, real-time camera input, image carousels, and responsive results display using Tailwind CSS.",
          "Implemented Redux Toolkit with Redux Persist for state management, React Query for server state, and 35+ reusable UI components including product comparison, ingestion controls, and location services.",
          "Built advanced features like search history tracking, real-time ingestion status, product availability overlays, location-based inventory search, multiple image upload support, and comprehensive product information display.",
        ],
      },
      {
        title: "⚙️ Backend, API, and Database",
        points: [
          "Built FastAPI backend with 25+ endpoints handling search, ingestion orchestration, vector generation, user analytics, and real-time product availability across Client's distributed network.",
          "Designed sophisticated PostgreSQL database architecture using pgvector extension for storing 300K+ product images as 512-dimensional CLIP embeddings alongside comprehensive product metadata including vendor details, descriptions, categories, pricing, UPC codes, weights, and brand information with optimized HNSW indexing for sub-2-second similarity search.",
          "Engineered seamless integration with 5+ Client enterprise APIs including product catalog, inventory management, location services, and real-time availability checking using OAuth2 authentication and automatic token refresh.",
          "Implemented advanced database operations including connection pooling, transaction management, batch vector insertions, and automated cleanup procedures for maintaining optimal performance across 400K+ product records.",
        ],
      },
      {
        title: "🔄 ETL Pipeline & Data Processing",
        points: [
          "Built enterprise-grade ETL pipeline processing 400K+ product records with intelligent batch processing (250 product entries per batch), concurrent API calls (60 product entries, 120 images), and real-time progress tracking, extracting comprehensive product metadata including vendor details, descriptions, categories, pricing, UPC codes, weights, and brand information alongside image vectors.",
          "Implemented sophisticated data transformation engine handling CSV ingestion, CLIP image encoding, vector averaging across multiple image views, and automated data validation with resume capability.",
          "Created robust data synchronization system with API response caching, request batching, background synchronization, and intelligent error recovery to maintain data freshness while minimizing API calls.",
          "Designed comprehensive performance monitoring with processing rate analytics, ETA calculations, system metrics tracking, and automated optimization for production load management.",
        ],
      },
      {
        title: "🔧 DevOps & Production Infrastructure",
        points: [
          "Configured comprehensive CI/CD with Pytest for backend testing, Playwright for E2E testing, and 95%+ test coverage with automated deployment pipelines.",
          "Implemented real-time performance monitoring, system health checks, automated cleanup, and production logging across all services with comprehensive error handling and recovery mechanisms.",
        ],
      },
      {
        title: "🔐 Enterprise Security & Authentication",
        points: [
          "Implemented Azure AD OAuth2 integration with automatic token refresh, persistent credentials, and enterprise-grade authentication across frontend and backend.",
          "Built secure file upload validation, rate limiting, request validation, and role-based access control for ingestion triggers and system administration.",
          "Added comprehensive security measures including CORS configuration, input sanitization, and secure token management for production deployment.",
        ],
      },
      {
        title: "🚀 Performance & Enterprise Scalability",
        points: [
          "Achieved sub-2-second similarity search across 300K+ images via optimized pgvector HNSW indexing, connection pooling, and vector caching strategies.",
          "Built real-time performance monitoring with CPU/memory tracking, processing rate analytics, and automated system optimization for production load.",
          "Designed for enterprise scale with decoupled services, fault-tolerant queue handling, and horizontal scaling capabilities for multiple client locations.",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "CLIP (OpenAI)",
      "Docker",
      "Azure AD",
      "Playwright",
      "Pytest",
      "SQLAlchemy",
      "asyncio",
      "REST APIs",
      "OAuth2",
      "Vector Databases",
      "Database Design",
      "API Integration",
      "Data Synchronization",
    ],
    image: "/udigtitlephoto.png",
    link: "https://www.udig.com/",
    awsServices: [],
  },

  {
    title: "Software Engineering Intern",
    company: "Booz Allen Hamilton",
    location: "Remote",
    period: "Feb 2025 – Apr 2025",
    description:
      "Optimized AWS Greengrass architecture on NVIDIA Jetson and built automated deployment scripts, and implemented IoT device monitoring pipelines.",
    details: [
      {
        title: "Project Scope",
        points: [
          "In our edge computing setup, we used an NVIDIA Jetson device connected to an AWS Greengrass core for local compute and cloud synchronization. However, the system lacked a scalable security framework capable of authenticating devices, monitoring behavior, and blocking threats, especially when deploying to 20+ edge devices in disconnected environments.",
          "The challenge was to design and implement a AWS cloud - based security solution that ensured device trust, runtime protection, and network resilience, while keeping performance overhead low.",
        ],
      },
      {
        title: "Understanding the Architecture",
        points: [
          "Before building the solution, I spent time learning how Jetson devices communicate with AWS Greengrass, including:",
          "Greengrass core setup on Jetson with MQTT via the EMQX broker",
          "The flow of IoT sensor data through Greengrass to AWS IoT Core",
          "Role of Greengrass components, lifecycle scripts, and message routing",
          "This allowed me to fully map out the communication pipeline from edge to cloud and identify the exact points where authentication and monitoring were needed.",
        ],
      },
      {
        title: "Scalable AWS based Security Implementation",
        points: [
          "To ensure secure identity and communication, I implemented a certificate-based security model using X.509 certificates:",
          "Each Jetson device was provisioned with a unique certificate and private key",
          "A custom automated bash script handled certificate generation, policy attachment, and device provisioning at scale",
          "The certificate enabled secure authentication with mutual TLS, governed by AWS IoT policies (e.g., iot:Connect, iot:Publish, iot:Subscribe)",
          "This enabled trusted device onboarding and consistent access control across all deployed devices.",
        ],
      },
      {
        title: "Additional measures",
        points: [
          "To go beyond identity verification, I integrated:",
          "AWS Device Defender to track MQTT traffic and detect authentication anomalies",
          "Falco, an open-source kernel-level threat detection tool, to monitor system calls and flag suspicious activity (e.g., unexpected shell execution, privilege escalation)",
          "A firewall management component that auto-blocks over 150+ untrusted IPs, updated regularly and deployed using iptables and ufw on the Jetson",
          "Together, this system improved platform-level security and brought real-time visibility and mitigation to the edge device — boosting resilience by over 60%.",
        ],
      },
    ],
    technologies: [
      "AWS Greengrass",
      "NVIDIA Jetson",
      "Bash",
      "IoT",
      "AWS Device Defender",
      "Falco",
    ],
    image: "/boozallenhq.jpg",
    link: "https://www.boozallen.com/",
    github: "#",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "UVA School of Data Science",
    location: "Charlottesville, VA",
    period: "May 2023 – Present",
    description:
      "Built a ReactJS cell analysis platform, engineered RESTful FastAPI endpoints, and developed deep learning models for brain cell segmentation.",
    details: [
      {
        title: "🧠 Summary",
        points: [
          "Collaborated with the University of Iowa Neurology team to develop a web-based platform for analyzing brain cell microscopy images using deep learning models.",
        ],
      },
      {
        title: "⚙️ Frontend & Deployment",
        points: [
          "I built the frontend using ReactJS and deployed it with AWS Amplify, creating an intuitive interface where researchers can upload their cell images and view corresponding analysis results; implemented user-specific sessions so each researcher's images and results are stored and displayed independently.",
        ],
      },
      {
        title: "☁️ Backend Architecture",
        points: [
          "The backend architecture utilized AWS services including S3, SQS, Lambda, ECR, and ECS to process images.",
          "Each model ran in a containerized environment, triggered automatically upon image uploads, with user authentication handled by Firebase.",
        ],
      },
      {
        title: "🧪 Machine Learning & Validation",
        points: [
          "I gained deep insight into the Vision Transformer model used for cell segmentation, understanding its processing of spatial features.",
          "I developed a custom IoU-based testing pipeline in PyTorch, achieving 95% accuracy and supporting the model's overall 0.91 Dice score.",
        ],
      },
    ],
    technologies: [
      "ReactJS",
      "FastAPI",
      "Python",
      "AWS",
      "Docker",
      "PyTorch",
      "OpenCV",
      "Firebase",
    ],
    image: "/uvaschoolofdatascience.jpg",
    link: "https://datascience.virginia.edu/",
    github: "#",
    awsServices: ["S3", "SQS", "Lambda", "ECR", "ECS", "Amplify", "Cloudwatch"],
  },
  {
    title: "Teacher Assistant",
    company: "University of Virginia",
    location: "Charlottesville, VA",
    period: "Jan 2025 – May 2025",
    description:
      "Supported 300+ students in fundamental programming, holding office hours, assisting lectures, and grading assignments.",
    details: [
      {
        title: "🧠 Motivation",
        points: [
          "As a Statistics major at UVA, taking rigorous coursework in data analysis and programming sparked my passion for teaching. After learning from inspiring professors and engaging class discussions, I wanted to support other students who were facing similar challenges in their early programming courses.",
        ],
      },
      {
        title: "🏆 Instruction & Support",
        points: [
          "I served as a Teaching Assistant for a large introductory programming course with over 300 students.",
          "I held weekly office hours, walked students through debugging exercises, and helped reinforce lecture material in one-on-one and group settings.",
        ],
      },
      {
        title: "📝 Grading & Feedback",
        points: [
          "I graded assignments and provided detailed, constructive feedback to help students improve their coding logic and problem-solving approaches.",
          "I aimed to make the feedback both technically helpful and encouraging.",
        ],
      },
      {
        title: "💬 Mentorship & Environment",
        points: [
          "My goal was to create a supportive and approachable learning environment where students felt comfortable asking questions and building confidence in their programming skills—just as others at UVA had done for me.",
        ],
      },
    ],
    technologies: [],
    image: "/uvapic.jpg",
    link: undefined,
  },
];
