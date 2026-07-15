import { Users, Zap, PackageCheck, Radar, UsersRound, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Bar } from "@/components/mockups";

const capabilities = [
  {
    icon: Users,
    title: "Long customer lines",
    copy: "Multiple staff check customers out at once from the same live queue, so nobody's waiting on a single terminal.",
  },
  {
    icon: Zap,
    title: "Fast equipment assignment",
    copy: "Scan a customer's sizing profile and the right ski, boot, and pole combination comes up in one tap.",
  },
  {
    icon: PackageCheck,
    title: "Returns",
    copy: "Gear gets checked back in and marked available again before the next renter reaches the counter.",
  },
  {
    icon: Radar,
    title: "Inventory availability",
    copy: "Every register sees the same live count, so no one has to physically check the wall.",
  },
  {
    icon: UsersRound,
    title: "Staff coordination",
    copy: "Everyone works from the same queue and inventory, so two people never grab the same pair of skis.",
  },
  {
    icon: TrendingUp,
    title: "Peak weekend traffic",
    copy: "Built and load-tested against real Saturday mornings, not a quiet Tuesday demo environment.",
  },
];

export function RushHour() {
  return (
    <section aria-labelledby="rush-hour-heading" className="relative overflow-hidden py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,53,0.08),transparent)] blur-3xl"
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-flare">The differentiator</span>
          <h2 id="rush-hour-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            Built for Saturday Morning Chaos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Most software is designed for a calm demo. Basecrew is designed for the forty-five
            minutes before the lifts open, when your whole shop is moving at once.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, copy }, i) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-flare/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised transition-colors duration-200 group-hover:bg-flare/15">
                  <Icon size={18} className="text-flare" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="font-mono text-[10px] text-mist/60">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-snow">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{copy}</p>
              <div className="mt-4">
                <Bar w={`${60 + ((i * 11) % 35)}%`} tone={i % 2 === 0 ? "flare" : "green"} />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
