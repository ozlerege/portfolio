"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaCubes } from "react-icons/fa";
import { GiRaceCar } from "react-icons/gi";
import aboutContent from "../../../data/about.json";

// Map of icon components
const iconComponents = {
  FaLinkedin,
  FaGithub,
  IoGameController,
  FaCubes,
  GiRaceCar,
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12 mt-12">
          {/* Professional Description */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {aboutContent.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {aboutContent.socialLinks.map((link) => {
              const Icon = iconComponents[link.icon];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 flex items-center space-x-3 rounded ${link.style}
                    shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5`}
                >
                  <Icon className="text-2xl" />
                  <span className="font-bold">{link.type}</span>
                </a>
              );
            })}
          </div>

          {/* Hobbies Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                When I&apos;m Not Coding...
              </h2>
              <p className="text-lg text-gray-600">
                I&apos;m probably doing one of these things that keep me
                inspired and energized.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutContent.hobbies.map((hobby) => {
                const Icon = iconComponents[hobby.icon];
                return (
                  <div
                    key={hobby.id}
                    className={`bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
                      border-2 ${hobby.style.border} hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] 
                      transition-all duration-300 transform hover:-translate-y-1 group`}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`p-4 ${hobby.style.bg} rounded-lg ${hobby.style.hover} transition-colors`}
                      >
                        <Icon className={`text-3xl ${hobby.style.icon}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">
                          {hobby.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
