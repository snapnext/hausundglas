import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ADDRESS, SERVICE_KEYS } from '@/lib/content';

export function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services.items');
  const year = new Date().getFullYear();
  const address = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.city}`;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image src="/logo-al-full-transparent.png" alt="" width={48} height={48} />
          <div>
            <strong>A&amp;L Haus- &amp; Glaspflegeservice</strong>
            <p className="meta">{t('tagline')}</p>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h4>{t('colServicesHead')}</h4>
            {SERVICE_KEYS.map((k) => (
              <Link key={k} href="/#leistungen">
                {tServices(`${k}.title`)}
              </Link>
            ))}
          </div>
          <div>
            <h4>{t('colCompanyHead')}</h4>
            <Link href="/#ueber-uns">{t('linkAbout')}</Link>
            <Link href="/#einsatzgebiet">{t('linkArea')}</Link>
            <Link href="/#referenzen">{t('linkReferences')}</Link>
            <Link href="/#kontakt">{t('linkContact')}</Link>
          </div>
          <div>
            <h4>{t('colLegalHead')}</h4>
            <Link href="/impressum">{t('linkImpressum')}</Link>
            <Link href="/datenschutz">{t('linkDatenschutz')}</Link>
            <Link href="/agb">{t('linkAgb')}</Link>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div className="container footer-base-inner">
          <span className="meta">{t('copyright', { year, address })}</span>
          <span className="meta">{t('tagline2')}</span>
        </div>
      </div>
    </footer>
  );
}
