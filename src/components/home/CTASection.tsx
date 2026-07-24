import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-balance text-display-sm font-semibold text-foreground">
            Have a website that needs someone who&rsquo;ll stick with it?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-muted">
            Remote roles, freelance work, or a focused project — if that
            sounds like what you need, let&rsquo;s talk.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" icon={<Mail className="h-4 w-4" />}>
              Get in touch
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              See my work
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
