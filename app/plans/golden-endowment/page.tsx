import { AddOnsCards } from "@/components/plan/AddOnsCards";
import { PlanBenefitsSection } from "@/components/plan/BenefitsSection";
import { FAQAccordion } from "@/components/plan/FAQAccordion";
import { FeaturesGrid } from "@/components/plan/FeaturesGrid";
import { FeaturesTable } from "@/components/plan/FeaturesTable";
import { InvestmentSection } from "@/components/plan/InvestmentSection";
import { LoanSection } from "@/components/plan/LoanSection";
import { PlanHero } from "@/components/plan/PlanHero";
import { PlanOverview } from "@/components/plan/PlanOverview";
import { PolicyConditions } from "@/components/plan/PolicyConditions";
import { SurrenderCard } from "@/components/plan/SurrenderCard";
import { CTA } from "@/components/shared/CTA";
import { createMetadata } from "@/lib/seo";
import { productName } from "@/lib/site";

export const metadata = createMetadata({
  title: "Golden Endowment Plan | 20 Years Coverage, 7 Years Premiums",
  description:
    "Explore the Golden Endowment Plan — 20 years of insurance coverage with premiums payable for the first 7 years.",
  path: "/plans/golden-endowment",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: productName,
  description:
    "Golden Endowment Plan is a unique savings and protection scheme which offers insurance coverage of twenty (20) years while only paying premiums for the first seven (7) years.",
  brand: {
    "@type": "Organization",
    name: "State Life Insurance Corporation of Pakistan",
  },
};

export default function GoldenEndowmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PlanHero />
      <FeaturesGrid />
      <PlanOverview />
      <FeaturesTable />
      <PlanBenefitsSection />
      <LoanSection />
      <SurrenderCard />
      <PolicyConditions />
      <InvestmentSection />
      <AddOnsCards />
      <FAQAccordion />
      <CTA
        heading="Want to Know More About Golden Endowment?"
        text="Speak with State Life about how Golden Endowment’s 20-year coverage and 7-year premium structure may fit your plans."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/"
        secondaryLabel="Back to Home"
      />
    </main>
  );
}
