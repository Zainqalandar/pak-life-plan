import { Container } from "@/components/shared/Container";
import { copy } from "@/lib/content";

export function LoanSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
            Liquidity
          </p>
          <div className="mt-3 h-px w-12 bg-gold" />
          <h2 className="mt-5 text-3xl font-semibold text-charcoal sm:text-4xl">
            Loan Facility
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-gray sm:text-lg">
            {copy.loanFacility}
          </p>
        </div>
        <div className="border border-gold/40 bg-forest-deep p-10 text-white">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-light">
            Maximum loan
          </p>
          <p className="mt-4 text-5xl font-semibold text-gold sm:text-6xl">
            80%
          </p>
          <p className="mt-3 text-lg text-white/80">of Net Surrender Value</p>
          <p className="mt-6 text-sm text-white/70">
            Available after the payment of the third premium.
          </p>
        </div>
      </Container>
    </section>
  );
}
