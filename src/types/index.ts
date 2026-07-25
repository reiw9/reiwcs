export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectSummary {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  status: "complete" | "ongoing";
  tags: string[];
  href: string;
  featured?: boolean;
  image?: string;
}

export interface ExternalProject {
  title: string;
  description: string;
  role: string;
  year: string;
  status: "complete" | "ongoing";
  tags: string[];
  href: string;
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  status: "complete" | "ongoing";
}

export interface NavLink {
  label: string;
  href: string;
}
