"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Profile Picture */}
        <div className="mx-auto rounded-full overflow-hidden w-64 h-64 mb-8">
          <Image
            src="/shivpic2.jpeg"
            alt="Your Name - Profile Picture"
            layout="intrinsic"
            width={256}
            height={256}
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
