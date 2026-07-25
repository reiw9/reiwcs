import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

// Sits high on the page on purpose — this line is meant to be seen, not found.
// The gradient runs off the span's own box, so the first word or two still read
// as foreground before it picks up the accent. That's the same behaviour as the
// hero headline, and it's why the payoff is one span rather than word-by-word.
export function Principle() {
  return (
    <Container>
      <Reveal>
        <p className="mx-auto max-w-4xl text-balance text-center text-display-md font-semibold text-foreground">
          If someone can update the site without texting me first,{" "}
          <span className="text-gradient">I&rsquo;ve done my job.</span>
        </p>
      </Reveal>
    </Container>
  );
}
