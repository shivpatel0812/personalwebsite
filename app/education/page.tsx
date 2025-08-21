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
      className="py-8 md:py-12 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-32 md:w-48 h-32 md:h-48 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-8 w-40 md:w-64 h-40 md:h-64 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 bg-[#3B82F6]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-light mb-3 md:mb-4 gradient-text tracking-tight">
            Education
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Academic background and foundational knowledge in computer science
            and data science
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-effect p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500 hover:transform hover:scale-105">
            {/* University Header */}
            <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3">
                  <span className="text-base md:text-lg font-bold">🎓</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  University of Virginia
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-semibold text-[#3B82F6]">
                    Double Major
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    <span className="font-medium">B.A. Computer Science</span>{" "}
                    and{" "}
                    <span className="font-medium">B.A. Applied Statistics</span>
                  </p>
                  <p className="text-xs text-[#3B82F6] bg-[#3B82F6]/20 px-2 py-1 rounded-full inline-block">
                    Concentration: Data Science
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <h4 className="text-sm md:text-base font-semibold text-[#06B6D4] mb-1">
                    Expected Graduation
                  </h4>
                  <div className="text-xl md:text-2xl font-bold gradient-text">
                    2026
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-4 md:space-y-6">
              {/* Computer Science Courses */}
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white flex items-center">
                  <span className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-2 text-xs md:text-sm">
                    💻
                  </span>
                  Notable Computer Science Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
                  {computerScienceCourses.map((course, index) => (
                    <div
                      key={index}
                      className="p-2 md:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#3B82F6]/50 transition-all duration-300 hover:bg-gray-800/70 hover-glow"
                    >
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {course}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Courses */}
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white flex items-center">
                  <span className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full flex items-center justify-center mr-2 text-xs md:text-sm">
                    📊
                  </span>
                  Notable Statistics Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
                  {statisticsCourses.map((course, index) => (
                    <div
                      key={index}
                      className="p-2 md:p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#06B6D4]/50 transition-all duration-300 hover:bg-gray-800/70 hover-glow"
                    >
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {course}
                      </p>
                    </div>
                  ))}
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
