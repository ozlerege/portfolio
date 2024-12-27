import projectsContent from "../../../data/projects.json";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-emerald-50 to-emerald-100"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            {projectsContent.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsContent.projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
                  border-2 border-emerald-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] 
                  transition-all duration-300 transform hover:-translate-y-1 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  {project.links && (
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                        >
                          Live Site →
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-gray-600">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
