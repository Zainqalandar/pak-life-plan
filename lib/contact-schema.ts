import { z } from "zod";

export const inquiryTypeValues = [
  "golden-endowment",
  "platinum-plus",
  "jeevan-sathi",
  "child-education-marriage",
  "general",
  "policy",
  "other",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Phone is required"),
  inquiryType: z.enum(inquiryTypeValues, {
    error: "Select an inquiry type",
  }),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactInput = z.infer<typeof contactSchema>;
