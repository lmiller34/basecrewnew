import { DashboardMockup, PhoneMockup, TabletMockup } from "@/components/mockups";
import { Reveal } from "@/components/reveal";

const workflows = [
  { title: "Create a rental", rows: ["Customer: S. Bennett", "Adult Ski Package", "Shopify order synced"] },
  { title: "Equipment setup", rows: ["Height, weight, boot size", "DIN calculated: ISO 11088", "Length recommended"] },
  { title: "Waivers", rows: ["Digital signature", "Minor flagged automatically", "On file, searchable"] },
  { title: "Check in equipment", rows: ["Scan order #1039", "Marked Returned", "Back on the wall"] },
  { title: "Inventory", rows: ["9 total, 4 out today", "3 needs setup", "1 overdue"] },
  { title: "Reporting", rows: ["Checkouts: 612 this week", "Avg. rental: $58", "Utilization: 84%"] },
];

export function ProductScreens() {
  return (
    <section aria-labelledby="product-screens-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-flare">On the floor</span>
        <h2 id="product-screens-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          One system across the counter, the back room, and the fitting bench
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <DashboardMockup />
        <div className="flex flex-col gap-6">
          <TabletMockup title="Customer profile" rows={["S. Bennett", "Boot size 9", "3 past rentals"]} />
          <TabletMockup title="Reports (this week)" rows={["Checkouts: 612", "Avg. rental: $58", "Utilization: 84%"]} />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-widest text-mist">
          Every core workflow, in one place
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflows.map((w) => (
            <TabletMockup key={w.title} title={w.title} rows={w.rows} />
          ))}
        </div>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <PhoneMockup />
      </div>
    </section>
  );
}
