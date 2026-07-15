import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

// TODO: Replace all testimonials below with real, permission-cleared customer
// quotes and headshots before launch. Placeholder names/shops are illustrative only.
const testimonials = [
  {
    quote:
      "Our Saturday line used to back up past the rental counter by 9am. Now we're through the first wave of the day before the lifts open.",
    name: "Shop Manager",
    shop: "Independent ski shop, Ontario",
    initials: "SM",
  },
  {
    quote:
      "New seasonal staff are running checkout on their own by lunch on day one. That alone paid for the switch.",
    name: "Owner",
    shop: "Snowboard rental shop",
    initials: "O",
  },
  {
    quote:
      "We finally know what's actually on the wall instead of guessing between two spreadsheets and a whiteboard.",
    name: "Operations Lead",
    shop: "Multi-location rental business",
    initials: "OL",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-piste-blue">In their words</span>
        <h2 id="testimonials-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Trusted by Independent Ski Shops
        </h2>
        <p className="mt-3 text-sm text-mist">What shops say after their first busy weekend</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-flare">
          TODO: swap for real, permission-cleared customer quotes and photos before launch
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="flex flex-col p-6">
            <p className="flex-1 text-sm leading-relaxed text-snow">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-raised font-mono text-xs font-semibold text-flare"
              >
                {t.initials}
              </span>
              <div>
                <div className="text-sm font-medium text-snow">{t.name}</div>
                <div className="font-mono text-[11px] text-mist">{t.shop}</div>
              </div>
            </div>
          </Card>
        ))}
      </Reveal>
    </section>
  );
}
