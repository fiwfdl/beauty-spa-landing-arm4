import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
          Serenity <em className="font-normal italic">Spa</em>
        </a>
        <nav aria-label="Main navigation" className="hidden gap-8 md:flex">
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#services">Rituals</a>
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#about">Philosophy</a>
          <a className="text-sm font-medium underline-offset-4 hover:underline" href="#visit">Visit</a>
        </nav>
        <Button href="#booking" aria-label="Book an appointment">Book now</Button>
      </div>
    </header>
  );
}
