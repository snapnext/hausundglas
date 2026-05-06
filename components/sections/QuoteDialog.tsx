'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { QUOTE_SERVICES, QUOTE_SIZES, QUOTE_WHENS, type QuoteInput } from '@/lib/schema';

type Props = {
  onClose: () => void;
};

export function QuoteDialog({ onClose }: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteInput>({
    service: 'Glas- & Fensterreinigung',
    size: 'Wohnung 60–100 m²',
    when: 'Diese Woche',
    name: '',
    contact: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const set = <K extends keyof QuoteInput>(k: K, v: QuoteInput[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const send = async () => {
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'quote', ...data }),
      });
      toast.success('Anfrage gesendet — wir melden uns am selben Werktag.');
      onClose();
    } catch {
      toast.error('Konnte nicht gesendet werden. Bitte versuchen Sie es erneut.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dlg-backdrop" onClick={onClose}>
      <div
        className="dlg"
        role="dialog"
        aria-modal="true"
        aria-label="Angebot anfragen"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="dlg-close" onClick={onClose} aria-label="Schließen">
          <Icon name="close" size={18} />
        </button>
        <div className="dlg-progress" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={i <= step ? 'on' : ''} />
          ))}
        </div>
        <span className="dlg-eyebrow">Schritt {step + 1} von 4</span>

        {step === 0 && (
          <>
            <h3>Welche Leistung benötigen Sie?</h3>
            <div className="opt-grid">
              {QUOTE_SERVICES.map((s) => (
                <button
                  key={s}
                  className={`opt ${data.service === s ? 'sel' : ''}`}
                  onClick={() => {
                    set('service', s);
                    setStep(1);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3>Wie groß ist die Fläche?</h3>
            <div className="opt-grid">
              {QUOTE_SIZES.map((s) => (
                <button
                  key={s}
                  className={`opt ${data.size === s ? 'sel' : ''}`}
                  onClick={() => {
                    set('size', s);
                    setStep(2);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="dlg-actions" style={{ justifyContent: 'flex-start' }}>
              <Button variant="secondary" onClick={() => setStep(0)}>
                Zurück
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Wann passt es Ihnen?</h3>
            <div className="opt-grid">
              {QUOTE_WHENS.map((s) => (
                <button
                  key={s}
                  className={`opt ${data.when === s ? 'sel' : ''}`}
                  onClick={() => {
                    set('when', s);
                    setStep(3);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="dlg-actions" style={{ justifyContent: 'flex-start' }}>
              <Button variant="secondary" onClick={() => setStep(1)}>
                Zurück
              </Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Ihre Kontaktdaten</h3>
            <div className="dlg-summary">
              <div>
                <span className="meta">Leistung</span>
                <strong>{data.service}</strong>
              </div>
              <div>
                <span className="meta">Fläche</span>
                <strong>{data.size}</strong>
              </div>
              <div>
                <span className="meta">Wann</span>
                <strong>{data.when}</strong>
              </div>
            </div>
            <div className="field">
              <label htmlFor="q-name">Name</label>
              <input
                id="q-name"
                value={data.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="Vor- und Nachname"
              />
            </div>
            <div className="field">
              <label htmlFor="q-contact">Telefon oder E-Mail</label>
              <input
                id="q-contact"
                value={data.contact}
                onChange={(e) => set('contact', e.target.value)}
                placeholder="0221 ··· oder ihre@adresse.de"
              />
            </div>
            <div className="dlg-actions">
              <Button variant="secondary" onClick={() => setStep(2)}>
                Zurück
              </Button>
              <Button
                variant="primary"
                onClick={send}
                disabled={!data.name.trim() || !data.contact.trim() || submitting}
              >
                {submitting ? 'Senden …' : 'Anfrage senden'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
