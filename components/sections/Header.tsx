'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/i18n/navigation';
import { LangToggle } from '@/components/site/LangToggle';
import { QuoteTrigger } from '@/components/site/QuoteTrigger';
import { useQuoteDialog } from '@/components/site/QuoteDialogProvider';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/content';

const NAV = [
  { hash: '#leistungen', key: 'navServices' },
  { hash: '#ueber-uns',  key: 'navAbout' },
  { hash: '#referenzen', key: 'navReferences' },
  { hash: '#kontakt',    key: 'navContact' },
] as const;

export function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openDialog } = useQuoteDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-hdr ${scrolled ? 'scrolled' : ''}`}>
      <div className="container hdr-inner">
        <Link className="brand" href="/#top">
          <Image
            src="/logo-al-full-transparent.png"
            alt="A&L Haus- und Glaspflegeservice"
            width={40}
            height={40}
            priority
          />
          <div className="brand-text">
            <strong>A&amp;L</strong>
            <span>Haus- &amp; Glaspflegeservice</span>
          </div>
        </Link>
        <nav className="hdr-nav" aria-label={t('navServices')}>
          {NAV.map((l) => (
            <Link key={l.hash} href={`/${l.hash}`}>
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <div className="hdr-cta">
          <a href={`tel:${PHONE_TEL}`} className="hdr-phone" aria-label={t('phoneAria')}>
            <Icon name="phone" size={16} /> {PHONE_DISPLAY}
          </a>
          <LangToggle />
          <QuoteTrigger variant="primary">{t('ctaQuote')}</QuoteTrigger>
        </div>
        <div className="hdr-mobile-controls">
          <LangToggle />
        </div>
        <button
          className="hdr-menu"
          aria-label={t('openMenu')}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="hdr-mobile">
          {NAV.map((l) => (
            <Link key={l.hash} href={`/${l.hash}`} onClick={() => setOpen(false)}>
              {t(l.key)}
            </Link>
          ))}
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false);
              openDialog();
            }}
          >
            {t('ctaQuote')}
          </Button>
        </div>
      )}
    </header>
  );
}
