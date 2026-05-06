import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { QuoteTrigger } from '@/components/site/QuoteTrigger';

export function Hero() {
  return (
    <section className="hero hero-minimal" id="top">
      <div className="hero-track" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Reinigungsservice · Pulheim · Köln</span>
          <h1 className="display">
            Saubere Fenster.
            <br />
            Gepflegte Räume.
          </h1>
          <p className="body-lg hero-sub">
            Ihr Reinigungsservice für Privat- und Gewerbekunden in Pulheim, Köln und Umgebung —
            gründlich, zuverlässig und zum Festpreis.
          </p>
          <div className="hero-actions">
            <QuoteTrigger variant="primary" size="lg">
              Angebot anfragen
            </QuoteTrigger>
            <Button variant="secondary" size="lg" as="a" href="#leistungen">
              Leistungen ansehen
            </Button>
          </div>
          <ul className="trust">
            <li>
              <Icon name="shield" size={16} /> Versichert bis 5 Mio.&nbsp;€
            </li>
            <li>
              <Icon name="check" size={16} /> Festpreis-Garantie
            </li>
            <li>
              <Icon name="phone" size={16} /> Rückruf am selben Werktag
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
