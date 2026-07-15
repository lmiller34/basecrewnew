import { Zap, Radar, ClipboardList, LineChart, Wrench, History } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrailBadge } from "@/components/ui/trail-badge";
import { Bar } from "@/components/mockups";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Zap,
    rating: "easy" as const,
    title: "Checkout in Under a Minute",
    copy: "Scan a customer, pull their sizing, and print a ticket in seconds, built for a line that isn't going anywhere.",
  },
  {
    icon: Radar,
    rating: "easy" as const,
    title: "Always Know What's Available",
    copy: "Every ski, board, and bike shows its live status (available, out, or in for a tune) across every register.",
  },
  {
    icon: ClipboardList,
    rating: "intermediate" as const,
    title: "Handle Every Booking in One Place",
    copy: "Reservations, walk-ins, multi-day rentals, and season passes handled in one workflow your staff already knows.",
  },
  {
    icon: History,
    rating: "intermediate" as const,
    title: "Serve Returning Customers in Seconds",
    copy: "Sizing, past rentals, and waivers stay on file, so returning customers skip the twenty questions.",
  },
  {
    icon: LineChart,
    rating: "expert" as const,
    title: "See What's Actually Making You Money",
    copy: "See utilization by category, revenue by day, and where to invest your next equipment budget.",
  },
  {
    icon: Wrench,
    rating: "expert" as const,
    title: "Never Lose Track of Equipment Again",
    copy: "Log condition on every return and keep a full service history attached to each piece of gear, not a memory.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" aria-labelledby="features-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-piste-blue">Features</span>
        <h2 id="features-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Everything the front counter needs. Nothing it doesn&apos;t.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, rating, title, copy }) => (
          <Card
            key={title}
            className="group flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-flare/40 hover:shadow-lg hover:shadow-black/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised transition-colors duration-200 group-hover:bg-flare/15">
                <Icon size={18} className="text-flare" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <TrailBadge rating={rating} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-snow">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{copy}</p>
            <div className="mt-5 space-y-1.5 rounded-lg border border-border/70 bg-night/40 p-3 transition-colors duration-200 group-hover:border-border">
              <Bar w="80%" />
              <Bar w="55%" />
              <Bar w="65%" />
            </div>
            <a href="#contact" className="mt-4 text-sm font-medium text-flare hover:text-flare-hover">
              See it in a demo →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
