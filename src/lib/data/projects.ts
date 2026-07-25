import type { ExternalProject, ProjectSummary } from "@/types";

export const projects: ProjectSummary[] = [
  {
    slug: "jc-dental",
    title: "JC Dental",
    tagline: "Website operations & product improvements for a live dental clinic site",
    description:
      "A dental clinic's website built from scratch — where patients book appointments, staff manage content, and people find it through search.",
    role: "Website Operations",
    year: "2026 – Present",
    status: "ongoing",
    tags: ["UI/UX", "Security", "Performance", "QA"],
    href: "/projects/jc-dental",
    featured: true,
    image: "/images/jc-dental/logo.jpg",
  },
];

export function getProjectBySlug(slug: string): ProjectSummary | undefined {
  return projects.find((project) => project.slug === slug);
}

export const otherProjects: ExternalProject[] = [
  {
    title: "Pelmot Creativity",
    description:
      "Portfolio website for an architect, built around the client's vision with multilingual support, CMS integration, and a complete handoff.",
    role: "Commissioned Project",
    year: "2026",
    status: "complete",
    tags: ["React", "TypeScript", "Framer Motion", "Sanity CMS"],
    href: "https://pelmot-creativity.com",
  },
];
