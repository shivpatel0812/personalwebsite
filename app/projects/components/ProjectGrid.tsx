import React from "react";
import Image from "next/image";
import { Project } from "../types/Project";

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (index: number) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onProjectSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-gray-800/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50"
          onClick={() => onProjectSelect(index)}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-600 text-white"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-600 text-white">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 line-clamp-3 leading-relaxed">
              {project.description.split("\n\n")[0]}
            </p>
            <div className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <span className="text-sm font-medium">Learn More</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
