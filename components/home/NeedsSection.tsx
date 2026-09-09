import {
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Hourglass,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { IconCard } from "@/components/shared/IconCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { needs } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  HeartHandshake,
  GraduationCap,
  Hourglass,
  Umbrella,
  HandCoins,
};

export function NeedsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="04 — Purpose"
          title="Built Around Your Financial Needs"
          description="The Golden Endowment plan is described as addressing the following needs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((item, i) => {
            const Icon = icons[item.icon] ?? HeartHandshake;
            return (
              <FadeIn key={item.title} delay={i * 0.04}>
                <IconCard
                  icon={Icon}
                  title={item.title}
                  description={item.description}
                />
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
