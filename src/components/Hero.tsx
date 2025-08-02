"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Left Panel - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Greeting */}
            <div className="text-[#F59E0B] font-semibold text-base md:text-lg">
              Hello, Welcome
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              I&apos;m <span className="gradient-text">Shiv Patel</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I am passionate about building full-stack AI-based applications
              that solve real-world problems. Explore this website to learn more
              about my journey, projects, and how I bring innovative ideas to
              life through technology.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/25 hover-glow text-center text-sm md:text-base"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover-glow text-center text-sm md:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Panel - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-[#3B82F6]/20 bg-gray-800">
                <Image
                  src="/shivpic3.jpeg"
                  alt="Shiv Patel - Profile Picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
