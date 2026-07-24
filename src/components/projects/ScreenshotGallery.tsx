import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

export function ScreenshotGallery({
  items,
}: {
  items: readonly { label: string; caption: string; src?: string; aspect?: string }[];
}) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <RevealItem key={item.label}>
          <ScreenshotPlaceholder
            label={item.label}
            caption={item.caption}
            src={item.src}
            aspect={item.aspect}
          />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
