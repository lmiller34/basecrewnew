"use client";

import { motion } from "framer-motion";
import { TrailBadge } from "@/components/ui/trail-badge";

export function Bar({ w, tone = "border" }: { w: string; tone?: "border" | "flare" | "green" }) {
  const bg = tone === "flare" ? "bg-flare" : tone === "green" ? "bg-piste-green" : "bg-border";
  return <div className={`h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

function Glow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(255,107,53,0.14),transparent)] blur-2xl"
    />
  );
}

type StatusTone = "green" | "flare" | "amber" | "purple";

function StatusPill({ label, tone }: { label: string; tone: StatusTone }) {
  const styles: Record<StatusTone, string> = {
    green: "bg-piste-green/15 text-piste-green",
    flare: "bg-flare/15 text-flare",
    amber: "bg-amber-400/15 text-amber-300",
    purple: "bg-piste-blue/20 text-piste-blue",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide ${styles[tone]}`}>
      {label}
    </span>
  );
}

/**
 * Desktop dashboard mockup, modeled on the real Basecrew rental queue: a
 * stat strip (Out / Total / Setup / Overdue / Done), status-badged customer
 * cards, and the Setup / Date / Return action row used on the shop floor.
 * Built entirely from CSS, no image assets or real customer data.
 */
export function DashboardMockup() {
  const stats = [
    { label: "Out", value: "4", tone: "text-snow" },
    { label: "Total", value: "9", tone: "text-snow" },
    { label: "Setup", value: "3", tone: "text-snow" },
    { label: "Overdue", value: "1", tone: "text-flare" },
    { label: "Done", value: "2", tone: "text-piste-green" },
  ];

  const orders = [
    {
      name: "M. Samilyak",
      order: "#1042",
      pkg: "Adult Ski Package",
      dates: "Dec 20 → Dec 22",
      badges: [
        { label: "Needs Setup", tone: "amber" as const },
        { label: "Pickup", tone: "purple" as const },
        { label: "No Waiver", tone: "flare" as const },
      ],
    },
    {
      name: "S. Lee",
      order: "#1053",
      pkg: "Youth Snowboard Package",
      dates: "Dec 21 → Dec 22",
      badges: [
        { label: "Needs Setup", tone: "amber" as const },
        { label: "Minor", tone: "purple" as const },
      ],
    },
    {
      name: "S. Bennett",
      order: "#1039",
      pkg: "Adult Ski Package",
      dates: "Dec 17 → Dec 19",
      badges: [
        { label: "Returned", tone: "green" as const },
        { label: "Waiver", tone: "green" as const },
      ],
    },
  ];

  return (
    <div className="relative">
      <Glow />
      <div className="w-full overflow-hidden rounded-2xl border border-border/80 bg-surface/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border bg-gradient-to-b from-surface-raised to-surface-raised/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-piste-green/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-flare/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-piste-blue/70" />
          <span className="ml-3 min-w-0 truncate font-mono text-[11px] text-mist">app.getbasecrew.com/rentals</span>
        </div>

        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-display text-sm font-semibold text-snow">Today&apos;s Rentals</div>
              <div className="font-mono text-[11px] text-mist">Rick&apos;s Pro Shop · Blue Mountain</div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-piste-green/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-piste-green">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-piste-green" />
              Live
            </div>
          </div>

          {/* stat strip */}
          <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border/70 bg-night/40 px-2 py-2 text-center">
                <div className={`font-display text-base font-bold ${s.tone}`}>{s.value}</div>
                <div className="font-mono text-[8px] uppercase tracking-wide text-mist">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {orders.map((o, i) => (
              <motion.div
                key={o.order}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-border/70 bg-night/40 px-3 py-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
                  <div className="text-xs font-medium text-snow">
                    {o.name} <span className="text-mist">{o.order}</span>
                  </div>
                  <span className="font-mono text-[9px] text-mist">{o.dates}</span>
                </div>
                <div className="mt-0.5 text-[10px] text-mist">{o.pkg}</div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {o.badges.map((b) => (
                    <StatusPill key={b.label} label={b.label} tone={b.tone} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-flare/90 py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-night">
              Setup
            </div>
            <div className="rounded-lg bg-piste-blue py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-night">
              Date
            </div>
            <div className="rounded-lg bg-piste-green py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-night">
              Return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Phone mockup, modeled on the real equipment-setup workflow: renter
 * measurements feeding a calculated DIN (binding release) setting, a
 * genuinely differentiated piece of the product worth showing off.
 */
export function PhoneMockup() {
  return (
    <div className="relative w-[230px] max-w-[80vw] rounded-[2rem] border border-border/80 bg-surface/80 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="rounded-[1.6rem] border border-border/60 bg-night p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-mist">Equipment Setup</span>
          <TrailBadge rating="expert" className="text-[9px]" />
        </div>
        <div className="mb-3 rounded-xl bg-surface-raised p-3">
          <div className="text-xs font-medium text-snow">M. Samilyak</div>
          <div className="font-mono text-[10px] text-mist">Adult Ski Package · Beginner</div>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-surface-raised px-2 py-1.5">
            <div className="font-mono text-[8px] uppercase text-mist">Height / Weight</div>
            <div className="text-[11px] text-snow">5&apos;6&quot; · 212 lb</div>
          </div>
          <div className="rounded-lg bg-surface-raised px-2 py-1.5">
            <div className="font-mono text-[8px] uppercase text-mist">Boot / BSL</div>
            <div className="text-[11px] text-snow">US 9 · 315mm</div>
          </div>
        </div>
        <div className="rounded-xl border border-piste-blue/30 bg-piste-blue/10 p-3 text-center">
          <div className="font-mono text-[8px] uppercase tracking-wider text-mist">DIN setting · ISO 11088</div>
          <div className="mt-1.5 inline-block rounded-full bg-piste-green/15 px-3 py-1 font-display text-lg font-bold text-piste-green">
            3.75
          </div>
          <div className="mt-1.5 font-mono text-[9px] text-mist">Recommended length: 160&ndash;165cm</div>
        </div>
        <div className="mt-4 rounded-lg bg-flare py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-night">
          Assign equipment
        </div>
      </div>
    </div>
  );
}

/** Small tablet mockup, used in the product screens grid. */
export function TabletMockup({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="rounded-xl border border-border/80 bg-surface/70 p-4 shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-200 hover:border-mist/30">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-mist">{title}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-piste-green" />
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r} className="flex items-center justify-between rounded-md bg-night/50 px-2.5 py-2 text-[11px] text-mist">
            <span>{r}</span>
            <Bar w="30%" />
          </div>
        ))}
      </div>
    </div>
  );
}
