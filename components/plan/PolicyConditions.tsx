import {
  CalendarDays,
  ClipboardCheck,
  Clock3,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { policyConditions } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Clock3,
  Eye,
  ClipboardCheck,
  CalendarDays,
};

export function PolicyConditions() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Conditions"
          title="Policy conditions"
          description="Timing, underwriting, and premium mode as stated for Golden Endowment."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {policyConditions.map((item) => {
            const Icon = icons[item.icon] ?? Clock3;
            return (
              <article
                key={item.title}
                className="border border-border bg-ivory p-6 sm:p-8"
              >
                <Icon className="size-6 text-forest" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-2xl font-semibold text-gold">
                  {item.highlight}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-gray">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
