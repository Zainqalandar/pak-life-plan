"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Answers are drawn only from the supplied Golden Endowment information."
        />
        <Accordion className="mt-10 border-t border-border">
          {faqs.map((faq, index) => (
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
      </Container>
    </section>
  );
}
