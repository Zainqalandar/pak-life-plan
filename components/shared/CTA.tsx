import { Container } from "@/components/shared/Container";
import { CtaButton } from "@/components/shared/CtaButton";

export function CTA({
  heading,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  heading: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="bg-forest-deep py-20 text-white sm:py-24">
      <Container className="max-w-3xl text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-gold" />
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
          {text}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <CtaButton href={primaryHref} variant="light">
            {primaryLabel}
          </CtaButton>
          <CtaButton href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
