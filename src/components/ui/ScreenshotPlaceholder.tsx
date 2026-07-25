import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScreenshotPlaceholder({
  label,
  caption,
  aspect = "aspect-[16/10]",
  className,
  kind = "Screenshot",
  src,
  imageClassName,
}: {
  label: string;
  caption?: string;
  aspect?: string;
  className?: string;
  kind?: string;
  src?: string;
  imageClassName?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border-2 border-dashed border-border bg-surface-hover shadow-[inset_0_1px_0_0_rgb(var(--border)/0.4)]",
        src ? "border-solid" : "",
        className
      )}
    >
      {src ? (
        <div className={cn("relative w-full", aspect)}>
          <Image
            src={src}
            alt={label}
            fill
            className={cn("object-cover object-top", imageClassName)}
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative flex w-full flex-col items-center justify-center gap-3 bg-grid-pattern bg-[size:28px_28px] px-6 text-center opacity-90",
            aspect
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-sm">
            <ImageIcon className="h-5 w-5 text-foreground/50" strokeWidth={1.5} aria-hidden />
          </div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-foreground/50">
            {kind} placeholder — {label}
          </p>
        </div>
      )}
      {caption ? (
        <figcaption className="border-t border-border bg-surface px-5 py-3 text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
