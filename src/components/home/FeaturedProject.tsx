import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { projects } from "@/lib/data/projects";

export function FeaturedProject() {
  const project = projects.find((p) => p.featured) ?? projects[0];
  if (!project) return null;

  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Proof"
          title="The project behind everything on this site"
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <Link
          href={project.href}
          className="group grid grid-cols-1 gap-10 rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-foreground/20 md:grid-cols-2 md:p-10"
        >
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{project.year}</Badge>
                <Badge>{project.role}</Badge>
              </div>
              <h3 className="mt-6 text-display-sm font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-muted">{project.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
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
              Read the full case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <ScreenshotPlaceholder
            label={`${project.title} logo`}
            aspect="aspect-[4/3]"
            className="h-full"
            src={project.image}
            objectPosition="object-center"
          />
        </Link>
      </Reveal>
    </div>
  );
}
