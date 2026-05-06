import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { QuoteTrigger } from '@/components/site/QuoteTrigger';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="hero hero-minimal" id="top">
      <div className="hero-track" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1 className="display">
            {t('headlineLine1')}
            <br />
            {t('headlineLine2')}
          </h1>
          <p className="body-lg hero-sub">{t('sub')}</p>
          <div className="hero-actions">
            <QuoteTrigger variant="primary" size="lg">
              {t('ctaPrimary')}
            </QuoteTrigger>
            <Button variant="secondary" size="lg" as="a" href="#leistungen">
              {t('ctaSecondary')}
            </Button>
          </div>
          <ul className="trust">
            <li>
              <Icon name="shield" size={16} /> {t('trustInsured')}
            </li>
            <li>
              <Icon name="check" size={16} /> {t('trustFixedPrice')}
            </li>
            <li>
              <Icon name="phone" size={16} /> {t('trustCallback')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
