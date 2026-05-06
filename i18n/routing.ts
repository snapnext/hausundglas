import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  // German stays at the root URL (/), English goes to /en/...
  localePrefix: 'as-needed',
  // Don't auto-redirect based on Accept-Language — German is the default for the
  // Pulheim audience. Visitors choose English explicitly via the header toggle.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
