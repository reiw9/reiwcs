import type { Metadata } from "next";
import { Server, Sparkles, Compass, Database, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SkillCategoryBlock } from "@/components/skills/SkillCategoryBlock";
import { CTASection } from "@/components/home/CTASection";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "What I do on a live website: keep it running, decide what changes, and make sure it stays fast, findable, and usable.",
};

const icons = [Server, Sparkles, Compass, Database, ShieldCheck];

export default function SkillsPage() {
  return (
    <>
      <Section className="pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What the job involves"
            description="Skills are easy to list. The way they're applied is what matters."
          />
        </Reveal>
      </Section>

      <Section>
        <div>
          {skillCategories.map((category, i) => (
            <SkillCategoryBlock
              key={category.title}
              category={category}
              icon={icons[i] ?? Server}
              index={i}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
