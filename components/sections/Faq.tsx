import { Icon } from '@/components/ui/Icon';
import { FAQS } from '@/lib/content';

export function Faq() {
  return (
    <section className="section section-muted" id="faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="h1">Antworten, bevor Sie fragen.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
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
