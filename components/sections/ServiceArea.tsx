import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

export function ServiceArea() {
  const t = useTranslations('serviceArea');
  const tRoot = useTranslations();
  const areas = tRoot.raw('areas') as string[];

  return (
    <section className="section" id="einsatzgebiet">
      <div className="container area-grid">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1" style={{ marginTop: 12 }}>
            {t('headline')}
          </h2>
          <p className="body-lg" style={{ marginTop: 20, color: 'var(--fg-2)', maxWidth: 520 }}>
            {t('body')}
          </p>
          <ul className="area-list">
            {areas.map((a) => (
              <li key={a}>
                <Icon name="pin" size={14} /> {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="area-map" aria-hidden="true">
          <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="dotgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#CBD5E1" />
              </pattern>
            </defs>
            <rect width="500" height="400" fill="url(#dotgrid)" />
            <path
              d="M -20 280 Q 120 200 220 240 T 520 180"
              stroke="#7B95C4"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <text x="440" y="170" fontSize="12" fill="#64748B" fontFamily="Barlow" fontWeight="500">
              Rhein
            </text>
            <g>
              <circle cx="180" cy="180" r="36" fill="#0284C7" opacity="0.12" />
              <circle cx="180" cy="180" r="20" fill="#0284C7" opacity="0.18" />
              <circle cx="180" cy="180" r="9" fill="#1F2C5C" />
              <circle cx="180" cy="180" r="3" fill="#fff" />
              <text x="180" y="155" fontSize="14" fill="#0F172A" fontFamily="Barlow" fontWeight="700" textAnchor="middle">
                Pulheim
              </text>
              <text x="180" y="220" fontSize="11" fill="#64748B" fontFamily="Barlow" fontWeight="500" textAnchor="middle">
                Pfalzgrafenstraße 10
              </text>
            </g>
            <g>
              <circle cx="320" cy="240" r="7" fill="#0284C7" />
              <text x="334" y="245" fontSize="13" fill="#0F172A" fontFamily="Barlow" fontWeight="600">Köln</text>
            </g>
            <g>
              <circle cx="240" cy="280" r="5" fill="#0284C7" />
              <text x="252" y="284" fontSize="12" fill="#334155" fontFamily="Barlow" fontWeight="500">Frechen</text>
            </g>
            <g>
              <circle cx="135" cy="225" r="5" fill="#0284C7" />
              <text x="60" y="229" fontSize="12" fill="#334155" fontFamily="Barlow" fontWeight="500">Brauweiler</text>
            </g>
            <g>
              <circle cx="100" cy="135" r="5" fill="#0284C7" />
              <text x="40" y="139" fontSize="12" fill="#334155" fontFamily="Barlow" fontWeight="500">Bergheim</text>
            </g>
            <g>
              <circle cx="140" cy="320" r="5" fill="#0284C7" />
              <text x="80" y="324" fontSize="12" fill="#334155" fontFamily="Barlow" fontWeight="500">Kerpen</text>
            </g>
            <circle cx="180" cy="180" r="155" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
