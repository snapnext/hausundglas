import { Icon } from '@/components/ui/Icon';

export function About() {
  return (
    <section className="section section-muted" id="ueber-uns">
      <div className="container two-col">
        <div>
          <span className="eyebrow">Über A&amp;L</span>
          <h2 className="h1" style={{ marginTop: 12 }}>
            Familienbetrieb aus Pulheim — seit über 15 Jahren.
          </h2>
          <p className="body-lg" style={{ marginTop: 20, maxWidth: 560 }}>
            Wir sind ein kleines, eingespieltes Team. Sie haben einen festen Ansprechpartner,
            ein klares Angebot und ein Ergebnis, das man sieht. Kein Subunternehmer-Karussell,
            keine versteckten Kosten.
          </p>
          <ul className="bullets">
            <li>
              <Icon name="check" size={18} /> Eigene, festangestellte Mitarbeiter
            </li>
            <li>
              <Icon name="check" size={18} /> Betriebshaftpflicht bis 5 Mio.&nbsp;€
            </li>
            <li>
              <Icon name="check" size={18} /> Termine werktags und samstags
            </li>
            <li>
              <Icon name="check" size={18} /> Einsatzgebiet: Pulheim, Köln, Frechen, Brauweiler
            </li>
          </ul>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-lab">Jahre im Einsatz</div>
          </div>
          <div className="stat">
            <div className="stat-num">300+</div>
            <div className="stat-lab">Aktive Kunden</div>
          </div>
          <div className="stat">
            <div className="stat-num">24h</div>
            <div className="stat-lab">Rückrufzeit werktags</div>
          </div>
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-lab">Festpreis-Garantie</div>
          </div>
        </div>
      </div>
    </section>
  );
}
