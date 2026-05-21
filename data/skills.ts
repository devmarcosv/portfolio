export type Skill = {
  name: string;
  category: "frontend" | "backend" | "gamedev" | "tools";
  level: "expert" | "advanced" | "intermediate";
};

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", category: "frontend", level: "expert" },
  { name: "JavaScript", category: "frontend", level: "expert" },
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML / CSS", category: "frontend", level: "expert" },

  // Backend
  { name: "Node.js", category: "backend", level: "expert" },
  { name: "Express", category: "backend", level: "advanced" },
  { name: "REST APIs", category: "backend", level: "expert" },
  { name: "PostgreSQL", category: "backend", level: "advanced" },
  { name: "MongoDB", category: "backend", level: "intermediate" },

  // Game Dev
  { name: "Unity", category: "gamedev", level: "advanced" },
  { name: "C#", category: "gamedev", level: "advanced" },

  // Tools
  { name: "Git / GitHub", category: "tools", level: "expert" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Figma", category: "tools", level: "intermediate" },
];

export const skillCategories = [
  { key: "frontend", label: "Front-end" },
  { key: "backend", label: "Back-end" },
  { key: "gamedev", label: "Game Dev" },
  { key: "tools", label: "Ferramentas" },
] as const;