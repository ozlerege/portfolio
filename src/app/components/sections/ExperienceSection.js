import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";
import experienceContent from "../../../data/experience.json";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gray-900 border-2 border-white text-white rounded-full text-sm font-medium">
              <FaBriefcase className="w-4 h-4 mr-2" />
              Professional Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              <span className="text-gradient">{experienceContent.title}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey in software development, showcasing growth, 
              impact, and continuous learning.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experienceContent.experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="group bg-black border-2 border-white rounded-lg shadow-lg hover:shadow-xl p-8 space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Experience Header */}
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-professional">
                        <FaBriefcase className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                        {experience.role}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-lg text-gray-300">
                      <FaBuilding className="w-4 h-4" />
                      <span className="font-semibold">{experience.company}</span>
                    </div>
                    
                    <p className="text-gray-400 italic leading-relaxed">
                      {experience.companyDescription}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <FaCheckCircle className="w-5 h-5 text-white" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-900 border-2 border-white rounded-professional">
                        <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2"></div>
                        <p className="text-gray-200 leading-relaxed font-medium">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-black text-sm rounded-full border-2 border-black hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}