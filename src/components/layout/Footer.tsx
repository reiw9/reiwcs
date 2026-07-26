import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { LocalTime } from "@/components/layout/LocalTime";

// The handle inside each profile URL — "reiw9", "tala-kayali".
const handle = (url: string) => url.replace(/\/+$/, "").split("/").pop() ?? "";

const socials = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
    handle: `@${handle(siteConfig.social.github)}`,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    handle: handle(siteConfig.social.linkedin),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-sm font-medium lowercase tracking-[0.18em] text-foreground">
              {siteConfig.shortTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.role} based in {siteConfig.location}, working with
              people wherever they are.
            </p>
            {/* Two rules stacked: the grey one is the resting underline, the
                accent one draws over it from the left on hover. */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group relative mt-5 inline-block pb-1 text-sm text-foreground"
            >
              {siteConfig.email}
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border" />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-100"
              />
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Navigate
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-accent transition-all duration-300 ease-premium group-hover:mr-2 group-hover:w-4"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Elsewhere
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  {/* The visible half of this swaps between two words, so the
                      accessible name carries both and the moving parts are
                      hidden from assistive tech entirely. */}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${social.label} — ${social.handle}`}
                    className="swap group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <social.icon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                    <span className="relative block h-5 overflow-hidden" aria-hidden>
                      <span className="swap-label block">{social.label}</span>
                      <span className="swap-handle absolute inset-x-0 top-0 block font-mono text-xs leading-5 text-accent">
                        {social.handle}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
            and Tailwind CSS.
          </p>
          <p className="flex flex-wrap items-center gap-2">
            {/* Green because it means something — availability — rather than
                decorating. Same dot as the Contact card. */}
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Currently available · <LocalTime /> in {siteConfig.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
