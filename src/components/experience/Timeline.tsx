"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import type { TimelineEntry } from "@/types";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
      >
        {/* accent trace that draws itself as the timeline scrolls past */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-alt to-accent"
        />
      </div>

      <ol className="flex flex-col gap-14">
        {entries.map((entry, i) => (
          <li key={entry.id} className="relative">
            <Reveal delay={i * 0.06}>
              <div className="group grid grid-cols-1 gap-6 sm:grid-cols-[32px_1fr] sm:gap-8">
                <div className="hidden sm:flex sm:justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                    transition={{ type: "spring", stiffness: 420, damping: 18, delay: 0.15 }}
                    className="relative mt-1.5 flex h-3 w-3"
                  >
                    {entry.status === "ongoing" ? (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    ) : null}
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-background bg-accent transition-transform duration-300 group-hover:scale-125" />
                  </motion.span>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-8 transition-all duration-300 ease-premium group-hover:-translate-y-1 group-hover:border-foreground/20 group-hover:shadow-[0_16px_40px_-12px_rgb(0_0_0/0.35)]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* the rail dot is hidden on mobile, so the status moves inside the card */}
                    <span className="sm:hidden">
                      <StatusDot status={entry.status} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{entry.subtitle}</p>
                  <p className="mt-5 max-w-2xl text-balance leading-relaxed text-muted">
                    {entry.description}
                  </p>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                    className="mt-6 flex flex-col gap-2.5"
                  >
                    {entry.points.map((point) => (
                      <motion.li
                        key={point}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
