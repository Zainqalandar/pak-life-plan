import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { copy } from "@/lib/content";

export function PlanOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Overview" title="What is Golden Endowment?" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-gray sm:text-lg">
            {copy.whatIsGoldenEndowment.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border border-border bg-ivory p-8">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Premium Payment
              </p>
              <p className="mt-3 text-5xl font-semibold text-forest">7</p>
              <p className="mt-1 text-sm text-muted-gray">Years (annual mode)</p>
            </div>
            <div className="border border-gold/40 bg-forest-deep p-8 text-white">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-light">
                Coverage
              </p>
              <p className="mt-3 text-5xl font-semibold text-gold">20</p>
              <p className="mt-1 text-sm text-white/75">Years of protection</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
