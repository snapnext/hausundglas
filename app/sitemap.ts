import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE = 'https://hausundglas.de';

// Build locale-aware URLs: default locale at root (no prefix), others under /<locale>.
function url(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${BASE}${prefix}${path === '/' ? '' : path}` || `${BASE}/`;
}

const PATHS = ['/', '/impressum', '/datenschutz', '/agb'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.flatMap((p) =>
    routing.locales.map((locale) => ({
      url: url(locale, p) || `${BASE}/`,
      lastModified: now,
      changeFrequency:
        p === '/' ? ('monthly' as const) : ('yearly' as const),
      priority: p === '/' ? 1.0 : 0.3,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, url(l, p) || `${BASE}/`]),
        ),
      },
    })),
  );
}
