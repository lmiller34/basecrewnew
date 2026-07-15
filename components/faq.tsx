"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="container-px mx-auto max-w-3xl py-20">
      <Reveal className="text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-flare">FAQ</span>
        <h2 id="faq-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          Questions shop owners actually ask
        </h2>
        <p className="mt-3 text-sm text-mist">
          Don&apos;t see yours? <a href="#contact" className="text-flare hover:text-flare-hover">Ask us directly</a>, and we&apos;ll answer before your demo, not during it.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 divide-y divide-border rounded-2xl border border-border bg-surface/40">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          const panelId = `${uid}-panel-${i}`;
          const buttonId = `${uid}-button-${i}`;
          return (
            <div key={f.q}>
              <h3 className="m-0">
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <span className="font-display text-base font-medium text-snow">{f.q}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-mist transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!open}
                className="px-6 pb-5 text-sm leading-relaxed text-mist"
              >
                {f.a}
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
