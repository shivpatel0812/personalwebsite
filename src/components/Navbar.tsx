import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="glass-effect fixed top-0 w-full z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Title or Logo */}
        <Link href="/" className="text-lg font-bold gradient-text">
          SJ
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Home
          </Link>
          <Link
            href="/education"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Education
          </Link>
          <Link
            href="/tech-stack"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Tech Stack
          </Link>
          <Link
            href="/experience"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow"
          >
            Contact Me
          </Link>
        </div>

        {/* Optional: Contact Button */}
        {/* <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
          Contact Me
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
