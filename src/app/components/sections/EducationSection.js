import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaStar } from "react-icons/fa";
import educationContent from "../../../data/education.json";
import SchoolLogo from "../functions/SchoolLogo";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-24 left-24 w-88 h-88 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-24 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <FaGraduationCap className="w-4 h-4 mr-2" />
              Academic Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-gradient">{educationContent.title}</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              My educational foundation in computer science and engineering, 
              providing the theoretical knowledge that complements my practical experience.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {educationContent.education.map((edu, index) => (
              <div
                key={edu.id}
                className="group bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl p-8 space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  
                  {/* School Logo */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-professional group-hover:scale-105 transition-transform">
                      <SchoolLogo school={edu.school} logo={edu.logo} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-6">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-education-primary to-education-secondary rounded-professional">
                            <FaUniversity className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gradient transition-colors">
                            {edu.school}
                          </h3>
                        </div>
                        
                        <div className="text-lg text-gray-800 font-medium">
                          {edu.degree}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-800">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    {edu.details && edu.details.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <FaStar className="w-5 h-5 text-yellow-500" />
                          Highlights
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {edu.details.map((detail, index) => (
                            <div 
                              key={index} 
                              className={`flex items-start gap-3 p-3 rounded-professional ${
                                detail.includes("GPA") 
                                  ? "bg-amber-50 border border-amber-200" 
                                  : "bg-blue-50 border border-blue-200"
                              }`}
                            >
                              <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                                detail.includes("GPA") ? "bg-education-primary" : "bg-blue-500"
                              }`}></div>
                              <p className={`leading-relaxed ${
                                detail.includes("GPA") 
                                  ? "text-amber-800 font-medium" 
                                  : "text-blue-700"
                              }`}>
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          
        </div>
      </div>
    </section>
  );
}
