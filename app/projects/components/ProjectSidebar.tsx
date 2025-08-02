import React from "react";
import Image from "next/image";
import { Project } from "../types/Project";

interface ProjectSidebarProps {
  projects: Project[];
  selectedProjectIndex: number;
  onProjectSelect: (index: number) => void;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  projects,
  selectedProjectIndex,
  onProjectSelect,
}) => {
  return (
    <div className="lg:col-span-1">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
          📁
        </span>
        All Projects
      </h3>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
              selectedProjectIndex === index
                ? "ring-2 ring-[#3B82F6] shadow-lg shadow-[#3B82F6]/20"
                : "hover:ring-2 hover:ring-[#3B82F6]/50 hover:shadow-lg"
            }`}
            onClick={() => onProjectSelect(index)}
          >
            <div className="relative h-20">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  selectedProjectIndex === index
                    ? "bg-gradient-to-r from-[#3B82F6]/80 to-[#06B6D4]/60"
                    : "bg-gradient-to-r from-gray-900/70 to-gray-900/30 group-hover:from-gray-900/50 group-hover:to-gray-900/20"
                }`}
              />

              <div className="absolute inset-0 flex items-center px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">
                      {project.title === "Cap@UVA"
                        ? "🎓"
                        : project.title === "AI Business Card Analyzer"
                        ? "📱"
                        : project.title === "AI Video Agent"
                        ? "🤖"
                        : "💻"}
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      selectedProjectIndex === index
                        ? "text-white"
                        : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Selection indicator */}
            {selectedProjectIndex === index && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSidebar;
