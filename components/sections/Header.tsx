'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { QuoteTrigger } from '@/components/site/QuoteTrigger';
import { useQuoteDialog } from '@/components/site/QuoteDialogProvider';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/content';

const LINKS = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#ueber-uns',  label: 'Über uns' },
  { href: '/#referenzen', label: 'Referenzen' },
  { href: '/#kontakt',    label: 'Kontakt' },
] as const;

export function Header() {
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
        <nav className="hdr-nav" aria-label="Hauptnavigation">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-cta">
          <a href={`tel:${PHONE_TEL}`} className="hdr-phone">
            <Icon name="phone" size={16} /> {PHONE_DISPLAY}
          </a>
          <QuoteTrigger variant="primary">Angebot anfragen</QuoteTrigger>
        </div>
        <button
          className="hdr-menu"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="hdr-mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false);
              openDialog();
            }}
          >
            Angebot anfragen
          </Button>
        </div>
      )}
    </header>
  );
}
