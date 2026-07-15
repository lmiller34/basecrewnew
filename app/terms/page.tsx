import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Basecrew.",
  alternates: { canonical: "https://www.getbasecrew.com/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <Nav />
      <div id="main-content" className="container-px mx-auto max-w-3xl py-20">
        <h1 className="font-display text-3xl font-bold text-snow">Terms of Service</h1>
        <p className="mt-4 text-sm text-mist">Last updated: TODO (add effective date before launch).</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mist">
          <p>
            {/* TODO: Replace this placeholder with finalized terms reviewed by counsel
                before launch. This page is a structural placeholder only. */}
            This is placeholder text. Replace this page with your finalized terms of service,
            covering subscription billing, acceptable use, uptime and support commitments, and
            liability terms for a Canadian software business.
          </p>
          <h2 className="font-display text-lg font-semibold text-snow">Subscription &amp; billing</h2>
          <p>TODO: describe billing cadence, currency (CAD), and cancellation policy.</p>
          <h2 className="font-display text-lg font-semibold text-snow">Acceptable use</h2>
          <p>TODO: describe acceptable use of the platform.</p>
          <h2 className="font-display text-lg font-semibold text-snow">Contact</h2>
          <p>TODO: add a legal contact email.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
