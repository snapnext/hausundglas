import { Icon } from '@/components/ui/Icon';
import { SERVICES } from '@/lib/content';

export function Services() {
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Leistungen im Überblick</span>
          <h2 className="h1">Was wir für Sie tun.</h2>
          <p className="body-lg section-sub">
            Ein Ansprechpartner für Glas, Räume und Fassaden — abgestimmt auf Privatkunden,
            Hausverwaltungen und Gewerbe.
          </p>
        </div>
        <div className="grid-4">
          {SERVICES.map((s) => (
            <article key={s.title} className="card svc-card">
              <div className="card-icon">
                <Icon name={s.icon} size={22} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="card-link" href="#kontakt">
                Anfragen <Icon name="arrow" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
