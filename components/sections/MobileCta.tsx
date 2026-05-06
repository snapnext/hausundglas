'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { useQuoteDialog } from '@/components/site/QuoteDialogProvider';
import { PHONE_TEL } from '@/lib/content';

export function MobileCta() {
  const t = useTranslations('mobileCta');
  const [show, setShow] = useState(false);
  const { openDialog } = useQuoteDialog();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-cta ${show ? 'show' : ''}`} aria-hidden={!show}>
      <a className="btn btn-secondary" href={`tel:${PHONE_TEL}`}>
        <Icon name="phone" size={16} /> {t('call')}
      </a>
      <button className="btn btn-primary" onClick={openDialog}>
        {t('quote')}
      </button>
    </div>
  );
}
