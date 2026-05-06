import { REFS } from '@/lib/content';

export function References() {
  return (
    <section className="section section-muted" id="referenzen">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Referenzen</span>
          <h2 className="h1">Was Kundinnen und Kunden sagen.</h2>
          <p className="body-lg section-sub">
            Auszüge aus Rückmeldungen unserer Auftraggeber.
          </p>
        </div>
        <div className="grid-3">
          {REFS.map((r, i) => (
            <figure key={i} className="card quote-card">
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
