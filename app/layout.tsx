import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { createMetadata } from "@/lib/seo";
import { companyName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Golden Endowment | State Life Insurance Corporation of Pakistan",
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  applicationName: companyName,
  keywords: [
    "Golden Endowment",
    "State Life",
    "State Life Insurance Corporation of Pakistan",
    "life insurance",
    "endowment plan",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "State Life Insurance Corporation of Pakistan",
  description:
    "State Life Insurance Corporation of Pakistan. 100% owned by the Government of Pakistan.",
  url: "http://www.statelifelife.com.pk",
  sameAs: [
    "http://www.statelifelife.com.pk",
    "http://www.stathealth.com.pk",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
