import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import projectsContent from "../../../data/projects.json";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-80 h-80 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-gray-800 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              <span className="text-gradient">{projectsContent.title}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in full-stack
              development, AI integration, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsContent.projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-black border-2 border-white rounded-lg shadow-lg hover:shadow-xl p-8 space-y-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 p-2 bg-white rounded-professional group-hover:scale-110 transition-transform">
                    <FaRocket className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-black text-sm rounded-full border-2 border-black hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {project.links && (
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-2 border-white hover:bg-gray-700 text-white rounded-professional transition-colors group/link"
                      >
                        <FaGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-professional transition-colors group/link"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
