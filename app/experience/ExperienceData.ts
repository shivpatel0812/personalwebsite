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
      "Built a full-stack image analysis application that enables users to upload images and find similar products using CLIP-based vector embeddings, real-time availability, and location data.",
    details: [
      {
        title: "🎯 Summary",
        points: [
          "Built a full-stack image analysis application that combines AI-powered visual search with real-time product matching. The system allows users to upload images and instantly find similar products using advanced vector embeddings and intelligent ranking algorithms.",
          "Worked in a 4-person intern team alongside full-time engineers, participating in Agile sprints, daily standups, and code reviews.",
          "Collaborated on architectural decisions, testing workflows, and production-readiness criteria aligned with client goals.",
          "Received mentorship from engineers across different projects in the company, gaining insights into various technical approaches and best practices.",
        ],
      },
      {
        title: "🏗️ Project Architecture & System Design",
        points: [
          "Designed a modular microservices architecture using FastAPI, PostgreSQL, Docker, and a React/TypeScript frontend with Redux state management.",
          "Built a production-ready ingestion pipeline for large-scale product image ingestion, featuring resume logic, batch control, progress tracking, and system monitoring.",
          "Integrated an OAuth2-based token manager to handle multi-environment authentication with persistent credentials and automatic refresh logic.",
        ],
      },
      {
        title: "🤖 AI/ML Pipeline & Vector Search",
        points: [
          "Developed a CLIP-based embedding system to convert user-uploaded and catalog images into 512-dimensional vectors for similarity search.",
          "Implemented optimized vector search with pgvector and HNSW indexing, supporting multi-view image input with weighted result merging for improved accuracy.",
          "Supported configurable similarity thresholds, metadata enrichment, and responsive ranking logic to enhance product matching precision.",
        ],
      },
      {
        title: "💻 Frontend Architecture & UX",
        points: [
          "Engineered a mobile-first React application with drag-and-drop uploads, real-time camera input, and responsive results display using Tailwind CSS.",
          "Used Redux Toolkit and React Query to manage search state, ingestion status, and cached results with seamless navigation and UX continuity.",
          "Built advanced UI components including product comparison views, ingestion feedback panels, and availability/location overlays.",
        ],
      },
      {
        title: "⚙️ Backend Development",
        points: [
          "Implemented FastAPI services to handle search, ingestion orchestration, vector generation, history tracking, and result merging.",
          "Integrated background job processing with retry logic, ETA estimation, and throughput monitoring to ensure system reliability at scale.",
          "Designed backend to be stateless and horizontally scalable, compatible with containerized deployment and future cloud migration.",
        ],
      },
      {
        title: "🗄️ Database Design & Optimization",
        points: [
          "Designed normalized PostgreSQL schema for image embeddings, product metadata, user history, and ingestion logs.",
          "Leveraged pgvector for cosine similarity and HNSW indexing, enabling sub-second KNN queries over 50K+ product embeddings.",
          "Added archival and cleanup routines to preserve performance and allow for long-term analysis.",
        ],
      },
      {
        title: "🔧 DevOps & Infrastructure",
        points: [
          "Containerized all services using Docker with `docker-compose` setup, health checks, and volume-mounted persistence for local and CI deployment.",
          "Configured CI pipelines with Pytest for unit/integration testing and Playwright for full E2E and UI regression testing.",
          "Instrumented logs and metrics across backend and ingestion systems to track bottlenecks and monitor throughput.",
        ],
      },
      {
        title: "🔐 Security & Authentication",
        points: [
          "Implemented secure login with Azure AD using OAuth2 across frontend and backend, managing user tokens and permissions.",
          "Hardened file upload logic against abuse with validation on file type, size, and integrity.",
          "Added RBAC mechanisms to control access to ingestion triggers, search results, and historical logs.",
        ],
      },
      {
        title: "🚀 Performance & Scalability",
        points: [
          "Enabled sub-second similarity search via HNSW index tuning, connection pooling, and vector caching strategies.",
          "Optimized backend startup, search latency, and image ingestion with async pipelines and concurrent job scheduling.",
          "Designed for scale with decoupled services and fault-tolerant queue handling for future production load.",
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
