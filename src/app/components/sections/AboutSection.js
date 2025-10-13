"use client";
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight, FaPhone } from "react-icons/fa";
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
  FaPhone,
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
             
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="text-gradient">{aboutContent.title}</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
                    className="group relative p-4 bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-white"
                  >
                    <Icon className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
