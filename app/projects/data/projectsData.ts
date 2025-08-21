import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Cap@UVA",
    description:
      "My friends and I often struggled to find open spaces to study or work out at UVA, especially during peak hours, since there was no way to check the real-time capacity of buildings like Clemons Library or the AFC gym.\n\n" +
      "Frustrated by this recurring problem, we decided to develop Cap@UVA, a live occupancy tracker designed specifically for high-traffic university spaces.\n\n" +
      "We built an edge-compute system using Raspberry Pi 5 devices with connected cameras, running YOLOv8 to detect individuals entering or exiting a location.\n\n" +
      "The data is processed locally to preserve privacy, then pushed to AWS via a Node.js API, where a Lambda function cleans and calculates current capacity.\n\n" +
      "These results are stored in MongoDB and visualized through a mobile and web app built with React Native and React.\n\n" +
      "The platform breaks down capacity by subzones (e.g., basketball court, weight room, library floors), helping students plan where to go in real time.\n\n" +
      "The system is currently deployed at multiple UVA locations and is designed to be scalable across campus.\n\n" +
      "Our goal is to make space usage more transparent and reduce time wasted searching for open spots.",
    technologies: ["React Native", "AWS", "Computer Vision", "API Gateway"],
    images: [
      "/exitcamera.png",
      "/hoopscamera.png",
      "/capuva.png",
      "/AFCsection.png",
    ],
    link: "https://www.capatuva.xyz/",
    github: undefined,
  },
  {
    title: "WellnessAI",
    description:
      "🚩 The Problem\n\n" +
      "Fitness apps today treat health in isolation: calories in one app, workouts in another, sleep in a third. None of them reason across these factors to keep you on track. If you're stressed or short on sleep, they don't adapt your nutrition, training, or recovery plan. You're left to guess how to adjust, risking burnout or plateaus.\n\n" +
      "💡 The Solution\n\n" +
      "WellnessAI 🏋️‍♂️🤖 is the first agentic AI coach that reasons like a true trainer. It doesn't just track data — it connects the dots:\n\n" +
      "Didn't sleep enough? → AI adjusts your macros and training intensity to keep progress steady.\n\n" +
      "High stress week? → It suggests recovery protocols and nutrition tweaks to protect gains.\n\n" +
      "Plateau in the gym? → It rebalances your split, recommends microcycle changes, and nudges sleep or diet improvements.\n\n" +
      "WellnessAI continuously learns you and orchestrates all the levers — workouts, nutrition, sleep, stress, recovery — to make sure you still advance toward your goals.\n\n" +
      "⚡ Key Features\n" +
      "🧠 Intelligent Adaptation\n\n" +
      "Cross-Domain Reasoning: Links sleep, stress, diet, and workouts to make balanced recommendations.\n\n" +
      "Dynamic Compensation: If one input slips (e.g., sleep), AI recalibrates others (e.g., nutrition + training).\n\n" +
      "Persistent Memory: Learns your patterns and improves recommendations the longer you use it.\n\n" +
      "🍎 Nutrition & Recovery\n\n" +
      "Snap-to-Log Macros: Take a photo → instant breakdown and AI-calibrated adjustments.\n\n" +
      "Stress & Sleep Aware: Recommends meal plans, hydration, or rest strategies that complement your recovery status.\n\n" +
      "🏋️ Training Optimization\n\n" +
      "AI-Suggested Progressions: Automatically scales reps/weights based on your readiness.\n\n" +
      "Plateau Detection: Identifies stagnation early and deploys breakthrough strategies.\n\n" +
      "Personalized Periodization: Builds workout cycles that flex with your lifestyle.",
    technologies: [
      "React Native",
      "Spring Boot",
      "Python",
      "OpenAI API",
      "Firebase",
      "Computer Vision",
    ],
    images: [
      "/wellnessai1.png",
      "/wellnessai2.png",
      "/wellnessai3.png",
      "/wellnessai4.png",
    ],
    link: "https://github.com/shivpatel0812/AIGymtracker",
    github: "https://github.com/shivpatel0812/AIGymtracker",
  },
  {
    title: "AI Video Agent",
    description:
      "The AI Video Agent is an intelligent video processing application that leverages advanced AI technologies to analyze, summarize, and extract insights from video content.\n\n" +
      "Built with cutting-edge machine learning models, the application can automatically transcribe speech, identify key topics, and generate comprehensive summaries of video content.\n\n" +
      "The system features a user-friendly interface that allows users to upload videos and receive detailed analytics including sentiment analysis, topic extraction, and automated highlights.\n\n" +
      "Using state-of-the-art natural language processing and computer vision techniques, the AI Video Agent transforms hours of video content into actionable insights and digestible summaries.\n\n" +
      "The application is designed to help content creators, educators, and businesses efficiently process and understand large volumes of video data.",
    technologies: ["Python", "OpenAI API", "Computer Vision", "NLP"],
    images: ["/agentapppic1.png", "/agentapppic2.png", "/agentapppic3.png"],
    link: "https://github.com/shivpatel0812/videoagent",
    github: "https://github.com/shivpatel0812/videoagent",
  },
  {
    title: "AI Business Card Analyzer",
    description:
      "After attending several job fairs and collecting dozens of business cards, I struggled to keep track of who I met and what each company did. To solve this, I built the AI Business Card Analyzer, a web application that digitizes, summarizes, and organizes business cards using OpenAI's language models.\n\n" +
      "Users can upload images of business cards, and the system extracts contact information, generates summaries about the company and role, and stores the data in a searchable format. Built with ReactJS on the front end and AWS Lambda + DynamoDB on the backend, the app ensures fast, scalable performance with Firebase for authentication.\n\n" +
      "Beyond personal organization, users can send friend requests, share individual cards with others, and even create group chats tied to organizations. These chats allow members to view, comment on, and collaborate around shared cards and their AI-generated insights—all within the platform.\n\n" +
      "By combining image-based digitization with contextual AI summaries and built-in social features, the app makes networking follow-ups and career exploration far more efficient and interactive.",
    technologies: ["ReactJS", "AWS Lambda", "TensorFlow", "OpenAI API"],
    images: [
      "/aibusinesscard.png",
      "/picture2aibusinesscard.png",
      "/picture3aibusinesscard.png",
      "/picture4aibusinesscard.png",
    ],
    link: "https://github.com/shivpatel0812/ai_business_analyzer",
    github: "https://github.com/shivpatel0812/ai_business_analyzer",
  },
];

export const otherProjects = [
  {
    title: "MapSnap",
    desc: "Full-featured map application with image uploads and social features",
    link: "https://github.com/shivpatel0812/maproject1",
  },
  {
    title: "ML4UVA",
    desc: "Machine Learning project for UVA",
    link: "https://github.com/shivpatel0812/ML4UVA",
  },
  {
    title: "NFL Defense Classification",
    desc: "Image classification for NFL defensive formations",
    link: "https://github.com/shivpatel0812/NFLdefenseClassification",
  },
  {
    title: "CS3140 Project",
    desc: "UVA Computer Science project",
    link: "https://github.com/uva-cs3140-sp24/hw6-njt4xc-ntm4nb-wwg6yr-xne4ed",
  },
  {
    title: "AI Career Prediction",
    desc: "CS 4474 Artificial Intelligence project",
    link: "https://github.com/shivpatel0812/AICareerPrediction/tree/main",
  },
];
