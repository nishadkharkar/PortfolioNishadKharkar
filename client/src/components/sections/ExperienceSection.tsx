// ============================================================
// EXPERIENCE SECTION — Obsidian Edge Design System
// Vertical timeline with click-to-expand interaction
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { experience, type ExperienceEntry } from "@/lib/data";

const companyColors: Record<string, string> = {
  "George Mason University": "#00d4ff",
  Accenture: "#a259ff",
};

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const accentColor = companyColors[entry.company] || "#00d4ff";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`timeline-entry pb-8 ${expanded ? "expanded" : ""}`}
      style={{ borderLeftColor: expanded ? accentColor : undefined }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Timeline dot */}
      <div
        className="timeline-dot"
        style={
          expanded
            ? { backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}40` }
            : undefined
        }
      />

      {/* Header — always visible */}
      <div
        className="w-full text-left group cursor-pointer"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-display font-semibold text-white text-lg leading-tight group-hover:text-[#00d4ff] transition-colors">
              {entry.position}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <div className="flex items-center gap-1.5 text-[#8b949e] text-sm">
                <Building2 size={12} style={{ color: accentColor }} />
                <span className="font-medium" style={{ color: accentColor }}>
                  {entry.company}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#8b949e] text-xs font-mono">
                <Calendar size={11} />
                <span>{entry.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#8b949e] text-xs">
                <MapPin size={11} />
                <span>{entry.location}</span>
              </div>
            </div>
          </div>

          {/* Expand icon */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown
              size={18}
              className={`transition-colors ${
                expanded ? "text-[#00d4ff]" : "text-[#30363d] group-hover:text-[#8b949e]"
              }`}
            />
          </motion.div>
        </div>

        {/* Summary — always visible */}
        <p className="text-[#8b949e] text-sm mt-2 leading-relaxed">{entry.summary}</p>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              {/* Metrics */}
              {entry.metrics.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {entry.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-[#161b22] border border-[#30363d] rounded-md px-4 py-3"
                    >
                      <p
                        className="metric-callout text-2xl"
                        style={{ color: accentColor }}
                      >
                        {metric.value}
                      </p>
                      <p className="text-[#8b949e] text-xs mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements */}
              <div className="space-y-2">
                {entry.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                      style={{ backgroundColor: accentColor }}
                    />
                    <p className="text-[#c9d1d9] text-sm leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="px-8 py-16 max-w-3xl">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">02 — Experience</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </div>
        <h2 className="font-display font-bold text-white text-4xl mb-3">
          The Journey
        </h2>
        <p className="text-[#8b949e] text-base max-w-lg">
          From enterprise cloud automation at Accenture to designing cybersecurity curriculum at GMU.
          Click any entry to see the full story.
        </p>
      </motion.div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 mb-8 px-3 py-2 bg-[#161b22] border border-[#30363d] rounded-md w-fit"
      >
        <ExternalLink size={12} className="text-[#00d4ff]" />
        <span className="text-[#8b949e] text-xs font-mono">Hover over any entry to expand details</span>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {experience.map((entry, index) => (
          <TimelineEntry key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
