import Link from 'next/link';
import Image from 'next/image';
import { ADDRESS } from '@/lib/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src="/logo-al-full-transparent.png"
            alt=""
            width={48}
            height={48}
          />
          <div>
            <strong>A&amp;L Haus- &amp; Glaspflegeservice</strong>
            <p className="meta">
              Reinigung für Privat- und Gewerbekunden in Pulheim, Köln und Umgebung.
            </p>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Leistungen</h4>
            <Link href="/#leistungen">Glas- &amp; Fensterreinigung</Link>
            <Link href="/#leistungen">Unterhaltsreinigung</Link>
            <Link href="/#leistungen">Grundreinigung</Link>
            <Link href="/#leistungen">Fassade &amp; Solar</Link>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <Link href="/#ueber-uns">Über uns</Link>
            <Link href="/#einsatzgebiet">Einsatzgebiet</Link>
            <Link href="/#referenzen">Referenzen</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div className="container footer-base-inner">
          <span className="meta">
            © {new Date().getFullYear()} A&amp;L Haus- &amp; Glaspflegeservice · {ADDRESS.street},{' '}
            {ADDRESS.postalCode} {ADDRESS.city}
          </span>
          <span className="meta">Versichert · Festpreis · Rückrufservice</span>
        </div>
      </div>
    </footer>
  );
}
