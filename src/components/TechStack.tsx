"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";

interface TechCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      "Java",
      "Python",
      "R",
      "SQL",
      "JavaScript",
      "TypeScript",
      "C",
      "HTML",
      "CSS",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dev Tools",
    icon: "🛠️",
    skills: [
      "React",
      "React Native",
      "GitHub",
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "OpenAI API",
      "Langchain",
      "Gradle",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frameworks & Stack",
    icon: "⚡",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Next.js",
      "Vite",
      "Tailwind",
      "PostgreSQL",
      "MongoDB",
      "JUnit",
      "pytest",
      "Playwright",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      info.offset.x < -threshold &&
      currentIndex < techCategories.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const nextSlide = useCallback(() => {
    if (currentIndex < techCategories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, nextSlide, prevSlide]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white min-h-screen relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-br from-[#06B6D4]/20 to-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 md:w-72 h-36 md:h-72 bg-gradient-to-br from-[#3B82F6]/15 to-[#06B6D4]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-4 md:mb-6 gradient-text tracking-tight">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            A curated collection of technologies and tools I use to bring ideas
            to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-8 md:mb-12 space-x-3 md:space-x-4">
            {techCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3B82F6] scale-125 shadow-lg shadow-[#3B82F6]/50 neon-glow"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl glass-effect p-4 md:p-12 shadow-2xl">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-10 glass-effect hover:bg-[#3B82F6]/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 md:p-4 shadow-lg transition-all duration-200 hover:shadow-[#3B82F6]/20 hover-neon"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
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
              onClick={nextSlide}
              disabled={currentIndex === techCategories.length - 1}
              className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-10 glass-effect hover:bg-[#3B82F6]/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 md:p-4 shadow-lg transition-all duration-200 hover:shadow-[#3B82F6]/20 hover-neon"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-white"
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

            {/* Draggable Content */}
            <motion.div
              ref={containerRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="flex"
              style={{ width: `${techCategories.length * 100}%` }}
              animate={{
                x: `${-currentIndex * (100 / techCategories.length)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {techCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2 md:px-4"
                  style={{ width: `${100 / techCategories.length}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0.7,
                      y: index === currentIndex ? 0 : 20,
                      scale: index === currentIndex ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Category Header */}
                    <div className="mb-6 md:mb-12">
                      <div className="text-4xl md:text-7xl mb-3 md:mb-6 opacity-80">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-light mb-2 md:mb-4 text-white tracking-tight">
                        {category.title}
                      </h3>
                      <div className="w-20 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: skillIndex * 0.1 },
                          }}
                          whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 },
                          }}
                          className="p-3 md:p-6 rounded-xl md:rounded-2xl glass-effect hover:bg-[#3B82F6]/10 hover:shadow-[#3B82F6]/20 transition-all duration-300 cursor-pointer group hover-glow hover-neon"
                        >
                          <div className="text-sm md:text-lg font-medium text-white group-hover:text-white transition-colors duration-300 text-center">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Drag Indicator */}
            <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 text-xs md:text-sm">
              <div className="flex items-center space-x-2 glass-effect px-3 md:px-4 py-1 md:py-2 rounded-full">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
                <span className="font-medium hidden sm:inline">
                  Drag to navigate
                </span>
                <span className="font-medium sm:hidden">Swipe</span>
              </div>
            </div>
          </div>

          {/* Category Labels */}
          <div className="flex flex-col sm:flex-row justify-center mt-8 md:mt-12 space-y-2 sm:space-y-0 sm:space-x-6">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center justify-center sm:justify-start space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/50 neon-glow"
                    : "text-gray-300 hover:text-white hover:bg-white/10 glass-effect hover-neon"
                }`}
              >
                <span className="text-lg md:text-xl">{category.icon}</span>
                <span className="font-medium text-sm md:text-base">
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
