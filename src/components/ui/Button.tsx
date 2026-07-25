import Link from "next/link";
import { cn } from "@/lib/utils";
import type { UrlObject } from "url";

type Href = string | UrlObject;

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-premium hover:scale-[1.03] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-foreground text-background shadow-[0_0_0_0_rgb(var(--accent)/0)] hover:bg-foreground/85 hover:shadow-[0_8px_24px_-4px_rgb(var(--accent)/0.45)] active:scale-[0.98]",
  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/30 hover:bg-surface-hover hover:shadow-[0_8px_24px_-4px_rgb(0_0_0/0.3)] active:scale-[0.98]",
  ghost: "text-foreground hover:bg-surface-hover active:scale-[0.98]",
};

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-7 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  href,
  ...props
}: ButtonBaseProps &
  ({ href: Href } & Omit<React.ComponentProps<typeof Link>, "href">)) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </Link>
  );
}

export function ButtonAsButton({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span>{icon}</span> : null}
    </button>
  );
}
