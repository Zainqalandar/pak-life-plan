"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ApplicationForm } from "@/components/recruitment/ApplicationForm";
import { Container } from "@/components/shared/Container";
import { CtaButton } from "@/components/shared/CtaButton";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { recruitmentJobs, recruitmentReasons } from "@/lib/recruitment";

const reasonIcons = [
  Sparkles,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  Users,
] as const;

export function RecruitmentLanding() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("all");
  const [location, setLocation] = useState("all");
  const [type, setType] = useState("all");

  const departments = [...new Set(recruitmentJobs.map((job) => job.department))];
  const locations = [...new Set(recruitmentJobs.map((job) => job.location))];
  const types = [...new Set(recruitmentJobs.map((job) => job.type))];
  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return recruitmentJobs.filter((job) => {
      const matchesQuery = !normalizedQuery || job.title.toLowerCase().includes(normalizedQuery);
      const matchesDepartment = department === "all" || job.department === department;
      const matchesLocation = location === "all" || job.location === location;
      const matchesType = type === "all" || job.type === type;
      return matchesQuery && matchesDepartment && matchesLocation && matchesType;
    });
  }, [department, location, query, type]);

  return (
    <main>
      <section className="relative overflow-hidden bg-forest-deep text-white">
        <div className="pattern-geo pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">Careers / Recruitment</p>
            <div className="mt-5 h-px w-16 bg-gold" />
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Build Your Career With Us</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">Explore opportunities to grow your career, develop your skills, and become part of a professional organization.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="#open-positions" variant="light">View Open Positions</CtaButton>
              <CtaButton href="#application" variant="ghost">Submit Your CV</CtaButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-gold/30 bg-white/5 sm:aspect-[5/3] lg:aspect-[4/3]">
            <Image src="/images/hero-family.jpg" alt="People walking together, representing a purposeful professional journey" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/90 via-forest-deep/15 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 border-l-2 border-gold bg-forest-deep/85 p-5 backdrop-blur-sm sm:right-8 sm:bottom-8 sm:left-8">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-light">A career with purpose</p>
              <p className="mt-2 text-lg font-medium text-white">Bring your perspective. Grow your capabilities. Make work matter.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why join us?" title="Grow with work that matters" description="A strong organization is built by people who are committed to learning, serving responsibly, and building a meaningful future together." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentReasons.map((reason, index) => {
              const Icon = reasonIcons[index];
              return <FadeIn key={reason.title} delay={index * 0.05}><article className="h-full border border-border bg-ivory p-7"><div className="flex size-11 items-center justify-center border border-gold/40 bg-white text-forest"><Icon className="size-5" aria-hidden="true" /></div><h2 className="mt-5 text-xl font-semibold text-charcoal">{reason.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-gray">{reason.description}</p></article></FadeIn>;
            })}
          </div>
        </Container>
      </section>

      <section id="open-positions" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Current vacancies" title="Find your next opportunity" description="The listings below are illustrative examples for the recruitment experience. Replace them with approved vacancies before publishing live openings." />
          <div className="mt-10 border border-border bg-white p-4 sm:p-5">
            <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <label className="relative block"><span className="sr-only">Search by job title</span><Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-gray" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search jobs..." className="h-12 w-full border border-input bg-white pr-3 pl-10 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" /></label>
              <FilterSelect label="Department" value={department} onChange={setDepartment} options={departments} />
              <FilterSelect label="Location" value={location} onChange={setLocation} options={locations} />
              <FilterSelect label="Employment type" value={type} onChange={setType} options={types} />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 text-sm text-muted-gray"><p>{filteredJobs.length} example {filteredJobs.length === 1 ? "role" : "roles"} shown</p><p className="hidden sm:block">Select a role to view details and apply</p></div>
          <div className="mt-4 grid gap-5 lg:grid-cols-3">
            {filteredJobs.map((job, index) => <FadeIn key={job.id} delay={index * 0.05}><article className="flex h-full flex-col border border-border bg-white p-6 shadow-[0_12px_40px_-28px_rgba(6,69,43,0.45)]"><div className="flex items-start justify-between gap-4"><span className="border border-gold/50 bg-accent px-2 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-forest">Example listing</span><BriefcaseBusiness className="size-5 text-gold" aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-semibold text-charcoal">{job.title}</h2><div className="mt-5 space-y-3 text-sm text-muted-gray"><p className="flex items-center gap-2"><Building2 className="size-4 text-forest" aria-hidden="true" />{job.department}</p><p className="flex items-center gap-2"><MapPin className="size-4 text-forest" aria-hidden="true" />{job.location}</p><p className="flex items-center gap-2"><Users className="size-4 text-forest" aria-hidden="true" />{job.type}</p></div><p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-gray">{job.description}</p><Link href={`/recruitment/${job.id}`} className="mt-7 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-forest transition-colors hover:text-forest-deep">View job details <ArrowRight className="size-4" aria-hidden="true" /></Link></article></FadeIn>)}
          </div>
          {filteredJobs.length === 0 ? <div className="mt-5 border border-dashed border-gold/60 bg-white p-8 text-center text-sm text-muted-gray">No example roles match these filters. Try adjusting your search.</div> : null}
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Open application" title="Submit your CV" description="Want to be considered for future opportunities? Share a little about yourself and keep your profile in consideration." /></div>
          <ApplicationForm />
        </Container>
      </section>

      <section className="bg-forest-deep py-20 text-white sm:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div><p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-light">Keep in touch</p><div className="mt-4 h-px w-16 bg-gold" /><h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Don&apos;t See the Right Opportunity?</h2><p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">Submit your CV and we&apos;ll keep your profile in consideration for future opportunities.</p></div>
          <CtaButton href="#application" variant="light">Submit Your CV</CtaButton>
        </Container>
      </section>
    </main>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return <label className="block"><span className="sr-only">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"><option value="all">All {label === "Employment type" ? "Types" : `${label}s`}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
