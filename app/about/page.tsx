import { AboutContent } from "@/components/about/AboutContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About State Life Insurance Corporation of Pakistan",
  description:
    "Learn more about State Life Insurance Corporation of Pakistan and its commitment to policyholders. Official history and licensing details can be added when provided.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
