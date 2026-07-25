import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h1 className="mt-5 text-balance text-display-md font-semibold text-foreground">
          Dentistry taught me how to diagnose. Website work taught me how to
          ship.
        </h1>
        <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted">
          I&rsquo;m a 4th-year dental student. I&rsquo;m also the person who
          keeps a dental clinic&rsquo;s website healthy — the kind of work most
          people only notice when it stops happening.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ScreenshotPlaceholder
          label="Portrait"
          kind="Photo"
          aspect="aspect-[4/5]"
        />
      </Reveal>
    </div>
  );
}
