import Link from "next/link";
import { StateLifeLogo } from "@/components/layout/StateLifeLogo";
import { Container } from "@/components/shared/Container";
import { contactPlaceholders, navItems, officialWebsites } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <StateLifeLogo inverted />
          <p className="mt-5 text-xs font-semibold tracking-[0.18em] uppercase text-gold-light">
            100% Owned by the Government of Pakistan
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Golden Endowment — 20 years of coverage with premiums payable for
            the first 7 years.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold-light">
            Golden Endowment
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <Link className="hover:text-white" href="/plans/golden-endowment">
                Plan overview
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/plans/golden-endowment#benefits">
                Benefits
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/plans/golden-endowment#add-ons">
                Optional add-ons
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/contact">
                Inquire about the plan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold-light">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold-light">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>{contactPlaceholders.phone}</li>
            <li>{contactPlaceholders.email}</li>
            <li>{contactPlaceholders.address}</li>
          </ul>
          <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] uppercase text-gold-light">
            Official Websites
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {officialWebsites.map((site) => (
              <li key={site.href}>
                <a
                  className="text-white/80 underline-offset-4 hover:text-white hover:underline"
                  href={site.href}
                  rel="noopener noreferrer"
                >
                  {site.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-xs text-white/60 sm:text-left">
          © 2026 State Life Insurance Corporation of Pakistan. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
