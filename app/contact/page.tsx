import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
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
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s connect and discuss opportunities for collaboration
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 hover-glow p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 mr-3 text-[#3B82F6]"
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
                    <span>shivpatel0812@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 hover-glow p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 mr-3 text-[#06B6D4]"
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
                    <span>Charlottesville, VA</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-white">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/shivpatel0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#3B82F6] transition-colors duration-300 hover-glow p-2 rounded-lg"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivpatel0812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#06B6D4] transition-colors duration-300 hover-glow p-2 rounded-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md glass-effect border-white/10 text-white placeholder-gray-400 focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:ring-opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md glass-effect border-white/10 text-white placeholder-gray-400 focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:ring-opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md glass-effect border-white/10 text-white placeholder-gray-400 focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:ring-opacity-50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300 hover-glow font-medium"
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
