"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ProductPlan } from "@/lib/content";

export function ProductPlanFAQ({ plan }: { plan: ProductPlan }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Answers reflect the information currently supplied for this plan. Confirm contractual details with State Life."
        />
        <Accordion className="mt-10 border-t border-border">
          {plan.faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-charcoal hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-gray sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
