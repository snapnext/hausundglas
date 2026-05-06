import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ADDRESS, EMAIL, PHONE_DISPLAY } from '@/lib/content';

// TODO: Replace this stub with reviewed Datenschutzerklärung before launch.
// DSGVO Art. 13/14 requires: identity of controller, purpose & legal basis of processing,
// recipients/third parties (Resend, Vercel), retention period, data subject rights, complaint right.

export const metadata: Metadata = {
  title: 'Datenschutz – A&L Haus- & Glaspflegeservice',
  description: 'Datenschutzerklärung nach DSGVO Art. 13/14.',
};

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        {locale === 'en' && (
          <p
            className="meta"
            style={{
              padding: '12px 16px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              marginBottom: 24,
              background: 'var(--surface-muted)',
            }}
          >
            This Privacy Policy is provided in German only as required by EU/German law (DSGVO Art. 13/14).
          </p>
        )}
        <span className="eyebrow">Rechtliches</span>
        <h1 className="h1" style={{ marginTop: 12 }}>
          Datenschutz
        </h1>
        <p className="body-lg" style={{ marginTop: 24 }}>
          Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung
          personenbezogener Daten auf dieser Website.
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Verantwortlicher
        </h2>
        <p style={{ marginTop: 12 }}>
          A&amp;L Haus- &amp; Glaspflegeservice
          <br />
          {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
          <br />
          Telefon: {PHONE_DISPLAY} · E-Mail: {EMAIL}
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Erhobene Daten und Zweck
        </h2>
        <p style={{ marginTop: 12 }}>
          Über das Kontaktformular werden Name, E-Mail-Adresse, Telefonnummer (optional) und
          Ihre Nachricht erhoben, ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage:
          Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Auftragsverarbeiter
        </h2>
        <p style={{ marginTop: 12 }}>
          Die Website wird bei Vercel Inc. gehostet. Der E-Mail-Versand erfolgt über Resend.
          Mit beiden Anbietern bestehen Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Speicherdauer
        </h2>
        <p style={{ marginTop: 12 }}>
          Anfragen werden gelöscht, sobald der Vorgang abgeschlossen ist und keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Rechte der Betroffenen
        </h2>
        <p style={{ marginTop: 12 }}>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Beschwerden
          richten Sie bitte an die zuständige Aufsichtsbehörde.
        </p>

        <p className="meta" style={{ marginTop: 40 }}>
          Hinweis: Dieser Text ist ein strukturierter Platzhalter. Vor dem Live-Gang muss er
          durch eine juristisch geprüfte Fassung ersetzt werden.
        </p>
      </div>
    </main>
  );
}
