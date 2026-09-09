import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPlanPage } from "@/components/plan/ProductPlanPage";
import { productPlans } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return productPlans.map((plan) => ({ slug: plan.slug }));
}

function getPlan(slug: string) {
  return productPlans.find((plan) => plan.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlan(slug);

  if (!plan) {
    return {};
  }

  return createMetadata({
    title: `${plan.title} | State Life Insurance Corporation of Pakistan`,
    description: plan.intro,
    path: `/plans/${plan.slug}`,
  });
}

export default async function ProductPlanRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlan(slug);

  if (!plan) {
    notFound();
  }

  return <ProductPlanPage plan={plan} />;
}
