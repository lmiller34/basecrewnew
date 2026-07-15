import { Check, Building2, Infinity as InfinityIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

const tiers = [
  {
    name: "Starter",
    price: "$79",
    blurb: "For small rental shops running one location.",
    features: ["Unlimited checkouts, no per-transaction fees", "Inventory tracking", "Customer management", "Basic reporting"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$179",
    blurb: "For shops that live and die by their Saturday line.",
    features: [
      "Unlimited checkouts, no per-transaction fees",
      "Advanced inventory",
      "Fast checkout workflow",
      "Returns management",
      "Damage tracking",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Peak Season",
    price: "$299",
    blurb: "For multi-location and resort operations.",
    features: ["Unlimited checkouts, no per-transaction fees", "Multi-location", "Advanced reporting", "Premium onboarding", "Priority support"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-flare">Pricing</span>
        <h2 id="pricing-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          One flat price. No per-checkout fees, ever.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          A lot of rental software charges per transaction, which means the bigger your
          Saturday gets, the more you pay, right when you need the software most. Every
          Basecrew plan is flat, with unlimited checkouts and returns included. These
          plans reflect what most shops land on. Your exact fit depends on fleet size
          and season length, so we confirm final pricing on your demo call, not before it.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-7 transition-colors duration-200",
              t.popular
                ? "border-flare bg-surface shadow-xl shadow-flare/10"
                : "border-border bg-surface/50 hover:border-mist/30"
            )}
          >
            {t.popular && (
              <span className="absolute -top-3 left-7 rounded-full bg-flare px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-night">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-snow">{t.name}</h3>
            <p className="mt-1 text-sm text-mist">{t.blurb}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-mono text-xs uppercase tracking-wider text-mist">From</span>
              <span className="font-display text-4xl font-bold text-snow">{t.price}</span>
              <span className="text-sm text-mist">CAD / month</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
                  <Check size={16} className="mt-0.5 shrink-0 text-piste-green" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-7">
              <Button variant={t.popular ? "primary" : "secondary"} className="w-full">
                Book a Personalized Demo
              </Button>
            </a>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.12} className="mt-6 flex items-start gap-3 rounded-2xl border border-piste-green/30 bg-piste-green/5 p-5">
        <InfinityIcon size={18} className="mt-0.5 shrink-0 text-piste-green" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-mist">
          <span className="font-medium text-snow">No overage fees, ever.</span>{" "}
          Some rental platforms charge per transaction on top of your plan: great in a
          quiet month, expensive the moment a busy weekend pushes you past your limit.
          Every Basecrew plan includes unlimited checkouts, all season, at the price you
          signed up for.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface/40 p-7">
          <h4 className="font-display text-base font-semibold text-snow">Setup &amp; onboarding</h4>
          <p className="mt-1 text-sm text-mist">
            Professional onboarding available, including inventory import and a guided staff
            walkthrough. Contact us for implementation pricing, since it varies by fleet size.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface/40 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-piste-blue" aria-hidden="true" />
              <h4 className="font-display text-base font-semibold text-snow">Multi-location or resort?</h4>
            </div>
            <p className="mt-1 text-sm text-mist">Let&apos;s talk about a custom rollout and pricing.</p>
          </div>
          <a href="#contact" className="shrink-0">
            <Button variant="ghost">Contact sales →</Button>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
