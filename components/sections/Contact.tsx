'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/i18n/navigation';
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/content';

// Service options shared between locales — values stay as keys but labels render
// in the active language for the visible <select>.
const SERVICE_KEYS = ['glass', 'upkeep', 'deep', 'facade', 'janitor', 'other'] as const;

export function Contact() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);

  // Build the schema with translated error messages so RHF surfaces them
  // directly. Memoized to avoid rebuilding on every render.
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, t('errorName')),
        email: z
          .string()
          .trim()
          .min(1, t('errorEmailRequired'))
          .email(t('errorEmailInvalid')),
        phone: z.string().trim(),
        service: z.enum(SERVICE_KEYS),
        message: z.string().trim().min(1, t('errorMessage')),
        consent: z.boolean().refine((v) => v === true, { message: t('errorConsent') }),
      }),
    [t],
  );
  type FormInput = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'glass',
      message: '',
      consent: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Send the localized service label rather than the key, so the email
      // recipient sees the service name as the user picked it.
      const serviceLabel = t(`serviceOptions.${data.service}`);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'contact', ...data, service: serviceLabel }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
      toast.success(t('toastSuccess'));
    } catch {
      toast.error(t('toastError'));
    }
  });

  return (
    <section className="section" id="kontakt">
      <div className="container two-col">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h1" style={{ marginTop: 12 }}>
            {t('headline')}
          </h2>
          <p className="body-lg" style={{ marginTop: 20, maxWidth: 480 }}>
            {t('body')}
          </p>
          <ul className="contact-list">
            <li>
              <Icon name="phone" size={18} /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Icon name="mail" size={18} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <Icon name="pin" size={18} /> {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
            </li>
            <li>
              <Icon name="clock" size={18} /> {t('hours')}
            </li>
          </ul>
        </div>
        <form className="card contact-card" onSubmit={onSubmit} noValidate>
          {sent ? (
            <div className="sent">
              <div className="sent-icon">
                <Icon name="check" size={28} />
              </div>
              <h3>{t('sentTitle')}</h3>
              <p>{t('sentBody')}</p>
            </div>
          ) : (
            <>
              <div className="field">
                <label htmlFor="c-name">
                  {t('labelName')}<span className="req">*</span>
                </label>
                <input
                  id="c-name"
                  className={errors.name ? 'invalid' : ''}
                  placeholder={t('placeholderName')}
                  {...register('name')}
                />
                {errors.name && <span className="field-error">{errors.name.message}</span>}
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="c-email">
                    {t('labelEmail')}<span className="req">*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className={errors.email ? 'invalid' : ''}
                    placeholder={t('placeholderEmail')}
                    {...register('email')}
                  />
                  {errors.email && <span className="field-error">{errors.email.message}</span>}
                </div>
                <div className="field">
                  <label htmlFor="c-phone">{t('labelPhone')}</label>
                  <input
                    id="c-phone"
                    placeholder={t('placeholderPhone')}
                    {...register('phone')}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-service">{t('labelService')}</label>
                <select id="c-service" {...register('service')}>
                  {SERVICE_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t(`serviceOptions.${k}`)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">
                  {t('labelMessage')}<span className="req">*</span>
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  className={errors.message ? 'invalid' : ''}
                  placeholder={t('placeholderMessage')}
                  {...register('message')}
                />
                {errors.message && <span className="field-error">{errors.message.message}</span>}
              </div>
              <label className="checkbox-field">
                <input type="checkbox" {...register('consent')} />
                <span>
                  {t('consent')} <Link href="/datenschutz">{t('consentLink')}</Link>.
                </span>
              </label>
              {errors.consent && <span className="field-error">{errors.consent.message}</span>}
              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                {isSubmitting ? t('submitting') : t('submit')}
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
