import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyHeader } from "@/components/projects/CaseStudyHeader";
import { InfoGrid } from "@/components/projects/InfoGrid";
import { CTASection } from "@/components/home/CTASection";
import { jcDental } from "@/lib/data/jc-dental";

export const metadata: Metadata = {
  title: "JC Dental — Case Study",
  description:
    "A case study of JC Dental: the challenges, solutions, technologies, and lessons behind hands-on website operations work on a live dental clinic site.",
};

export default function JCDentalPage() {
  return (
    <>
      <Section className="pb-0">
        <CaseStudyHeader />
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow={jcDental.overview.heading} title="What this project is" />
        </Reveal>
        <Reveal delay={0.05} className="mt-10 flex max-w-2xl flex-col gap-5">
          {jcDental.overview.body.map((paragraph) => (
            <p key={paragraph} className="text-balance leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <SectionHeading
            eyebrow="Challenges"
            title="What was actually broken"
            description="Specific problems, not generic pain points."
          />
        </Reveal>
        <div className="mt-14">
          <InfoGrid items={jcDental.challenges} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="What I changed, and why"
          />
        </Reveal>
        <div className="mt-14">
          <InfoGrid items={jcDental.solutions} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <SectionHeading eyebrow="Lessons Learned" title="What stuck" />
        </Reveal>
        <div className="mt-14">
          <InfoGrid items={jcDental.lessonsLearned} columns={2} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <SectionHeading eyebrow="What's Next" title="Where this project goes from here" />
        </Reveal>
        <Reveal delay={0.05} className="mt-10 max-w-2xl">
          <ul className="flex flex-col gap-4">
            {jcDental.futureImprovements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted">
                <CircleCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
