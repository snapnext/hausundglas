import { z } from 'zod';

// Error messages are translation keys (resolved client-side via next-intl in the
// Contact form). The API route uses safeParse and returns generic 400s without
// exposing these keys to the user, so the literal strings here are never rendered.

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'errorName'),
  email: z
    .string()
    .trim()
    .min(1, 'errorEmailRequired')
    .email('errorEmailInvalid'),
  phone: z.string().trim(),
  // Service is one of the localized labels rendered in the form select; we don't
  // enforce an enum here because the visible labels differ per locale.
  service: z.string().trim().min(1),
  message: z.string().trim().min(1, 'errorMessage'),
  consent: z.boolean().refine((v) => v === true, {
    message: 'errorConsent',
  }),
});
export type ContactInput = z.infer<typeof contactSchema>;

// Quote-dialog payload. Free-form strings — values are user-facing labels
// rendered in the active locale; server treats them as opaque text.
export const quoteSchema = z.object({
  service: z.string().trim().min(1),
  size: z.string().trim().min(1),
  when: z.string().trim().min(1),
  name: z.string().trim().min(1),
  contact: z.string().trim().min(1),
});
export type QuoteInput = z.infer<typeof quoteSchema>;
