import { Button } from '@/components/ui/button';
import { SignatureArt } from '@/components/signature-art';

export function Hero() {
  return (
    <section id="top" className="container-shell grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      <div className="animate-fade-up">
        <p className="eyebrow">Serenity Spa · a slower kind of beauty</p>
        <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Come back<br />
          <em className="font-normal italic text-primary">to yourself.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          A quiet city sanctuary for slow beauty rituals — considered treatments,
          thoughtful touch, and time that belongs only to you.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#booking" size="lg">Book now</Button>
          <Button href="#services" variant="outline" size="lg">Explore rituals</Button>
        </div>
      </div>
      <div className="animate-fade-up-slow">
        <SignatureArt />
      </div>
    </section>
  );
}
