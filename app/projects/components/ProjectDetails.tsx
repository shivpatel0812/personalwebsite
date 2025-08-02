import React from "react";
import Image from "next/image";
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
  if (
    project.title === "AI Business Card Analyzer" ||
    project.title === "AI Video Agent"
  ) {
    return (
      <div className="glass-effect rounded-2xl p-8 shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500">
        {/* Project Title */}
        <h2 className="text-5xl font-bold mb-6 gradient-text">
          {project.title}
        </h2>

        {/* Project Gallery */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
            <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
              📸
            </span>
            App Screenshots
          </h4>

          <div className="relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.images[uiImageIndex]}
                alt={`${project.title} ${uiImageIndex + 1}`}
                fill
                className="object-cover bg-gray-900"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                onUiImageChange(
                  uiImageIndex === 0
                    ? project.images.length - 1
                    : uiImageIndex - 1
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover-glow"
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
              onClick={() =>
                onUiImageChange(
                  uiImageIndex === project.images.length - 1
                    ? 0
                    : uiImageIndex + 1
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect text-white rounded-full p-3 transition-all duration-300 hover:scale-110 hover-glow"
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

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onUiImageChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                    uiImageIndex === index
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
            <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
              🛠️
            </span>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 glass-effect text-[#3B82F6] text-sm font-medium rounded-full hover:bg-[#3B82F6]/20 transition-all duration-300 hover-glow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
            <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
              📝
            </span>
            Project Overview
          </h4>
          <div className="prose prose-invert max-w-none">
            {project.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all duration-300 hover-glow"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          )}
          {project.github && project.github !== project.link && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-[#3B82F6]/20 transition-all duration-300 hover-glow"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5">
          {/* Project Title */}
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            {project.title}
          </h2>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
              <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
                🛠️
              </span>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 glass-effect text-[#3B82F6] text-sm font-medium rounded-full hover:bg-[#3B82F6]/20 transition-all duration-300 hover-glow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
              <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
                📝
              </span>
              Project Overview
            </h4>
            <div className="prose prose-invert max-w-none">
              {project.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#3B82F6]/25 transition-all duration-300 hover-glow"
              >
                {project.title === "Cap@UVA" ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Visit Website
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </>
                )}
              </a>
            )}
            {project.github && project.github !== project.link && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 glass-effect text-white font-semibold rounded-xl hover:bg-[#3B82F6]/20 transition-all duration-300 hover-glow"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="lg:w-2/5">
          <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
            <span className="w-6 h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
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
  );
};

export default ProjectDetails;
