import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export { SectionHeading } from "./SectionHeading";
