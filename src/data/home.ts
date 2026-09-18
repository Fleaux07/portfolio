export const PROFILE = {
  name: "Romain BOUCOURT",
  title: "BTS SIO SLAM",
  titleFull: "Services Informatiques aux Organisations — Solutions Logicielles et Applications Métiers",
  github: "https://github.com/Fleaux07",
  linkedin: "https://www.linkedin.com/in/romain-boucourt-1a10012b3/",
};

export interface Experience {
  date: string;
  title: string;
}

export const EXPERIENCES: Experience[] = [
  { date: "Août 2026", title: "CDD — Paris Match" },
  { date: "Mai – Juin 2026", title: "Stage — Paris Match" },
  { date: "Janvier – Février 2025", title: "Stage — Unicorn Van / Julien Waguet" },
  { date: "Octobre – Novembre 2024", title: "Stage — Assoconnect" },
  { date: "Octobre – Novembre 2023", title: "Stage — CERP" },
  { date: "Décembre 2022", title: "Stage — Rouen Informatique" },
];

export interface Education {
  date: string;
  title: string;
}

export const EDUCATIONS: Education[] = [
  { date: "2027 (en cours)", title: "BTS SIO — option SLAM" },
  { date: "2025", title: "Bac Pro SN — option RISC" },
];

export interface SkillGroup {
  name: string;
  skills: string[];
}

export const SKILLS: SkillGroup[] = [
  { name: "Web", skills: ["FTP", "PHP", "Symfony", "Node.js"] },
  {
    name: "Données & Persistance",
    skills: ["SQL", "PHPMyAdmin", "MySQL", "SQL Server", "Conception (MERISE)"],
  },
  { name: "Logiciel et programmation", skills: ["C#", "XML", "Python", "Unity"] },
  { name: "IA", skills: ["Claude Code", "Gemini", "Perplexity"] },
];
