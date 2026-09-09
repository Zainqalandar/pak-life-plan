import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/shared/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | Golden Endowment",
  description:
    "Have questions about Golden Endowment? Get in touch with us. Official phone, email, and address can be added when provided.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="bg-forest-deep py-16 text-white sm:py-20">
        <Container>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">
            Contact
          </p>
          <div className="mt-4 h-px w-16 bg-gold" />
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            Let’s Talk About Your Financial Future
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Have questions about Golden Endowment? Get in touch with us.
          </p>
        </Container>
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactInfo />
        </Container>
      </section>
    </main>
  );
}
