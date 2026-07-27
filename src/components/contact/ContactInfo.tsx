import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const socials = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-8">
      <div className="flex flex-col gap-5">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group flex items-center gap-3 text-sm text-foreground"
        >
          <Mail className="h-4 w-4 text-muted" strokeWidth={1.5} />
          <span className="underline decoration-border underline-offset-4 transition-colors group-hover:decoration-foreground">
            {siteConfig.email}
          </span>
        </a>
        <div className="flex items-center gap-3 text-sm text-muted">
          <MapPin className="h-4 w-4" strokeWidth={1.5} />
          {siteConfig.location} · Remote-friendly
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          Elsewhere
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <social.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                {social.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
