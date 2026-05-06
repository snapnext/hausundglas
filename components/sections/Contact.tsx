'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { contactSchema, type ContactInput } from '@/lib/schema';
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_OPTIONS,
} from '@/lib/content';

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'Glas- & Fensterreinigung',
      message: '',
      consent: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'contact', ...data }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
      toast.success('Anfrage gesendet — wir melden uns am selben Werktag.');
    } catch {
      toast.error('Konnte nicht gesendet werden. Bitte versuchen Sie es erneut.');
    }
  });

  return (
    <section className="section" id="kontakt">
      <div className="container two-col">
        <div>
          <span className="eyebrow">Kontakt</span>
          <h2 className="h1" style={{ marginTop: 12 }}>
            Schreiben Sie uns.
          </h2>
          <p className="body-lg" style={{ marginTop: 20, maxWidth: 480 }}>
            Telefonisch, per Mail oder über das Formular — wir melden uns am selben Werktag zurück.
          </p>
          <ul className="contact-list">
            <li>
              <Icon name="phone" size={18} />{' '}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Icon name="mail" size={18} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <Icon name="pin" size={18} /> {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
            </li>
            <li>
              <Icon name="clock" size={18} /> {HOURS}
            </li>
          </ul>
        </div>
        <form className="card contact-card" onSubmit={onSubmit} noValidate>
          {sent ? (
            <div className="sent">
              <div className="sent-icon">
                <Icon name="check" size={28} />
              </div>
              <h3>Vielen Dank.</h3>
              <p>Wir melden uns am selben Werktag bei Ihnen zurück.</p>
            </div>
          ) : (
            <>
              <div className="field">
                <label htmlFor="c-name">
                  Name<span className="req">*</span>
                </label>
                <input
                  id="c-name"
                  className={errors.name ? 'invalid' : ''}
                  placeholder="Vor- und Nachname"
                  {...register('name')}
                />
                {errors.name && <span className="field-error">{errors.name.message}</span>}
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="c-email">
                    E-Mail<span className="req">*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className={errors.email ? 'invalid' : ''}
                    placeholder="ihre@adresse.de"
                    {...register('email')}
                  />
                  {errors.email && <span className="field-error">{errors.email.message}</span>}
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Telefon</label>
                  <input id="c-phone" placeholder="0221 ···" {...register('phone')} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-service">Anliegen</label>
                <select id="c-service" {...register('service')}>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">
                  Nachricht<span className="req">*</span>
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  className={errors.message ? 'invalid' : ''}
                  placeholder="Was sollen wir reinigen? Wann passt es Ihnen?"
                  {...register('message')}
                />
                {errors.message && <span className="field-error">{errors.message.message}</span>}
              </div>
              <label className="checkbox-field">
                <input type="checkbox" {...register('consent')} />
                <span>
                  Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert
                  werden. Hinweise zur <a href="/datenschutz">Datenschutzerklärung</a>.
                </span>
              </label>
              {errors.consent && <span className="field-error">{errors.consent.message}</span>}
              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Senden …' : 'Anfrage senden'}
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
