import Link from "next/link";
import { LogoMark } from "@/components/ui/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="flex flex-col flex-wrap gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-snow">
              <LogoMark className="h-4 w-4" />
              Basecrew
            </div>
            <p className="mt-2 max-w-xs text-sm text-mist">
              The operating system for your ski, snowboard, and bike rental crew.
            </p>
          </div>

          <nav aria-label="Product" className="flex flex-col gap-2 text-sm text-mist">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-mist/70">Product</span>
            <a href="#features" className="hover:text-snow">Features</a>
            <a href="#pricing" className="hover:text-snow">Pricing</a>
            <a href="#industries" className="hover:text-snow">Industries</a>
          </nav>

          <nav aria-label="Company" className="flex flex-col gap-2 text-sm text-mist">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-mist/70">Company</span>
            <a href="#testimonials" className="hover:text-snow">Testimonials</a>
            <a href="#faq" className="hover:text-snow">FAQ</a>
            <a href="#contact" className="hover:text-snow">Contact</a>
          </nav>

          <nav aria-label="Legal" className="flex flex-col gap-2 text-sm text-mist">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-mist/70">Legal</span>
            <Link href="/privacy" className="hover:text-snow">Privacy</Link>
            <Link href="/terms" className="hover:text-snow">Terms</Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-snow">
              Instagram
            </a>
          </nav>
        </div>
        <p className="mt-10 font-mono text-[11px] text-mist">
          © {new Date().getFullYear()} Basecrew. Built for independent rental shops across Canada.
        </p>
      </div>
    </footer>
  );
}
