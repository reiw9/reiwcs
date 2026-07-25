import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const socials = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
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
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {siteConfig.email}
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
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
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
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <social.icon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                    {social.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
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
          <p>Designed and coordinated by {siteConfig.name}.</p>
        </div>
      </Container>
    </footer>
  );
}
