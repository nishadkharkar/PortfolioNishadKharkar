// ============================================================
// CONTACT SECTION — Obsidian Edge Design System
// Clean contact info with social links
// ============================================================

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  return (
    <section className="px-8 py-16 max-w-4xl">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">06 — Contact</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </div>
        <h2 className="font-display font-bold text-white text-4xl mb-3">
          Let's Connect
        </h2>
        <p className="text-[#8b949e] text-base max-w-lg">
          Reach out via email or connect on social platforms. Always happy to discuss cloud architecture, cybersecurity, or interesting technical challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#00d4ff] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-4">
            <Mail size={18} className="text-[#00d4ff]" />
          </div>
          <p className="text-[#8b949e] text-xs font-mono mb-1">Email</p>
          <p className="text-white text-sm font-display font-semibold group-hover:text-[#00d4ff] transition-colors">
            {personalInfo.email}
          </p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#00d4ff] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-4">
            <Linkedin size={18} className="text-[#00d4ff]" />
          </div>
          <p className="text-[#8b949e] text-xs font-mono mb-1">LinkedIn</p>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-display font-semibold group-hover:text-[#00d4ff] transition-colors">
              Connect
            </p>
            <ExternalLink size={12} className="text-[#8b949e] group-hover:text-[#00d4ff] transition-colors" />
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#00d4ff] transition-all group"
        >
          <div className="w-10 h-10 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-4">
            <Github size={18} className="text-[#00d4ff]" />
          </div>
          <p className="text-[#8b949e] text-xs font-mono mb-1">GitHub</p>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-display font-semibold group-hover:text-[#00d4ff] transition-colors">
              Follow
            </p>
            <ExternalLink size={12} className="text-[#8b949e] group-hover:text-[#00d4ff] transition-colors" />
          </div>
        </motion.a>
      </div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-8 p-4 bg-[#161b22] border border-[#30363d] rounded-lg"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-mono font-semibold">
            Open to Opportunities
          </span>
        </div>
        <p className="text-[#8b949e] text-xs leading-relaxed">
          Currently open to full-time cloud engineering, DevOps, and cybersecurity roles.
        </p>
      </motion.div>
    </section>
  );
}
