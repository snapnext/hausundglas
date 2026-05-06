import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { PRICING_POINTS } from '@/lib/content';

export function Pricing() {
  return (
    <section className="section" id="preise">
      <div className="container">
        <div className="pricing-card">
          <div>
            <span className="eyebrow">Festpreis-Garantie</span>
            <h2 className="h1" style={{ marginTop: 12 }}>
              Was Sie hören, ist was Sie zahlen.
            </h2>
            <p className="body-lg" style={{ marginTop: 20, color: 'var(--fg-2)' }}>
              Wir mögen keine Überraschungen auf der Rechnung — Sie sicher auch nicht.
              Deshalb arbeiten wir grundsätzlich zum vereinbarten Festpreis.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="primary" size="lg" as="a" href="#kontakt">
                Festpreis anfragen
              </Button>
            </div>
          </div>
          <ul className="pricing-list">
            {PRICING_POINTS.map((p) => (
              <li key={p.title}>
                <span className="pricing-icon">
                  <Icon name={p.icon} size={14} />
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
