import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StackMarquee } from "@/components/home/StackMarquee";
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
      <StackMarquee />
      <Section className="pb-0 pt-24 md:pt-32">
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
