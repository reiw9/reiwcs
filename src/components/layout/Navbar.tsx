"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const monogram = siteConfig.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const condensed = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 md:px-6">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Keeps page content from showing through the gap above the capsule. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-background via-background/85 to-transparent transition-opacity duration-500 ease-premium",
          condensed ? "opacity-100" : "opacity-0"
        )}
      />

      {/* The bar contracts into a floating capsule once the page scrolls. */}
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-premium",
          condensed
            ? "mt-3 max-w-4xl rounded-[28px] border border-border bg-background/70 shadow-[0_18px_50px_-24px_rgb(0_0_0/0.75)] backdrop-blur-xl"
            : "mt-0 max-w-content rounded-none border border-transparent bg-transparent"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between gap-6 transition-all duration-500 ease-premium",
            condensed ? "h-14 px-4 md:px-5" : "h-16 px-2 md:px-4"
          )}
        >
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "relative flex items-center justify-center overflow-hidden rounded-xl border border-accent/40 bg-accent/10 font-semibold text-accent transition-all duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-105 group-hover:border-accent/70 group-hover:bg-accent/20 group-hover:shadow-[0_0_0_3px_rgb(var(--accent)/0.12)]",
                condensed ? "h-8 w-8 text-[11px]" : "h-9 w-9 text-xs"
              )}
              aria-hidden
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/25 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative tracking-tight">{monogram}</span>
            </span>

            <AnimatePresence initial={false}>
              {condensed ? null : (
                <motion.span
                  key="wordmark"
                  initial={{ opacity: 0, maxWidth: 0 }}
                  animate={{ opacity: 1, maxWidth: 200 }}
                  exit={{ opacity: 0, maxWidth: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden whitespace-nowrap pb-1.5 font-signature text-[30px] leading-none text-foreground"
                >
                  {siteConfig.name}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-surface"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      aria-hidden
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="absolute inset-0 scale-90 rounded-full bg-surface opacity-0 transition-all duration-300 ease-premium group-hover:scale-100 group-hover:opacity-70"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                  {active ? (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      aria-hidden
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all duration-300 ease-premium hover:scale-[1.04] hover:shadow-[0_8px_26px_-8px_rgb(var(--accent)/0.9)] md:inline-flex"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
              />
              <span className="relative">Contact</span>
              <ArrowUpRight
                className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/60 hover:text-accent md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-5">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base transition-colors",
                          active
                            ? "bg-surface text-foreground"
                            : "text-muted hover:bg-surface hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
