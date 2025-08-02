"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceItem } from "./ExperienceData";

interface ExperienceDetailProps {
  experience: ExperienceItem;
  selectedIndex: number;
  selectedSectionIndex: number;
  onSectionSelect: (index: number) => void;
  onAwsClick: (services: string[]) => void;
  onImageClick: (src: string) => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  experience,
  selectedIndex,
  selectedSectionIndex,
  onSectionSelect,
  onAwsClick,
  onImageClick,
}) => {
  const textMarginClass = (index: number) => {
    switch (index) {
      case 1:
        return "-mt-0";
      case 2:
        return "-mt-0";
      case 3:
        return "-mt-0";
      default:
        return "";
    }
  };

  const sectionsWithBulletPoints = [
    "🎯 Project Architecture & System Design",
    "🤖 AI/ML Pipeline & Vector Search",
    "💻 Frontend Architecture & UX",
    "⚙️ Backend API Development",
    "🗄️ Database Design & Optimization",
    "🔧 DevOps & Infrastructure",
    "🔐 Security & Authentication",
    "🚀 Performance & Scalability",
    "👥 Collaboration & Team Experience",
    "Understanding the Architecture",
    "Scalable AWS based Security Implementation",
    "Additional measures",
    "🧠 Summary",
    "⚙️ Frontend & Deployment",
    "☁️ Backend Architecture",
    "🧪 Machine Learning & Validation",
    "🧠 Motivation",
    "🏆 Instruction & Support",
    "📝 Grading & Feedback",
    "💬 Mentorship & Environment",
  ];

  return (
    <motion.div
      key={selectedIndex}
      className={`flex-grow md:w-2/3 glass-effect rounded-lg shadow-lg overflow-hidden p-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col gap-y-4 ${selectedIndex === 1 ? "" : ""}`}>
        {experience.image && (
          <div
            className={`${
              selectedIndex === 0 ||
              selectedIndex === 1 ||
              selectedIndex === 2 ||
              selectedIndex === 3
                ? "relative w-[calc(100%+3rem)] h-48 md:h-60 mb-4 -ml-6 -mr-6 -mt-6"
                : "relative w-64 h-64 mb-4 mx-auto md:mx-0"
            }`}
          >
            <Image
              src={experience.image}
              alt={experience.company}
              fill
              className={`${
                selectedIndex === 0 ||
                selectedIndex === 1 ||
                selectedIndex === 2 ||
                selectedIndex === 3
                  ? "object-cover object-center"
                  : "object-contain object-top"
              }`}
            />
          </div>
        )}
        <div className={`${textMarginClass(selectedIndex)}`}>
          <div>
            <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
            {selectedIndex === 3 && (
              <p className="mb-1 text-[#3B82F6]">
                Introduction to Data Science in R
              </p>
            )}
            <p
              className={`${
                selectedIndex === 0
                  ? "text-orange-500"
                  : selectedIndex === 1
                  ? "text-cyan-400"
                  : selectedIndex === 2
                  ? "text-blue-400"
                  : selectedIndex === 3
                  ? "text-orange-500"
                  : "text-blue-400"
              } font-semibold mb-1`}
            >
              {selectedIndex === 2 ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </p>
            {selectedIndex === 2 && (
              <p className="mb-1 text-yellow-500 font-bold">
                <a
                  href="https://stephenbaek.github.io/lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Professor Baek Visual Intelligence Laboratory
                </a>
              </p>
            )}
            <p className="text-gray-300 text-sm mb-4">
              {experience.period} | {experience.location}
            </p>
          </div>
        </div>
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    tech === "AWS"
                      ? "bg-red-600 text-white cursor-pointer hover-glow"
                      : "glass-effect text-[#3B82F6] hover:bg-[#3B82F6]/20 hover-glow"
                  }`}
                  onClick={
                    tech === "AWS" && experience.awsServices
                      ? () => onAwsClick(experience.awsServices!)
                      : undefined
                  }
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mb-4">
          <h3 className="text-xl font-bold underline mb-4">
            Responsibilities:
          </h3>
          <div className="flex flex-row gap-8">
            <div className="flex-shrink-0 w-1/3 space-y-4 relative">
              <div
                className={`absolute left-3 top-0 bottom-0 w-0.5 ${
                  selectedIndex === 0
                    ? "bg-orange-500"
                    : selectedIndex === 1
                    ? "bg-cyan-400"
                    : selectedIndex === 2
                    ? "bg-blue-500"
                    : "bg-blue-500"
                }`}
              ></div>
              {experience.details.map((section, index) => (
                <button
                  key={index}
                  className={`relative z-10 block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 border ${
                    selectedSectionIndex === index
                      ? selectedIndex === 0
                        ? "bg-orange-600 text-white border-orange-600"
                        : selectedIndex === 1
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300 border-gray-600"
                  }`}
                  onClick={() => onSectionSelect(index)}
                >
                  {section.title}
                  <div
                    className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ring-4 ring-gray-700 ${
                      selectedIndex === 0
                        ? "bg-orange-500"
                        : selectedIndex === 1
                        ? "bg-cyan-400"
                        : "bg-blue-500"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            <div className="flex-grow w-2/3 space-y-4">
              <div className="border border-white/10 p-4 rounded-lg glass-effect">
                {experience.details[selectedSectionIndex].points.map(
                  (point, pointIndex) => {
                    const sectionTitle =
                      experience.details[selectedSectionIndex].title;

                    if (sectionsWithBulletPoints.includes(sectionTitle)) {
                      return (
                        <ul
                          key={pointIndex}
                          className="list-none space-y-1 pl-0"
                        >
                          <li className="flex items-start">
                            <span
                              className={`font-bold mr-2 ${
                                selectedIndex === 0
                                  ? "text-orange-500"
                                  : selectedIndex === 1
                                  ? "text-cyan-400"
                                  : "text-blue-500"
                              }`}
                            >
                              •
                            </span>
                            <span className="font-normal text-gray-300">
                              {point}
                            </span>
                          </li>
                        </ul>
                      );
                    } else {
                      return (
                        <p
                          key={pointIndex}
                          className="font-normal text-gray-300"
                        >
                          {point}
                        </p>
                      );
                    }
                  }
                )}
                {selectedIndex === 2 && selectedSectionIndex === 1 && (
                  <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                    <Image
                      src="/Neuronsegfrontend.png"
                      alt="Neuronseg Frontend Screenshot"
                      fill
                      className="object-contain cursor-pointer"
                      onClick={() => onImageClick("/Neuronsegfrontend.png")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              Learn More →
            </a>
          )}
          {experience.github && (
            <a
              href={experience.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline text-sm"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
