"use client";
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
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
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
             
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gradient">{aboutContent.title}</span>
              </h1>
              
              <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
                {aboutContent.description}
              </p>
            </div>

            

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {aboutContent.socialLinks.map((link) => {
                const Icon = iconComponents[link.icon];
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                  >
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.type}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
