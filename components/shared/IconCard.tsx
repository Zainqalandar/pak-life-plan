import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <FeatureCard title={title} description={description}>
      <div className="flex size-11 items-center justify-center border border-gold/40 bg-ivory text-forest">
        <Icon className="size-5" aria-hidden="true" />
      </div>
    </FeatureCard>
  );
}
