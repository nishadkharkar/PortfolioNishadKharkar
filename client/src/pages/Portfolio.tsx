// ============================================================
// PORTFOLIO PAGE — Obsidian Edge Design System
// Main layout: fixed sidebar + scrollable content area
// Sections: Home, Experience, Certifications, Projects, Resume, Contact
// ============================================================

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

const sections = ["home", "experience", "certifications", "projects", "resume", "contact"] as const;
type Section = (typeof sections)[number];

const sectionComponents: Record<Section, React.ComponentType> = {
  home: HomeSection,
  experience: ExperienceSection,
  certifications: CertificationsSection,
  projects: ProjectsSection,
  resume: ResumeSection,
  contact: ContactSection,
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [prevSection, setPrevSection] = useState<Section | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const navigateTo = (section: string) => {
    if (section === activeSection) return;
    setPrevSection(activeSection);
    setActiveSection(section as Section);
    // Scroll content to top
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Determine slide direction
  const sectionIndex = sections.indexOf(activeSection);
  const prevIndex = prevSection ? sections.indexOf(prevSection) : -1;
  const direction = prevIndex === -1 ? 1 : sectionIndex > prevIndex ? 1 : -1;

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="flex h-screen bg-[#0d1117] overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onNavigate={navigateTo} />

      {/* Main content */}
      <main
        ref={contentRef}
        className="flex-1 overflow-y-auto lg:ml-64"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#30363d #0d1117" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.3 }}
            className="min-h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
