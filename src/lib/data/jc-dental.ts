export const jcDental = {
  meta: {
    title: "JC Dental",
    tagline: "Website operations for a dental clinic",
    role: "Website Operations",
    year: "2026 — Present",
    status: "ongoing",
    links: {
      live: "https://jc-dent.com/",
      repo: "#",
    },
    stack: ["UI/UX", "Security", "Performance", "QA"],
  },

  overview: {
    heading: "Overview",
    body: [
      "JC Dental is a dental clinic's website. I'm the website operator — deciding what patients see when they try to book an appointment, and giving clinic staff the ability to change content themselves without a developer.",
      "My role isn't writing every line of code myself. It's deciding what needs to change, reviewing every result, and making sure the finished product is something I'd stand behind.",
      "The specifics — what was actually broken, what I changed, and what I learned — are below.",
    ],
  },

  challenges: [
    {
      heading: "Booking flow friction",
      body: "The appointment booking flow asked for too much upfront, gave unclear feedback at each step, and left patients unsure whether their booking had gone through at all — a serious problem for a healthcare site where trust matters.",
    },
    {
      heading: "Non-technical content updates",
      body: "Clinic staff needed to update services, team bios, and pricing regularly, but every change required a developer to touch code. That bottleneck meant content went stale and small updates took far longer than they should.",
    },
    {
      heading: "Local SEO & discoverability",
      body: "As a local practice, JC Dental depends on ranking for local, intent-driven search terms. Thin metadata, missing structured data, and non-semantic markup were quietly working against that goal.",
    },
    {
      heading: "Accessibility gaps",
      body: "Form fields without proper labels, inconsistent focus states, and contrast issues meant the site was harder to use for patients relying on screen readers, keyboard navigation, or simply larger text — an especially important gap to close on a healthcare site.",
    },
    {
      heading: "Security & operational risk",
      body: "The site handles patient contact and booking data. That raises the bar on how auth, database access rules, and environment configuration are handled — and on how carefully deployments are reviewed before they go live.",
    },
    {
      heading: "Performance on mobile",
      body: "Marketing and service pages were image-heavy, and most patients were arriving on mobile connections — so load time directly affected whether visitors stayed long enough to book.",
    },
  ],

  solutions: [
    {
      heading: "Simplified, guided booking flow",
      body: "Reworked the booking flow into clearer steps with explicit progress and confirmation states, reducing the fields asked for upfront and making sure every patient gets an unambiguous confirmation that their appointment was booked.",
    },
    {
      heading: "Sanity CMS content modeling",
      body: "Modeled Sanity schemas for services, team members, and site content so clinic staff can publish updates directly — no developer required for routine changes, with structure still enforced so the front end never breaks.",
    },
    {
      heading: "Structured SEO pass",
      body: "Added descriptive metadata, Open Graph tags, and structured data for the business, cleaned up heading hierarchy and semantic HTML, and built out an internal linking and sitemap structure aimed at local search visibility.",
    },
    {
      heading: "Accessibility remediation",
      body: "Audited the site against WCAG-aligned practices: added proper label associations, fixed focus and contrast issues, and tested keyboard-only navigation across the key user flows, including booking.",
    },
    {
      heading: "Security review & hardening",
      body: "Reviewed Supabase access rules and auth flows, audited environment variable and secret handling, and tightened Cloudflare-level configuration — treating this as an ongoing practice rather than a one-time check.",
    },
    {
      heading: "Performance optimization",
      body: "Optimized and lazy-loaded images, trimmed unnecessary weight from key pages, and leaned on Cloudflare's CDN and caching to keep mobile load times down.",
    },
    {
      heading: "Process & workflow",
      body: "Introduced a structured Git/GitHub workflow — feature branches, PR review, and a pre-deploy checklist — plus technical documentation so decisions and setup steps are recorded, not just remembered.",
    },
  ],

  lessonsLearned: [
    {
      heading: "The judgment mattered more than the tool",
      body: "Good results didn't come from AI alone — they came from writing clear specs, reviewing every change critically, and knowing the system well enough to catch an output that looked right but wasn't.",
    },
    {
      heading: "Staff needed a workflow, not access to code",
      body: "Giving clinic staff a CMS instead of ad-hoc code changes turned content updates from a bottleneck into a non-issue — the fix was a process change as much as a technical one.",
    },
    {
      heading: "Accessibility and SEO overlap more than expected",
      body: "Cleaning up semantic HTML and heading structure for accessibility improved crawlability and SEO signals at the same time — the two audits kept reinforcing each other.",
    },
    {
      heading: "Security is a practice, not a checkbox",
      body: "The most useful shift was treating auditing as a recurring habit tied to every meaningful change, rather than a one-off pass done once and forgotten.",
    },
    {
      heading: "Watching beats assuming",
      body: "Several booking-flow decisions changed after watching where patients got stuck, which didn't always match what I'd assumed needed fixing.",
    },
  ],

  futureImprovements: [
    "Measure where patients drop off in the booking funnel, instead of guessing.",
    "Cover the booking flow with automated tests, so QA isn't all manual.",
    "Bring multi-language support to reach a broader patient base.",
    "Push performance further with heavier image and edge-caching optimization.",
    "Formalize a small design system, so the UI stays consistent as the site grows.",
  ],
} as const;
