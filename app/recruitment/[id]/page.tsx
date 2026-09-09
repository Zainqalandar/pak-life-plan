import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecruitmentDetail } from "@/components/recruitment/RecruitmentDetail";
import { recruitmentJobs } from "@/lib/recruitment";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return recruitmentJobs.map((job) => ({ id: job.id }));
}

function getJob(id: string) {
  return recruitmentJobs.find((job) => job.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);

  if (!job) return {};

  return createMetadata({
    title: `${job.title} | Careers | State Life Insurance Corporation of Pakistan`,
    description: job.description,
    path: `/recruitment/${job.id}`,
  });
}

export default async function RecruitmentJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = getJob(id);

  if (!job) notFound();

  return <RecruitmentDetail job={job} />;
}
