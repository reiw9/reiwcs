"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const rule: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const word: Variants = {
  hidden: { y: "0.9em", opacity: 0 },
  visible: { y: "0em", opacity: 1, transition: { duration: 0.75, ease } },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={container}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <motion.p
          variants={fade}
          className={cn(
            "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent",
            align === "center" && "justify-center"
          )}
        >
          <motion.span
            aria-hidden
            variants={rule}
            className="h-px w-8 origin-left bg-accent/60"
          />
          {eyebrow}
        </motion.p>
      ) : null}

      <h2 className="text-balance text-display-md font-semibold text-foreground">
        {title.split(" ").map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <span className="inline-block overflow-hidden pb-[0.08em] align-bottom [margin-bottom:-0.08em]">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>{" "}
          </Fragment>
        ))}
      </h2>

      {description ? (
        <motion.p
          variants={fade}
          className="mt-5 text-balance text-lg leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
