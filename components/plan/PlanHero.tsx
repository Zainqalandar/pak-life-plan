import { Container } from "@/components/shared/Container";
import { planStats } from "@/lib/content";

export function PlanHero() {
  return (
    <section className="bg-forest-deep py-16 text-white sm:py-24">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">
          Savings and protection
        </p>
        <div className="mt-4 h-px w-16 bg-gold" />
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Golden Endowment
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-gold-light sm:text-2xl">
          Protection for 20 Years. Premium Payments for 7 Years.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          A conventional endowment with surplus participation of 97.5%, offering
          twenty years of coverage while premiums are payable only for the first
          seven years (annual mode only).
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-10 lg:grid-cols-4">
          {planStats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs font-semibold tracking-[0.16em] uppercase text-white/65">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-gold sm:text-4xl">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-1 text-lg font-medium text-gold-light sm:text-xl">
                    {stat.unit}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
