/* Netlify Function — verwerkt offerte-aanvragen van /offerte-aanvragen/.
   Spiegel van functions/api/offerte.ts (Cloudflare Pages); zelfde gedrag:
   - fetch met Accept: application/json → JSON-antwoord
   - native form-POST → 303-redirect naar #aanvraag-ontvangen / #aanvraag-mislukt
   Lead-aflevering (e-mail/CRM) is nog niet geconfigureerd — zie open-questions.md. */

const VERPLICHTE_VELDEN = ['naam', 'telefoon', 'email', 'type-werk', 'omschrijving', 'postcode'];

function wilJson(req: Request): boolean {
  return req.headers.get('accept')?.includes('application/json') ?? false;
}

function terug(req: Request, anker: string): Response {
  const url = new URL(`/offerte-aanvragen/${anker}`, req.url);
  return new Response(null, { status: 303, headers: { location: url.href } });
}

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return wilJson(req)
      ? Response.json({ ok: false }, { status: 400 })
      : terug(req, '#aanvraag-mislukt');
  }

  const veld = (naam: string): string => String(data.get(naam) ?? '').trim();

  // Honeypot: onzichtbaar veld — gevuld betekent spam. Stil "bevestigen".
  if (veld('faxnummer') !== '') {
    return wilJson(req) ? Response.json({ ok: true }) : terug(req, '#aanvraag-ontvangen');
  }

  const ontbreekt = VERPLICHTE_VELDEN.filter((naam) => veld(naam) === '');
  if (ontbreekt.length > 0) {
    return wilJson(req)
      ? Response.json({ ok: false, ontbreekt }, { status: 400 })
      : terug(req, '#aanvraag-mislukt');
  }

  const fotos = data.getAll('fotos').filter((f) => f instanceof File && f.size > 0);
  console.log('Offerte-aanvraag ontvangen', {
    naam: veld('naam'),
    typeWerk: veld('type-werk'),
    postcode: veld('postcode'),
    fotos: fotos.length,
  });

  return wilJson(req) ? Response.json({ ok: true }) : terug(req, '#aanvraag-ontvangen');
};
