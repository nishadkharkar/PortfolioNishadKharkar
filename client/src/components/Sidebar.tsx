// ============================================================
// SIDEBAR — Obsidian Edge Design System
// Fixed left navigation with section indicators
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Award,
  FileText,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home, number: "01" },
  { id: "experience", label: "Experience", icon: Briefcase, number: "02" },
  { id: "certifications", label: "Certifications", icon: Award, number: "03" },
  { id: "projects", label: "Projects", icon: FileText, number: "04" },
  { id: "resume", label: "Resume", icon: FileText, number: "05" },
  { id: "contact", label: "Contact", icon: Mail, number: "06" },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-white hover:border-[#00d4ff] transition-all lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-full w-64 bg-[#0d1117] border-r border-[#21262d] z-40 flex flex-col
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo / Name */}
        <div className="p-6 border-b border-[#21262d]">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-sm bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
              <span className="text-[#00d4ff] font-mono text-xs font-bold">NK</span>
            </div>
            <div>
              <p className="text-white font-display font-semibold text-sm leading-tight">
                Nishad Kharkar
              </p>
              <p className="text-[#8b949e] text-xs font-mono">Cloud Engineer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <p className="section-label px-3 mb-3">Navigation</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-item w-full text-left group ${isActive ? "active" : ""}`}
              >
                <span className="font-mono text-[10px] text-[#30363d] group-hover:text-[#8b949e] transition-colors w-5">
                  {item.number}
                </span>
                <Icon
                  size={15}
                  className={`nav-icon flex-shrink-0 transition-colors ${
                    isActive ? "text-[#00d4ff]" : "text-[#8b949e]"
                  }`}
                />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1 h-4 rounded-full bg-[#00d4ff]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="p-4 border-t border-[#21262d]">
          <p className="section-label px-3 mb-3">Connect</p>
          <div className="flex gap-2 px-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center w-9 h-9 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all"
              aria-label="Email"
            >
              <ExternalLink size={15} />
            </a>
          </div>
          <p className="text-[#30363d] text-[10px] font-mono px-3 mt-4">
            © 2025 Nishad Kharkar
          </p>
        </div>
      </motion.aside>
    </>
  );
}
