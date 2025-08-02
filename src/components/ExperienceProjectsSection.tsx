import React, { useState } from "react";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  image: string;
  description: string;
  details: string[];
  link?: string; // Add optional link for experiences if needed
}

interface ProjectItem {
  title: string;
  image: string;
  period: string;
  link: string;
  description: string;
  details: string[];
  company?: string; // Add optional company for projects if needed
  location?: string; // Add optional location for projects if needed
}

type DataItem = ExperienceItem | ProjectItem;

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "UDig",
    location: "Richmond, VA (Remote)",
    period: "Incoming Summer 2025",
    image: "/capatuva.png",
    description: `Develop full-stack applications for clients, specializing in AI-driven solutions deploying cloud services and automation.`,
    details: [
      "Develop full-stack applications for clients, specializing in AI-driven solutions deploying cloud services and automation.",
    ],
  },
  {
    title: "Software Engineer / Cyber Intern",
    company: "Booz Allen Hamilton",
    location: "Remote",
    period: "Feb 2025 – Apr 2025",
    image: "/ai_business_analyzer.png",
    description: `Optimized AWS Greengrass architecture on NVIDIA Jetson, built automated deployment scripts, and implemented IoT device monitoring pipelines with AWS Device Defender and Falco.`,
    details: [
      "Optimized an AWS Greengrass architecture on NVIDIA Jetson and built an automated bash script to deploy X.509 certs with IoT policies, enabling secure LLM computing on 20+ future edge devices and reducing setup time by 20%.",
      "Built an IoT device monitoring pipeline with AWS Device Defender and Falco to log Greengrass activity, detect authentication anomalies, and auto-block 150+ untrusted IPs via firewall, improving edge platform resilience by 60%.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "UVA School of Data Science",
    location: "Charlottesville, VA",
    period: "May 2023 – Present",
    image: "/mapsnap.png",
    description: `Built a ReactJS cell analysis platform, engineered RESTful FastAPI endpoints, and developed deep learning models for brain cell segmentation using PyTorch and OpenCV.`,
    details: [
      "Built a ReactJS cell analysis platform for the Univ. of Iowa Neurology team, deploying deep-learning models through Docker and AWS (S3, Lambda, ECR, ECS) with Firebase authentication, cutting manual annotation time by 70%.",
      "Engineered a RESTful FastAPI endpoint using AWS S3 and Docker to upload 1,000+ microscopy images for analysis.",
      "Assisted in developing a Vision Transformer using PyTorch and OpenCV for brain cell segmentation, achieving a 0.91 Dice score, and built a custom PyTorch IOU testing pipeline with 95% accuracy for segmentation quality validation.",
    ],
  },
  {
    title: "Teacher Assistant - Introduction to Data Science in R",
    company: "UVA School of Data Science",
    location: "Charlottesville, VA",
    period: "Jan 2025 – May 2025",
    image: "/capatuva.png",
    description: `Supported 300+ students in programming, held office hours, assisted lectures, and graded assignments.`,
    details: [
      "Support 300+ students in fundamental programming, hold office hours, assist lectures, and grade student assignments.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Cap@UVA",
    image: "/capatuva.png",
    period: "2024 – Present",
    link: "https://www.capatuva.xyz/",
    description:
      "Live capacity tracker for UVA buildings. Find out when and where to study on UVA grounds. Built with React Native, AWS, and computer vision for real-time occupancy insights.",
    details: [
      "Implemented a Computer Vision (Yolo) based Raspberry Pi device system at a UVA gym to track zone-level capacity and generate insights via a student-facing app, helping optimize foot traffic and improve student schedule planning.",
      "Built a data pipeline with AWS S3, Lambda, and MongoDB to deliver real-time capacity insights via API Gateway, surfaced through a React/React Native Web & Mobile UI and deployed using Amplify for an active user base.",
    ],
  },
  {
    title: "AI Business Card Analyzer",
    image: "/ai_business_analyzer.png",
    period: "2023 – Present",
    link: "https://github.com/shivpatel0812/ai_business_analyzer",
    description:
      "Digitizes and organizes business cards using AI. Extracts contact info, generates summaries, and enables sharing and search. Built with ReactJS, AWS Lambda, TensorFlow, and OpenAI API.",
    details: [
      "Built an AI / LLM based Business Card Analyzer for insight generation, digitization, organizing, and in-app sharing.",
      "Uses OpenAI, ReactJS, AWS, Google Cloud, and more.",
    ],
  },
  {
    title: "MapSnap",
    image: "/mapsnap.png",
    period: "2023 – Present",
    link: "https://github.com/shivpatel0812/maproject1",
    description:
      "Multi-feature map app showing global event highlights, location-based image sharing, and real-time reviews. Integrates Google Cloud, Google Maps API, and Express.js.",
    details: [
      "Multi Feature Map app showing global event highlights, location based image map sharing, and real-time map review.",
      "ReactJS | ReactNative | Express.js | Google Cloud | Google Maps API",
    ],
  },
];

const TABS = ["Experiences", "Projects"];

const ExperienceProjectsSection = () => {
  const [tab, setTab] = useState<"Experiences" | "Projects">("Experiences");
  const [selected, setSelected] = useState(0);
  const data: DataItem[] = tab === "Experiences" ? experiences : projects;
  const selectedItem = data[selected];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              className={`px-6 py-2 mx-2 rounded-full font-semibold transition-colors border-2 ${
                tab === t
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
              }`}
              onClick={() => {
                setTab(t as "Experiences" | "Projects");
                setSelected(0);
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Detailed View */}
          <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-8">
            <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              {selectedItem.title}
              {selectedItem.company && (
                <span className="ml-2 text-xl font-semibold text-blue-600">
                  @ {selectedItem.company}
                </span>
              )}
            </h2>
            <div className="text-gray-500 mb-2">
              {selectedItem.location && <span>{selectedItem.location} | </span>}
              {selectedItem.period}
            </div>
            <p className="text-lg text-gray-700 mb-4">
              {selectedItem.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {selectedItem.details.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                {tab === "Projects" ? "View Project" : "Learn More"}
              </a>
            )}
          </div>
          {/* List View */}
          <div className="md:w-1/3 space-y-4 max-h-[600px] overflow-y-auto">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`cursor-pointer bg-white rounded-lg shadow-md p-4 flex items-center gap-4 border-2 transition-all ${
                  selected === idx
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-transparent hover:border-blue-300"
                }`}
                onClick={() => setSelected(idx)}
              >
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                    {"company" in item && item.company && (
                      <span className="ml-1 text-blue-500 text-base">
                        @ {item.company}
                      </span>
                    )}
                  </h3>
                  <div className="text-gray-500 text-sm">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjectsSection;
