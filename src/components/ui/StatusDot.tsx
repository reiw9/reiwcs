export function StatusDot({ status }: { status: "ongoing" | "complete" }) {
  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden>
      {status === "ongoing" ? (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
      ) : null}
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
    </span>
  );
}
