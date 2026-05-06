import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { SERVICE_KEYS, SERVICE_ICONS } from '@/lib/content';

export function Services() {
  const t = useTranslations('services');
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1">{t('headline')}</h2>
          <p className="body-lg section-sub">{t('sub')}</p>
        </div>
        <div className="grid-4">
          {SERVICE_KEYS.map((k) => (
            <article key={k} className="card svc-card">
              <div className="card-icon">
                <Icon name={SERVICE_ICONS[k]} size={22} />
              </div>
              <h3>{t(`items.${k}.title`)}</h3>
              <p>{t(`items.${k}.body`)}</p>
              <a className="card-link" href="#kontakt">
                {t('linkLabel')} <Icon name="arrow" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
