import { Mountain, Snowflake, Footprints, Bike, Compass } from "lucide-react";
import { TrailBadge } from "@/components/ui/trail-badge";
import { Reveal } from "@/components/reveal";

const industries = [
  {
    icon: Mountain,
    name: "Ski shops",
    copy: "Sizing by height, weight, and ability, matched to your fleet in seconds, so the fitting bench never becomes the bottleneck.",
    rating: "easy" as const,
  },
  {
    icon: Snowflake,
    name: "Snowboard rentals",
    copy: "Boot, board, and binding combos tracked as a single rentable unit, so nothing leaves the shop mismatched.",
    rating: "easy" as const,
  },
  {
    icon: Footprints,
    name: "Nordic centres",
    copy: "High daily turnover on classic and skate gear, with trail-pass and rental checkout handled in the same line.",
    rating: "intermediate" as const,
  },
  {
    icon: Bike,
    name: "Bike rental shops",
    copy: "Swap seasons without swapping software: the same system runs your summer fleet on the exact workflow staff already know.",
    rating: "intermediate" as const,
  },
  {
    icon: Compass,
    name: "Outdoor adventure companies",
    copy: "Kayaks, snowshoes, e-bikes, paddleboards: any serialized gear fits the same inventory and checkout workflow.",
    rating: "expert" as const,
  },
];

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-piste-green">Who it&apos;s for</span>
        <h2 id="industries-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Built for shops that rent gear, not software companies that added rentals
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ icon: Icon, name, copy, rating }) => (
          <div
            key={name}
            className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-mist/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised">
                <Icon size={18} className="text-flare" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <TrailBadge rating={rating} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-snow">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
