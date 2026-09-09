import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { productCards } from "@/lib/content";

export function PlansSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Plans / Products
          </p>
          <div className="mt-3 h-px w-12 bg-gold" />
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-charcoal sm:text-4xl">
            Protection and savings for different stages of life
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-gray sm:text-lg">
            Explore the available plan structures and review the details that
            apply to your financial priorities.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCards.map((plan, index) => (
            <Link
              key={plan.slug}
              href={`/plans/${plan.slug}`}
              className="group flex min-h-64 flex-col justify-between border border-border bg-white p-6 transition-transform hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_36px_-24px_rgba(6,69,43,0.7)] sm:p-7"
            >
              <div>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-forest-deep">
                  {plan.title}
                </h3>
                <p className="mt-4 text-sm font-medium text-charcoal">
                  {plan.lineOne}
                </p>
                <p className="mt-1 text-sm text-muted-gray">{plan.lineTwo}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                View Plan
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
