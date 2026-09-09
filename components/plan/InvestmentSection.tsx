import {
  Building2,
  Landmark,
  LineChart,
  University,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { copy, investmentCategories } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Landmark,
  Building2,
  LineChart,
  University,
};

export function InvestmentSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Investments"
          title="Where Are the Funds Invested?"
          description={copy.fundsInvested}
        />
        <p className="mt-4 max-w-2xl text-sm text-muted-gray">
          Allocation percentages and investment returns are not specified in the
          supplied product information.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {investmentCategories.map((item) => {
            const Icon = icons[item.icon] ?? Landmark;
            return (
              <article
                key={item.title}
                className="border border-border bg-white p-6 text-center"
              >
                <Icon className="mx-auto size-7 text-forest" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-charcoal">
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
