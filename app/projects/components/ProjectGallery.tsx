import React, { useState } from "react";
import Image from "next/image";
import { Project } from "../types/Project";
import { createPortal } from "react-dom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const openModal = (image: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  if (project.title === "Cap@UVA") {
    const cameraImages = [
      {
        src: project.images[0],
        alt: "Exit Camera Setup",
        title: "Exit Camera Setup",
        description:
          "Raspberry Pi 5 with camera mounted at building exit for people counting",
      },
      {
        src: project.images[1],
        alt: "Basketball Court Camera",
        title: "Basketball Court Camera",
        description:
          "Camera positioned to monitor basketball court occupancy at AFC gym",
      },
    ];

    const uiImages = [
      {
        src: project.images[2],
        alt: "Main App Interface",
        title: "Main App Interface",
        description:
          "Home screen showing capacity overview for different UVA locations",
      },
      {
        src: project.images[3],
        alt: "AFC Gym Details",
        title: "AFC Gym Details",
        description:
          "Detailed view showing real-time capacity for AFC gym subzones",
      },
    ];

    return (
      <>
        <div className="space-y-8">
          {/* Camera Setup Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-xl font-semibold text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
                  📷
                </span>
                Hardware Setup
              </h5>
              <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                Edge Computing
              </span>
            </div>

            <div className="relative">
              {/* Large Image Display */}
              <div
                className="relative h-64 sm:h-80 md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl mb-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(cameraImages[cameraImageIndex])}
              >
                <Image
                  src={cameraImages[cameraImageIndex].src}
                  alt={cameraImages[cameraImageIndex].alt}
                  fill
                  className="object-cover bg-gray-900"
                />
                {/* Click to enlarge overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation for Camera Images */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() =>
                    onCameraImageChange(cameraImageIndex === 0 ? 1 : 0)
                  }
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <svg
                    className="w-4 h-4 mr-1 sm:mr-2"
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
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <div className="flex space-x-2">
                  {cameraImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onCameraImageChange(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        cameraImageIndex === index
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                          : "bg-gray-500 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    onCameraImageChange(cameraImageIndex === 0 ? 1 : 0)
                  }
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg
                    className="w-4 h-4 ml-1 sm:ml-2"
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

              {/* Image Caption */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h6 className="text-base font-semibold text-white mb-2">
                  {cameraImages[cameraImageIndex].title}
                </h6>
                <p className="text-sm text-gray-300">
                  {cameraImages[cameraImageIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* App Interface Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-xl font-semibold text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
                  📱
                </span>
                User Interface
              </h5>
              <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                React Native
              </span>
            </div>

            <div className="relative">
              {/* Large Image Display */}
              <div
                className="relative h-80 sm:h-96 md:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl mb-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(uiImages[uiImageIndex])}
              >
                <Image
                  src={uiImages[uiImageIndex].src}
                  alt={uiImages[uiImageIndex].alt}
                  fill
                  className="object-contain bg-gray-900"
                />
                {/* Click to enlarge overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation for UI Images */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => onUiImageChange(uiImageIndex === 0 ? 1 : 0)}
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <svg
                    className="w-4 h-4 mr-1 sm:mr-2"
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
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <div className="flex space-x-2">
                  {uiImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onUiImageChange(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        uiImageIndex === index
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                          : "bg-gray-500 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => onUiImageChange(uiImageIndex === 0 ? 1 : 0)}
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg
                    className="w-4 h-4 ml-1 sm:ml-2"
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

              {/* Image Caption */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h6 className="text-base font-semibold text-white mb-2">
                  {uiImages[uiImageIndex].title}
                </h6>
                <p className="text-sm text-gray-300">
                  {uiImages[uiImageIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          {/* 
          <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#06B6D4]/10 rounded-lg p-6 border border-[#3B82F6]/20">
            <h6 className="text-base font-semibold text-white mb-4 flex items-center">
              <span className="w-5 h-5 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-xs">
                📊
              </span>
              System Stats
            </h6>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-gray-400">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">&lt;1s</div>
                <div className="text-gray-400">Update Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Modal for Full-Size Image Viewing */}
        {isModalOpen &&
          modalImage &&
          createPortal(
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center"
              onClick={closeModal}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Main Image Display */}
                <div
                  className="relative w-[80%] h-[60vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button positioned relative to the image content */}
                  <button
                    onClick={closeModal}
                    className="absolute -top-4 -right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="relative w-full h-full">
                    <Image
                      src={modalImage.src}
                      alt={modalImage.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="w-full flex flex-col items-center space-y-4 pb-4">
                  {/* Navigation Buttons */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = project.images.findIndex(
                          (img) => img === modalImage.src
                        );
                        const prevIndex =
                          currentIndex <= 0
                            ? project.images.length - 1
                            : currentIndex - 1;
                        const newImage = {
                          src: project.images[prevIndex],
                          alt: `${project.title} Screenshot ${prevIndex + 1}`,
                          title: `${project.title} Screenshot ${prevIndex + 1}`,
                          description: `Application screenshot showing ${project.title} interface`,
                        };
                        setModalImage(newImage);
                      }}
                      className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
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
                      Previous
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = project.images.findIndex(
                          (img) => img === modalImage.src
                        );
                        const nextIndex =
                          currentIndex >= project.images.length - 1 ||
                          currentIndex === -1
                            ? 0
                            : currentIndex + 1;
                        const newImage = {
                          src: project.images[nextIndex],
                          alt: `${project.title} Screenshot ${nextIndex + 1}`,
                          title: `${project.title} Screenshot ${nextIndex + 1}`,
                          description: `Application screenshot showing ${project.title} interface`,
                        };
                        setModalImage(newImage);
                      }}
                      className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                      Next
                      <svg
                        className="w-4 h-4 ml-2"
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

                  {/* Carousel Dots */}
                  <div className="flex space-x-2">
                    {project.images.map((_, index) => {
                      const currentIndex = project.images.findIndex(
                        (img) => img === modalImage.src
                      );
                      return (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            const newImage = {
                              src: project.images[index],
                              alt: `${project.title} Screenshot ${index + 1}`,
                              title: `${project.title} Screenshot ${index + 1}`,
                              description: `Application screenshot showing ${project.title} interface`,
                            };
                            setModalImage(newImage);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex ||
                            (currentIndex === -1 && index === 0)
                              ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] scale-125"
                              : "bg-gray-500 hover:bg-gray-400"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }

  // Enhanced gallery for all projects
  return (
    <>
      <div className="space-y-8">
        {/* Main Image Display */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h5 className="text-xl font-semibold text-white flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 text-sm">
                📱
              </span>
              App Screenshots
            </h5>
            <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {project.title === "Cap@UVA" ? "React Native" : "Web App"}
            </span>
          </div>

          <div className="relative">
            {/* Large Image Display - Better aspect ratio for AI projects */}
            <div
              className={`relative w-full rounded-xl overflow-hidden shadow-2xl mb-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ${
                project.title === "Cap@UVA"
                  ? "h-80 sm:h-96 md:h-[600px]"
                  : "aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[16/9] max-h-[600px]"
              }`}
              onClick={() =>
                openModal({
                  src: project.images[uiImageIndex],
                  alt: `${project.title} Screenshot ${uiImageIndex + 1}`,
                  title: `${project.title} Screenshot ${uiImageIndex + 1}`,
                  description: `Application screenshot showing ${project.title} interface`,
                })
              }
            >
              <Image
                src={project.images[uiImageIndex]}
                alt={`${project.title} Screenshot ${uiImageIndex + 1}`}
                fill
                className={`${
                  project.title === "Cap@UVA"
                    ? "object-cover"
                    : "object-contain"
                } bg-gray-900`}
              />
              {/* Click to enlarge overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation for Images */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() =>
                  onUiImageChange(
                    uiImageIndex === 0
                      ? project.images.length - 1
                      : uiImageIndex - 1
                  )
                }
                className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <svg
                  className="w-4 h-4 mr-1 sm:mr-2"
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
                <span className="hidden sm:inline">Previous</span>
              </button>
              <div className="flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onUiImageChange(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      uiImageIndex === index
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  onUiImageChange(
                    uiImageIndex === project.images.length - 1
                      ? 0
                      : uiImageIndex + 1
                  )
                }
                className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="w-4 h-4 ml-1 sm:ml-2"
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

            {/* Image Caption */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-base font-semibold text-white mb-2">
                {project.title} Screenshot {uiImageIndex + 1}
              </h6>
              <p className="text-sm text-gray-300">
                Application interface showing {project.title} functionality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full-Size Image Viewing */}
      {isModalOpen &&
        modalImage &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Main Image Display */}
              <div
                className="relative w-[80%] h-[60vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button positioned relative to the image content */}
                <button
                  onClick={closeModal}
                  className="absolute -top-4 -right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative w-full h-full">
                  <Image
                    src={modalImage.src}
                    alt={modalImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="w-full flex flex-col items-center space-y-4 pb-4">
                {/* Navigation Buttons */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = project.images.findIndex(
                        (img) => img === modalImage.src
                      );
                      const prevIndex =
                        currentIndex <= 0
                          ? project.images.length - 1
                          : currentIndex - 1;
                      const newImage = {
                        src: project.images[prevIndex],
                        alt: `${project.title} Screenshot ${prevIndex + 1}`,
                        title: `${project.title} Screenshot ${prevIndex + 1}`,
                        description: `Application screenshot showing ${project.title} interface`,
                      };
                      setModalImage(newImage);
                    }}
                    className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
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
                    Previous
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = project.images.findIndex(
                        (img) => img === modalImage.src
                      );
                      const nextIndex =
                        currentIndex >= project.images.length - 1 ||
                        currentIndex === -1
                          ? 0
                          : currentIndex + 1;
                      const newImage = {
                        src: project.images[nextIndex],
                        alt: `${project.title} Screenshot ${nextIndex + 1}`,
                        title: `${project.title} Screenshot ${nextIndex + 1}`,
                        description: `Application screenshot showing ${project.title} interface`,
                      };
                      setModalImage(newImage);
                    }}
                    className="flex items-center text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                    Next
                    <svg
                      className="w-4 h-4 ml-2"
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

                {/* Carousel Dots */}
                <div className="flex space-x-2">
                  {project.images.map((_, index) => {
                    const currentIndex = project.images.findIndex(
                      (img) => img === modalImage.src
                    );
                    return (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          const newImage = {
                            src: project.images[index],
                            alt: `${project.title} Screenshot ${index + 1}`,
                            title: `${project.title} Screenshot ${index + 1}`,
                            description: `Application screenshot showing ${project.title} interface`,
                          };
                          setModalImage(newImage);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex ||
                          (currentIndex === -1 && index === 0)
                            ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] scale-125"
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ProjectGallery;
