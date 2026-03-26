import { z } from "zod/v4";

export const newsletterSchema = z.object({
  email: z.email().max(320),
  name: z.string().max(100).optional(),
  locale: z.enum(["hu", "en"]).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
