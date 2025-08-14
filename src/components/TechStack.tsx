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
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Vite",
      "Tailwind CSS",
      "Redux",
      "React Query",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AWS Services",
    icon: "☁️",
    skills: [
      "AWS S3",
      "AWS Lambda",
      "AWS SQS",
      "AWS ECR",
      "AWS ECS",
      "AWS EC2",
      "AWS API Gateway",
      "AWS RDS",
      "AWS DynamoDB",
      "AWS Route 53",
      "AWS Amplify",
      "AWS Greengrass",
      "AWS Device Defender",
      "AWS IoT Core",
      "AWS CloudWatch",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud & DevOps",
    icon: "🚀",
    skills: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "CI/CD",
      "Vercel",
      "Xcode",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "AI & ML",
    icon: "🤖",
    skills: [
      "OpenAI API",
      "Claude API",
      "Langchain",
      "CLIP",
      "YOLO",
      "TensorFlow",
      "PyTorch",
      "ONNX",
      "Scikit-learn",
      "Pandas",
      "LLaMA",
      "RAG",
    ],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Dev Tools & Testing",
    icon: "🛠️",
    skills: [
      "GitHub",
      "Git",
      "JUnit",
      "pytest",
      "Playwright",
      "Gradle",
      "npm",
      "ESLint",
      "Prettier",
    ],
    color: "from-orange-500 to-red-500",
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
    <section className="py-8 md:py-12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-32 md:w-48 h-32 md:h-48 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-8 w-40 md:w-64 h-40 md:h-64 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-light mb-3 md:mb-4 gradient-text tracking-tight">
            Tech Stack
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed px-4">
            A curated collection of technologies and tools I use to bring ideas
            to life
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-6 md:mb-8 space-x-2 md:space-x-3">
            {techCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3B82F6] scale-125 shadow-lg shadow-[#3B82F6]/50 neon-glow"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl glass-effect p-3 md:p-8 shadow-2xl">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 z-20 glass-effect hover:bg-[#3B82F6]/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-1.5 md:p-3 shadow-lg transition-all duration-200 hover:shadow-[#3B82F6]/20 hover-neon cursor-pointer"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white"
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
              className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 z-20 glass-effect hover:bg-[#3B82F6]/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-1.5 md:p-3 shadow-lg transition-all duration-200 hover:shadow-[#3B82F6]/20 hover-neon cursor-pointer"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white"
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
                  className="flex-shrink-0 w-full px-2 md:px-3"
                  style={{ width: `${100 / techCategories.length}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      y: index === currentIndex ? 0 : 20,
                      scale: index === currentIndex ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`text-center ${
                      index === currentIndex ? "block" : "hidden"
                    }`}
                  >
                    {/* Category Header */}
                    <div className="mb-4 md:mb-8">
                      <div className="text-3xl md:text-5xl mb-2 md:mb-4 opacity-80">
                        {category.icon}
                      </div>
                      <h3 className="text-xl md:text-3xl font-light mb-2 md:mb-3 text-white tracking-tight">
                        {category.title}
                      </h3>
                      <div className="w-16 md:w-24 h-0.5 mx-auto bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
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
                          className="p-2 md:p-4 rounded-lg md:rounded-xl glass-effect hover:bg-[#3B82F6]/10 hover:shadow-[#3B82F6]/20 transition-all duration-300 cursor-pointer group hover-glow hover-neon"
                        >
                          <div className="text-xs md:text-sm font-medium text-white group-hover:text-white transition-colors duration-300 text-center">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Drag Indicator - Moved above category navigation */}
          <div className="flex justify-center mt-4 md:mt-6 mb-2 md:mb-4">
            <div className="text-gray-300 text-xs">
              <div className="flex items-center space-x-2 glass-effect px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                <svg
                  className="w-2.5 h-2.5 md:w-3 md:h-3"
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
                <span className="font-medium hidden sm:inline text-xs">
                  Drag to navigate
                </span>
                <span className="font-medium sm:hidden text-xs">Swipe</span>
              </div>
            </div>
          </div>

          {/* Category Labels */}
          <div className="mt-6 md:mt-8">
            {/* Mobile: Scrollable horizontal list */}
            <div className="sm:hidden overflow-x-auto pb-3">
              <div className="flex space-x-2 min-w-max px-4">
                {techCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      index === currentIndex
                        ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/50 neon-glow"
                        : "text-gray-300 hover:text-white hover:bg-white/10 glass-effect hover-neon"
                    }`}
                  >
                    <span className="text-base">{category.icon}</span>
                    <span className="font-medium text-xs">
                      {category.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3">
              {techCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex flex-col items-center space-y-1.5 px-2 md:px-3 py-2 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/50 neon-glow"
                      : "text-gray-300 hover:text-white hover:bg-white/10 glass-effect hover-neon"
                  }`}
                >
                  <span className="text-lg md:text-xl">{category.icon}</span>
                  <span className="font-medium text-xs text-center leading-tight">
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
