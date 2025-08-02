"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AwsModalProps {
  show: boolean;
  services: string[];
  onClose: () => void;
}

export const AwsModal: React.FC<AwsModalProps> = ({
  show,
  services,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-effect rounded-lg shadow-xl p-6 max-w-sm w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-bold mb-4 text-white">
              AWS Technologies Used:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="mt-6 bg-[#3B82F6] text-white px-4 py-2 rounded-md hover:bg-[#06B6D4] hover-glow transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ImageModalProps {
  show: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  show,
  imageSrc,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {show && imageSrc && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-full max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt="Enlarged Screenshot"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
