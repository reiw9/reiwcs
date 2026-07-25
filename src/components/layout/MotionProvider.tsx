"use client";

import { MotionConfig } from "framer-motion";

/**
 * globals.css already neutralises CSS animations for prefers-reduced-motion.
 * This does the same for every framer-motion animation on the site.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
