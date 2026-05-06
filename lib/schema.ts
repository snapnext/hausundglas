import { z } from 'zod';
import { SERVICE_OPTIONS } from './content';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Bitte geben Sie Ihren Namen an.'),
  email: z
    .string()
    .trim()
    .min(1, 'Bitte E-Mail-Adresse angeben.')
    .email('Bitte eine gültige E-Mail-Adresse angeben.'),
  phone: z.string().trim(),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().trim().min(1, 'Bitte beschreiben Sie kurz Ihr Anliegen.'),
  consent: z.boolean().refine((v) => v === true, {
    message: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
  }),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const QUOTE_SERVICES = ['Glas- & Fensterreinigung', 'Unterhaltsreinigung', 'Grundreinigung', 'Fassade & Solar'] as const;
export const QUOTE_SIZES    = ['Wohnung bis 60 m²', 'Wohnung 60–100 m²', 'Haus / über 100 m²', 'Gewerbe / Büro'] as const;
export const QUOTE_WHENS    = ['Diese Woche', 'Nächste Woche', 'Im Laufe des Monats', 'Nur ein Angebot'] as const;

export const quoteSchema = z.object({
  service: z.enum(QUOTE_SERVICES),
  size: z.enum(QUOTE_SIZES),
  when: z.enum(QUOTE_WHENS),
  name: z.string().trim().min(1),
  contact: z.string().trim().min(1),
});
export type QuoteInput = z.infer<typeof quoteSchema>;
