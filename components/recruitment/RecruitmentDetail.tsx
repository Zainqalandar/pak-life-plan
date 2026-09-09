import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, Building2, CalendarDays, CheckCircle2, GraduationCap, MapPin, Users } from "lucide-react";
import { ApplicationForm } from "@/components/recruitment/ApplicationForm";
import { Container } from "@/components/shared/Container";
import { CtaButton } from "@/components/shared/CtaButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Job } from "@/lib/recruitment";

export function RecruitmentDetail({ job }: { job: Job }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-forest-deep py-16 text-white sm:py-20">
        <div className="pattern-geo pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          <Link href="/recruitment#open-positions" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"><ArrowLeft className="size-4" aria-hidden="true" />Back to all opportunities</Link>
          <div className="mt-10 max-w-4xl"><span className="inline-flex border border-gold/50 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-gold-light">Example listing</span><p className="mt-6 text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">Careers / {job.department}</p><div className="mt-4 h-px w-16 bg-gold" /><h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">{job.title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">{job.description}</p><div className="mt-8 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-2 lg:grid-cols-4"><Meta icon={Building2} label="Department" value={job.department} /><Meta icon={MapPin} label="Location" value={job.location} /><Meta icon={Users} label="Employment type" value={job.type} /><Meta icon={BriefcaseBusiness} label="Experience" value={job.experience} /></div><div className="mt-9"><CtaButton href="#application" variant="light">Apply Now</CtaButton></div></div>
        </Container>
      </section>
      <section className="bg-white py-20 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"><div><SectionHeading eyebrow="Role details" title="Make an impact with your work" description={job.description} /><div className="mt-12 space-y-10"><DetailList title="Responsibilities" items={job.responsibilities} /><DetailList title="Requirements" items={job.requirements} /><div><h2 className="text-2xl font-semibold text-charcoal">Qualifications</h2><p className="mt-4 text-base leading-relaxed text-muted-gray">{job.qualifications}</p></div></div></div><aside className="border border-border bg-ivory p-7 sm:p-8"><p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">Application information</p><dl className="mt-6 divide-y divide-border border-y border-border"><InfoRow icon={CalendarDays} label="Application deadline" value={job.deadline} /><InfoRow icon={GraduationCap} label="Experience" value={job.experience} /><InfoRow icon={MapPin} label="Location" value={job.location} /></dl><p className="mt-6 text-sm leading-relaxed text-muted-gray">This is an illustrative role profile. Confirm the final vacancy details and deadline before publishing.</p></aside></Container></section>
      <section className="scroll-mt-24 bg-ivory py-20 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><SectionHeading eyebrow="Apply for this role" title="Tell us about yourself" description="Complete the form below. Your details are validated in the browser; real submission and storage require backend integration." /><ApplicationForm selectedJob={job} /></Container></section>
      <section className="bg-white py-14"><Container className="flex flex-col items-start justify-between gap-5 border-t border-border pt-10 sm:flex-row sm:items-center"><p className="text-sm text-muted-gray">Looking for a different opportunity?</p><CtaButton href="/recruitment#open-positions" variant="outline">View All Opportunities</CtaButton></Container></section>
    </main>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof Building2; label: string; value: string }) { return <div className="flex gap-3"><Icon className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" /><div><p className="text-xs tracking-wide text-white/60">{label}</p><p className="mt-1 text-sm font-medium text-white">{value}</p></div></div>; }
function InfoRow({ icon: Icon, label, value }: { icon: typeof CalendarDays; label: string; value: string }) { return <div className="flex gap-3 py-4"><Icon className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" /><div><dt className="text-xs font-semibold tracking-wide uppercase text-muted-gray">{label}</dt><dd className="mt-1 text-sm font-medium text-charcoal">{value}</dd></div></div>; }
function DetailList({ title, items }: { title: string; items: string[] }) { return <div><h2 className="text-2xl font-semibold text-charcoal">{title}</h2><ul className="mt-5 space-y-4">{items.map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-gray"><CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" /><span>{item}</span></li>)}</ul></div>; }
