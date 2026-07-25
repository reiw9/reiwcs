import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { StatusDot } from "@/components/ui/StatusDot";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { ProjectSummary } from "@/types";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Link
      href={project.href}
      className="group grid grid-cols-1 gap-10 rounded-3xl border border-border bg-surface p-6 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_28px_60px_-24px_rgb(0_0_0/0.45)] md:grid-cols-2 md:p-10"
    >
      <ScreenshotPlaceholder
        label={`${project.title} logo`}
        aspect="aspect-[4/3]"
        className="order-2 md:order-1"
        src={project.image}
        objectPosition="object-center"
        imageClassName="transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
      />
      <div className="order-1 flex flex-col justify-between md:order-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusDot status={project.status} />
            <Badge>{project.year}</Badge>
            <Badge>{project.role}</Badge>
          </div>
          <h3 className="mt-6 text-display-sm font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-4 max-w-md text-muted">{project.description}</p>
        </div>

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
            Read the full case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          <span
            aria-hidden
            className="mt-1 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-100"
          />
        </div>
      </div>
    </Link>
  );
}
