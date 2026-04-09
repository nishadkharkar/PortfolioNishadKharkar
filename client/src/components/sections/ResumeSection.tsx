// ============================================================
// RESUME SECTION — Obsidian Edge Design System
// Inline PDF viewer with prominent download button
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, Maximize2 } from "lucide-react";
import { RESUME_PDF_URL } from "@/lib/data";

export default function ResumeSection() {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  return (
    <section className="px-8 py-16 max-w-4xl">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">04 — Resume</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-white text-4xl mb-2">
              Full Resume
            </h2>
            <p className="text-[#8b949e] text-base">
              View inline or download the PDF for offline reference.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href={RESUME_PDF_URL}
              download="Nishad_Kharkar_Resume.pdf"
              className="btn-download"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 border border-[#30363d] text-[#8b949e] hover:text-white hover:border-[#00d4ff] rounded-md text-sm font-medium font-display transition-all"
            >
              <Maximize2 size={14} />
              Open Full Screen
            </a>
          </div>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="relative bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden"
      >
        {/* Viewer toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
          <div className="flex items-center gap-2">
            <FileText size={14} className="text-[#00d4ff]" />
            <span className="font-mono text-xs text-[#8b949e]">
              Nishad_Kharkar_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#8b949e] hover:text-[#00d4ff] transition-colors text-xs font-mono"
            >
              <ExternalLink size={12} />
              Open in browser
            </a>
          </div>
        </div>

        {/* Loading state */}
        {!pdfLoaded && (
          <div className="absolute inset-0 top-[45px] flex flex-col items-center justify-center bg-[#161b22] z-10">
            <div className="w-8 h-8 border-2 border-[#30363d] border-t-[#00d4ff] rounded-full animate-spin mb-3" />
            <p className="text-[#8b949e] text-sm font-mono">Loading resume...</p>
          </div>
        )}

        {/* PDF iframe */}
        <iframe
          src={`https://docs.google.com/gview?url=${encodeURIComponent(RESUME_PDF_URL)}&embedded=true`}
          className="w-full"
          style={{ height: "800px", border: "none" }}
          title="Nishad Kharkar Resume"
          onLoad={() => setPdfLoaded(true)}
        />
      </motion.div>

      {/* Bottom download CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#161b22] border border-[#30363d] rounded-lg"
      >
        <div>
          <p className="text-white font-display font-semibold text-sm">
            Want a copy for your records?
          </p>
          <p className="text-[#8b949e] text-xs mt-0.5">
            The PDF includes all experience, skills, and contact information.
          </p>
        </div>
        <a
          href={RESUME_PDF_URL}
          download="Nishad_Kharkar_Resume.pdf"
          className="btn-download flex-shrink-0"
        >
          <Download size={15} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
