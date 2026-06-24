import { z } from "zod";
import { CONTACT_FORM } from "./content";

const areaOfInterestOptions = [...CONTACT_FORM.areaOfInterestOptions];
const wealthOptions = [...CONTACT_FORM.wealthOptions];

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, ""))
    .pipe(
      z
        .string()
        .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number."),
    ),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  areaOfInterest: z
    .string()
    .min(1, "Please select an area of interest.")
    .refine(
      (value) => (areaOfInterestOptions as readonly string[]).includes(value),
      { message: "Please select an area of interest." },
    ),
  investibleWealth: z
    .string()
    .min(1, "Please select a wealth range.")
    .refine((value) => (wealthOptions as readonly string[]).includes(value), {
      message: "Please select a wealth range.",
    }),
  message: z
    .string()
    .trim()
    .max(2000, "Message must be 2,000 characters or fewer.")
    .optional()
    .or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormValues = z.input<typeof contactFormSchema>;
