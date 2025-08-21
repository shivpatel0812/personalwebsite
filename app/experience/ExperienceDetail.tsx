"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceItem } from "./ExperienceData";

interface ExperienceDetailProps {
  experience: ExperienceItem;
  selectedIndex: number;
  selectedSectionIndex: number;
  onSectionSelect: (index: number) => void;
  onAwsClick: (services: string[]) => void;
  onImageClick?: (imageSrc: string) => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  experience,
  selectedIndex,
  selectedSectionIndex,
  onSectionSelect,
  onAwsClick,
  onImageClick,
}) => {
  const [currentMobileSection, setCurrentMobileSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );

  // Ensure selectedSectionIndex is within bounds
  useEffect(() => {
    if (selectedSectionIndex >= experience.details.length) {
      onSectionSelect(0);
    }
  }, [experience.details.length, selectedSectionIndex, onSectionSelect]);

  // Ensure currentMobileSection is within bounds
  useEffect(() => {
    if (experience.details && experience.details.length > 0) {
      if (currentMobileSection >= experience.details.length) {
        setCurrentMobileSection(0);
      }
    }
  }, [experience.details, currentMobileSection]);

  const nextSection = () => {
    if (!experience.details || experience.details.length === 0) return;
    const next = (currentMobileSection + 1) % experience.details.length;
    setCurrentMobileSection(next);
    onSectionSelect(next);
  };

  const prevSection = () => {
    if (!experience.details || experience.details.length === 0) return;
    const prev =
      (currentMobileSection - 1 + experience.details.length) %
      experience.details.length;
    setCurrentMobileSection(prev);
    onSectionSelect(prev);
  };

  const toggleSection = (sectionIndex: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionIndex)) {
      newExpanded.delete(sectionIndex);
    } else {
      newExpanded.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  const getSectionColor = () => {
    if (selectedIndex === 0) return "orange";
    if (selectedIndex === 1) return "cyan";
    if (selectedIndex === 2) return "blue";
    return "blue";
  };

  const getShadowColor = () => {
    if (selectedIndex === 0) return "shadow-orange-glow"; // UDig orange shadow
    if (selectedIndex === 1) return "shadow-cyan-glow"; // Booz Allen cyan shadow
    return "shadow-blue-glow"; // Default blue shadow
  };

  const textMarginClass = () => {
    switch (selectedIndex) {
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

  // Safety check for experience object
  if (!experience || !experience.details || experience.details.length === 0) {
    return (
      <motion.div
        key={selectedIndex}
        className={`flex-grow md:w-2/3 glass-effect rounded-lg shadow-lg ${getShadowColor()} overflow-hidden p-6`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-300">No experience details available.</p>
        </div>
      </motion.div>
    );
  }

  // Check if this is UDig experience (index 0)
  const isUdigExperience = selectedIndex === 0;

  return (
    <motion.div
      key={selectedIndex}
      className={`flex-grow md:w-2/3 glass-effect rounded-lg shadow-lg ${getShadowColor()} overflow-hidden p-6`}
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
            } ${
              onImageClick
                ? "cursor-pointer hover:opacity-90 transition-opacity"
                : ""
            }`}
            onClick={() =>
              onImageClick && experience.image && onImageClick(experience.image)
            }
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
        <div className={`${textMarginClass()}`}>
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

          <div className="block lg:hidden">
            <div className="flex gap-4">
              <div className="w-1/3 space-y-2">
                <p className="text-sm text-gray-400 mb-3 font-semibold">
                  Sections:
                </p>
                <div className="space-y-1 max-h-96 overflow-y-auto scrollbar-hide">
                  {experience.details.map((section, index) => {
                    const color = getSectionColor();
                    const isActive = index === currentMobileSection;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentMobileSection(index);
                          onSectionSelect(index);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center space-x-2 ${
                          isActive
                            ? color === "orange"
                              ? "bg-orange-600 text-white shadow-lg shadow-orange-glow-strong"
                              : color === "cyan"
                              ? "bg-cyan-600 text-white shadow-lg shadow-cyan-glow-strong"
                              : "bg-blue-600 text-white shadow-lg shadow-blue-glow-strong"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            isActive
                              ? "bg-white"
                              : color === "orange"
                              ? "bg-orange-400"
                              : color === "cyan"
                              ? "bg-cyan-400"
                              : "bg-blue-400"
                          }`}
                        ></span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="w-2/3">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center mb-3">
                    <span
                      className={`w-3 h-3 rounded-full mr-3 ${
                        getSectionColor() === "orange"
                          ? "bg-orange-500"
                          : getSectionColor() === "cyan"
                          ? "bg-cyan-500"
                          : "bg-blue-500"
                      }`}
                    ></span>
                    <h4 className="font-semibold text-white text-sm">
                      {experience.details[currentMobileSection]?.title ||
                        "Loading..."}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {isUdigExperience ? (
                      // UDig experience: Show custom one-liner + More Info button with all points
                      <>
                        <div className="flex items-start">
                          <span
                            className={`w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                              getSectionColor() === "orange"
                                ? "bg-orange-400"
                                : getSectionColor() === "cyan"
                                ? "bg-cyan-400"
                                : "bg-blue-400"
                            }`}
                          ></span>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            {experience.details[currentMobileSection]
                              ?.oneLiner || "Custom description coming soon..."}
                          </p>
                        </div>

                        {experience.details[currentMobileSection]?.points &&
                          experience.details[currentMobileSection].points
                            .length > 0 && (
                            <>
                              <button
                                onClick={() =>
                                  toggleSection(currentMobileSection)
                                }
                                className={`w-full mt-3 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                                  expandedSections.has(currentMobileSection)
                                    ? "bg-orange-700 text-white hover:bg-orange-600"
                                    : "bg-orange-600 text-white hover:bg-orange-500"
                                }`}
                              >
                                {expandedSections.has(currentMobileSection)
                                  ? "Show Less"
                                  : "More Info"}
                              </button>

                              {expandedSections.has(currentMobileSection) && (
                                <div className="mt-3 space-y-2">
                                  {experience.details[
                                    currentMobileSection
                                  ]?.points?.map((point, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start"
                                    >
                                      <span
                                        className={`w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                                          getSectionColor() === "orange"
                                            ? "bg-orange-400"
                                            : getSectionColor() === "cyan"
                                            ? "bg-cyan-400"
                                            : "bg-blue-400"
                                        }`}
                                      ></span>
                                      <p className="text-xs text-gray-300 leading-relaxed">
                                        {point}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                      </>
                    ) : (
                      // Other experiences: Show all points as before
                      experience.details[currentMobileSection]?.points?.map(
                        (point, index) => (
                          <div key={index} className="flex items-start">
                            <span
                              className={`w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${
                                getSectionColor() === "orange"
                                  ? "bg-orange-400"
                                  : getSectionColor() === "cyan"
                                  ? "bg-cyan-400"
                                  : "bg-blue-400"
                              }`}
                            ></span>
                            <p className="text-xs text-gray-300 leading-relaxed">
                              {point}
                            </p>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={prevSection}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
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

                  <div className="flex items-center space-x-1">
                    {experience.details?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentMobileSection(index);
                          onSectionSelect(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMobileSection
                            ? getSectionColor() === "orange"
                              ? "bg-orange-500 scale-125"
                              : getSectionColor() === "cyan"
                              ? "bg-cyan-500 scale-125"
                              : "bg-blue-500 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSection}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
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

                <div className="text-center mt-2">
                  <span className="text-xs text-gray-400">
                    {currentMobileSection + 1} of{" "}
                    {experience.details?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-row gap-8">
            <div className="flex-shrink-0 w-1/3 space-y-4 relative">
              <div
                className={`absolute left-3 top-0 bottom-0 w-0.5 ${
                  selectedIndex === 0
                    ? "bg-orange-500"
                    : selectedIndex === 1
                    ? "bg-cyan-400"
                    : "bg-blue-500"
                }`}
              ></div>
              {experience.details?.map((section, index) => (
                <button
                  key={index}
                  className={`relative z-10 block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 border ${
                    selectedSectionIndex === index
                      ? selectedIndex === 0
                        ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-glow-strong"
                        : selectedIndex === 1
                        ? "bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-glow-strong"
                        : "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-glow-strong"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300 border-gray-600"
                  }`}
                  onClick={() => onSectionSelect(index)}
                >
                  <div className="text-sm font-medium">{section.title}</div>
                </button>
              ))}
            </div>
            <div className="flex-grow">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">
                  {experience.details[selectedSectionIndex]?.title ||
                    "No title available"}
                </h4>
                <div className="text-sm text-gray-300">
                  {isUdigExperience ? (
                    // UDig experience: Show custom one-liner + More Info button with all points
                    <>
                      <div className="mb-2">
                        <span className="text-orange-400 mr-2">•</span>
                        {experience.details[selectedSectionIndex]?.oneLiner ||
                          "Custom description coming soon..."}
                      </div>

                      {experience.details[selectedSectionIndex]?.points &&
                        experience.details[selectedSectionIndex].points.length >
                          0 && (
                          <>
                            <button
                              onClick={() =>
                                toggleSection(selectedSectionIndex)
                              }
                              className={`w-full mt-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                expandedSections.has(selectedSectionIndex)
                                  ? "bg-orange-700 text-white hover:bg-orange-600"
                                  : "bg-orange-600 text-white hover:bg-orange-500"
                              }`}
                            >
                              {expandedSections.has(selectedSectionIndex)
                                ? "Show Less"
                                : "More Info"}
                            </button>

                            {expandedSections.has(selectedSectionIndex) && (
                              <div className="mt-3 space-y-2">
                                {experience.details[
                                  selectedSectionIndex
                                ]?.points?.map((point, index) => (
                                  <div key={index} className="mb-2">
                                    <span className="text-orange-400 mr-2">
                                      •
                                    </span>
                                    {point}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                    </>
                  ) : (
                    // Other experiences: Show all points as before
                    experience.details[selectedSectionIndex]?.points?.map(
                      (point, index) => (
                        <div key={index} className="mb-2">
                          <span
                            className={`mr-2 ${
                              selectedIndex === 0
                                ? "text-orange-400"
                                : selectedIndex === 1
                                ? "text-cyan-400"
                                : "text-blue-400"
                            }`}
                          >
                            •
                          </span>
                          {point}
                        </div>
                      )
                    ) || <p className="text-gray-400">No details available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
