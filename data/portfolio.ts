export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  image: string;
  href: string;
};

export type Detail = {
  label: string;
  value: string;
};

export type Note = {
  emoji: string;
  title: string;
  description: string;
  date: string;
  dateTime: string;
  href: string;
};

export type Social = {
  label: string;
  href: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Caleb Brown Dondon",
  initials: "CB",
  role: "Full Stack Developer and Software Engineer",
  intro:
    "Hello there! I'm Caleb, a Full Stack Developer, Elect/Elect and Software Engineer with a few years under my belt turning ideas into clean, scalable applications. Driven by curiosity, fueled by great engineering.",
  email: "talk2bendondon@gmail.com",
  location: "Abuja, Nigeria",
  availability: "Open for new projects and gigs",
  image: "/Caleb.jpg",
  coverImage: "/coding.jpg",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Harvestlynk",
    description: "An all in one farm application for merchandise, daily activities, and disease diagnosis that connects farmers to traders.",
    tags: ["Web", "Engineering"],
    year: "2026",
    image: "/harvestlynk.png",
    href: "https://app-harvestlynk.vercel.app",
  },
  {
    title: "SchoolBook SMS",
    description: "A Multi Tenant School Management System application that puts all of school administration and activities all in one place",
    tags: ["Web", "Engineering"],
    year: "2026",
    image: "/schoolbook.png",
    href: "https://school-book-beta.vercel.app/",
  },
];

export const details: Detail[] = [
  { label: "Location", value: profile.location },
  { label: "Focus", value: "Design, code, Engineering, and everything in between"},
  { label: "Currently", value: "Open to new collaborations" },
  { label: "Tools", value: "Figma, TypeScript, Notion" },
];

export const notes: Note[] = [
  {
    emoji: "🗄️",
    title: "Notes on Multi-Tenant Database Architecture",
    description:
      "Strategies for safe data partitioning, schema design, and server-side authorization.",
    date: "Oct 2026",
    dateTime: "2026-10",
    href: "#notes",
  },
  {
    emoji: "🧱",
    title: "Building Modular Backends with NestJS & Prisma",
    description:
      "Patterns for clean dependency injection, service layers, and predictable API responses.",
    date: "Jun 2026",
    dateTime: "2026-06",
    href: "#notes",
  },
  {
    emoji: "💳",
    title: "Handling Payment Gateways & Transactional Safety",
    description:
      "Key lessons learned while integrating automated escrow workflows, webhooks, and idempotent state updates.",
    date: "Aug 2026",
    dateTime: "2026-08",
    href: "#notes",
  },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Nobulebrown" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/CalebBrown" },
  { label: "X / Twitter", href: "https://www.linkedin.com/in/ben-dondon-568828242/" },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "SQL"],
  },
  {
    title: "Tools",
    items: ["Docker", "Kubernetes", "GitHub", "VS Code", "Postman", "Git", "Linux"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "NestJS", "Express", "Django"],
  },
];

export const sectionCopy = {
  work: {
    eyebrow: "Selected work",
    title: "Explore my work",
    description:
      "A small gallery of my recent projects.",
    allLink: "All projects →",
  },
  stack: {
    eyebrow: "Toolkit",
    title: "Languages, tools & frameworks",
    description:
      "The technologies I reach for most often.",
  },
  about: {
    eyebrow: "A little about me",
    title: "About this space",
    description:
      "Hello again. I’m Caleb, a Full-Stack Engineer merging software development with an Electrical & Electronic Engineering perspective. I specialize in designing type-safe backends, multi-tenant databases, and modern frontends using Next.js, Node.js/NestJS, TypeScript, and modern database ecosystems. I prioritize strict data modeling, clean API layer boundaries, and reliable infrastructure over quick hacks. For me, good software comes down to clarity, scalability, and predictable performance. I’m constantly learning, experimenting with emerging tools, and engineering software built to last.",
    callout:
      "Dedicated, innovative, passionate, learning, planning, building, and looking for a good problem to solve.",
    body:
      "This page is intentionally simple: clear type, generous space, and no unnecessary noise. It is built with Next.js and a small amount of Tailwind CSS.",
  },
  notes: {
    eyebrow: "Notes",
    title: "Writing & thoughts",
    description:
      "A review of my most recent articles and pieces.",
    allLink: "View all notes →",
  },
  contact: {
    title: "Let's build something good.",
    description:
      "Have a project, a question, or just want to say hi? My inbox is open.",
  },
};
