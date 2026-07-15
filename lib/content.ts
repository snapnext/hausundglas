// Locale-invariant constants and icon mappings.
// Translatable strings (services, steps, FAQs, etc.) live in messages/{de,en}.json
// and are read via next-intl's useTranslations()/getTranslations() hooks.

import type { IconName } from '@/components/ui/Icon';

export const PHONE_TEL = '+491718434142';
export const PHONE_DISPLAY = '0171 8434142';
export const EMAIL = 'd.buzhala@outlook.de';
export const ADDRESS = {
  street: 'Pfalzgrafenstraße 10',
  postalCode: '50259',
  city: 'Pulheim',
  country: 'DE',
} as const;

// Silent observers BCC'd on every form submission. Used during launch/QA
// so the agency monitors deliveries without the client seeing a CC list.
// TODO: empty this array once form delivery has been verified end-to-end.
export const EMAIL_OBSERVERS: readonly string[] = ['max@snapnext.de'];

// Service identifiers — used to look up translated copy in messages and to
// pin a fixed icon per service (icons aren't translated).
export const SERVICE_KEYS = ['glass', 'upkeep', 'deep', 'facade'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_ICONS: Record<ServiceKey, IconName> = {
  glass: 'window',
  upkeep: 'building',
  deep: 'home',
  facade: 'drop',
};

// Pricing-card bullet identifiers. Same pattern as services.
export const PRICING_KEYS = ['point1', 'point2', 'point3', 'point4'] as const;
export type PricingKey = (typeof PRICING_KEYS)[number];

export const PRICING_ICONS: Record<PricingKey, IconName> = {
  point1: 'euro',
  point2: 'check',
  point3: 'shield',
  point4: 'calendar',
};

// Process step identifiers.
export const STEP_KEYS = ['step1', 'step2', 'step3'] as const;
export type StepKey = (typeof STEP_KEYS)[number];

export const STEP_NUMBERS: Record<StepKey, string> = {
  step1: '01',
  step2: '02',
  step3: '03',
};

// Reference identifiers.
export const REF_KEYS = ['ref1', 'ref2', 'ref3'] as const;
export type RefKey = (typeof REF_KEYS)[number];

// Server-side service options enum used by the contact form schema.
// String values are the German labels (matches the legacy <option> values),
// translated for display via the contact.serviceOptions namespace.
export const SERVICE_OPTIONS = [
  'Glas- & Fensterreinigung',
  'Unterhaltsreinigung',
  'Grundreinigung',
  'Fassaden- & Solarreinigung',
  'Hausmeisterservice',
  'Sonstiges',
] as const;

// Same for the dialog's narrower service list.
export const QUOTE_SERVICE_KEYS = ['glass', 'upkeep', 'deep', 'facade'] as const;
export const QUOTE_SIZE_KEYS = ['small', 'medium', 'large', 'biz'] as const;
export const QUOTE_WHEN_KEYS = ['thisWeek', 'nextWeek', 'thisMonth', 'quoteOnly'] as const;
