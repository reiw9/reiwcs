"use client";

import { useEffect, useState } from "react";

// Her clock, not the visitor's — the point of the line is where she is.
const TIME_ZONE = "Europe/Istanbul";

export function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: TIME_ZONE,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Nothing until mounted: the server has no business guessing the minute.
  if (!now) return null;

  return <span className="font-mono tabular-nums text-foreground">{now}</span>;
}
