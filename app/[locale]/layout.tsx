import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { barlow } from '@/lib/fonts';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { MobileCta } from '@/components/sections/MobileCta';
import { QuoteDialogProvider } from '@/components/site/QuoteDialogProvider';
import { Toaster } from '@/components/site/Toaster';
import { routing, type Locale } from '@/i18n/routing';
import '../globals.css';

const SITE_URL = 'https://hausundglas.de';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const t = await getTranslations({ locale: safeLocale, namespace: 'metadata' });

  // Locale-aware canonical + hreflang for SEO. Default locale is unprefixed.
  const path = safeLocale === routing.defaultLocale ? '/' : `/${safeLocale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: path,
      languages: {
        de: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: safeLocale === 'de' ? 'de_DE' : 'en_US',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/logo-al-full.png'],
    },
    icons: { icon: '/logo-al-full-transparent.png' },
  };
}

export const viewport: Viewport = {
  themeColor: '#1F2C5C',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'A&L Haus- & Glaspflegeservice',
  image: `${SITE_URL}/logo-al-full.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pfalzgrafenstraße 10',
    postalCode: '50259',
    addressLocality: 'Pulheim',
    addressCountry: 'DE',
  },
  telephone: '+49-171-8434142',
  email: 'd.buzhala@outlook.de',
  areaServed: ['Pulheim', 'Köln', 'Frechen', 'Brauweiler', 'Bergheim', 'Bedburg', 'Kerpen'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'header' });

  return (
    <html lang={locale} className={barlow.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#leistungen" className="sr-only">
          {t('skipToContent')}
        </a>
        <NextIntlClientProvider>
          <QuoteDialogProvider>
            <Header />
            {children}
            <Footer />
            <MobileCta />
            <Toaster />
          </QuoteDialogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
