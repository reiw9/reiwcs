import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { otherProjects, projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "Case study of JC Dental — the real, production website where I led UI/UX, SEO, accessibility, CMS management, deployment, and QA.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Proof"
          title="Done properly, one at a time."
        />
      </Reveal>

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {otherProjects.length > 0 ? (
        <Reveal delay={0.06}>
          <div className="mt-6 flex flex-col gap-5">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-foreground/20 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <StatusDot status={project.status} />
                  <Badge>{project.year}</Badge>
                  <Badge>{project.role}</Badge>
                </div>
                <h3 className="mt-6 text-display-sm font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-hover px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Visit the website
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl border border-dashed border-border p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            More in progress
          </p>
          <p className="mx-auto mt-3 max-w-md text-muted">
            This is what I&rsquo;m working on right now — more will land here
            as it happens.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
