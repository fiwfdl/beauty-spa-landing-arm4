export function About() {
  return (
    <section id="about" className="border-y border-border bg-muted py-16 md:py-24">
      <div className="container-shell grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
        <blockquote className="text-3xl leading-snug tracking-tight md:text-4xl">
          <span aria-hidden="true" className="text-primary">&ldquo;</span>
          Beauty is not something to chase.{' '}
          <em className="font-normal italic text-primary">It is a way of being here.</em>
        </blockquote>
        <div>
          <p className="eyebrow">Our philosophy</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Serenity Spa was founded on a simple belief: care should never feel like a
            transaction. Small rooms, unhurried appointments, therapists who remember
            your name — and the quiet luxury of feeling present in your own skin.
          </p>
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.15em] text-primary">
            — Elian Voss, founder
          </p>
        </div>
      </div>
    </section>
  );
}
