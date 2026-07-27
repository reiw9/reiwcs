import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { CTASection } from "@/components/home/CTASection";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Website Operations & Product Thinking",
  description:
    "Portfolio of Tala Kayali — dental student and website operator handling UI/UX, SEO, accessibility, and technical coordination for JC Dental.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* The hero's own pb-28/36 supplies the gap here; the strip that used to
          sit between them (with its own top padding) is gone, so no extra pt.
          cn() has no tailwind-merge, so the md: override is spelled out —
          without md:pt-0, the Section's md:py-32 wins at desktop. */}
      <Section className="pb-0 pt-0 md:pt-0">
        <FeaturedProject />
      </Section>
      <Section>
        <SkillsPreview />
      </Section>
      <Section className="pt-0">
        <JourneyPreview />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
