import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/lib/data/skills";

export function SkillsPreview() {
  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I keep choosing to work on"
            description="I connect product thinking, hands-on building, and the everyday work of keeping a site healthy."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-foreground"
          >
            See all capabilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <RevealItem key={category.title}>
            <Card className="h-full">
              <h3 className="text-lg font-medium text-foreground">
                {category.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {category.skills.slice(0, 4).map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
