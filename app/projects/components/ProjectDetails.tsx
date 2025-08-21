import React, { useState } from "react";
import { Project } from "../types/Project";
import ProjectGallery from "./ProjectGallery";

interface ProjectDetailsProps {
  project: Project;
  cameraImageIndex: number;
  uiImageIndex: number;
  onCameraImageChange: (index: number) => void;
  onUiImageChange: (index: number) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  cameraImageIndex,
  uiImageIndex,
  onCameraImageChange,
  onUiImageChange,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Enhanced layout for all projects
  return (
    <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500">
      {/* Enhanced Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 gradient-text">
              {project.title}
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-4">
              {project.title === "Cap@UVA"
                ? "Real-time occupancy tracking for UVA campus spaces"
                : project.title === "AI Business Card Analyzer"
                ? "Intelligent business card data extraction and analysis"
                : project.title === "WellnessAI"
                ? "Agentic AI fitness coach"
                : "Advanced video processing and analysis platform"}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-3">
            {project.title === "Cap@UVA" && (
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Live at UVA
              </span>
            )}
            {project.title === "AI Business Card Analyzer" && (
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                AI-Powered
              </span>
            )}
            {project.title === "AI Video Agent" && (
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Video AI
              </span>
            )}
            {project.title === "WellnessAI" && (
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Agentic AI
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-16">
        {/* Main Content - Left Column */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:col-span-3">
          {/* Enhanced Technologies Section */}
          <div className="glass-effect rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-sm lg:text-base font-semibold mb-6 lg:mb-8 text-white flex items-center">
              <span className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm lg:text-base">
                🛠️
              </span>
              Technology Stack
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h5 className="text-xs font-medium text-gray-400 mb-3 lg:mb-4 uppercase tracking-wide">
                  AI & Computer Vision
                </h5>
                <div className="space-y-2 lg:space-y-3">
                  {project.title === "Cap@UVA" ? (
                    <>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          YOLO
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          YOLO
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          DS
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          DeepSORT
                        </span>
                      </div>
                    </>
                  ) : project.title === "AI Business Card Analyzer" ? (
                    <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                        AI
                      </span>
                      <span className="text-white font-medium text-xs lg:text-sm">
                        OpenAI
                      </span>
                    </div>
                  ) : project.title === "WellnessAI" ? (
                    <>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          AI
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          OpenAI API
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          CV
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Computer Vision
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          🧠
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Machine Learning
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                        AI
                      </span>
                      <span className="text-white font-medium text-xs lg:text-sm">
                        OpenAI API
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-400 mb-3 lg:mb-4 uppercase tracking-wide">
                  Frontend & Mobile
                </h5>
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                    <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                      RN
                    </span>
                    <span className="text-white font-medium text-xs lg:text-sm">
                      React Native
                    </span>
                  </div>
                  <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                    <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                      R
                    </span>
                    <span className="text-white font-medium text-xs lg:text-sm">
                      React
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-400 mb-3 lg:mb-4 uppercase tracking-wide">
                  Backend & Cloud
                </h5>
                <div className="space-y-2 lg:space-y-3">
                  {project.title === "Cap@UVA" ? (
                    <div className="relative">
                      <div
                        className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors cursor-pointer"
                        onClick={() => toggleDropdown("cap-uva-aws")}
                      >
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          AWS
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          AWS Services
                        </span>
                        <svg
                          className={`w-4 h-4 lg:w-5 lg:h-5 ml-2 transition-colors ${
                            openDropdown === "cap-uva-aws"
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* AWS Services Dropdown */}
                      <div
                        className={`absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 z-10 border border-gray-700 ${
                          openDropdown === "cap-uva-aws"
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Lambda Functions (Python & Node.js)
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            SQS
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            SNS
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            S3
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                            DynamoDB
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            API Gateway
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                            CloudWatch
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : project.title === "AI Business Card Analyzer" ? (
                    <>
                      <div className="relative">
                        <div
                          className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors cursor-pointer"
                          onClick={() => toggleDropdown("business-card-aws")}
                        >
                          <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                            AWS
                          </span>
                          <span className="text-white font-medium text-xs lg:text-sm">
                            AWS Services
                          </span>
                          <svg
                            className={`w-4 h-4 lg:w-5 lg:h-5 ml-2 transition-colors ${
                              openDropdown === "business-card-aws"
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>

                        {/* AWS Services Dropdown for Business Card Analyzer */}
                        <div
                          className={`absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 z-10 border border-gray-700 ${
                            openDropdown === "business-card-aws"
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Lambda (Python)
                            </div>
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                              S3
                            </div>
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                              API Gateway
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors cursor-pointer">
                          <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                            GC
                          </span>
                          <span className="text-white font-medium text-xs lg:text-sm">
                            Google Cloud
                          </span>
                          <svg
                            className="w-4 h-4 lg:w-5 lg:h-5 ml-2 text-gray-400 group-hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>

                        {/* Google Cloud Services Dropdown for Business Card Analyzer */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700">
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              Cloud Storage
                            </div>
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                              Firebase Auth
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : project.title === "WellnessAI" ? (
                    <>
                      <div className="relative">
                        <div
                          className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors cursor-pointer"
                          onClick={() => toggleDropdown("wellness-aws")}
                        >
                          <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                            AWS
                          </span>
                          <span className="text-white font-medium text-xs lg:text-sm">
                            AWS Services
                          </span>
                          <svg
                            className={`w-4 h-4 lg:w-5 lg:h-5 ml-2 transition-colors ${
                              openDropdown === "wellness-aws"
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>

                        {/* AWS Services Dropdown for WellnessAI */}
                        <div
                          className={`absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 z-10 border border-gray-700 ${
                            openDropdown === "wellness-aws"
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              ECS (Elastic Container Service)
                            </div>
                            <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                              Lambda Functions
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          🐳
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Docker
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          SB
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Spring Boot
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          FB
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Firebase
                        </span>
                      </div>
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          PY
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          Python AI Backend
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="group relative">
                      <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors cursor-pointer">
                        <span className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                          AWS
                        </span>
                        <span className="text-white font-medium text-xs lg:text-sm">
                          AWS Services
                        </span>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5 ml-2 text-gray-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* AWS Services Dropdown for Video Agent */}
                      <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700">
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            S3
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Lambda
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            API Gateway
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            Step Functions
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                            DynamoDB
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            OpenSearch
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {project.title === "Cap@UVA" && (
                <div>
                  <h5 className="text-xs font-medium text-gray-400 mb-3 lg:mb-4 uppercase tracking-wide">
                    Hardware & Edge
                  </h5>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                        PI
                      </span>
                      <span className="text-white font-medium text-xs lg:text-sm">
                        Raspberry Pi 5
                      </span>
                    </div>
                    <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                        📷
                      </span>
                      <span className="text-white font-medium text-xs lg:text-sm">
                        Camera Module
                      </span>
                    </div>
                    <div className="flex items-center p-3 lg:p-4 glass-effect rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-green-400 rounded-lg flex items-center justify-center mr-3 text-white text-sm lg:text-base font-bold">
                        ❄️
                      </span>
                      <span className="text-white font-medium text-xs lg:text-sm">
                        Cooling Unit
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Project Overview */}
          <div className="glass-effect rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-sm lg:text-base font-semibold mb-6 lg:mb-8 text-white flex items-center">
              <span className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm lg:text-base">
                📝
              </span>
              Project Overview
            </h4>

            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm lg:text-base font-bold">
                    !
                  </span>
                </div>
                <div>
                  <h5 className="text-sm lg:text-base font-semibold text-white mb-2 lg:mb-3">
                    The Problem
                  </h5>
                  <p className="text-gray-300 leading-relaxed text-xs lg:text-sm">
                    {project.title === "Cap@UVA"
                      ? "Students struggled to find open study spaces and gym areas at UVA during peak hours, with no way to check real-time capacity of buildings like Clemons Library or the AFC gym."
                      : project.title === "AI Business Card Analyzer"
                      ? "Manual business card data entry is time-consuming and error-prone, requiring users to manually type contact information from physical cards."
                      : project.title === "WellnessAI"
                      ? "Fitness apps today treat health in isolation: calories in one app, workouts in another, sleep in a third. None of them reason across these factors to keep you on track. If you're stressed or short on sleep, they don't adapt your nutrition, training, or recovery plan. You're left to guess how to adjust, risking burnout or plateaus."
                      : "Video analysis and processing requires significant manual effort and lacks intelligent automation for content understanding and processing."}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm lg:text-base font-bold">
                    ✓
                  </span>
                </div>
                <div>
                  <h5 className="text-sm lg:text-base font-semibold text-white mb-2 lg:mb-3">
                    The Solution
                  </h5>
                  <p className="text-gray-300 leading-relaxed text-xs lg:text-sm">
                    {project.title === "Cap@UVA"
                      ? "Built an edge-compute system using Raspberry Pi 5 devices with connected cameras, running YOLO to detect individuals entering or exiting locations. Data is processed locally for privacy, then pushed to AWS via Node.js API."
                      : project.title === "AI Business Card Analyzer"
                      ? "Developed an AI-powered application that uses OCR and NLP to automatically extract and analyze business card information, providing instant contact data with high accuracy."
                      : project.title === "WellnessAI"
                      ? "WellnessAI 🏋️‍♂️🤖 is an agentic AI coach that reasons like a true trainer. It doesn't just track data — it connects the dots: Didn't sleep enough? → AI adjusts your macros and training intensity to keep progress steady. High stress week? → It suggests recovery protocols and nutrition tweaks to protect gains. Plateau in the gym? → It rebalances your split, recommends microcycle changes, and nudges sleep or diet improvements. WellnessAI continuously learns you and orchestrates all the levers — workouts, nutrition, sleep, stress, recovery — to make sure you still advance toward your goals."
                      : "Created an intelligent video processing platform that uses computer vision and machine learning to automatically analyze, process, and extract insights from video content."}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm lg:text-base font-bold">
                    ⚡
                  </span>
                </div>
                <div>
                  <h5 className="text-sm lg:text-base font-semibold text-white mb-2 lg:mb-3">
                    Key Features
                  </h5>
                  <ul className="text-gray-300 leading-relaxed space-y-2 lg:space-y-3 text-xs lg:text-sm">
                    {project.title === "Cap@UVA" ? (
                      <>
                        <li>
                          • Real-time occupancy tracking with sub-second updates
                        </li>
                        <li>
                          • Privacy-preserving edge processing with local YOLO
                          inference
                        </li>
                        <li>
                          • Subzone breakdown (basketball court, weight room,
                          library floors)
                        </li>
                        <li>• Mobile and web interfaces for easy access</li>
                        <li>
                          • Scalable architecture for campus-wide deployment
                        </li>
                      </>
                    ) : project.title === "AI Business Card Analyzer" ? (
                      <>
                        <li>
                          • Instant OCR text extraction from business card
                          images
                        </li>
                        <li>
                          • Intelligent contact information parsing and
                          validation
                        </li>
                        <li>• Automatic contact saving and organization</li>
                        <li>
                          • High accuracy data extraction with error correction
                        </li>
                        <li>• User-friendly mobile and web interfaces</li>
                      </>
                    ) : project.title === "WellnessAI" ? (
                      <>
                        <li>
                          • <strong>Intelligent Adaptation:</strong>{" "}
                          Cross-domain reasoning linking sleep, stress, diet,
                          and workouts
                        </li>
                        <li>
                          • <strong>Dynamic Compensation:</strong> AI
                          recalibrates nutrition + training when sleep/stress
                          slips
                        </li>
                        <li>
                          • <strong>Persistent Memory:</strong> Learns your
                          patterns and improves recommendations over time
                        </li>
                        <li>
                          • <strong>Snap-to-Log Macros:</strong> Photo → instant
                          breakdown with AI-calibrated adjustments
                        </li>
                        <li>
                          • <strong>AI-Suggested Progressions:</strong>{" "}
                          Automatically scales reps/weights based on readiness
                        </li>
                        <li>
                          • <strong>Plateau Detection:</strong> Identifies
                          stagnation early and deploys breakthrough strategies
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          • Automated video content analysis and processing
                        </li>
                        <li>• Intelligent object detection and tracking</li>
                        <li>
                          • Advanced machine learning algorithms for insights
                        </li>
                        <li>• Real-time video processing capabilities</li>
                        <li>• Scalable cloud-based architecture</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {project.title === "WellnessAI" && (
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm lg:text-base font-bold">
                      ✨
                    </span>
                  </div>
                  <div>
                    <h5 className="text-sm lg:text-base font-semibold text-white mb-2 lg:mb-3">
                      What Makes WellnessAI Different
                    </h5>
                    <p className="text-gray-300 leading-relaxed text-xs lg:text-sm">
                      WellnessAI doesn't just track your health — it balances
                      the equation when one factor falls short. If you're
                      stressed and short on sleep, your coach will proactively
                      adjust your nutrition and training intensity to keep you
                      progressing safely. If recovery is lagging, it increases
                      focus on diet and mobility work. Instead of treating
                      workouts, diet, and recovery as silos, WellnessAI connects
                      them into one adaptive system that always works toward
                      your goals.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all duration-300 hover-glow lg:text-lg"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {project.title === "Cap@UVA"
                  ? "Visit Live Website"
                  : "View Project"}
              </a>
            )}
          </div>
        </div>

        {/* Enhanced Gallery - Right Column */}
        <div className="xl:col-span-3">
          <div className="glass-effect rounded-xl p-4 sm:p-6 lg:p-8">
            <h4 className="text-lg lg:text-xl font-semibold mb-6 lg:mb-8 text-white flex items-center">
              <span className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm lg:text-base">
                📸
              </span>
              Project Gallery
            </h4>
            <ProjectGallery
              project={project}
              cameraImageIndex={cameraImageIndex}
              uiImageIndex={uiImageIndex}
              onCameraImageChange={onCameraImageChange}
              onUiImageChange={onUiImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
