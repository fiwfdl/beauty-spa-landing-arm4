export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-shell flex h-24 flex-wrap items-center justify-between gap-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Serenity <em className="font-normal italic">Spa</em>
        </a>
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
          © 2026 Serenity Spa · made for slower days
        </p>
        <div className="flex gap-6">
          <a className="text-sm underline-offset-4 hover:underline" href="mailto:hello@serenityspa.example">Contact</a>
          <a className="text-sm underline-offset-4 hover:underline" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
