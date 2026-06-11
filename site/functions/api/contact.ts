/* Cloudflare Pages Function — verwerkt contactberichten van /contact/.
   Lead-aflevering (e-mail/CRM-koppeling) is nog niet geconfigureerd — zie open-questions.md.
   Tot die tijd: bericht loggen (zichtbaar in Cloudflare Pages-logs) en bevestigen.

   Twee antwoordpaden:
   - fetch (Accept: application/json) → JSON, de pagina toont zelf de succes-/foutstatus;
   - native form-POST (zonder JS) → 303-redirect naar /contact/#bericht-ontvangen of
     /contact/#bericht-mislukt; die panelen worden daar via CSS :target zichtbaar. */

const VERPLICHTE_VELDEN = ['naam', 'telefoon', 'email', 'omschrijving'] as const;

interface PagesContext {
  request: Request;
}

function wilJson(request: Request): boolean {
  return request.headers.get('accept')?.includes('application/json') ?? false;
}

function terugNaarFormulier(request: Request, anker: string): Response {
  return Response.redirect(new URL(`/contact/${anker}`, request.url).href, 303);
}

export async function onRequestPost({ request }: PagesContext): Promise<Response> {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return wilJson(request)
      ? Response.json({ ok: false }, { status: 400 })
      : terugNaarFormulier(request, '#bericht-mislukt');
  }

  const veld = (naam: string): string => String(data.get(naam) ?? '').trim();

  // Honeypot: voor mensen onzichtbaar veld — gevuld betekent spam. Stil "bevestigen".
  if (veld('faxnummer') !== '') {
    return wilJson(request)
      ? Response.json({ ok: true })
      : terugNaarFormulier(request, '#bericht-ontvangen');
  }

  const ontbreekt = VERPLICHTE_VELDEN.filter((naam) => veld(naam) === '');
  if (ontbreekt.length > 0) {
    return wilJson(request)
      ? Response.json({ ok: false, ontbreekt }, { status: 400 })
      : terugNaarFormulier(request, '#bericht-mislukt');
  }

  console.log(
    'Contactbericht ontvangen:',
    JSON.stringify(Object.fromEntries(VERPLICHTE_VELDEN.map((naam) => [naam, veld(naam)])))
  );

  return wilJson(request)
    ? Response.json({ ok: true })
    : terugNaarFormulier(request, '#bericht-ontvangen');
}
