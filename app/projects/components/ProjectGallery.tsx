import React from "react";
import Image from "next/image";
import { Project } from "../types/Project";
import ImageCarousel from "./ImageCarousel";

interface ProjectGalleryProps {
  project: Project;
  cameraImageIndex: number;
  uiImageIndex: number;
  onCameraImageChange: (index: number) => void;
  onUiImageChange: (index: number) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  project,
  cameraImageIndex,
  uiImageIndex,
  onCameraImageChange,
  onUiImageChange,
}) => {
  if (project.title === "Cap@UVA") {
    return (
      <div className="space-y-6">
        <div>
          <h5 className="text-sm font-medium text-gray-400 mb-3">
            Camera Setup
          </h5>
          <ImageCarousel
            images={project.images.slice(0, 2)}
            currentIndex={cameraImageIndex}
            onIndexChange={onCameraImageChange}
            title="Camera Setup"
          />
        </div>
        <div className="w-full">
          <h5 className="text-sm font-medium text-gray-400 mb-3">
            App Interface
          </h5>
          <div className="relative">
            <div className="relative h-136 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.images.slice(2)[uiImageIndex]}
                alt={`App Interface ${uiImageIndex + 1}`}
                fill
                className="object-contain bg-gray-900"
              />
            </div>
            <button
              onClick={() =>
                onUiImageChange(
                  uiImageIndex === 0
                    ? project.images.slice(2).length - 1
                    : uiImageIndex - 1
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
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
            <button
              onClick={() =>
                onUiImageChange(
                  uiImageIndex === project.images.slice(2).length - 1
                    ? 0
                    : uiImageIndex + 1
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
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
            <div className="flex justify-center mt-3 space-x-2">
              {project.images.slice(2).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onUiImageChange(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer hover:scale-110 ${
                    uiImageIndex === index
                      ? "bg-blue-500"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.title === "AI Business Card Analyzer") {
    return (
      <div className="w-full">
        <h5 className="text-sm font-medium text-gray-400 mb-3">App Showcase</h5>
        <div className="relative">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.images[uiImageIndex]}
              alt={`App Showcase ${uiImageIndex + 1}`}
              fill
              className="object-contain bg-gray-900"
            />
          </div>
          <button
            onClick={() =>
              onUiImageChange(
                uiImageIndex === 0
                  ? project.images.length - 1
                  : uiImageIndex - 1
              )
            }
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
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
          <button
            onClick={() =>
              onUiImageChange(
                uiImageIndex === project.images.length - 1
                  ? 0
                  : uiImageIndex + 1
              )
            }
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
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
          <div className="flex justify-center mt-3 space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => onUiImageChange(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer hover:scale-110 ${
                  uiImageIndex === index
                    ? "bg-blue-500"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {project.images.map((image, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48">
            <Image
              src={image}
              alt={`${project.title} - Screenshot ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
