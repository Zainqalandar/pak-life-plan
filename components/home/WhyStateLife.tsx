import {
  BadgeCheck,
  Landmark,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { IconCard } from "@/components/shared/IconCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyStateLifeCards } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Users,
  BadgeCheck,
  TrendingUp,
  Shield,
  Landmark,
};

export function WhyStateLife() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="01 — Institution"
          title="Why State Life"
          description="State Life offers complete satisfaction to our valued policyholders from issuance of policy, to providing after sales service and optimizing return on Life Fund through a quality culture to maintain ourselves as the leading life insurer in Pakistan."
        />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-gray">
          The sum assured and declared bonuses payable on maturity or death (God
          forbid) are guaranteed by the Government of Pakistan.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyStateLifeCards.map((card, i) => {
            const Icon = icons[card.icon] ?? Shield;
            return (
              <FadeIn key={card.title} delay={i * 0.05}>
                <IconCard
                  icon={Icon}
                  title={card.title}
                  description={card.description}
                />
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
