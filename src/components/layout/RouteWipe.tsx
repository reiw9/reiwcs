"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function RouteWipe() {
  const pathname = usePathname();
  const lastPath = useRef(pathname);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    setActive(`${pathname}-${Date.now()}`);
  }, [pathname]);

  if (!active) return null;

  return (
    <motion.div
      key={active}
      aria-hidden
      onAnimationComplete={() => setActive(null)}
      className="pointer-events-none fixed inset-x-0 bottom-0 top-16 z-40 border-t-4 border-accent bg-gradient-to-b from-accent via-accent/85 to-background shadow-[0_-12px_60px_rgb(var(--accent)/0.55)]"
      initial={{ y: 0 }}
      animate={{ y: "100%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
