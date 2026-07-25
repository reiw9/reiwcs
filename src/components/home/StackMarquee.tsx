const stack = [
  "Product Thinking",
  "User Experience",
  "Accessibility",
  "Problem Solving",
  "Continuous Learning",
  "Attention to Detail",
  "Website Operations",
  "Curiosity",
];

export function StackMarquee() {
  const items = [...stack, ...stack];
  return (
    <div className="group relative overflow-hidden border-y border-border py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <span className="sr-only">What this work is built on: {stack.join(", ")}</span>
      <div
        aria-hidden
        className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-muted transition-colors duration-300 hover:text-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-border transition-colors duration-300 group-hover:bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
