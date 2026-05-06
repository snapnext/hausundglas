import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export function About() {
  const t = useTranslations('about');
  return (
    <section className="section section-muted" id="ueber-uns">
      <div className="container two-col">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1" style={{ marginTop: 12 }}>
            {t('headline')}
          </h2>
          <p className="body-lg" style={{ marginTop: 20, maxWidth: 560 }}>
            {t('body')}
          </p>
          <ul className="bullets">
            <li>
              <Icon name="check" size={18} /> {t('bullet1')}
            </li>
            <li>
              <Icon name="check" size={18} /> {t('bullet2')}
            </li>
            <li>
              <Icon name="check" size={18} /> {t('bullet3')}
            </li>
            <li>
              <Icon name="check" size={18} /> {t('bullet4')}
            </li>
          </ul>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-num">{t('stat1Num')}</div>
            <div className="stat-lab">{t('stat1Lab')}</div>
          </div>
          <div className="stat">
            <div className="stat-num">{t('stat2Num')}</div>
            <div className="stat-lab">{t('stat2Lab')}</div>
          </div>
          <div className="stat">
            <div className="stat-num">{t('stat3Num')}</div>
            <div className="stat-lab">{t('stat3Lab')}</div>
          </div>
          <div className="stat">
            <div className="stat-num">{t('stat4Num')}</div>
            <div className="stat-lab">{t('stat4Lab')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
