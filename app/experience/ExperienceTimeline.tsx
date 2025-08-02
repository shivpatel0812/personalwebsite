"use client";

import React from "react";
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
  return (
    <div className="flex-shrink-0 md:w-1/3 relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4] h-full top-0"></div>
      <ul className="relative">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="mb-8 flex items-center md:justify-between w-full md:odd:flex-row-reverse group"
          >
            <motion.div
              className={`md:w-5/12 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-200 ${
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
                className={`font-bold text-lg md:text-xl mb-1 ${
                  index === 0
                    ? "text-orange-500"
                    : index === 1
                    ? "text-cyan-400"
                    : index === 2
                    ? "text-blue-400"
                    : index === 3
                    ? "text-orange-500"
                    : ""
                }`}
              >
                {exp.company}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-1">
                {exp.title}
              </p>
              <p className="text-xs md:text-sm text-gray-400">{exp.period}</p>
            </motion.div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-0 flex items-center justify-center">
              <div
                className={`w-6 h-6 rounded-full bg-[#3B82F6] z-10 ring-4 ring-gray-800 transition-all duration-200 ${
                  selectedIndex === index ? "ring-[#06B6D4] neon-glow" : ""
                }`}
              ></div>
            </div>
            <div className="flex-grow md:hidden"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
