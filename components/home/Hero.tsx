import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CtaButton } from "@/components/shared/CtaButton";
import { copy } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-white">
      <div className="pattern-geo pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">
            {copy.ownership}
          </p>
          <div className="mt-5 h-px w-16 bg-gold" />
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {copy.heroHeadline}
          </h1>
          <p className="mt-5 text-xl font-medium text-gold-light sm:text-2xl">
            {copy.heroSupport}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {copy.heroBody}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/plans/golden-endowment" variant="light">
              Explore Golden Endowment
            </CtaButton>
            <CtaButton href="/contact" variant="ghost">
              Get in Touch
            </CtaButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/images/hero-family.jpg"
            alt="A family walking together, representing long-term protection and savings"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 border-t border-gold/50 bg-forest-deep/80 p-5 backdrop-blur-sm">
            <p className="text-sm font-medium tracking-wide text-gold-light">
              Coverage for 20 years · Premiums for 7 years
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
