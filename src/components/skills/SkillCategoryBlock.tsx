import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { SkillCategory } from "@/types";

export function SkillCategoryBlock({
  category,
  icon: Icon,
  index,
}: {
  category: SkillCategory;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="group grid grid-cols-1 gap-8 border-t border-border py-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-[0_10px_30px_-12px_rgb(var(--accent)/0.6)]">
            <Icon
              className="h-5 w-5 text-accent transition-transform duration-500 ease-premium group-hover:scale-110"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <h3 className="mt-5 text-xl font-medium text-foreground">
            {category.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {category.description}
          </p>
        </div>

        <RevealGroup className="flex flex-wrap content-start gap-2.5">
          {category.skills.map((skill) => (
            <RevealItem key={skill}>
              <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/10 hover:text-accent">
                {skill}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Reveal>
  );
}
