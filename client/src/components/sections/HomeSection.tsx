// ============================================================
// HOME SECTION — Obsidian Edge Design System
// Hero with asymmetric layout, profile visual, and skill tags
// ============================================================

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, ArrowRight } from "lucide-react";
import { personalInfo, skills, PROFILE_IMAGE_URL, HERO_BG_URL } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

export default function HomeSection() {
  return (
    <section className="min-h-screen relative flex flex-col">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1117]/60 to-[#0d1117]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-16 max-w-4xl">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center gap-3 mb-8"
        >
          <span className="section-label">01 — Introduction</span>
          <div className="rule-cyber flex-1 max-w-24" />
        </motion.div>

        {/* Main layout: text + profile */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text block */}
          <div className="flex-1">
            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-mono text-[#00d4ff] text-sm mb-4 tracking-wide"
            >
              &gt; Cloud Engineer · Cybersecurity Educator · Builder
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="font-display font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Nishad
              <br />
              <span className="text-[#00d4ff]">Kharkar</span>
            </motion.h1>

            {/* Bold tagline */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="border-l-2 border-[#00d4ff] pl-4 mb-6"
            >
              <p className="text-white font-display font-semibold text-lg leading-snug">
                "{personalInfo.tagline}"
              </p>
            </motion.blockquote>

            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-[#8b949e] text-base leading-relaxed mb-8 max-w-xl"
            >
              Cloud engineer with a background spanning{" "}
              <span className="text-white font-medium">Computer Engineering</span> and{" "}
              <span className="text-white font-medium">Information Systems</span>. At George Mason
              University, I don't just teach cybersecurity — I design the labs and challenges that
              define the course. At Accenture, I built the automation frameworks that kept enterprise
              Azure environments running at scale.
            </motion.p>

            {/* Meta info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-[#8b949e] text-sm">
                <GraduationCap size={14} className="text-[#00d4ff]" />
                <span>
                  MS Information Systems, GMU —{" "}
                  <span className="text-[#00d4ff] font-mono font-semibold">GPA {personalInfo.gpa}</span>
                </span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-wrap gap-3"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-download"
              >
                <ExternalLink size={15} />
                Get In Touch
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("experience-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#30363d] text-[#8b949e] hover:text-white hover:border-[#00d4ff] rounded-md text-sm font-medium font-display transition-all"
              >
                View Experience
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>


        </div>
      </div>

      {/* Skills strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 border-t border-[#21262d] px-8 py-6"
      >
        <div className="max-w-4xl">
          <p className="section-label mb-4">Core Stack</p>
          <div className="flex flex-wrap gap-2">
            {[...skills.cloud.slice(0, 4), ...skills.containers.slice(0, 2), ...skills.cicd.slice(0, 2), ...skills.monitoring.slice(0, 2)].map(
              (skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>


    </section>
  );
}
