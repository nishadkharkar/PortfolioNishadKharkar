// ============================================================
// PORTFOLIO DATA — Nishad Kharkar
// Obsidian Edge Design System
// Update this file to modify experience, certifications, projects
// ============================================================

export const RESUME_PDF_URL =
  "https://raw.githubusercontent.com/nishadkharkar/PortfolioNishadKharkar/main/assets/Nishad_Resume.pdf";

export const PROFILE_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663534270556/8tgYNoDDfrP9tkE7mcRp4M/profile-abstract-3QkLmoPnrTosJrWNQgLMhp.webp";

export const HERO_BG_URL =
  "https://github.com/nishadkharkar/PortfolioNishadKharkar/blob/main/assets/hero-bg-XeSx7Nx8yVULWxPC6Kcq7z.webp";

export const personalInfo = {
  name: "Nishad Kharkar",
  title: "Cloud Engineer & Cybersecurity Educator",
  tagline: "I live at the intersection of 'How does this work?' and 'How do I break it?'",
  intro: `Cloud engineer with a background spanning Computer Engineering and Information Systems. 
    I don't just deploy infrastructure — I automate it, secure it, and then teach others how to defend it. 
    At George Mason University, I'm not just a Teaching Assistant; I design the labs and challenges 
    that define the cybersecurity curriculum. At Accenture, I built the systems that kept enterprise 
    cloud environments running at scale.`,
  email: "nishad.kharkar@gmail.com",
  linkedin: "https://www.linkedin.com/in/nishadkharkar/",
  github: "https://github.com/nishadkharkar",
  gpa: "3.96",
  university: "George Mason University",
  degree: "MS in Information Systems (Cloud Based Information Systems)",
};

export const skills = {
  cloud: ["Microsoft Azure", "Google Cloud", "AWS", "Terraform", "Bicep", "ARM Templates"],
  containers: ["Docker", "Kubernetes", "Azure Kubernetes Service (AKS)"],
  cicd: ["Azure DevOps", "Git", "GitHub", "CI/CD Pipelines"],
  languages: ["Python", "PowerShell", "Bash", "Java", "C", "ASP.NET"],
  databases: ["Azure SQL", "MySQL", "PostgreSQL", "Oracle", "Power BI", "KQL"],
  monitoring: ["Azure Monitor", "Application Insights", "Log Analytics", "Microsoft Sentinel"],
};

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  period: string;
  type: "full-time" | "part-time" | "academic";
  location: string;
  summary: string;
  achievements: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "gmu-gta",
    company: "George Mason University",
    position: "Graduate Teaching Assistant",
    period: "Aug 2024 — Present",
    type: "academic",
    location: "Fairfax, VA",
    summary:
      "Designing cybersecurity labs and course architecture that challenge students to think like attackers and defend like engineers.",
    achievements: [
      "Revamped lab curriculum for core IT courses by integrating real-world simulations, boosting student pass rates by 15%.",
      "Co-designed hands-on cybersecurity labs focused on practical applications — not just theory, but the kind of challenges that stick.",
      "Automated grading workflows, cutting evaluation time by 40% while significantly improving feedback accuracy.",
      "Mentor and guide students through complex security concepts, bridging the gap between academic theory and industry practice.",
    ],
    metrics: [
      { value: "15%", label: "Pass Rate Increase" },
      { value: "40%", label: "Grading Time Saved" },
    ],
    tags: ["Cybersecurity", "Curriculum Design", "Azure", "Lab Architecture", "Mentoring"],
  },
  {
    id: "gmu-support",
    company: "George Mason University",
    position: "Lead Support Center Analyst",
    period: "Nov 2023 — Aug 2024",
    type: "academic",
    location: "Fairfax, VA",
    summary:
      "Led critical infrastructure projects and operational improvements across campus IT systems.",
    achievements: [
      "Managed a critical intercom upgrade project from start to finish, ensuring on-time delivery and measurable positive impact on campus communications.",
      "Developed business process documentation and workflow models that boosted operational efficiency by 20%.",
      "Mentored and supervised a team of student staff, maintaining high service-level standards across campus.",
    ],
    metrics: [
      { value: "20%", label: "Efficiency Boost" },
    ],
    tags: ["Project Management", "Process Documentation", "Team Leadership", "IT Operations"],
  },
  {
    id: "accenture-swe",
    company: "Accenture",
    position: "Software Engineering Analyst",
    period: "Dec 2022 — Aug 2023",
    type: "full-time",
    location: "Mumbai, India",
    summary:
      "Led cloud infrastructure automation initiatives, provisioning 45+ Azure services and engineering cost-saving frameworks.",
    achievements: [
      "Led the adoption of ARM and Bicep to automate provisioning of complex Azure environments, ensuring infrastructure consistency and reducing environment ramp-up time by 30%.",
      "Engineered an automation framework to identify and decommission underutilized cloud resources, resulting in ~$15,000 annual cost savings.",
      "Standardized IaC practices across the team, reducing manual configuration errors and improving deployment reliability.",
    ],
    metrics: [
      { value: "45+", label: "Azure Services Automated" },
      { value: "30%", label: "Ramp-up Time Reduced" },
      { value: "$15K", label: "Annual Cost Saved" },
    ],
    tags: ["Azure", "ARM Templates", "Bicep", "IaC", "Cloud Automation"],
  },
  {
    id: "accenture-ada",
    company: "Accenture",
    position: "Application Development Associate",
    period: "Aug 2021 — Nov 2022",
    type: "full-time",
    location: "Mumbai, India",
    summary:
      "Optimized cloud middleware performance and modernized security protocols in a high-stakes insurance domain.",
    achievements: [
      "Boosted cloud middleware efficiency by 40% through refactoring and optimization of complex SQL queries, improving application response times.",
      "Drove migration of authentication to Azure Key Vaults, significantly enhancing security of cloud middleware.",
      "Served as a key resource for resolving critical incidents, contributing to a 25% reduction in repeat escalations and ensuring continuous uptime.",
    ],
    metrics: [
      { value: "40%", label: "Middleware Efficiency" },
      { value: "25%", label: "Fewer Escalations" },
    ],
    tags: ["SQL Optimization", "Azure Key Vault", "Incident Management", "Cloud Security"],
  },
];

export interface Certification {
  id: string;
  name: string;
  shortName: string;
  issuer: string;
  category: "cloud" | "ai" | "business" | "project";
  description: string;
  verifyUrl: string;
  badgeColor: string;
}

export const certifications: Certification[] = [
  {
    id: "az-900",
    name: "Microsoft Azure Fundamentals",
    shortName: "AZ-900",
    issuer: "Microsoft",
    category: "cloud",
    description: "Foundational knowledge of cloud concepts and Azure services, security, privacy, compliance, and trust.",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/NishadKharkar-8808/5D59F2A809C264AD?sharingId=80A6258F3053BF66",
    badgeColor: "#0078d4",
  },
  {
    id: "ai-900",
    name: "Microsoft Azure AI Fundamentals",
    shortName: "AI-900",
    issuer: "Microsoft",
    category: "ai",
    description: "Core AI and machine learning concepts on Azure, including computer vision, NLP, and conversational AI.",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/NishadKharkar-8808/86A2C6CC66BC2FEB?sharingId=80A6258F3053BF66",
    badgeColor: "#0078d4",
  },
  {
    id: "ms-ba",
    name: "Microsoft Business Analyst Professional Certificate",
    shortName: "MS Business Analyst",
    issuer: "Microsoft",
    category: "business",
    description: "Professional-level business analysis skills including requirements gathering, process modeling, and stakeholder management.",
    verifyUrl: "https://www.credly.com/badges/98f3078c-eb8c-41ae-8699-ee9e4e8379b7/public_url",
    badgeColor: "#0078d4",
  },
  {
    id: "google-ai",
    name: "Google Generative AI Leader",
    shortName: "Google Gen AI",
    issuer: "Google",
    category: "ai",
    description: "Advanced understanding of generative AI principles, applications, and responsible deployment strategies.",
    verifyUrl: "https://www.credly.com/badges/0a5e0742-9ff8-4dbf-a014-11b3ed08af91/public_url",
    badgeColor: "#4285f4",
  },
  {
    id: "google-pm",
    name: "Google Project Management Professional Certificate",
    shortName: "Google PM",
    issuer: "Google",
    category: "project",
    description: "Comprehensive project management skills including Agile, Scrum, risk management, and stakeholder communication.",
    verifyUrl: "https://www.credly.com/badges/aba445f4-3ed7-47a7-b510-876486d90de9/public_url",
    badgeColor: "#34a853",
  },
];

export interface Project {
  id: string;
  title: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "publication",
    title: "Alzheimer's Disease Detection — Springer Journal",
    org: "Research Publication",
    period: "Published",
    description:
      "Contributed to peer-reviewed research enhancing detection accuracy and reducing false negatives in Alzheimer's disease diagnosis using machine learning techniques.",
    highlights: [
      "Enhanced model accuracy through advanced feature engineering and ensemble methods.",
      "Reduced false negatives in early-stage detection, improving clinical outcomes.",
    ],
    tags: ["Machine Learning", "Healthcare AI", "Research", "Python"],
    link: "https://link.springer.com/chapter/10.1007/978-981-16-7952-0_50",
  },
  {
    id: "containerization",
    title: "Containerization of a Full-Stack Application",
    org: "George Mason University",
    period: "Jan 2025 — May 2025",
    description:
      "Full-stack survey application containerized for portable, production-ready deployment.",
    highlights: [
      "Built with Vue.js and PostgreSQL, featuring robust client/server-side validation.",
      "Containerized all services using Docker and Docker Compose for multi-container deployment.",
    ],
    tags: ["Vue.js", "PostgreSQL", "Docker", "Docker Compose"],
    link: "https://github.com/nishadkharkar/ContainerizedFullStackApp",
  },
  {
    id: "sentinel",
    title: "Azure Sentinel SIEM Global Honeypot Analysis",
    org: "George Mason University",
    period: "Jan 2025 — May 2025",
    description:
      "Cloud-native SIEM solution monitoring real-time RDP brute-force attacks from a global honeypot.",
    highlights: [
      "Engineered using Microsoft Sentinel and an Azure-based Windows honeypot to monitor real-time RDP attacks.",
      "Custom PowerShell scripts automate attacker metadata extraction with Geolocation API visualization.",
    ],
    tags: ["Microsoft Sentinel", "Azure", "PowerShell", "SIEM", "Cybersecurity"],
    link: "https://github.com/nishadkharkar/Azure-Sentinel-SIEM-Global-Honeypot-Analysis",
  },
];
