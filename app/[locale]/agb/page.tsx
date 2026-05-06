import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

// TODO: AGB sind optional, aber empfohlen. Inhalt vor Launch ergänzen oder Link entfernen.

export const metadata: Metadata = {
  title: 'AGB – A&L Haus- & Glaspflegeservice',
};

export default async function AgbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <span className="eyebrow">Rechtliches</span>
        <h1 className="h1" style={{ marginTop: 12 }}>
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="body-lg" style={{ marginTop: 24 }}>
          Die AGB werden zurzeit erstellt. Bei Rückfragen erreichen Sie uns gern direkt
          telefonisch oder per E-Mail.
        </p>
      </div>
    </main>
  );
}
