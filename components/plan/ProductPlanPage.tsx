import {
  Award,
  BadgeCheck,
  CalendarRange,
  CircleCheck,
  GraduationCap,
  HeartHandshake,
  PiggyBank,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ProductPlanFAQ } from "@/components/plan/ProductPlanFAQ";
import { Container } from "@/components/shared/Container";
import { CTA } from "@/components/shared/CTA";
import { CtaButton } from "@/components/shared/CtaButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ProductPlan } from "@/lib/content";

const featureIcons = [
  ShieldCheck,
  PiggyBank,
  CalendarRange,
  BadgeCheck,
] as const;

const planThemes = {
  "platinum-plus": {
    icon: ShieldCheck,
    label: "A shorter premium commitment",
  },
  "jeevan-sathi": {
    icon: Users,
    label: "Shared protection for two lives",
  },
  "child-education-marriage": {
    icon: GraduationCap,
    label: "A plan for important milestones",
  },
} as const;

export function ProductPlanPage({ plan }: { plan: ProductPlan }) {
  const theme = planThemes[plan.slug as keyof typeof planThemes] ?? {
    icon: HeartHandshake,
    label: "Protection for your priorities",
  };
  const HeroIcon = theme.icon;

  return (
    <main>
      <section className="relative overflow-hidden bg-forest-deep py-16 text-white sm:py-24">
        <div className="pattern-geo pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">
              {plan.eyebrow}
            </p>
            <div className="mt-4 h-px w-16 bg-gold" />
            <div className="mt-7 flex items-start gap-4">
              <div className="hidden size-14 shrink-0 items-center justify-center border border-gold/50 bg-white/5 text-gold-light sm:flex">
                <HeroIcon className="size-7" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                  {plan.title}
                </h1>
                <p className="mt-5 max-w-3xl text-xl font-medium text-gold-light sm:text-2xl">
                  {plan.tagline}
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              {plan.intro}
            </p>
            {plan.sellingPoint ? (
              <p className="mt-8 max-w-2xl border-l-2 border-gold bg-white/5 px-5 py-4 text-base font-semibold text-white sm:text-lg">
                {plan.sellingPoint}
              </p>
            ) : null}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contact" variant="light">
                Get Started
              </CtaButton>
              <CtaButton href="#plan-details" variant="ghost">
                Explore Plan Details
              </CtaButton>
            </div>
          </div>
          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-white/15 pt-9 sm:grid-cols-3">
            {plan.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-semibold tracking-[0.16em] uppercase text-white/65">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-gold sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="plan-details" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Overview"
            title={`What is ${plan.title}?`}
            description={plan.intro}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plan.stats.map((stat) => (
              <article key={stat.label} className="border border-border bg-ivory p-7">
                <p className="text-4xl font-semibold text-forest">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-muted-gray">{stat.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why choose this plan?"
            title={theme.label}
            description="Consider the structure and stated purpose of the plan alongside your own needs and the full policy wording."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plan.whyChoose.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <article className="h-full border border-border bg-white p-7 sm:p-8">
                  <CircleCheck className="size-6 text-gold" aria-hidden="true" />
                  <p className="mt-5 text-base leading-relaxed text-muted-gray">
                    {item}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Plan features"
            title="Designed around real financial priorities"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {plan.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <article key={feature.title} className="border border-border bg-ivory p-7 sm:p-8">
                  <Icon className="size-7 text-forest" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-gray sm:text-base">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-forest py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="What the plan is designed to provide"
            description="Benefits are subject to the applicable policy terms and the final policy contract."
            light
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {plan.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={
                  benefit.tone === "dark"
                    ? "border border-gold/30 bg-forest-deep p-8 sm:p-10"
                    : "border border-white/15 bg-white p-8 text-charcoal sm:p-10"
                }
              >
                {benefit.tone === "dark" ? (
                  <ShieldCheck className="size-8 text-gold-light" aria-hidden="true" />
                ) : (
                  <Award className="size-8 text-gold" aria-hidden="true" />
                )}
                <h3
                  className={
                    benefit.tone === "dark"
                      ? "mt-6 text-2xl font-semibold text-white"
                      : "mt-6 text-2xl font-semibold text-charcoal"
                  }
                >
                  {benefit.title}
                </h3>
                <p
                  className={
                    benefit.tone === "dark"
                      ? "mt-4 text-base leading-relaxed text-white/80"
                      : "mt-4 text-base leading-relaxed text-muted-gray"
                  }
                >
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Eligibility and terms"
            title="Key information at a glance"
            description="Only the ages, terms, and milestones provided in the supplied plan brief are shown here."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden border border-border bg-white">
              {plan.eligibility.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 border-b border-border p-5 last:border-b-0 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6 sm:p-6"
                >
                  <p className="text-sm font-semibold text-forest">{item.label}</p>
                  <p className="text-sm leading-relaxed text-muted-gray">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="border border-gold/30 bg-forest-deep p-7 text-white sm:p-8">
              <CalendarRange className="size-7 text-gold-light" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-white">
                Important policy conditions
              </h3>
              <ul className="mt-5 space-y-4">
                {plan.conditions.map((condition) => (
                  <li key={condition} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ProductPlanFAQ plan={plan} />

      <CTA
        heading={`Want to know more about ${plan.title}?`}
        text="Speak with State Life about eligibility, premiums, policy wording, and how this plan may fit your financial priorities."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/"
        secondaryLabel="Explore All Plans"
      />
    </main>
  );
}
