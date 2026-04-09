// ============================================================
// PROJECTS SECTION — Obsidian Edge Design System
// Showcase of key projects with descriptions and tech stacks
// ============================================================

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isPublication = project.id === "publication";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-lg p-6 transition-all group ${
        isPublication
          ? "bg-gradient-to-br from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/40 hover:border-[#00d4ff]/60"
          : "bg-[#161b22] border border-[#30363d] hover:border-[#00d4ff]"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {isPublication ? (
              <>
                <div className="w-4 h-4 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="font-mono text-[10px] text-[#00d4ff] uppercase tracking-wider font-semibold">
                  Featured — {project.org}
                </span>
              </>
            ) : (
              <>
                <Code2 size={14} className="text-[#00d4ff]" />
                <span className="font-mono text-[10px] text-[#8b949e] uppercase tracking-wider">
                  {project.org}
                </span>
              </>
            )}
          </div>
          <h3
            className={`font-display font-semibold text-lg transition-colors ${
              isPublication
                ? "text-[#00d4ff]"
                : "text-white group-hover:text-[#00d4ff]"
            }`}
          >
            {project.title}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0d1117] transition-all"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Period */}
      <p className="text-[#8b949e] text-xs font-mono mb-3">{project.period}</p>

      {/* Description */}
      <p className="text-[#c9d1d9] text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-[#8b949e] text-xs">
            <span className="text-[#00d4ff] font-mono flex-shrink-0 mt-0.5">→</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#30363d]">
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
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
          <span className="section-label">Projects</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </div>
        <h2 className="font-display font-bold text-white text-4xl mb-3">
          Featured Work
        </h2>
        <p className="text-[#8b949e] text-base max-w-lg">
          Recent projects spanning cloud infrastructure, security, and full-stack development.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
