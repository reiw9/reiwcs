import type { Metadata } from "next";
import { Download } from "lucide-react";
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
        <Reveal delay={0.05}>
          {/* The CV is the same story on one page — link to it here, where the
              on-site version lives. Opens in a new tab so the timeline stays put. */}
          <a
            href="/Tala-Kayali-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground transition-all duration-300 ease-premium hover:scale-[1.03] hover:border-foreground/30 hover:bg-surface-hover hover:shadow-[0_8px_24px_-4px_rgb(0_0_0/0.3)]"
          >
            Download CV (PDF)
            <Download
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-y-0.5"
              strokeWidth={1.8}
              aria-hidden
            />
          </a>
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
