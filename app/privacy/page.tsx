import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Basecrew collects, uses, and protects your information.",
  alternates: { canonical: "https://www.getbasecrew.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <Nav />
      <div id="main-content" className="container-px mx-auto max-w-3xl py-20">
        <h1 className="font-display text-3xl font-bold text-snow">Privacy Policy</h1>
        <p className="mt-4 text-sm text-mist">Last updated: TODO (add effective date before launch).</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mist">
          <p>
            {/* TODO: Replace this placeholder with a real privacy policy reviewed by counsel
                before launch. This page is a structural placeholder only. */}
            This is placeholder text. Replace this page with your finalized privacy policy,
            covering what customer and shop data Basecrew collects, how it&apos;s stored, who it&apos;s
            shared with, and how shop owners or their customers can request access to or
            deletion of their data.
          </p>
          <h2 className="font-display text-lg font-semibold text-snow">Information we collect</h2>
          <p>TODO: describe account, usage, and customer data collected through the product and this site.</p>
          <h2 className="font-display text-lg font-semibold text-snow">How we use it</h2>
          <p>TODO: describe usage for service delivery, support, and product improvement.</p>
          <h2 className="font-display text-lg font-semibold text-snow">Contact</h2>
          <p>TODO: add a privacy contact email.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
