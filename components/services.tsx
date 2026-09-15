const services = [
  {
    number: '01',
    name: 'The Stillness Facial',
    time: '75 min',
    copy: 'A sculpting facial with warm compresses and quiet massage for skin that looks deeply rested.',
  },
  {
    number: '02',
    name: 'Moonlit Massage',
    time: '90 min',
    copy: 'Slow, intuitive bodywork with aromatic oils to soften the places where you hold the day.',
  },
  {
    number: '03',
    name: 'The Full Exhale',
    time: '120 min',
    copy: 'Our signature pairing of facial and massage, finished with tea in the sanctuary lounge.',
  },
];

export function Services() {
  return (
    <section id="services" className="container-shell py-16 md:py-24">
      <div className="max-w-xl">
        <p className="eyebrow">The menu</p>
        <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
          Rituals for <em className="font-normal italic text-primary">every season.</em>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nothing here is rushed. Choose the treatment that meets you where you are.
        </p>
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-3" role="list">
        {services.map((s) => (
          <li
            key={s.number}
            className="rounded-2xl border border-border bg-card p-7 text-card-foreground shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.number} · {s.time}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{s.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
