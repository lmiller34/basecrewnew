"use client";

import { motion } from "framer-motion";

/**
 * Signature element: a hand-drawn elevation-profile line, the same kind of
 * mark you'd find tracing a run on a trail map. Used as the connective
 * tissue between sections instead of a generic <hr>.
 */
export function TrailDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative h-16 w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "scale-y-[-1]" : ""}`}
      >
        <motion.path
          d="M0,48 L120,48 L200,16 L260,40 L340,8 L420,44 L520,44 L600,20 L680,52 L780,12 L860,36 L960,36 L1040,4 L1120,32 L1200,32"
          fill="none"
          stroke="#223252"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <motion.circle
          cx="680"
          cy="52"
          r="3.5"
          fill="#FF6B35"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
      </svg>
    </div>
  );
}
