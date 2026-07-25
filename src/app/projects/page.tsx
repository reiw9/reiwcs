import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ExternalProjectCard } from "@/components/projects/ExternalProjectCard";
import { otherProjects, projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "Case study of JC Dental — the live clinic website where I handle UI/UX, SEO, accessibility, CMS management, deployment, and QA.",
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
        <div className="mt-6 flex flex-col gap-5">
          {otherProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <ExternalProjectCard project={project} />
            </Reveal>
          ))}
        </div>
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
