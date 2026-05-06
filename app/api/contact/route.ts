import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema, quoteSchema } from '@/lib/schema';
import { EMAIL, EMAIL_OBSERVERS } from '@/lib/content';

// TODO before launch:
//   1. Verify the sending domain in Resend (e.g. al-pflegeservice.de) — see https://resend.com/docs/dashboard/domains/introduction
//   2. Set RESEND_API_KEY and RESEND_FROM in the deployment environment (Vercel project settings)
//   3. Without RESEND_API_KEY, this route runs in mock mode (logs payload, returns ok: true).

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const source = (body as { source?: string })?.source;

  const parsed =
    source === 'quote' ? quoteSchema.safeParse(body) : contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? 'website@al-pflegeservice.de';

  if (!apiKey) {
    console.log('[A&L mock] %s payload:', source ?? 'contact', data);
    return NextResponse.json({ ok: true, mocked: true });
  }

  try {
    const resend = new Resend(apiKey);
    const subject =
      source === 'quote'
        ? `Angebotsanfrage von ${data.name}`
        : `Anfrage von ${(data as { name: string }).name}`;
    const text = formatEmail(source ?? 'contact', data);

    await resend.emails.send({
      from,
      to: EMAIL,
      bcc: EMAIL_OBSERVERS.length ? [...EMAIL_OBSERVERS] : undefined,
      replyTo:
        'email' in data && typeof data.email === 'string' && data.email
          ? data.email
          : undefined,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[A&L] resend send failed', err);
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 500 });
  }
}

function formatEmail(source: string, data: Record<string, unknown>) {
  const lines = [`Quelle: ${source === 'quote' ? 'Quote-Dialog' : 'Kontaktformular'}`, ''];
  for (const [k, v] of Object.entries(data)) {
    if (k === 'source' || k === 'consent') continue;
    lines.push(`${k}: ${String(v)}`);
  }
  return lines.join('\n');
}
