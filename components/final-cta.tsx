import { Mail, PhoneCall, MonitorPlay } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const nextSteps = [
  { icon: Mail, text: "We reply within one business day, usually sooner" },
  { icon: PhoneCall, text: "A short 15-minute call to understand your shop and season" },
  { icon: MonitorPlay, text: "A live demo built around your actual fleet, not a canned script" },
];

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="container-px mx-auto max-w-7xl py-20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-widest text-flare">Get started</span>
          <h2 id="contact-heading" className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            Book a Personalized Demo
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
            Every demo is tailored to your shop: your fleet, your season, and your busiest
            day. Tell us a bit about your operation and we&apos;ll build the walkthrough
            around it. No sales runaround, no canned script.
          </p>

          <ul className="mt-8 space-y-4">
            {nextSteps.map(({ icon: Icon, text }, i) => (
              <li key={text} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-raised">
                  <Icon size={15} className="text-flare" aria-hidden="true" />
                </span>
                <span className="pt-1.5 text-sm text-mist">
                  <span className="mr-1.5 font-mono text-xs text-snow">0{i + 1}.</span>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
