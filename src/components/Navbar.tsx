"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="glass-effect fixed top-0 w-full z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="lg:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <>
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1.5 transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5 transition-all duration-300"></span>
            </>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            </>
          )}
        </button>
        <div className="hidden lg:flex space-x-6">
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
      </div>
      <div
        ref={menuRef}
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/education"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
            onClick={closeMenu}
          >
            Education
          </Link>
          <Link
            href="/tech-stack"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
            onClick={closeMenu}
          >
            Tech Stack
          </Link>
          <Link
            href="/experience"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-white/10"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
