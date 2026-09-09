import { BenefitsSection } from "@/components/home/BenefitsSection";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { NeedsSection } from "@/components/home/NeedsSection";
import { PlanHighlight } from "@/components/home/PlanHighlight";
import { TrustSection } from "@/components/home/TrustSection";
import { WhyStateLife } from "@/components/home/WhyStateLife";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "State Life Golden Endowment | Financial Security & Life Protection",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <WhyStateLife />
      <PlanHighlight />
      <BenefitsSection />
      <NeedsSection />
      <CTASection />
    </main>
  );
}
