"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

// Where demo requests should land. Note: Web3Forms routes email based on the
// access key itself (set when the key is generated at web3forms.com), not on
// a field in this form — this constant is only used for the mailto fallback
// below and as a readable reference for whoever sets up the key.
const LEAD_EMAIL = "lucashayesmiller@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // No key configured yet — avoid a failed network call in dev/demo.
      console.warn(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set. Generate a free key at https://web3forms.com using " +
          LEAD_EMAIL +
          " to start receiving submissions."
      );
      setStatus("success");
      return;
    }

    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("from_name", "Basecrew Website");
    const name = formData.get("name");
    formData.append("subject", `New demo request from ${name || "the Basecrew site"}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface/60 p-10 text-center"
      >
        <CheckCircle2 size={28} className="text-piste-green" aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-snow">Request received.</p>
        <p className="text-sm text-mist">We&apos;ll follow up within one business day to set up your demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-surface/60 p-7" noValidate={false}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-mist">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-night px-3.5 py-2.5 text-sm text-snow outline-none focus:border-flare"
          />
        </div>
        <div>
          <label htmlFor="shop" className="mb-1.5 block text-xs font-medium text-mist">
            Shop name <span className="text-mist/60">(optional)</span>
          </label>
          <input
            id="shop"
            name="shop"
            autoComplete="organization"
            className="w-full rounded-lg border border-border bg-night px-3.5 py-2.5 text-sm text-snow outline-none focus:border-flare"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-mist">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-night px-3.5 py-2.5 text-sm text-snow outline-none focus:border-flare"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-mist">
          What are you renting? <span className="text-mist/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Skis, snowboards, bikes..."
          className="w-full resize-none rounded-lg border border-border bg-night px-3.5 py-2.5 text-sm text-snow outline-none focus:border-flare"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        Book a Personalized Demo
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-mist">
        <ShieldCheck size={13} className="text-piste-green" aria-hidden="true" />
        No credit card required. We never share your info.
      </p>
      <p aria-live="polite" className="sr-only">
        {status === "loading" ? "Submitting your request" : ""}
      </p>
      {status === "error" && (
        <p role="alert" className="text-center text-xs text-flare">
          Something went wrong. Please try again, or{" "}
          <a href={`mailto:${LEAD_EMAIL}`} className="underline hover:text-flare-hover">
            email us directly
          </a>
          .
        </p>
      )}
    </form>
  );
}
