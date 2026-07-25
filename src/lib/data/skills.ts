import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Operations & Infrastructure",
    description:
      "I keep the site deployed, configured, and monitored — and I'm the one who sorts it out when something breaks.",
    skills: [
      "Git & GitHub workflows",
      "Cloudflare deployment & DNS",
      "Website auditing",
      "Environment & config management",
      "Incident triage",
    ],
  },
  {
    title: "Technical Judgment",
    description:
      "I make the calls on what gets built and whether it's actually right — the tools are just tools.",
    skills: [
      "Scoping & trade-offs",
      "Code review",
      "Debugging & root-cause tracing",
      "Technical documentation",
    ],
  },
  {
    title: "Product & UX",
    description:
      "I think about the site like a product: who's using it, where they get stuck, and what's worth fixing first.",
    skills: [
      "Product thinking",
      "UI/UX improvements",
      "Responsive design",
      "User flow & booking-funnel design",
      "Feature planning & prioritization",
    ],
  },
  {
    title: "Content Systems",
    description:
      "I set up the content layer so the people running the site can update it themselves, without calling me.",
    skills: [
      "Sanity CMS (schemas & content modeling)",
      "Supabase (auth, database, integration)",
      "CMS management & editorial workflow",
      "Structured content planning",
    ],
  },
  {
    title: "Website Health",
    description:
      "I make sure the site is fast, findable, and usable by everyone who lands on it — on whatever device they bring.",
    skills: [
      "SEO optimization",
      "Accessibility (WCAG-aligned)",
      "QA testing",
      "Performance auditing",
      "Cross-browser & cross-device testing",
    ],
  },
];
