import { Container } from "@/components/shared/Container";
import { planStats } from "@/lib/content";

export function FeaturesGrid() {
  return (
    <section className="bg-forest py-12">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {planStats.map((stat) => (
            <li key={stat.label} className="text-center">
              <p className="text-3xl font-semibold text-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.16em] uppercase text-white/75">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
