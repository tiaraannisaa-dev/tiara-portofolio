export const profile = {
  name: "Tiara Annisaa",
  role: "Professional in Strategy, CEO Office, and Digital Transformation",
  tagline: "Leading Cross-Functional Change from Design to Execution",
  location: "South Tangerang, Banten, Indonesia",
  yearStarted: 2018,
  bio: `Results-driven management and transformation professional with cross-sector experience spanning State-Owned Enterprises, telecommunications, consulting firms, private companies, and non-governmental organisations. Proven ability to drive business process improvement, strategic initiatives, and data-driven decision-making through structured problem-solving and stakeholder collaboration.

Recognised for delivering high-impact outcomes in complex, multi-stakeholder environments while creating sustainable organisational value.`,
  email: "11tiaraannisaa@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/tiaraannisaa/",
    instagram: "https://instagram.com/tiarannsaa",
    threads: "https://threads.net/@tiarannsaa",
  },
};

export const skills: string[] = [
  "Business Process Improvement",
  "Project Management",
  "Stakeholder Management",
  "Business Strategy",
  "Women & People Development",
  "Product Owner & Management",
  "Transformation Strategy",
  "Change Management",
  "Leadership",
  "Problem Solving",
];

export const certifications: { name: string; issuer?: string }[] = [
  { name: "Agile Scrum Master" },
];

export type Project = {
  client: string;
  description: string;
  confidential?: boolean;
  industry?: string;
};

export const projects: Project[] = [
  {
    client: "Indonesian State-Owned Enterprise",
    confidential: true,
    industry: "Public Sector / SOE",
    description:
      "Developed a 5-year corporate strategy for a leading Indonesian state-owned enterprise.",
  },
  {
    client: "ICCTF — Bappenas",
    description:
      "Led organizational restructuring and corporate planning for Indonesia's climate change trust fund.",
  },
  {
    client: "PT XL Axiata",
    description:
      "Drove business process improvement across talent acquisition, zero-manual operations, and COVID-19 crisis management & strategy.",
  },
  {
    client: "PT XL Axiata",
    description:
      "Designed the roadmap and strategy for Agile transformation, embedding new ways of working and culture.",
  },
  {
    client: "National Ferry Provider",
    confidential: true,
    industry: "Transportation",
    description:
      "Led the digital strategy for ticketing system transformation in a national ferry operator.",
  },
];

export type Speaking = {
  org: string;
  topic: string;
};

export const speakings: Speaking[] = [
  {
    org: "Belajar Lagi",
    topic: "Speaker — Project Management Bootcamp",
  },
  {
    org: "PT Wahana Visi Indonesia",
    topic: "Speaker & Trainer — Project Management and Stakeholder Management",
  },
  {
    org: "Pacman.id",
    topic: "Speaker — Business Process Improvement Bootcamp",
  },
  {
    org: "Mereka.my",
    topic:
      "Speaker — AI in Action: Exploring AI for Workforce and Business Transformation",
  },
];
