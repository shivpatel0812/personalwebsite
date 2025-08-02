import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  image?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "UDig",
    period: "Incoming Summer 2025",
    description: [
      "Develop full-stack applications for clients, specializing in AI-driven solutions deploying cloud services and automation.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Booz Allen Hamilton",
    period: "February 2025 – April 2025",
    description: [
      "Optimized an AWS Greengrass architecture on NVIDIA Jetson and built an automated bash script to deploy X.509 certs with IoT policies, enabling secure LLM computing on 20+ edge devices and reducing setup time by 20%.",
      "Built an IoT device monitoring pipeline with AWS Device Defender and Falco to log Greengrass activity, detect authentication anomalies, and auto-block 150+ untrusted IPs via firewall, improving edge platform resilience by 60%.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company:
      "UVA School of Data Science – Professor Beak Visual Intelligence Laboratory",
    period: "May 2023 – Present | Charlottesville, VA",
    image: "/images/uvads-building.png",
    description: [
      "Collaborated with the University of Iowa Neurology team to develop a web-based platform for analyzing brain cell microscopy images using deep learning models.",
      "Built a ReactJS frontend and deployed it with AWS Amplify, creating an intuitive interface where researchers can upload cell images and view corresponding analysis results; implemented user-specific sessions so each researcher’s images and results are stored and displayed independently.",
      "Engineered a RESTful FastAPI endpoint using AWS S3 and Docker to upload 1,000+ microscopy images for analysis.",
      "Assisted in developing a Vision Transformer using PyTorch and OpenCV for brain cell segmentation, achieving a 0.91 Dice score, and built a custom PyTorch IOU testing pipeline with 95% accuracy for segmentation quality validation.",
    ],
  },
  {
    title: "Teacher Assistant – Introduction to Data Science in R",
    company: "UVA School of Data Science",
    period: "January 2025 – May 2025",
    description: [
      "Supported 300+ students in fundamental programming, held office hours, assisted lectures, and graded student assignments.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Experience
        </h2>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative mb-12 ml-2">
                <div className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="pl-6">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.title}</p>
                  <p className="text-xs text-gray-500">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-8 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-6 pt-0">
                {exp.image && (
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-auto mt-0 mb-4 rounded"
                  />
                )}
                <h3 className="text-2xl font-semibold mt-0">{exp.title}</h3>
                <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                <p className="text-gray-400 mt-0">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
