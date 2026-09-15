export function SignatureArt() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-secondary shadow-soft-lg"
      role="img"
      aria-label="Illustration of layered stone arches and botanical leaves in soft rose and lavender tones"
    >
      <div className="aspect-[4/5] w-full" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-breathe" aria-hidden="true" />
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M120 470 C120 300 120 180 200 90 C280 180 280 300 280 470" />
        <path d="M145 470 C145 320 145 210 200 140 C255 210 255 320 255 470" />
        <path d="M96 470 L304 470" />
        <path d="M200 240 C160 232 128 200 124 156 C168 150 200 182 200 240 Z" />
        <path d="M200 240 C240 232 272 200 276 156 C232 150 200 182 200 240 Z" />
        <path d="M200 300 C170 306 140 332 138 366 C168 368 196 344 200 300 Z" />
        <path d="M200 300 C230 306 260 332 262 366 C232 368 204 344 200 300 Z" />
        <path d="M200 90 L200 40" />
        <circle cx="200" cy="30" r="8" />
      </svg>
      <p className="absolute bottom-5 left-6 font-sans text-xs uppercase tracking-[0.2em] text-secondary-foreground">
        Breathe in <span aria-hidden="true">·</span> arrive
      </p>
    </div>
  );
}
