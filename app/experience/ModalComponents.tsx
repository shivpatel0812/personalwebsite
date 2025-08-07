"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AwsModalProps {
  show: boolean;
  services: string[];
  onClose: () => void;
}

interface ImageModalProps {
  show: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export const AwsModal: React.FC<AwsModalProps> = ({
  show,
  services,
  onClose,
}) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass-effect rounded-2xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">AWS Services Used</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
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
          </div>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center p-3 glass-effect rounded-lg border border-white/10"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">AWS</span>
                </div>
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#3B82F6] hover:bg-[#06B6D4] text-white rounded-lg transition-colors duration-300 hover-glow"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const ImageModal: React.FC<ImageModalProps> = ({
  show,
  imageSrc,
  onClose,
}) => {
  if (!show || !imageSrc) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Main Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button positioned relative to the modal content */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black/60 backdrop-blur-sm rounded-full p-3 border border-white/20"
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
          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt="Experience Screenshot"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
