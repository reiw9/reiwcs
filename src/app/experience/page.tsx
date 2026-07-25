import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/experience/Timeline";
import { CTASection } from "@/components/home/CTASection";
import { timeline } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Dental school, website operations for JC Dental, and how one led to the other.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section className="pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Dental school, and everything else"
            description="Clinical training and website work, at the same time. The approach underneath doesn't change."
          />
        </Reveal>
      </Section>

      <Section>
        <Timeline entries={[...timeline]} />

        {/* closing note — sits flush with the timeline cards on wide screens */}
        <Reveal>
          <div className="mt-14 border-l-2 border-accent/40 pl-8 sm:ml-16">
            <p className="max-w-2xl text-balance text-lg leading-relaxed text-foreground/85">
              I didn&rsquo;t learn this from a course. I learned it by needing
              something to work, breaking it a few times, and reading until I
              understood why. That&rsquo;s still how I pick up anything new.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
