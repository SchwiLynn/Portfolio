// High-level profile info
export const PROFILE = {
  name: "Linh Do",
  role: "Creative Developer & CS Student",
  location: "Arlington, TX · UTA",
  headline: "Building thoughtful, playful systems across XR, tools, and student life.",
  availability: "Open to 2026 internships & research opportunities",
};

// Social + contact links
export const SOCIALS = {
  email: "your.email@uta.edu",
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle",
  // portfolio: "https://...", // later when deployed
};

// Hero-specific content
export const HERO = {
  badge: ["XR", "Systems", "Student Life"],
  bigWords: ["Creative", "Developer"],
  subtext:
    "Vietnamese CS student exploring XR, spatial computing, and human-centered tools while working as a Resident Assistant and community builder.",
};

// About section content
export const ABOUT = {
  paragraphs: [
    "I am an undergraduate Computer Science student at The University of Texas at Arlington focusing on XR, multi-user systems, and tools that make complex tech feel humane and accessible.",
    "My experience as a research volunteer and Resident Assistant shapes how I design: I care about clarity, safety, and giving people confidence in unfamiliar spaces.",
  ],
};

// Experience (jobs, research, leadership)
export const EXPERIENCE = [
  {
    title: "XR / Spatial Computing Research Volunteer",
    org: "IMEC² Lab, UTA",
    period: "2024 — Present",
    location: "Arlington, TX",
    bullets: [
      "Prototype and document experiments on multi-user XR and spatial anchors.",
      "Implement Unity/C# tools for logging positions, distances, and drift.",
      "Collaborate with faculty and students to explore XR evaluation methods.",
    ],
    tags: ["Unity", "C#", "XR", "Spatial Anchors", "Experiment Design"],
  },
  {
    title: "Resident Assistant",
    org: "Maverick Hall, UTA",
    period: "2024 — Present",
    location: "Arlington, TX",
    bullets: [
      "Support residents academically and personally in a diverse community.",
      "Design and host programs around wellness, academics, and belonging.",
      "Practice conflict mediation, crisis response, and peer mentorship.",
    ],
    tags: ["Leadership", "Community Building", "Communication"],
  },
];

// Projects
export const PROJECTS = [
  {
    name: "Multi-User XR Anchor Logger",
    description:
      "Utility built in Unity for measuring distances between devices and shared anchors to study alignment error in collaborative XR spaces.",
    tech: ["Unity", "C#", "XR"],
    highlight: "Supports structured experiments on spatial drift and consistency.",
    links: {
      github: "https://github.com/your-handle/xr-anchor-logger",
      // demo: "",
    },
  },
  {
    name: "Student Focus Timer",
    description:
      "Pomodoro + task tracker concept tailored for students juggling classes, labs, and campus jobs with offline-first design.",
    tech: ["Product Design", "Flutter / Web (planned)"],
    highlight: "Emphasis on clarity, burnout-friendly pacing, and simple metrics.",
    links: {
      // github: "",
    },
  },
];

// Skills (grouped for nice layout)
export const SKILLS = {
  languages: ["Java", "C", "C#", "Python (basic)"],
  frontend: ["React", "Vite", "Tailwind CSS"],
  xr: ["Unity", "XR Interaction", "Spatial Anchors", "Meta Quest tooling"],
  backend: ["REST basics", "Node.js tooling"],
  tools: ["Git & GitHub", "VS Code", "Linux/WSL"],
  soft: ["Leadership", "Resident Assistant", "Mentoring", "Event Planning"],
};

// Contact section text
export const CONTACT = {
  intro:
    "Open to internships, research positions, and collaborations in XR, creative tools, and student-centered products.",
  note:
    "Feel free to reach out about XR projects, portfolio feedback, or navigating CS & campus life as an international student.",
};
