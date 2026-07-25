import type { TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  {
    id: "dental",
    period: "4th Year",
    title: "Dental Student",
    subtitle: "Faculty of Dentistry, Turkey",
    description:
      "Clinical training builds the same muscle the web work runs on: diagnose before you treat, work precisely when there's no margin for a second attempt, and stay calm when a case stops going to plan.",
    points: [
      "Case assessment and structured problem-solving",
      "Working to protocol, where small errors carry consequences",
      "Carrying technical work alongside a full course load",
    ],
    status: "ongoing",
  },
  {
    id: "jc-dental",
    period: "2026 – Present",
    title: "Website Operations",
    subtitle: "JC Dental · jc-dent.com",
    description:
      "I run the website day to day: deciding what needs to change, checking every result, and making the call on whether it's ready to go live. When something breaks, it comes to me.",
    points: [
      "Reworked the booking flow around where people were getting stuck",
      "Ran SEO and accessibility passes across every page",
      "Managed deployment, content infrastructure, and the database (Cloudflare, Sanity, Supabase)",
      "Ran security, performance, and cross-device QA passes",
      "Wrote the documentation so the work doesn't live only in my head",
    ],
    status: "ongoing",
  },
];
