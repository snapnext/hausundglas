import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { PRICING_KEYS, PRICING_ICONS } from '@/lib/content';

export function Pricing() {
  const t = useTranslations('pricing');
  return (
    <section className="section" id="preise">
      <div className="container">
        <div className="pricing-card">
          <div>
            <span className="eyebrow">{t('eyebrow')}</span>
            <h2 className="h1" style={{ marginTop: 12 }}>
              {t('headline')}
            </h2>
            <p className="body-lg" style={{ marginTop: 20, color: 'var(--fg-2)' }}>
              {t('body')}
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="primary" size="lg" as="a" href="#kontakt">
                {t('cta')}
              </Button>
            </div>
          </div>
          <ul className="pricing-list">
            {PRICING_KEYS.map((k) => (
              <li key={k}>
                <span className="pricing-icon">
                  <Icon name={PRICING_ICONS[k]} size={14} />
                </span>
                <div>
                  <strong>{t(`${k}Title`)}</strong>
                  <span>{t(`${k}Body`)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
