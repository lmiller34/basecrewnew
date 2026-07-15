import { TrailBadge } from "@/components/ui/trail-badge";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    day: "Days 1–2",
    title: "Import & configure",
    copy: "We import your inventory and customer list and set up your rental categories, sizing rules, and pricing.",
    rating: "easy" as const,
  },
  {
    day: "Days 3–4",
    title: "Train your team",
    copy: "A guided walkthrough with your staff, run on your own equipment, so everyone's checkout-ready before opening day.",
    rating: "intermediate" as const,
  },
  {
    day: "Days 5–7",
    title: "Go live",
    copy: "Your shop runs on Basecrew with our support team watching your first live weekend alongside you.",
    rating: "expert" as const,
  },
];

export function ImplementationTimeline() {
  return (
    <section aria-labelledby="timeline-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-piste-blue">Getting started</span>
        <h2 id="timeline-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Switch systems without missing a weekend
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          Every shop is live within one week, guaranteed: timed so onboarding never eats into your season.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.day} className="relative rounded-2xl border border-border bg-surface/60 p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-mist">{s.day}</span>
              <TrailBadge rating={s.rating} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-snow">
              <span className="mr-2 text-flare">0{i + 1}</span>
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
