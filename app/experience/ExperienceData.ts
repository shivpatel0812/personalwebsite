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
    title: "Software Engineer Intern",
    company: "UDig",
    location: "Richmond, VA (Remote)",
    period: "Incoming Summer 2025",
    description:
      "Architected and developed a full-stack AI-powered visual product search platform using CLIP-based vector similarity, enabling users to upload images and discover visually similar retail products with real-time availability and location data.",
    details: [
      {
        title: "🎯 Project Architecture & System Design",
        points: [
          "Designed a microservices architecture with FastAPI backend (25+ endpoints) handling image processing, vector search, and product metadata retrieval, connected to a React/TypeScript frontend with Redux state management.",
          "Implemented a three-tier data pipeline: image ingestion → CLIP vectorization → PostgreSQL vector storage with pgvector extension for efficient similarity search using cosine distance algorithms.",
          "Built a modular ingestion framework supporting both CSV batch processing and real-time API integration with Ferguson's product catalog, featuring resumable operations and progress tracking.",
        ],
      },
      {
        title: "🤖 AI/ML Pipeline & Vector Search",
        points: [
          "Engineered a production-ready CLIP-based image encoding pipeline using OpenAI's CLIP model to generate 512-dimensional vector embeddings for product images and user uploads.",
          "Implemented advanced similarity search algorithms with configurable similarity thresholds, supporting multi-view image processing and result merging for improved accuracy.",
          "Optimized vector search performance using PostgreSQL's pgvector extension with HNSW indexing, enabling sub-second queries across 50K+ product vectors.",
        ],
      },
      {
        title: "💻 Frontend Architecture & UX",
        points: [
          "Developed a responsive React application with TypeScript, featuring drag-and-drop image uploads, real-time camera integration, and dynamic product result displays using Tailwind CSS.",
          "Implemented Redux Toolkit for managing app-wide state including location selection, ingestion control, and user history, with custom hooks for modular logic.",
          "Built rich UI components such as expandable product cards, location filtering, ingestion progress indicators, and confidence scoring overlays.",
        ],
      },
      {
        title: "⚙️ Backend API Development",
        points: [
          "Built RESTful FastAPI endpoints for key workflows: `/search-similar/`, `/ingestion-status/`, `/locations/`, and `/product-availability/`, powering the full application lifecycle.",
          "Implemented asynchronous processing using background workers with retry logic, throughput metrics, and ETA tracking for ingestion and search operations.",
          "Added robust error handling with timeouts, fallbacks, and custom response codes for graceful API behavior under load or failure.",
        ],
      },
      {
        title: "🗄️ Database Design & Optimization",
        points: [
          "Designed a normalized PostgreSQL schema including tables for vector storage, metadata indexing, user history, and ingestion logs with relational integrity constraints.",
          "Leveraged pgvector for cosine similarity search, indexing embedding columns for fast KNN lookups and approximate nearest neighbor search with HNSW.",
          "Added cleanup routines and archival logic for stale data, preserving database performance and enabling historical analysis.",
        ],
      },
      {
        title: "🔧 DevOps & Infrastructure",
        points: [
          "Dockerized backend services, CLIP pipeline, and frontend application with multi-stage builds and optimized container size for rapid deployment.",
          "Configured CI workflows with Pytest (unit/integration coverage) and Playwright (E2E testing), along with visual snapshot testing of critical UI flows.",
          "Instrumented logging and metrics collection across endpoints and ingestion pipeline to monitor search performance and identify bottlenecks.",
        ],
      },
      {
        title: "🔐 Security & Authentication",
        points: [
          "Integrated Azure Active Directory using OAuth2 for secure user authentication and session management across the frontend and backend.",
          "Validated file uploads for size, type, and integrity to prevent injection attacks and service abuse.",
          "Implemented RBAC for user-level access control over ingestion triggers, history access, and result views, preserving data isolation.",
        ],
      },
      {
        title: "🚀 Performance & Scalability",
        points: [
          "Achieved fast vector search performance through index tuning, connection pooling, and precomputed retrieval logic for frequent queries.",
          "Used caching strategies for metadata and location data to reduce backend calls and speed up frontend loading.",
          "Enabled future scalability with stateless service design, horizontal backend architecture, and compatibility with load balancers.",
        ],
      },
      {
        title: "👥 Collaboration & Team Experience",
        points: [
          "Worked within a 4-person intern team under the guidance of full-time engineers, contributing to shared codebases and coordinated feature development.",
          "Joined code reviews, architecture discussions, and mentoring sessions to deepen understanding of scalable system design and AI product deployment.",
          "Collaborated cross-functionally with designers and PMs to define product requirements, user journeys, and testing workflows aligned with business goals.",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "OpenAI CLIP",
      "Docker",
      "Azure AD",
      "Playwright",
      "Pytest",
      "SQLAlchemy",
      "asyncio",
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
