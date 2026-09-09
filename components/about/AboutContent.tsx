import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { copy } from "@/lib/content";

export function AboutContent() {
  return (
    <>
      <section className="bg-forest-deep py-16 text-white sm:py-24">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">
            Institution
          </p>
          <div className="mt-4 h-px w-16 bg-gold" />
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            About State Life
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Learn more about State Life and its commitment to policyholders.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
              Why State Life
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-gray sm:text-lg">
              {copy.whyStateLife}
            </p>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src="/images/institution.jpg"
              alt="Professional building facade representing institutional stability"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
            Trust & Ownership
          </h2>
          <p className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-gold">
            {copy.ownership}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-gray">
            The sum assured and declared bonuses payable on maturity or death
            (God forbid) are guaranteed by the Government of Pakistan.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="border border-border p-8">
            <h2 className="text-2xl font-semibold text-charcoal">
              Policyholder Focus
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-gray">
              State Life offers complete satisfaction to valued policyholders
              from issuance of policy, to providing after sales service and
              optimizing return on Life Fund through a quality culture to
              maintain itself as the leading life insurer in Pakistan.
            </p>
          </article>
          <article className="border border-border p-8">
            <h2 className="text-2xl font-semibold text-charcoal">
              Long-Term Financial Protection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-gray">
              Golden Endowment is presented as a savings and protection scheme:
              twenty years of coverage with premiums payable for the first seven
              years, and continued surplus participation after the premium
              payment term.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal">
            Additional official information
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-gray">
            The following details were not included in the supplied product
            document and are reserved as editable placeholders.
          </p>
          <div className="mt-8 space-y-4">
            <p className="placeholder-note">
              [Official company history to be provided]
            </p>
            <p className="placeholder-note">
              [Official mission statement to be provided]
            </p>
            <p className="placeholder-note">
              [Official licensing information to be provided]
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
