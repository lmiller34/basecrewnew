import { Check } from "lucide-react";
import { TabletMockup } from "@/components/mockups";
import { Reveal } from "@/components/reveal";

const solutions = [
  "Move customers through checkout in under a minute, even on your busiest morning",
  "Always know what's actually available, no more walking the floor to check",
  "Handle bookings, walk-ins, and multi-day rentals without three separate spreadsheets",
  "Repeat customers rebook in seconds, no re-asking sizing or waiver questions",
  "See exactly where your revenue and utilization stand, without pulling a report by hand",
  "Close out returns digitally, so nothing gets lost between the counter and the back room",
  "Every damage note follows the gear itself, not whoever happened to be on shift",
  "One dashboard your whole floor staff can actually use, seasonal hires included",
];

export function SolutionSection() {
  return (
    <section id="product" aria-labelledby="solution-heading" className="container-px mx-auto max-w-7xl py-20">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-widest text-piste-green">The fix</span>
          <h2 id="solution-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            One system, from the moment someone books to the moment gear comes back.
          </h2>
          <ul className="mt-8 space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-mist">
                <Check size={16} className="mt-0.5 shrink-0 text-piste-green" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <TabletMockup
              title="Reservation → Checkout"
              rows={["Booked 8:14am", "Waiver signed", "Fitted · Boot 9", "Checked out 8:16am"]}
            />
          </div>
          <TabletMockup title="Returns" rows={["Scan tag", "Condition: OK", "Back on wall"]} />
          <TabletMockup title="Damage log" rows={["Edge chip · Ski #114", "Flagged for tune"]} />
        </Reveal>
      </div>
    </section>
  );
}
