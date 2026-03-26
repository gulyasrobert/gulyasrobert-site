export interface EducationEntry {
  id: string;
  institution: string;
  degree: { hu: string; en: string };
  period: string;
  ongoing?: boolean;
}

export const educationData: EducationEntry[] = [
  {
    id: "mba-turnaround",
    institution: "Budapest Metropolitan University",
    degree: {
      hu: "Executive MBA – Turnaround Management",
      en: "Executive MBA – Turnaround Management",
    },
    period: "2024 – 2025",
  },
  {
    id: "mba-it",
    institution: "Budapest Metropolitan University",
    degree: {
      hu: "Executive MBA for IT",
      en: "Executive MBA for IT",
    },
    period: "2014 – 2015",
  },
  {
    id: "bsc",
    institution: "Pollack Mihály Technical College",
    degree: {
      hu: "Informatikai üzemmérnök (BSc)",
      en: "Engineer of IT Science (BSc)",
    },
    period: "1989 – 1992",
  },
];

export interface CertificationEntry {
  id: string;
  institution: string;
  name: { hu: string; en: string };
  period: string;
  ongoing?: boolean;
}

export const certificationData: CertificationEntry[] = [
  {
    id: "ai-business",
    institution: "Budapest Metropolitan University",
    name: {
      hu: "A mesterséges intelligencia alkalmazásai az üzleti életben és pénzügyekben",
      en: "Applications of Artificial Intelligence in Business and Finance",
    },
    period: "2025 – 2026",
    ongoing: true,
  },
  {
    id: "solution-architect",
    institution: "r_d school / robot_dreams",
    name: {
      hu: "Solution Architect módszertani képzés",
      en: "Solution Architect Methodology Training",
    },
    period: "2025 – 2026",
  },
  {
    id: "eitca-ai",
    institution: "European IT Certification",
    name: {
      hu: "EITCA/AI Mesterséges Intelligencia Akadémia",
      en: "EITCA/AI Artificial Intelligence Academy",
    },
    period: "2025 – 2026",
    ongoing: true,
  },
];

export const competences = [
  { hu: "IT stratégia és irányítás", en: "IT Strategy & Governance" },
  { hu: "Nemzeti szintű IT működtetés", en: "National-Level IT Operations" },
  { hu: "EU-finanszírozású programvezetés", en: "EU-Funded Program Leadership" },
  { hu: "Vállalati architektúra", en: "Enterprise Architecture" },
  { hu: "Közszféra transzformáció", en: "Public Sector Transformation" },
  { hu: "Komplex integrációk", en: "Complex Integrations" },
  { hu: "Magas rendelkezésre állású infrastruktúra", en: "High-Availability Infrastructure" },
  { hu: "Érintett-ökoszisztéma menedzsment", en: "Stakeholder Ecosystem Management" },
  { hu: "Folyamatautomatizálás", en: "Process Automation" },
  { hu: "Szabályozási megfelelőség", en: "Regulatory & Compliance Alignment" },
  { hu: "Vezetői kommunikáció", en: "Executive Communication" },
  { hu: "Szervezetfejlesztés", en: "Organizational Development" },
];
