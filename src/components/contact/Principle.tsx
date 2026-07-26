import { Reveal } from "@/components/ui/Reveal";

// Closes the Contact page. It sits below the form on purpose — above it would
// stack two statements against the section heading, which is the thing that
// made this line feel repetitive on Home.
export function Principle() {
  return (
    <Reveal>
      {/* `italic` is load-bearing: next/font's variable exposes the family name
          only, and every Newsreader @font-face here is font-style: italic — so
          without this the face never matches and it falls back to Georgia. */}
      <p className="mx-auto max-w-4xl text-balance text-center font-statement text-display-md italic text-foreground">
        If someone can update the site without texting me first, I&rsquo;ve done
        my job.
      </p>
    </Reveal>
  );
}
