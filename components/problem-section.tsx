import { Clock, FileWarning, Boxes, Users2, RefreshCcw, PackageX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const problems = [
  { icon: Clock, title: "Lines out the door", copy: "Saturday morning checkout turns into a 40-minute wait before anyone's clicked in.", cost: "Costs you: walkaways" },
  { icon: FileWarning, title: "Paper waivers", copy: "Clipboards, illegible handwriting, and no way to find last season's signature when you need it.", cost: "Costs you: liability risk" },
  { icon: Boxes, title: "Inventory confusion", copy: "Nobody can say, right now, what's actually on the wall versus what's out on the hill.", cost: "Costs you: staff time" },
  { icon: RefreshCcw, title: "Double bookings", copy: "Two families show up for the same demo skis because two systems didn't talk to each other.", cost: "Costs you: trust" },
  { icon: PackageX, title: "Lost gear", copy: "Boots go home in the wrong bag and nobody notices until the next renter needs them.", cost: "Costs you: replacement gear" },
  { icon: Users2, title: "Staff who freeze up", copy: "New seasonal hires can't move fast on a system that takes a full week to learn.", cost: "Costs you: training hours" },
];

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-flare">The problem</span>
        <h2 id="problem-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Rental shops don&apos;t lose money on gear. They lose it on friction.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map(({ icon: Icon, title, copy, cost }) => (
          <Card
            key={title}
            className="group p-6 transition-colors duration-200 hover:border-flare/40 hover:bg-surface"
          >
            <Icon size={20} className="text-flare" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-4 font-display text-base font-semibold text-snow">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{copy}</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-flare/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {cost}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
