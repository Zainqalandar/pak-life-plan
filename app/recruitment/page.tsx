import type { Metadata } from "next";
import { RecruitmentLanding } from "@/components/recruitment/RecruitmentLanding";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Careers & Recruitment | State Life Insurance Corporation of Pakistan",
  description:
    "Explore career opportunities and submit your CV to State Life Insurance Corporation of Pakistan.",
  path: "/recruitment",
});

export default function RecruitmentPage() {
  return <RecruitmentLanding />;
}
