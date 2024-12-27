import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import BlogSection from "./components/sections/BlogSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <BlogSection />
    </main>
  );
}
