import { z } from "zod";

export const riskLeadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number."),
});

export type RiskLeadInput = z.infer<typeof riskLeadSchema>;
