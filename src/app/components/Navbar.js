"use client";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaBook,
} from "react-icons/fa";

// Add keyframes for glitch effect
const glitchKeyframes = `
@keyframes glitch {
  0% {
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    transform: translate(0);
  }
  20% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    transform: translate(-2px);
  }
  40% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    transform: translate(2px);
  }
  60% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    transform: translate(0);
  }
  80% {
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    transform: translate(3px);
  }
  100% {
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    transform: translate(0);
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes flicker {
  0% { opacity: 0.8; }
  5% { opacity: 0.9; }
  10% { opacity: 0.8; }
  15% { opacity: 1; }
  20% { opacity: 0.9; }
  25% { opacity: 0.8; }
  30% { opacity: 1; }
  100% { opacity: 1; }
}
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add the keyframes to the document
    const style = document.createElement("style");
    style.textContent = glitchKeyframes;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "projects",
        "experience",
        "education",
        "contact",
        "blog",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const getNavItemStyles = (id, colorClasses) => {
    const isActive = activeSection === id;
    const baseStyles =
      "relative group px-4 py-2 text-xs uppercase transition-all duration-300 cursor-pointer hover:scale-105 w-full md:w-auto";
    const textStyles = isActive
      ? `text-white ${colorClasses.active} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform active:translate-y-1 
         ring-2 ring-offset-2 ring-offset-gray-900 ring-opacity-60 ${colorClasses.glow}
         before:content-[''] before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.1)] before:animate-[scanline_4s_linear_infinite]
         after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-[rgba(255,255,255,0.1)] after:to-transparent after:animate-[flicker_2s_infinite]`
      : `text-gray-200 hover:text-white ${colorClasses.hover} hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]
         hover:ring-1 hover:ring-offset-1 hover:ring-offset-gray-900 hover:ring-opacity-40 ${colorClasses.hoverGlow}`;

    return `${baseStyles} ${textStyles}`;
  };

  const navItems = [
    {
      id: "about",
      label: "About Me",
      icon: FaUser,
      colorClasses: {
        active: "bg-yellow-500 hover:bg-yellow-600",
        hover: "hover:bg-yellow-500",
        glow: "ring-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.5),inset_0_0_10px_rgba(234,179,8,0.2)]",
        hoverGlow:
          "hover:ring-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]",
      },
    },
    {
      id: "projects",
      label: "Projects",
      icon: FaCode,
      colorClasses: {
        active: "bg-emerald-600 hover:bg-emerald-700",
        hover: "hover:bg-emerald-600",
        glow: "ring-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5),inset_0_0_10px_rgba(52,211,153,0.2)]",
        hoverGlow:
          "hover:ring-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]",
      },
    },
    {
      id: "experience",
      label: "Experience",
      icon: FaBriefcase,
      colorClasses: {
        active: "bg-purple-600 hover:bg-purple-700",
        hover: "hover:bg-purple-600",
        glow: "ring-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.5),inset_0_0_10px_rgba(192,132,252,0.2)]",
        hoverGlow:
          "hover:ring-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]",
      },
    },
    {
      id: "education",
      label: "Education",
      icon: FaGraduationCap,
      colorClasses: {
        active: "bg-amber-600 hover:bg-amber-700",
        hover: "hover:bg-amber-600",
        glow: "ring-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5),inset_0_0_10px_rgba(251,191,36,0.2)]",
        hoverGlow:
          "hover:ring-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]",
      },
    },
    {
      id: "contact",
      label: "Contact",
      icon: FaEnvelope,
      colorClasses: {
        active: "bg-blue-600 hover:bg-blue-700",
        hover: "hover:bg-blue-600",
        glow: "ring-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.5),inset_0_0_10px_rgba(96,165,250,0.2)]",
        hoverGlow:
          "hover:ring-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]",
      },
    },
    {
      id: "blog",
      label: "Blog",
      icon: FaBook,
      colorClasses: {
        active: "bg-red-600 hover:bg-red-700",
        hover: "hover:bg-red-600",
        glow: "ring-red-400 shadow-[0_0_20px_rgba(248,113,113,0.5),inset_0_0_10px_rgba(248,113,113,0.2)]",
        hoverGlow:
          "hover:ring-red-400 hover:shadow-[0_0_15px_rgba(248,113,113,0.3)]",
      },
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 shadow-[0_4px_0px_0px_rgba(0,0,0,0.3),inset_0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm"
          : "bg-gray-800"
      }`}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.03)] to-transparent animate-[scanline_4s_linear_infinite]"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-700 rounded-lg transition-colors
              hover:ring-2 hover:ring-gray-600 hover:shadow-[0_0_10px_rgba(75,85,99,0.3)]
              relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent group-hover:animate-[scanline_2s_linear_infinite]"></div>
            {isMenuOpen ? (
              <FaTimes className="text-xl transform rotate-0 transition-transform duration-300 relative z-10" />
            ) : (
              <FaBars className="text-xl transform rotate-180 transition-transform duration-300 relative z-10" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full justify-between items-center">
            {navItems.map(({ id, label, icon: Icon, colorClasses }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${getNavItemStyles(
                  id,
                  colorClasses
                )} group relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="text-base transform group-hover:scale-110 transition-transform duration-200" />
                  <span className="relative">
                    {label}
                    {activeSection === id && (
                      <span
                        className="absolute inset-0 animate-[glitch_3s_infinite] opacity-70"
                        aria-hidden="true"
                      >
                        {label}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-2"
          }`}
        >
          <div className="flex flex-col space-y-2 py-4">
            {navItems.map(({ id, label, icon: Icon, colorClasses }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${getNavItemStyles(
                  id,
                  colorClasses
                )} group relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2 justify-center md:justify-start">
                  <Icon className="text-base transform group-hover:scale-110 transition-transform duration-200" />
                  <span className="relative">
                    {label}
                    {activeSection === id && (
                      <span
                        className="absolute inset-0 animate-[glitch_3s_infinite] opacity-70"
                        aria-hidden="true"
                      >
                        {label}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
