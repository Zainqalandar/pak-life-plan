import { FilePlus2, ShieldPlus, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { addOns } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  ShieldPlus,
  FilePlus2,
};

export function AddOnsCards() {
  return (
    <section id="add-ons" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Optional"
          title="Optional Add-Ons"
          description="Supplementary contracts that may be availed with the plan, as described in the official material."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {addOns.map((addon) => {
            const Icon = icons[addon.icon] ?? ShieldPlus;
            return (
              <article
                key={addon.title}
                className="border border-border bg-white p-8 shadow-[0_12px_40px_-28px_rgba(6,69,43,0.45)]"
              >
                <Icon className="size-7 text-forest" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-charcoal">
                  {addon.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-gray sm:text-base">
                  {addon.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
