import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { ExternalProject } from "@/types";

/**
 * Same motion vocabulary as ProjectCard — lift, shadow, staggered tags,
 * underline on the CTA. These entries link out instead of opening a case
 * study, but there's no reason for them to feel dead by comparison.
 */
export function ExternalProjectCard({ project }: { project: ExternalProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_28px_60px_-24px_rgb(0_0_0/0.45)] md:p-10"
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

      <RevealGroup className="mt-8 flex flex-wrap gap-2" stagger={0.06}>
        {project.tags.map((tag) => (
          <RevealItem key={tag}>
            <span className="inline-flex rounded-full bg-surface-hover px-3 py-1 text-xs text-muted transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
              {tag}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-8 inline-flex w-fit flex-col items-start text-sm font-medium text-foreground">
        <span className="inline-flex items-center gap-1.5">
          Visit the website
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
        <span
          aria-hidden
          className="mt-1 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-100"
        />
      </div>
    </a>
  );
}
