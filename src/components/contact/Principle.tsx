"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const LINE =
  "If someone can update the site without texting me first, I’ve done my job.";
const WORDS = LINE.split(" ");
// Indices of "texting" and "me" — the two words the light stays on.
const KEY_WORDS = [7, 8];

// Opens the Contact page, above the form.
export function Principle() {
  const ref = useRef<HTMLParagraphElement>(null);
  // The wave waits for the reader instead of playing to an empty room.
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  // Running index across the whole sentence — it drives the animation-delay
  // that makes the light travel rather than flash all at once.
  let letter = -1;

  return (
    <Reveal>
      {/* `italic` is load-bearing: next/font's variable exposes the family name
          only, and every Newsreader @font-face here is font-style: italic — so
          without this the face never matches and it falls back to Georgia. */}
      <p
        ref={ref}
        className="mx-auto max-w-4xl text-balance text-center font-statement text-display-md italic text-foreground"
      >
        {/* The line is split into per-letter spans for the wave, so the real
            sentence is read out once here rather than letter by letter. */}
        <span className="sr-only">{LINE}</span>
        <span aria-hidden>
          {WORDS.map((word, w) => (
            // Word boxes keep their letters together; the plain space that
            // follows is the break opportunity, so it still wraps on a phone.
            <span key={w}>
              <span className="inline-block whitespace-nowrap">
                {[...word].map((char) => {
                  letter += 1;
                  return (
                    <span
                      key={letter}
                      className={
                        inView
                          ? KEY_WORDS.includes(w)
                            ? "statement-letter-key"
                            : "statement-letter"
                          : undefined
                      }
                      style={
                        inView
                          ? { animationDelay: `${letter * 0.035}s` }
                          : undefined
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </span>{" "}
            </span>
          ))}
        </span>
      </p>
    </Reveal>
  );
}
