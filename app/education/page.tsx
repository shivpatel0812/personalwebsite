import React from "react";

const EducationPage = () => {
  const computerScienceCourses = [
    "Data Structures and Algorithms 1 & 2",
    "Computer Systems and Organization 1 & 2 (C & Assembly)",
    "Java Software Development",
    "Discrete Math 1 & 2",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Development Methods",
    "Databases",
  ];

  const statisticsCourses = [
    "Statistical Machine Learning (Python & R)",
    "Data Analysis with R",
    "Data Analysis with Python",
    "Regression Analysis",
    "Probability and Linear Algegra",
    "Advanced Probability and Linear Algebra",
    "Data Visualization",
    "Multivariable Statistics",
  ];

  return (
    <section
      id="education"
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
            Education
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Academic background and foundational knowledge in computer science
            and data science
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-4 md:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500 hover:transform hover:scale-105">
            {/* University Header */}
            <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-lg md:text-xl font-bold">🎓</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  University of Virginia
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <h4 className="text-base md:text-lg font-semibold text-[#3B82F6]">
                    Double Major
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    <span className="font-medium">B.A. Computer Science</span>{" "}
                    and{" "}
                    <span className="font-medium">B.A. Applied Statistics</span>
                  </p>
                  <p className="text-xs md:text-sm text-[#3B82F6] bg-[#3B82F6]/20 px-2 md:px-3 py-1 rounded-full inline-block">
                    Concentration: Data Science
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <h4 className="text-base md:text-lg font-semibold text-[#06B6D4] mb-2">
                    Expected Graduation
                  </h4>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    2026
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Computer Science Courses */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-2 md:mr-3 text-sm md:text-base">
                    💻
                  </span>
                  Notable Computer Science Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {computerScienceCourses.map((course, index) => (
                    <div
                      key={index}
                      className="p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#3B82F6]/50 transition-all duration-300 hover:bg-gray-800/70 hover-glow"
                    >
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {course}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Courses */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full flex items-center justify-center mr-2 md:mr-3 text-sm md:text-base">
                    📊
                  </span>
                  Notable Statistics Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {statisticsCourses.map((course, index) => (
                    <div
                      key={index}
                      className="p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#06B6D4]/50 transition-all duration-300 hover:bg-gray-800/70 hover-glow"
                    >
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {course}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 rounded-xl border border-[#3B82F6]/20">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white flex items-center">
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-2 md:mr-3 text-sm md:text-base">
                    🎯
                  </span>
                  Academic Focus
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-[#3B82F6] mb-2">
                      Computer Science Focus
                    </h5>
                    <ul className="text-sm md:text-base text-gray-300 space-y-1">
                      <li>• Software Engineering & Development</li>
                      <li>• Artificial Intelligence & Machine Learning</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Systems Programming</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-base md:text-lg font-semibold text-[#06B6D4] mb-2">
                      Statistics Focus
                    </h5>
                    <ul className="text-sm md:text-base text-gray-300 space-y-1">
                      <li>• Statistical Machine Learning</li>
                      <li>• Data Analysis & Visualization</li>
                      <li>• Probability & Linear Algebra</li>
                      <li>• Regression Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
