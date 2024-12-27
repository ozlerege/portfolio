import educationContent from "../../../data/education.json";
import SchoolLogo from "../functions/SchoolLogo";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            {educationContent.title}
          </h2>

          <div className="space-y-8">
            {educationContent.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
                  border-2 border-orange-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] 
                  transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* School Logo */}
                  <SchoolLogo school={edu.school} logo={edu.logo} />

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {edu.school}
                        </h3>
                        <div className="text-lg text-gray-700">
                          {edu.degree}
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end text-gray-600 md:text-right">
                        <div className="text-base font-semibold">
                          {edu.period}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {edu.details && edu.details.length > 0 && (
                      <div className="mt-4">
                        <ul className="list-none space-y-2">
                          {edu.details.map((detail, index) => (
                            <li
                              key={index}
                              className={`leading-relaxed ${
                                detail.includes("GPA")
                                  ? "text-gray-700 font-medium"
                                  : "text-blue-600"
                              }`}
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
