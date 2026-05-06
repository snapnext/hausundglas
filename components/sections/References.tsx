import { useTranslations } from 'next-intl';
import { REF_KEYS } from '@/lib/content';

export function References() {
  const t = useTranslations('references');
  return (
    <section className="section section-muted" id="referenzen">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1">{t('headline')}</h2>
          <p className="body-lg section-sub">{t('sub')}</p>
        </div>
        <div className="grid-3">
          {REF_KEYS.map((k) => (
            <figure key={k} className="card quote-card">
              <div className="quote-mark" aria-hidden="true">
                „
              </div>
              <blockquote>{t(`${k}Quote`)}</blockquote>
              <figcaption>
                <strong>{t(`${k}Who`)}</strong>
                <span>{t(`${k}Loc`)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
