"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo-mark";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#industries", label: "Industries" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-night/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <LogoMark className="h-5 w-5" />
          Basecrew
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist transition-colors hover:text-snow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="default">Book a Demo</Button>
          </a>
        </div>

        <button
          className="-m-2 p-2 text-snow md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-night px-6 pb-6 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-mist hover:text-snow"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full">Book a Demo</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
