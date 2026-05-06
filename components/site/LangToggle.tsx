'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

// Two-pill DE/EN toggle. The active locale is highlighted; clicking the inactive
// one routes to the same path under that locale (next-intl handles prefix logic).
export function LangToggle() {
  const locale = useLocale() as Locale;
  const t = useTranslations('langToggle');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="lang-toggle" role="group" aria-label={t('label')} data-pending={isPending || undefined}>
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            className={`lang-toggle-btn ${active ? 'is-active' : ''}`}
            aria-pressed={active}
            onClick={() => switchTo(l)}
          >
            {t(l)}
          </button>
        );
      })}
    </div>
  );
}
