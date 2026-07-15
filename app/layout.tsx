import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { faqs } from "@/lib/content";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.getbasecrew.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Basecrew | Rental Software for Ski, Snowboard & Bike Shops",
    template: "%s | Basecrew",
  },
  description:
    "Basecrew is the fastest way to run a ski rental shop. Rental management software built for independent ski, snowboard, and bike rental shops: faster checkout, real-time inventory, and a system built for busy weekends.",
  keywords: [
    "ski rental software",
    "ski shop software",
    "ski rental management",
    "rental management software",
    "snowboard rental software",
    "rental shop POS",
    "ski rental POS",
    "outdoor rental software",
    "bike rental software",
    "rental inventory software",
  ],
  authors: [{ name: "Basecrew" }],
  creator: "Basecrew",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Basecrew",
    title: "Basecrew | Rental Software for Ski, Snowboard & Bike Shops",
    description:
      "The fastest way to run your ski rental shop. Fast checkout, real-time inventory, built for busy weekends. Canadian-built rental software for independent shops.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basecrew | Rental Software for Ski, Snowboard & Bike Shops",
    description:
      "The fastest way to run your ski rental shop. Fast checkout, real-time inventory, built for busy weekends.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: siteUrl },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Basecrew",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "The operating system for modern ski rental shops: fast checkout, real-time inventory, and reporting for independent ski, snowboard, and bike rental shops.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "CAD",
    lowPrice: "79",
    highPrice: "299",
    offerCount: "3",
  },
  provider: {
    "@type": "Organization",
    name: "Basecrew",
    url: siteUrl,
    areaServed: "CA",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Basecrew",
  url: siteUrl,
  logo: `${siteUrl}/opengraph-image`,
  areaServed: "CA",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: "CA",
    availableLanguage: ["English", "French"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flare focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
