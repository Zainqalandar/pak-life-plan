import { officialWebsites, contactPlaceholders } from "@/lib/site";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-charcoal">Contact details</h2>
      <p className="mt-3 text-sm text-muted-gray">
        Official phone, email, and address were not included in the supplied
        materials. Placeholders below can be replaced when official details are
        confirmed.
      </p>
      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
            Phone
          </dt>
          <dd className="placeholder-note mt-2">{contactPlaceholders.phone}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
            Email
          </dt>
          <dd className="placeholder-note mt-2">{contactPlaceholders.email}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
            Address
          </dt>
          <dd className="placeholder-note mt-2">{contactPlaceholders.address}</dd>
        </div>
      </dl>
      <h3 className="mt-10 text-sm font-semibold tracking-[0.16em] uppercase text-gold">
        Official websites
      </h3>
      <ul className="mt-4 space-y-2">
        {officialWebsites.map((site) => (
          <li key={site.href}>
            <a
              href={site.href}
              className="text-forest underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              {site.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
