import { Button } from '@/components/ui/button';

export function Booking() {
  return (
    <section id="booking" className="bg-foreground py-16 text-background md:py-24">
      <div className="container-shell grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="eyebrow">Make space for you</p>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
            Ready to <em className="font-normal italic text-secondary">feel lighter?</em>
          </h2>
        </div>
        <div className="md:justify-self-end">
          <p className="max-w-sm text-background/80">
            Leave the details to us. Book online or call the front desk and we will
            find the right ritual for your day.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="mailto:hello@serenityspa.example" variant="accent" size="lg">Book now</Button>
            <a
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl border border-background/40 px-7 text-base font-semibold tracking-wide transition-all duration-200 hover:bg-background/10"
              href="tel:+17185550142"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
