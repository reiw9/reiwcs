import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Narrative } from "@/components/about/Narrative";
import { ProblemSolving } from "@/components/about/ProblemSolving";
import { Positioning } from "@/components/about/Positioning";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "How a 4th-year dental student ended up running website operations — and why the diagnostic mindset from clinic transfers directly.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0">
        <AboutHero />
      </Section>
      <Section>
        <Narrative />
      </Section>
      <Section className="pt-0">
        <ProblemSolving />
      </Section>
      <Section className="pt-0">
        <Positioning />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
