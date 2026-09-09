import { Award, Shield } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { copy } from "@/lib/content";

export function PlanBenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Benefits" title="What the plan pays" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="border border-border bg-ivory p-8 sm:p-10">
            <Award className="size-8 text-gold" aria-hidden="true" />
            <h3 className="mt-6 text-2xl font-semibold text-charcoal">
              Maturity Benefit
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-gray">
              {copy.maturityBenefit}
            </p>
          </article>
          <article className="border border-gold/30 bg-forest-deep p-8 text-white sm:p-10">
            <Shield className="size-8 text-gold-light" aria-hidden="true" />
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Death Benefit
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {copy.deathBenefit}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
