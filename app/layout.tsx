import type { Metadata, Viewport } from 'next';
import { barlow } from '@/lib/fonts';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { MobileCta } from '@/components/sections/MobileCta';
import { QuoteDialogProvider } from '@/components/site/QuoteDialogProvider';
import { Toaster } from '@/components/site/Toaster';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hausundglas.de'),
  title:
    'A&L Haus- & Glaspflegeservice – Glasreinigung & Gebäudereinigung Pulheim, Köln',
  description:
    'A&L Haus- & Glaspflegeservice aus Pulheim. Glasreinigung, Fensterreinigung, Gebäudereinigung und Hausmeisterservice für Privat- und Gewerbekunden in Pulheim, Köln und Umgebung. Festpreis · Versichert · Rückruf am selben Werktag.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'A&L Haus- & Glaspflegeservice – Pulheim & Köln',
    description:
      'Glasreinigung, Gebäudereinigung und Hausmeisterservice in Pulheim, Köln und Umgebung. Festpreis · Versichert.',
    images: ['/logo-al-full.png'],
  },
  icons: {
    icon: '/logo-al-full-transparent.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#1F2C5C',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'A&L Haus- & Glaspflegeservice',
  image: '/logo-al-full.png',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={barlow.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#leistungen" className="sr-only">
          Zum Inhalt springen
        </a>
        <QuoteDialogProvider>
          <Header />
          {children}
          <Footer />
          <MobileCta />
          <Toaster />
        </QuoteDialogProvider>
      </body>
    </html>
  );
}
