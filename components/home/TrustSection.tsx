import { Container } from "@/components/shared/Container";
import { StatCard } from "@/components/shared/StatCard";
import { trustIndicators } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="bg-forest py-10 sm:py-12" aria-label="Trust indicators">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {trustIndicators.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              suffix={"suffix" in item ? item.suffix : undefined}
              label={item.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
