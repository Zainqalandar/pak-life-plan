"use client";

import { useRef, useState } from "react";
import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Job } from "@/lib/recruitment";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  education: string;
  experience: string;
  coverLetter: string;
};

type FormErrors = Partial<Record<keyof FormValues | "cv", string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  education: "",
  experience: "",
  coverLetter: "",
};

const maxFileSize = 5 * 1024 * 1024;

export function ApplicationForm({ selectedJob }: { selectedJob?: Job }) {
  const [values, setValues] = useState<FormValues>({
    ...initialValues,
    position: selectedJob?.title ?? "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  function handleFileChange(file: File | undefined) {
    setStatus("idle");

    if (!file) {
      setCv(null);
      return;
    }

    const validExtension = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validExtension) {
      setCv(null);
      setErrors((current) => ({ ...current, cv: "Please choose a PDF, DOC, or DOCX file." }));
      return;
    }

    if (file.size > maxFileSize) {
      setCv(null);
      setErrors((current) => ({ ...current, cv: "Your CV must be 5 MB or smaller." }));
      return;
    }

    setCv(file);
    setErrors((current) => ({ ...current, cv: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};
    const requiredFields: Array<[keyof FormValues, string]> = [
      ["fullName", "Please enter your full name."],
      ["email", "Please enter your email address."],
      ["phone", "Please enter your phone number."],
      ["position", "Please select or enter a position."],
      ["education", "Please enter your education."],
      ["experience", "Please enter your years of experience."],
      ["coverLetter", "Please add a short cover letter."],
    ];

    requiredFields.forEach(([field, message]) => {
      if (!values[field].trim()) nextErrors[field] = message;
    });

    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!cv) nextErrors.cv = "Please attach your CV.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate()) setStatus("ready");
  }

  return (
    <form
      id="application"
      onSubmit={handleSubmit}
      className="border border-border bg-white p-6 shadow-[0_16px_40px_-28px_rgba(6,69,43,0.5)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName}>
          <Input
            id="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input
            id="application-email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <Input
            id="application-phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <Field label="Position Applying For" error={errors.position}>
          <Input
            id="position"
            value={values.position}
            onChange={(event) => updateValue("position", event.target.value)}
            placeholder="e.g. Frontend Developer"
            aria-invalid={!!errors.position}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <Field label="Education" error={errors.education}>
          <Input
            id="education"
            value={values.education}
            onChange={(event) => updateValue("education", event.target.value)}
            placeholder="Degree or qualification"
            aria-invalid={!!errors.education}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <Field label="Years of Experience" error={errors.experience}>
          <Input
            id="experience"
            value={values.experience}
            onChange={(event) => updateValue("experience", event.target.value)}
            placeholder="e.g. 3 years"
            aria-invalid={!!errors.experience}
            className="mt-2 h-12 rounded-none px-3"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Cover Letter" error={errors.coverLetter}>
            <Textarea
              id="cover-letter"
              value={values.coverLetter}
              onChange={(event) => updateValue("coverLetter", event.target.value)}
              placeholder="Tell us briefly about your experience and interest in this opportunity."
              aria-invalid={!!errors.coverLetter}
              className="mt-2 min-h-36 rounded-none px-3 py-3"
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <span className="text-sm font-medium text-charcoal">CV Upload</span>
          <button
            type="button"
            className="mt-2 flex min-h-20 w-full items-center gap-4 border border-dashed border-gold/60 bg-ivory px-4 text-left transition-colors hover:border-forest hover:bg-accent"
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="flex size-10 shrink-0 items-center justify-center bg-white text-forest">
              {cv ? <FileText className="size-5" aria-hidden="true" /> : <Upload className="size-5" aria-hidden="true" />}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-charcoal">
                {cv ? cv.name : "Choose your CV"}
              </span>
              <span className="mt-1 block text-xs text-muted-gray">PDF, DOC, or DOCX · maximum 5 MB</span>
            </span>
          </button>
          <input
            ref={fileInputRef}
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(event) => handleFileChange(event.target.files?.[0])}
            aria-invalid={!!errors.cv}
          />
          {errors.cv ? <p className="mt-1 text-sm text-destructive">{errors.cv}</p> : null}
        </div>
      </div>
      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 w-full rounded-none bg-forest px-7 text-white hover:bg-forest-deep sm:w-auto">
          Submit Application
        </Button>
        <p className="text-xs leading-relaxed text-muted-gray">Your information stays in this form until recruitment backend integration is connected.</p>
      </div>
      {status === "ready" ? (
        <p className="mt-5 border border-gold/40 bg-accent px-4 py-3 text-sm leading-relaxed text-forest" role="status">
          Your application details are complete. This is currently a frontend form; backend integration is required before applications can be submitted or stored.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-charcoal">{label}</label>
      {children}
      {error ? <p className="mt-1 text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
