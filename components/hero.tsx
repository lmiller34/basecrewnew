"use client";

import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup, PhoneMockup } from "@/components/mockups";
import { AnimatedCounter } from "@/components/animated-counter";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* mountain ridge silhouette */}

      {/* subtle premium gradient wash, used sparingly */}

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 py-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-mist backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-piste-green" />
            Built for ski, bike &amp; outdoor rental shops
          </div>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-snow sm:text-5xl lg:text-6xl">
            The Fastest Way to Run
            <br />
            Your Rental Shop
          </h1>

          <div className="mt-6 max-w-xl space-y-1.5 text-balance text-lg leading-relaxed text-mist">
            <p>
              Process more rentals. Reduce staff stress. Track every piece of
              equipment.
            </p>
            <p className="text-snow/90">
              Built specifically for busy ski shops and outdoor rental
              businesses.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </a>
            <a href="#demo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <PlayCircle size={18} aria-hidden="true" />
                Watch 90-Second Demo
              </Button>
            </a>
          </div>

          <p className="mt-3 flex items-center gap-1.5 text-xs text-mist">
            <ShieldCheck
              size={14}
              className="text-piste-green"
              aria-hidden="true"
            />
            No credit card required · Live within 1 week, guaranteed
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-mist">
            <div>
              <span className="text-snow">
                <AnimatedCounter value={99.9} suffix="%" decimals={1} />
              </span>{" "}
              uptime, peak weekends
            </div>
            <div className="hidden h-3 w-px bg-border sm:block" />
            <div>
              <span className="text-snow">2m 40s</span> avg. checkout
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative">
            <DashboardMockup />
            <div className="absolute -bottom-10 -right-6 hidden animate-drift lg:block">
              <PhoneMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
