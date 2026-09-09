import { Container } from "@/components/shared/Container";
import { copy } from "@/lib/content";

export function SurrenderCard() {
  return (
    <section className="bg-ivory py-16">
      <Container>
        <article className="border border-border bg-white p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
            Surrender / Early Withdrawal
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-gray">
            {copy.surrender}
          </p>
          <p className="mt-6 inline-block border border-gold/50 bg-accent px-4 py-2 text-sm font-semibold tracking-wide text-forest-deep">
            2 consecutive years
          </p>
        </article>
      </Container>
    </section>
  );
}
