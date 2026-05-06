import { Icon } from '@/components/ui/Icon';
import { REFS } from '@/lib/content';

export function References() {
  return (
    <section className="section section-muted" id="referenzen">
      <div className="container">
        <div className="section-head">
          <div className="placeholder-banner">
            <Icon name="info" size={14} /> Beispiel — wird durch echte Bewertungen ersetzt
          </div>
          <span className="eyebrow">Referenzen</span>
          <h2 className="h1">Was Kundinnen und Kunden sagen werden.</h2>
          <p className="body-lg section-sub">
            Wir bauen unsere Bewertungen aktuell auf. Die folgenden Stimmen sind
            beispielhafte Platzhalter, bis die ersten echten Rückmeldungen veröffentlicht sind.
          </p>
        </div>
        <div className="grid-3">
          {REFS.map((r, i) => (
            <figure key={i} className="card quote-card is-placeholder">
              <div className="quote-mark" aria-hidden="true">
                „
              </div>
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <strong>{r.who}</strong>
                <span>{r.loc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
