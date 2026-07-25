import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function JourneyPreview() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-surface p-8 md:grid-cols-[0.9fr_1.1fr] md:p-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            An unusual path
          </p>
          <h2 className="mt-4 text-display-sm font-semibold text-balance text-foreground">
            From the clinic to the dashboard
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <p className="text-balance leading-relaxed text-muted">
            I&rsquo;m training to be a dentist, not a software engineer. But
            booking friction, content bottlenecks, and accessibility gaps
            turned into a second skill set: fixing them with the same
            diagnostic discipline I use in clinic.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Read my full story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
