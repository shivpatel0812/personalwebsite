import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-4 md:mb-6 gradient-text tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Let&apos;s connect and discuss opportunities for collaboration
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 hover-glow p-2 md:p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-[#3B82F6] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm md:text-base break-all">
                      shivpatel0812@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 hover-glow p-2 md:p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-[#06B6D4] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm md:text-base">
                      Charlottesville, VA
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-8">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">
                  Connect with me
                </h4>
                <div className="flex space-x-3 md:space-x-4">
                  <a
                    href="https://linkedin.com/in/shivpatel0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#3B82F6] transition-colors duration-300 hover-glow p-2 rounded-lg text-sm md:text-base"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivpatel0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#06B6D4] transition-colors duration-300 hover-glow p-2 rounded-lg text-sm md:text-base"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400 resize-vertical"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/25 hover-glow text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
