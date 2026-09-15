export function Visit() {
  return (
    <section id="visit" className="container-shell grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="eyebrow">Find your way here</p>
        <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
          Your little <em className="font-normal italic text-primary">pause in the city.</em>
        </h2>
        <p className="mt-4 text-muted-foreground">Tuesday–Saturday, 9am–7pm · Sunday, 10am–4pm</p>
        <address className="mt-2 not-italic text-muted-foreground">
          18 Willow Lane, Brooklyn, NY 11201
        </address>
        <a
          className="mt-6 inline-block font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary underline decoration-primary/60 underline-offset-8 hover:decoration-primary"
          href="tel:+17185550142"
        >
          Call the front desk
        </a>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-soft"
        role="img"
        aria-label="Stylized map marker card showing the spa address, 18 Willow Lane"
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-primary text-center font-display text-2xl text-primary" aria-hidden="true">
          18
        </div>
        <p className="mt-4 text-center font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">Willow Lane</p>
      </div>
    </section>
  );
}
