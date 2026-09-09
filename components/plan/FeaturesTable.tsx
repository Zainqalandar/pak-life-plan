import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { goldenEndowmentFeatures } from "@/lib/content";

export function FeaturesTable() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Plan features"
          title="Key terms at a glance"
          description="Structured from the official product specification for Golden Endowment."
        />
        <div className="mt-10 hidden overflow-hidden border border-border bg-white md:block">
          <table className="w-full text-left">
            <caption className="sr-only">Golden Endowment plan features</caption>
            <tbody>
              {goldenEndowmentFeatures.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th
                    scope="row"
                    className="w-[32%] bg-forest-deep/95 px-6 py-5 align-top text-sm font-semibold text-white"
                  >
                    {row.label}
                  </th>
                  <td className="px-6 py-5 text-sm leading-relaxed text-muted-gray">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-4 md:hidden">
          {goldenEndowmentFeatures.map((row) => (
            <article key={row.label} className="border border-border bg-white p-5">
              <h3 className="text-sm font-semibold text-forest">{row.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-gray">
                {row.value}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
