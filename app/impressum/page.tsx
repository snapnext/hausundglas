import type { Metadata } from 'next';
import { ADDRESS, EMAIL, PHONE_DISPLAY } from '@/lib/content';

// TODO: Replace this stub with attorney-reviewed Impressum copy before launch.
// TMG §5 requires: full company/operator name, full address, contact (phone, email),
// VAT ID (USt-IdNr.) if available, regulatory authority where applicable, and
// "Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV".

export const metadata: Metadata = {
  title: 'Impressum – A&L Haus- & Glaspflegeservice',
  description: 'Impressum nach § 5 TMG.',
};

export default function ImpressumPage() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <span className="eyebrow">Rechtliches</span>
        <h1 className="h1" style={{ marginTop: 12 }}>
          Impressum
        </h1>
        <p className="body-lg" style={{ marginTop: 24 }}>
          Angaben gemäß § 5 TMG.
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Anbieter
        </h2>
        <p style={{ marginTop: 12 }}>
          A&amp;L Haus- &amp; Glaspflegeservice
          <br />
          {ADDRESS.street}
          <br />
          {ADDRESS.postalCode} {ADDRESS.city}
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Kontakt
        </h2>
        <p style={{ marginTop: 12 }}>
          Telefon: {PHONE_DISPLAY}
          <br />
          E-Mail: {EMAIL}
        </p>

        <h2 className="h2" style={{ marginTop: 40 }}>
          Verantwortlich für den Inhalt
        </h2>
        <p style={{ marginTop: 12 }}>
          {/* TODO: insert content-responsible person per § 18 Abs. 2 MStV */}
          [Name der inhaltlich verantwortlichen Person]
        </p>

        <p className="meta" style={{ marginTop: 40 }}>
          Hinweis: Dieser Text ist ein Platzhalter. Vor dem Live-Gang muss er durch eine
          juristisch geprüfte Fassung ersetzt werden.
        </p>
      </div>
    </main>
  );
}
