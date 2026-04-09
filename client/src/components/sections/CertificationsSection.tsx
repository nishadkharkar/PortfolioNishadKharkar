// ============================================================
// CERTIFICATIONS SECTION — Obsidian Edge Design System
// Scannable grid of certification cards with external links
// ============================================================

import { motion } from "framer-motion";
import { ExternalLink, Shield, Brain, BarChart3, FolderKanban } from "lucide-react";
import { certifications, type Certification } from "@/lib/data";

const categoryIcons = {
  cloud: Shield,
  ai: Brain,
  business: BarChart3,
  project: FolderKanban,
};

const categoryLabels = {
  cloud: "Cloud Infrastructure",
  ai: "Artificial Intelligence",
  business: "Business Analysis",
  project: "Project Management",
};

const issuerLogos: Record<string, string> = {
  Microsoft: "MSFT",
  Google: "GOOG",
};

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const Icon = categoryIcons[cert.category];

  return (
    <motion.a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="cert-card group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: `${cert.badgeColor}15`,
            border: `1px solid ${cert.badgeColor}30`,
          }}
        >
          <Icon size={18} style={{ color: cert.badgeColor }} />
        </div>

        {/* Issuer badge + external link */}
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{
              color: cert.badgeColor,
              backgroundColor: `${cert.badgeColor}15`,
              border: `1px solid ${cert.badgeColor}25`,
            }}
          >
            {issuerLogos[cert.issuer] || cert.issuer}
          </span>
          <ExternalLink
            size={12}
            className="text-[#30363d] group-hover:text-[#00d4ff] transition-colors"
          />
        </div>
      </div>

      {/* Short name */}
      <p className="font-mono text-[#00d4ff] text-xs font-semibold mb-1 tracking-wide">
        {cert.shortName}
      </p>

      {/* Full name */}
      <h3 className="font-display font-semibold text-white text-sm leading-snug mb-2 group-hover:text-[#00d4ff] transition-colors">
        {cert.name}
      </h3>

      {/* Category */}
      <p className="text-[#8b949e] text-xs mb-3 leading-relaxed">{cert.description}</p>

      {/* Category tag */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-mono text-[#8b949e] uppercase tracking-wider">
          {categoryLabels[cert.category]}
        </span>
      </div>

      {/* Verify link hint */}
      <div className="mt-3 pt-3 border-t border-[#30363d] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={11} className="text-[#00d4ff]" />
        <span className="text-[#00d4ff] text-[11px] font-mono">Verify Credential</span>
      </div>
    </motion.a>
  );
}

export default function CertificationsSection() {
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
          <span className="section-label">03 — Certifications</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </div>
        <h2 className="font-display font-bold text-white text-4xl mb-3">
          Credentials
        </h2>
        <p className="text-[#8b949e] text-base max-w-lg">
          Industry-recognized certifications spanning cloud infrastructure, AI, and professional practice.
          Click any card to verify the credential.
        </p>
      </motion.div>

      {/* Cert grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>


    </section>
  );
}
