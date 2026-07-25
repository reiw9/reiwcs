export const siteConfig = {
  name: "Tala Kayali",
  title: "Tala Kayali — Website Operations & Product Thinking",
  shortTitle: "Tala Kayali",
  role: "Website operator",
  description:
    "Dental student running website operations for a live dental clinic — UI/UX, SEO, accessibility, CMS management, and the technical coordination that keeps it running.",
  url: "https://tala-kayali.dev",
  email: "tala.kayali.09@gmail.com",
  location: "Turkey",
  social: {
    github: "https://github.com/reiw9/",
    linkedin: "https://www.linkedin.com/in/tala-kayali/",
  },
  keywords: [
    "Website Operations",
    "AI-Assisted Web Development",
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
