"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function ProductDemo() {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="container-px mx-auto max-w-7xl py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-piste-blue">Product demo</span>
        <h2 id="demo-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
          See the Software in Action
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          A 90-second walkthrough of checkout, inventory, and returns: the exact workflow your
          staff will run on a Saturday morning.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        {/* TODO: Replace with a real embedded video (e.g. a Loom/YouTube embed
            or a self-hosted mp4) and wire this placeholder up to open it,
            once a 90-second walkthrough has been recorded. */}
        <div
          role="img"
          aria-label="Preview of a 90-second Basecrew product demo video, not yet available"
          className="group relative mx-auto flex aspect-video w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-2xl shadow-black/40 backdrop-blur-sm"
        >
          {/* mountain-gradient poster background, no image asset required */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(62,124,255,0.16),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(255,107,53,0.14),transparent_55%)]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night to-transparent" />

          <div className="relative flex flex-col items-center gap-4">
            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-flare text-night shadow-lg shadow-flare/30"
            >
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </motion.span>
            <span className="font-mono text-xs uppercase tracking-widest text-mist">0:90 · Checkout, inventory &amp; returns</span>
          </div>

          <span className="absolute bottom-5 left-5 rounded-full border border-border bg-night/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mist backdrop-blur-sm">
            app.getbasecrew.com
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact">
            <Button size="lg">Book a Demo</Button>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
