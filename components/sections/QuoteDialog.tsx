'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import {
  QUOTE_SERVICE_KEYS,
  QUOTE_SIZE_KEYS,
  QUOTE_WHEN_KEYS,
} from '@/lib/content';

type Props = {
  onClose: () => void;
};

type DialogState = {
  serviceKey: (typeof QUOTE_SERVICE_KEYS)[number];
  sizeKey: (typeof QUOTE_SIZE_KEYS)[number];
  whenKey: (typeof QUOTE_WHEN_KEYS)[number];
  name: string;
  contact: string;
};

export function QuoteDialog({ onClose }: Props) {
  const t = useTranslations('quoteDialog');
  const tContact = useTranslations('contact');
  const [step, setStep] = useState(0);
  const [data, setData] = useState<DialogState>({
    serviceKey: 'glass',
    sizeKey: 'medium',
    whenKey: 'thisWeek',
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

  const set = <K extends keyof DialogState>(k: K, v: DialogState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const send = async () => {
    setSubmitting(true);
    try {
      // Send the resolved labels in the active locale so the recipient sees
      // human-readable values rather than internal keys.
      const payload = {
        source: 'quote',
        service: t(`services.${data.serviceKey}`),
        size: t(`sizes.${data.sizeKey}`),
        when: t(`whens.${data.whenKey}`),
        name: data.name,
        contact: data.contact,
      };
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      toast.success(tContact('toastSuccess'));
      onClose();
    } catch {
      toast.error(tContact('toastError'));
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
        aria-label={t('step1Title')}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="dlg-close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>
        <div className="dlg-progress" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={i <= step ? 'on' : ''} />
          ))}
        </div>
        <span className="dlg-eyebrow">{t('stepLabel', { step: step + 1 })}</span>

        {step === 0 && (
          <>
            <h3>{t('step1Title')}</h3>
            <div className="opt-grid">
              {QUOTE_SERVICE_KEYS.map((k) => (
                <button
                  key={k}
                  className={`opt ${data.serviceKey === k ? 'sel' : ''}`}
                  onClick={() => {
                    set('serviceKey', k);
                    setStep(1);
                  }}
                >
                  {t(`services.${k}`)}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3>{t('step2Title')}</h3>
            <div className="opt-grid">
              {QUOTE_SIZE_KEYS.map((k) => (
                <button
                  key={k}
                  className={`opt ${data.sizeKey === k ? 'sel' : ''}`}
                  onClick={() => {
                    set('sizeKey', k);
                    setStep(2);
                  }}
                >
                  {t(`sizes.${k}`)}
                </button>
              ))}
            </div>
            <div className="dlg-actions" style={{ justifyContent: 'flex-start' }}>
              <Button variant="secondary" onClick={() => setStep(0)}>
                {t('back')}
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>{t('step3Title')}</h3>
            <div className="opt-grid">
              {QUOTE_WHEN_KEYS.map((k) => (
                <button
                  key={k}
                  className={`opt ${data.whenKey === k ? 'sel' : ''}`}
                  onClick={() => {
                    set('whenKey', k);
                    setStep(3);
                  }}
                >
                  {t(`whens.${k}`)}
                </button>
              ))}
            </div>
            <div className="dlg-actions" style={{ justifyContent: 'flex-start' }}>
              <Button variant="secondary" onClick={() => setStep(1)}>
                {t('back')}
              </Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>{t('step4Title')}</h3>
            <div className="dlg-summary">
              <div>
                <span className="meta">{t('labelService')}</span>
                <strong>{t(`services.${data.serviceKey}`)}</strong>
              </div>
              <div>
                <span className="meta">{t('labelSize')}</span>
                <strong>{t(`sizes.${data.sizeKey}`)}</strong>
              </div>
              <div>
                <span className="meta">{t('labelWhen')}</span>
                <strong>{t(`whens.${data.whenKey}`)}</strong>
              </div>
            </div>
            <div className="field">
              <label htmlFor="q-name">{t('labelName')}</label>
              <input
                id="q-name"
                value={data.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder={t('placeholderName')}
              />
            </div>
            <div className="field">
              <label htmlFor="q-contact">{t('labelContact')}</label>
              <input
                id="q-contact"
                value={data.contact}
                onChange={(e) => set('contact', e.target.value)}
                placeholder={t('placeholderContact')}
              />
            </div>
            <div className="dlg-actions">
              <Button variant="secondary" onClick={() => setStep(2)}>
                {t('back')}
              </Button>
              <Button
                variant="primary"
                onClick={send}
                disabled={!data.name.trim() || !data.contact.trim() || submitting}
              >
                {submitting ? t('submitting') : t('submit')}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
