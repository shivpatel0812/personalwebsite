"use client";

import React, { useState, useEffect } from "react";
import { experiences } from "./ExperienceData";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceDetail from "./ExperienceDetail";
import { AwsModal, ImageModal } from "./ModalComponents";

const ExperiencePage = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
    number | null
  >(0);
  const [showAwsModal, setShowAwsModal] = useState(false);
  const [currentAwsServices, setCurrentAwsServices] = useState<string[]>([]);

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSectionIndex(0);
  }, [selectedExperienceIndex]);

  useEffect(() => {
    if (
      selectedExperienceIndex !== null &&
      selectedExperienceIndex >= experiences.length
    ) {
      setSelectedExperienceIndex(0);
    }
  }, [selectedExperienceIndex]);

  const handleAwsTagClick = (services: string[]) => {
    setCurrentAwsServices(services);
    setShowAwsModal(true);
  };

  const closeAwsModal = () => {
    setShowAwsModal(false);
    setCurrentAwsServices([]);
  };

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setModalImageSrc(null);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light mb-6 gradient-text tracking-tight">
            Experience
          </h2>
          <p className="hidden md:block text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional journey and hands-on experience in software engineering
            and research
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <ExperienceTimeline
            experiences={experiences}
            selectedIndex={selectedExperienceIndex}
            onSelectExperience={setSelectedExperienceIndex}
          />

          {selectedExperienceIndex !== null &&
          experiences[selectedExperienceIndex] ? (
            <ExperienceDetail
              experience={experiences[selectedExperienceIndex]}
              selectedIndex={selectedExperienceIndex}
              selectedSectionIndex={selectedSectionIndex}
              onSectionSelect={setSelectedSectionIndex}
              onAwsClick={handleAwsTagClick}
              onImageClick={handleImageClick}
            />
          ) : (
            <div className="flex-grow md:w-2/3 glass-effect rounded-lg shadow-lg p-6">
              <p className="text-center text-gray-300">
                Select an experience to see details.
              </p>
            </div>
          )}
        </div>
      </div>

      <AwsModal
        show={showAwsModal}
        services={currentAwsServices}
        onClose={closeAwsModal}
      />

      <ImageModal
        show={showImageModal}
        imageSrc={modalImageSrc}
        onClose={closeImageModal}
      />
    </section>
  );
};

export default ExperiencePage;
