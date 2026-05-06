// Central German strings — prepares for future i18n via next-intl or App Router routing.

import type { IconName } from '@/components/ui/Icon';

export const PHONE_TEL = '+4917184341420';
export const PHONE_DISPLAY = '0171 8434142';
export const EMAIL = 'd.buzhala@outlook.de';

// Silent observers BCC'd on every form submission. Used during launch/QA
// so the agency monitors deliveries without the client seeing a CC list.
// TODO: empty this array once form delivery has been verified end-to-end.
export const EMAIL_OBSERVERS: readonly string[] = ['max@snapnext.de'];
export const ADDRESS = {
  street: 'Pfalzgrafenstraße 10',
  postalCode: '50259',
  city: 'Pulheim',
  country: 'DE',
} as const;
// TODO: confirm Saturday hours with the client before launch — currently a placeholder.
export const HOURS = 'Mo–Fr 8–18 Uhr · Sa nach Vereinbarung';

export type Service = { icon: IconName; title: string; body: string };
export const SERVICES: Service[] = [
  { icon: 'window',   title: 'Glas- & Fensterreinigung',   body: 'Streifenfrei, gründlich, termingerecht — innen und außen, inkl. Rahmen und Fensterbänken.' },
  { icon: 'building', title: 'Unterhaltsreinigung',         body: 'Regelmäßige Pflege für Treppenhäuser, Büros, Praxen und Gewerbeflächen.' },
  { icon: 'home',     title: 'Grundreinigung',              body: 'Einmalige Tiefenreinigung nach Umzug, Renovierung oder Bauabschluss.' },
  { icon: 'drop',     title: 'Fassaden- & Solarreinigung',  body: 'Sorgfältige Reinigung von Fassaden, Wintergärten und Photovoltaikanlagen.' },
];

export type Step = { n: string; title: string; body: string };
export const STEPS: Step[] = [
  { n: '01', title: 'Anfrage stellen',      body: 'Telefon, Mail oder Formular — schildern Sie uns kurz, was gereinigt werden soll.' },
  { n: '02', title: 'Festangebot erhalten', body: 'Wir melden uns am selben Werktag mit einem klaren Festpreis und Wunschtermin.' },
  { n: '03', title: 'Sauber abschließen',   body: 'Unser Team kommt pünktlich, arbeitet gründlich — und Sie zahlen nach dem Einsatz.' },
];

export type PricingPoint = { icon: IconName; title: string; body: string };
export const PRICING_POINTS: PricingPoint[] = [
  { icon: 'euro',     title: 'Klarer Festpreis',         body: 'Sie bekommen vor Auftragsbeginn einen schriftlichen Festpreis. Keine Stundenzettel-Überraschungen.' },
  { icon: 'check',    title: 'Kostenfreie Besichtigung', body: 'Bei größeren Aufträgen schauen wir vor Ort vorbei und kalkulieren genau — ohne Anfahrtskosten.' },
  { icon: 'shield',   title: 'Versichert',               body: 'Berufshaftpflicht bis 5 Mio. €. Falls etwas zu Bruch geht, sind Sie abgesichert.' },
  { icon: 'calendar', title: 'Zahlung nach Einsatz',     body: 'Sie zahlen erst, wenn das Ergebnis stimmt — per Überweisung oder vor Ort in bar.' },
];

// TODO: replace with real reviews collected via Google Business or direct quotes,
// and remove the "Beispiel" placeholder banner in components/sections/References.tsx.
export type Reference = { quote: string; who: string; loc: string };
export const REFS: Reference[] = [
  { quote: 'Pünktlich, gründlich, fair im Preis. Unsere Treppenhäuser sehen aus wie neu — wir bleiben dabei.',         who: 'Hausverwaltung (Beispiel)', loc: 'Köln-Ehrenfeld' },
  { quote: 'Wir lassen die Praxisfenster jetzt vierteljährlich machen. Top-Ergebnis, kein Streifen, kein Stress.',     who: 'Arztpraxis (Beispiel)',     loc: 'Pulheim' },
  { quote: 'Nach dem Umzug die komplette Wohnung übernommen. Schnell, freundlich, vom ersten Anruf bis Schlüsselübergabe.', who: 'Privatkunde (Beispiel)', loc: 'Brauweiler' },
];

export const AREAS = ['Pulheim', 'Köln', 'Frechen', 'Brauweiler', 'Bergheim', 'Bedburg', 'Kerpen', 'Dormagen'] as const;

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  {
    q: 'Wie schnell bekomme ich ein Angebot?',
    a: 'Sie hören am selben Werktag von uns — telefonisch oder per E-Mail. Bei einfachen Aufträgen (Fenster, Wohnung) gibt es den Festpreis direkt. Bei größeren Flächen kommen wir vorbei und kalkulieren vor Ort.',
  },
  {
    q: 'Arbeiten Sie nach Stundensatz oder Festpreis?',
    a: 'Festpreis. Sie wissen vor Auftragsbeginn, was die Reinigung kostet — keine offenen Stundenzettel, keine Nachverhandlungen. Wenn der Aufwand schwer einzuschätzen ist, machen wir vorab eine kurze Besichtigung.',
  },
  {
    q: 'Sind Sie versichert, falls etwas zu Bruch geht?',
    a: 'Ja. Wir sind über eine Berufshaftpflicht bis 5 Mio. € versichert. Das gilt für Personen- und Sachschäden während des Einsatzes.',
  },
  {
    q: 'Übernehmen Sie auch regelmäßige Aufträge?',
    a: 'Sehr gerne — Treppenhausreinigung, Büros und Praxen pflegen wir wöchentlich, vierzehntäglich oder monatlich. Wir richten Ihnen einen festen Turnus mit gleichbleibendem Ansprechpartner ein.',
  },
  {
    q: 'Welches Einsatzgebiet decken Sie ab?',
    a: 'Pulheim und Köln sind unser Schwerpunkt. Wir fahren regelmäßig nach Frechen, Brauweiler, Bergheim, Bedburg, Kerpen und Dormagen. Adressen außerhalb dieses Radius gerne auf Anfrage.',
  },
];

export const SERVICE_OPTIONS = [
  'Glas- & Fensterreinigung',
  'Unterhaltsreinigung',
  'Grundreinigung',
  'Fassaden- & Solarreinigung',
  'Hausmeisterservice',
  'Sonstiges',
] as const;
