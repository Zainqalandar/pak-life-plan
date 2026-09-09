import { Container } from "@/components/shared/Container";
import { CtaButton } from "@/components/shared/CtaButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { timelineSteps } from "@/lib/content";

export function PlanHighlight() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            02 — Product
          </p>
          <div className="mt-3 h-px w-12 bg-gold" />
          <h2 className="mt-5 text-3xl font-semibold text-charcoal sm:text-4xl">
            Golden Endowment
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
            <p className="text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              20 Years of Coverage
              <span className="mt-3 block text-gold">7 Years of Premiums</span>
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-gray sm:text-lg">
              Enjoy life insurance coverage for twenty years while paying
              premiums for only the first seven years.
            </p>
          </div>
        </FadeIn>
        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {timelineSteps.map((step, i) => (
            <li
              key={step.label}
              className="border border-border bg-ivory p-5"
            >
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-semibold text-forest-deep">
                {step.label}
              </p>
              <p className="mt-2 text-sm text-muted-gray">{step.note}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <CtaButton href="/plans/golden-endowment">View Full Plan</CtaButton>
        </div>
      </Container>
    </section>
  );
}
