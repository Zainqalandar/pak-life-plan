import { FadeIn } from "@/components/shared/FadeIn";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyBuyCards } from "@/lib/content";

export function BenefitsSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="03 — Advantages"
          title="Why Choose Golden Endowment?"
          description="Organized from the official plan description — savings, protection, and a shorter premium-paying period within a 20-year coverage term."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyBuyCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.05}>
              <FeatureCard title={card.title} description={card.description}>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-gray">
          Under this endowment policy, the policyholder can also avail tax
          rebates in line with income tax ordinance.
        </p>
      </Container>
    </section>
  );
}
