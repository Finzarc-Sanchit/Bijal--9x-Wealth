import { z } from "zod";

export const assessmentWeightSchema = z.enum(["A", "B", "C"]);

export const quizAnswerSchema = z.object({
  questionId: z.number().int().min(1).max(5),
  weight: assessmentWeightSchema,
});

export const quizLeadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name to generate your custom report card."),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "A valid 10-digit mobile number is required to receive instant report alerts."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address to securely receive your comprehensive PDF dossier."),
});

export const assessmentSubmitSchema = z.object({
  answers: z.array(quizAnswerSchema).length(5),
  lead: quizLeadSchema,
});

export const consultationGoalSchema = z.enum([
  "child-education",
  "retirement-planning",
  "home-downpayment",
  "general",
]);

export const consultationFormSchema = z.object({
  goal: consultationGoalSchema,
  name: z.string().trim().min(2, "Please enter your full name."),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    message: "Please acknowledge the disclaimer to continue.",
  }),
});

export const testimonialConsultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  profession: z.string().trim().min(2, "Please enter your profession."),
  topic: z.string().trim().min(3, "Please describe the topic you would like to discuss."),
  consent: z.literal(true, {
    message: "Please acknowledge the disclaimer to continue.",
  }),
});

export type AssessmentSubmitInput = z.infer<typeof assessmentSubmitSchema>;
export type ConsultationFormInput = z.infer<typeof consultationFormSchema>;
export type TestimonialConsultationInput = z.infer<typeof testimonialConsultationSchema>;
