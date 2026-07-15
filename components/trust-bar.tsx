import { ShieldCheck, Timer, MapPin, Users2 } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

const stats: Array<
  | { icon: typeof ShieldCheck; kind: "number"; value: number; prefix?: string; suffix?: string; decimals?: number; label: string }
  | { icon: typeof ShieldCheck; kind: "text"; label: string }
> = [
  { icon: ShieldCheck, kind: "number", value: 99.9, suffix: "%", decimals: 1, label: "Uptime during peak season" },
  { icon: Timer, kind: "number", value: 2, prefix: "<", suffix: "hr", label: "Average support response time" },
  { icon: MapPin, kind: "text", label: "Canadian-built & supported" },
  { icon: Users2, kind: "text", label: "Unlimited staff logins, every plan" },
];

export function TrustBar() {
  return (
    <section aria-label="Why shops trust Basecrew" className="border-y border-border bg-surface/40 py-10">
      <Reveal className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center">
              <s.icon size={18} className="mb-2 text-flare" strokeWidth={1.75} aria-hidden="true" />
              {s.kind === "number" && (
                <div className="font-display text-2xl font-bold text-snow sm:text-3xl">
                  <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
              )}
              <p className={s.kind === "number" ? "mt-1 text-xs leading-snug text-mist" : "text-sm font-medium leading-snug text-snow"}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
