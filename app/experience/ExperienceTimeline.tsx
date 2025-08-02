"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceItem } from "./ExperienceData";

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  selectedIndex: number | null;
  onSelectExperience: (index: number) => void;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  selectedIndex,
  onSelectExperience,
}) => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const nextExperience = () => {
    const next = (currentMobileIndex + 1) % experiences.length;
    setCurrentMobileIndex(next);
    onSelectExperience(next);
  };

  const prevExperience = () => {
    const prev =
      (currentMobileIndex - 1 + experiences.length) % experiences.length;
    setCurrentMobileIndex(prev);
    onSelectExperience(prev);
  };

  const getCompanyColor = (index: number) => {
    if (index === 0) return "text-orange-500"; // UDig
    if (index === 1) return "text-cyan-400"; // Booz Allen
    if (index === 2) return "text-blue-400"; // Research
    if (index === 3) return "text-blue-400"; // Teacher
    return "text-blue-400";
  };

  const getButtonColor = (index: number) => {
    if (index === 0) return "bg-orange-500 hover:bg-orange-600"; // UDig
    if (index === 1) return "bg-cyan-500 hover:bg-cyan-600"; // Booz Allen
    if (index === 2) return "bg-blue-500 hover:bg-blue-600"; // Research
    if (index === 3) return "bg-blue-500 hover:bg-blue-600"; // Teacher
    return "bg-blue-500 hover:bg-blue-600";
  };

  return (
    <div className="flex-shrink-0 md:w-1/3 relative">
      <div className="block lg:hidden">
        <div className="text-center mb-6">
          <div className="flex justify-center space-x-2">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentMobileIndex(index);
                  onSelectExperience(index);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  index === currentMobileIndex
                    ? getButtonColor(index)
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } ${index === currentMobileIndex ? "text-white" : ""}`}
              >
                {exp.company === "UVA School of Data Science"
                  ? "Research"
                  : exp.company === "University of Virginia"
                  ? "Teacher"
                  : exp.company.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-lg mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h3
              className={`font-bold text-lg mb-1 ${getCompanyColor(
                currentMobileIndex
              )}`}
            >
              {experiences[currentMobileIndex].company}
            </h3>
            <p className="text-sm text-gray-300 mb-1">
              {experiences[currentMobileIndex].title}
            </p>
            <p className="text-xs text-gray-400">
              {experiences[currentMobileIndex].period}
            </p>
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevExperience}
              className={`${getButtonColor(
                currentMobileIndex
              )} text-white rounded-full p-3 shadow-lg transition-all duration-200`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextExperience}
              className={`${getButtonColor(
                currentMobileIndex
              )} text-white rounded-full p-3 shadow-lg transition-all duration-200`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentMobileIndex(index);
                onSelectExperience(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMobileIndex
                  ? index === 0
                    ? "bg-orange-500 scale-125"
                    : index === 1
                    ? "bg-cyan-500 scale-125"
                    : "bg-blue-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            {currentMobileIndex + 1} of {experiences.length}
          </span>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4] h-full top-0"></div>
        <ul className="relative">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="mb-8 flex items-center justify-between w-full odd:flex-row-reverse group"
            >
              <motion.div
                className={`w-5/12 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-200 ${
                  selectedIndex === index
                    ? "glass-effect shadow-lg hover-glow"
                    : "hover:bg-white/10"
                }`}
                onClick={() => onSelectExperience(index)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h3
                  className={`font-bold text-lg md:text-xl mb-1 ${getCompanyColor(
                    index
                  )}`}
                >
                  {exp.company}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-1">
                  {exp.title}
                </p>
                <p className="text-xs md:text-sm text-gray-400">{exp.period}</p>
              </motion.div>
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-0 flex items-center justify-center">
                <div
                  className={`w-6 h-6 rounded-full bg-[#3B82F6] z-10 ring-4 ring-gray-800 transition-all duration-200 ${
                    selectedIndex === index ? "ring-[#06B6D4] neon-glow" : ""
                  }`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
