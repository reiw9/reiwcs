"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-foreground/20 hover:bg-surface-hover hover:shadow-[0_16px_40px_-12px_rgb(0_0_0/0.35)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgb(var(--accent) / 0.15), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
