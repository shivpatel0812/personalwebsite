import React from "react";

interface OtherProject {
  title: string;
  desc: string;
  link: string;
}

interface OtherProjectsProps {
  projects: OtherProject[];
}

const OtherProjects: React.FC<OtherProjectsProps> = ({ projects }) => {
  return (
    <div className="mt-24">
      <h3 className="text-4xl font-bold text-center mb-8 gradient-text">
        Other Projects
      </h3>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Additional projects showcasing diverse technical skills and
        problem-solving approaches
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-effect rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#3B82F6]/20 hover-glow"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">
                  {project.title.includes("Map")
                    ? "🗺️"
                    : project.title.includes("ML")
                    ? "🤖"
                    : project.title.includes("NFL")
                    ? "🏈"
                    : project.title.includes("CS")
                    ? "💻"
                    : project.title.includes("AI")
                    ? "🧠"
                    : "📊"}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-[#3B82F6] transition-colors duration-300">
                {project.title}
              </h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
