import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Principle } from "@/components/contact/Principle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you're working on — a full brief or a two-line question both reach me.",
};

export default function ContactPage() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Tell me what you're working on"
          description="A full brief or a two-line question — both work."
        />
      </Reveal>

      <div className="mt-16 md:mt-20">
        <Principle />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactInfo />
        </Reveal>
      </div>
    </Section>
  );
}
