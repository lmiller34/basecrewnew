import { Reveal } from "@/components/reveal";

// TODO: Swap for real shop logos (with permission) once available.
const shops = [
  "Rick's Pro Shop",
  "Blue Mountain Rentals",
  "Georgian Peaks Outfitters",
  "Horseshoe Valley Sports",
  "Collingwood Board Co.",
];

export function TrustedBy() {
  return (
    <section aria-label="Shops that use Basecrew" className="container-px mx-auto max-w-7xl py-10">
      <Reveal>
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-widest text-mist">
          Trusted by 40+ independent rental shops across Ontario
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {shops.map((s) => (
            <span
              key={s}
              className="font-display text-base font-semibold tracking-tight text-mist grayscale transition hover:text-snow hover:opacity-100"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
