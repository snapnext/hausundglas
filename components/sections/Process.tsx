import { useTranslations } from 'next-intl';
import { STEP_KEYS, STEP_NUMBERS } from '@/lib/content';

export function Process() {
  const t = useTranslations('process');
  return (
    <section className="section" id="ablauf">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1">{t('headline')}</h2>
        </div>
        <ol className="steps">
          {STEP_KEYS.map((k) => (
            <li key={k} className="step">
              <div className="step-num">{STEP_NUMBERS[k]}</div>
              <h3>{t(`${k}Title`)}</h3>
              <p>{t(`${k}Body`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
