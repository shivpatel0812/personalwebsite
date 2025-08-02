"use client";

import React, { useState } from "react";
import ProjectGrid from "./components/ProjectGrid";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectDetails from "./components/ProjectDetails";
import OtherProjects from "./components/OtherProjects";
import { projects, otherProjects } from "./data/projectsData";

const ProjectsPage = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [cameraImageIndex, setCameraImageIndex] = useState(0);
  const [uiImageIndex, setUiImageIndex] = useState(0);

  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  const handleProjectSelect = (index: number) => {
    setSelectedProjectIndex(index);
    setCameraImageIndex(0);
    setUiImageIndex(0);
  };

  const handleBackToGrid = () => {
    setSelectedProjectIndex(null);
    setCameraImageIndex(0);
    setUiImageIndex(0);
  };

  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white min-h-screen relative overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 relative z-10 max-w-none">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-4 md:mb-6 gradient-text tracking-tight">
            Notable Projects
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Showcase of innovative solutions and technical implementations
          </p>
        </div>

        {selectedProjectIndex === null ? (
          <ProjectGrid
            projects={projects}
            onProjectSelect={handleProjectSelect}
          />
        ) : (
          <div className="w-full px-0">
            <div className="mb-6 md:mb-8">
              <button
                className="flex items-center text-[#3B82F6] hover:text-[#06B6D4] transition-colors group hover-glow text-sm md:text-base"
                onClick={handleBackToGrid}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-2 transition-transform group-hover:-translate-x-1"
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
                Back to All Projects
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
              <div className="xl:col-span-1">
                <ProjectSidebar
                  projects={projects}
                  selectedProjectIndex={selectedProjectIndex}
                  onProjectSelect={handleProjectSelect}
                />
              </div>

              <div className="xl:col-span-5">
                {selectedProject && (
                  <ProjectDetails
                    project={selectedProject}
                    cameraImageIndex={cameraImageIndex}
                    uiImageIndex={uiImageIndex}
                    onCameraImageChange={setCameraImageIndex}
                    onUiImageChange={setUiImageIndex}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <OtherProjects projects={otherProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
