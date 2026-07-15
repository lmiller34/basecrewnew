import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { TrustBar } from "@/components/trust-bar";
import { TrailDivider } from "@/components/trail-divider";
import { ProblemSection } from "@/components/problem-section";
import { RushHour } from "@/components/rush-hour";
import { SolutionSection } from "@/components/solution-section";
import { FeatureGrid } from "@/components/feature-grid";
import { ProductScreens } from "@/components/product-screens";
import { ProductDemo } from "@/components/product-demo";
import { Benefits } from "@/components/benefits";
import { ImplementationTimeline } from "@/components/implementation-timeline";
import { Industries } from "@/components/industries";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <TrustBar />
        <TrailDivider />
        <ProblemSection />
        <RushHour />
        <SolutionSection />
        <TrailDivider flip />
        <FeatureGrid />
        <ProductScreens />
        <ProductDemo />
        <Benefits />
        <ImplementationTimeline />
        <Industries />
        <Pricing />
        <TrailDivider />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
