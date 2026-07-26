export const siteConfig = {
  name: "Tala Kayali",
  title: "Tala Kayali — Website Operations & Product Thinking",
  shortTitle: "Tala Kayali",
  role: "Website operator",
  description:
    "Dental student running website operations for a live dental clinic — UI/UX, SEO, accessibility, CMS management, and the technical coordination that keeps it running.",
  // The live origin. Every share tag (og:url, og:image), the canonical link, the
  // sitemap and robots.txt are built from this — so it has to be a host that
  // actually resolves. It previously pointed at an unregistered `tala-kayali.dev`,
  // which left link previews with a dead image and told Google the canonical URL
  // didn't exist. Swap this the day a custom domain is wired to the worker.
  url: "https://tala-kayali.myworkss.workers.dev",
  email: "tala.kayali.09@gmail.com",
  location: "Turkey",
  social: {
    github: "https://github.com/reiw9/",
    linkedin: "https://www.linkedin.com/in/tala-kayali/",
  },
  keywords: [
    "Website Operations",
    "Product Thinking",
    "UI/UX",
    "SEO Specialist",
    "Accessibility",
    "CMS Management",
    "Technical Project Coordination",
    "Website Auditing",
    "Junior Product",
    "Website Management",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Proof", href: "/projects" },
  { label: "Capabilities", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;
