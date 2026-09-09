import type { Metadata } from "next";
import { companyName, productName, siteUrl } from "@/lib/site";

const defaultDescription =
  "Explore the Golden Endowment Plan — 20 years of insurance coverage with premiums payable for the first 7 years.";

export function createMetadata({
  title,
  description = defaultDescription,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();
  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: companyName,
      locale: "en_PK",
      images: [
        {
          url: "/images/hero-family.jpg",
          width: 1920,
          height: 1280,
          alt: `Family representing long-term financial security with ${productName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero-family.jpg"],
    },
  };
}
