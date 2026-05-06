import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as { q: string; a: string }[];

  return (
    <section className="section section-muted" id="faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1">{t('headline')}</h2>
        </div>
        <div className="faq-list">
          {items.map((f, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary">
                <span>{f.q}</span>
                <span className="faq-chev" aria-hidden="true">
                  <Icon name="plus" size={16} />
                </span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
