"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactInput,
} from "@/lib/contact-schema";
import { inquiryTypes } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "golden-endowment",
      message: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border bg-white p-6 shadow-[0_16px_40px_-28px_rgba(6,69,43,0.5)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-charcoal">
            Full Name
          </label>
          <Input
            id="fullName"
            className="mt-2 h-12 rounded-none px-3"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1 text-sm text-destructive">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="mt-2 h-12 rounded-none px-3"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            className="mt-2 h-12 rounded-none px-3"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-sm text-destructive">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="inquiryType" className="text-sm font-medium text-charcoal">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            className="mt-2 h-12 w-full border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-invalid={!!errors.inquiryType}
            {...register("inquiryType")}
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <p className="mt-1 text-sm text-destructive">
              {errors.inquiryType.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-charcoal">
            Message
          </label>
          <Textarea
            id="message"
            className="mt-2 min-h-32 rounded-none px-3"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-destructive">
              {errors.message.message}
            </p>
          ) : null}
        </div>
        {status === "success" ? (
          <p className="border border-forest/30 bg-ivory px-4 py-3 text-sm text-forest" role="status">
            Thank you. Your inquiry has been received. Official follow-up
            details can be connected when contact channels are provided.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
            We could not send your message. Please try again.
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-none bg-forest text-white hover:bg-forest-deep sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send inquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
