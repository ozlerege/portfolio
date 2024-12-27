import experienceContent from "../../../data/experience.json";
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            {experienceContent.title}
          </h2>

          <div className="space-y-12">
            {experienceContent.experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
                  border-2 border-purple-200"
              >
                {/* Header Section */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {experience.role}
                      </h3>
                      <div className="text-lg text-gray-700">
                        {experience.company}
                      </div>
                      <div className="text-gray-500 text-base italic">
                        {experience.companyDescription}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-gray-600 md:text-right whitespace-nowrap">
                      <div className="font-medium">{experience.period}</div>
                      <div>{experience.location}</div>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-gray-600">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Section */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
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
