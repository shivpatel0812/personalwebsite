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
            Education
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Academic background and foundational knowledge in computer science
            and data science
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500 hover:transform hover:scale-105">
            {/* University Header */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">🎓</span>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  University of Virginia
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-[#3B82F6]">
                    Double Major
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-medium">B.A. Computer Science</span>{" "}
                    and{" "}
                    <span className="font-medium">B.A. Applied Statistics</span>
                  </p>
                  <p className="text-sm text-[#3B82F6] bg-[#3B82F6]/20 px-3 py-1 rounded-full inline-block">
                    Concentration: Data Science
                  </p>
                </div>

                <div className="text-right">
                  <h4 className="text-lg font-semibold text-[#06B6D4] mb-2">
                    Expected Graduation
                  </h4>
                  <div className="text-3xl font-bold gradient-text">2026</div>
                </div>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-8">
              {/* Computer Science Courses */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center mr-3">
                    💻
                  </span>
                  Notable Computer Science Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {computerScienceCourses.map((course, index) => (
                    <div
                      key={index}
                      className="group glass-effect p-4 rounded-xl hover:border-[#3B82F6]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/20 hover-glow hover-neon"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full mr-3 group-hover:animate-pulse"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          {course}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Courses */}
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] rounded-full flex items-center justify-center mr-3">
                    📊
                  </span>
                  Notable Statistics & Data Science Courses
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {statisticsCourses.map((course, index) => (
                    <div
                      key={index}
                      className="group glass-effect p-4 rounded-xl hover:border-[#06B6D4]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#06B6D4]/20 hover-glow hover-neon"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-full mr-3 group-hover:animate-pulse"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          {course}
                        </span>
                      </div>
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
