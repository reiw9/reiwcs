"use client";

import { Fragment, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.09 },
  }),
};

// Single words slide up out of a clipping mask.
const headlineWord = {
  hidden: { opacity: 0, y: "0.9em" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0em",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.15 + i * 0.08,
    },
  }),
};

// The accent phrase has to stay inline so it can wrap, and inline elements
// ignore transforms — so it focuses in from a blur instead of sliding.
const headlinePhrase = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.15 + i * 0.08,
    },
  }),
};

// The accent phrase animates as one unit so its gradient stays continuous
// across the words instead of restarting on each one.
const headline = [
  { text: "My", accent: false },
  { text: "first", accent: false },
  { text: "website", accent: false },
  { text: "sparked", accent: false },
  { text: "a curiosity I didn’t expect.", accent: true },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The headline sweep animates background-position, which the compositor can't
  // take over — it repaints the text every frame for as long as it runs, and it
  // runs forever. It looks the same whether or not it's still going once the
  // hero has scrolled off, so it only stays running while the hero is on screen.
  const heroInView = useInView(ref);

  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const blobAltY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "70px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pb-28 pt-24 md:pb-36 md:pt-32"
    >
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: gridY }}
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]"
      />
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: blobY }}
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px] animate-float"
      />
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: blobAltY }}
        className="pointer-events-none absolute left-[20%] top-[5%] h-[280px] w-[420px] rounded-full bg-accent-alt/15 blur-[100px] animate-float-slow"
      />

      <Container className="relative">
        <motion.div style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}>
          <h1 className="mx-auto max-w-4xl text-balance text-center text-display-lg font-semibold text-foreground">
            {headline.map((word, i) =>
              word.accent ? (
                <motion.span
                  key={word.text}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={headlinePhrase}
                  className={cn("text-gradient", !heroInView && "sweep-paused")}
                >
                  {word.text}
                </motion.span>
              ) : (
                <Fragment key={word.text}>
                  <span className="inline-block overflow-hidden pb-[0.08em] align-bottom [margin-bottom:-0.08em]">
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      variants={headlineWord}
                      className="inline-block"
                    >
                      {word.text}
                    </motion.span>
                  </span>{" "}
                </Fragment>
              )
            )}
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={8}
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-balance text-center text-base leading-relaxed text-muted md:text-lg md:leading-relaxed"
          >
            I&rsquo;m a dental student. I keep coming back to building websites
            because I still haven&rsquo;t run out of things I want to improve.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={9}
            variants={fadeUp}
            className="mx-auto mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/projects" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Take a look
            </Button>
            <Button href="/contact" variant="secondary" size="lg" icon={<Mail className="h-4 w-4" />}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={10}
            variants={fadeUp}
            className="mx-auto mt-6 flex items-center justify-center gap-1.5 text-xs text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
            Always learning. Always improving.
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
