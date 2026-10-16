// Configuración global
export const SITE_URL = 'https://saveamigo.com';
export const SITE_NAME = 'SaveAmigo';
// ÚNICA constante a cambiar al elegir proveedor de newsletter (MailerLite / Brevo / Beehiiv).
// El formulario hace POST (form-urlencoded) con los campos: email, quiz_result, country, consent, tags.
// Para MailerLite/Brevo/Beehiiv basta con apuntar aquí la URL "action" de su formulario embebido
// y, si el proveedor usa otros nombres de campo, ajustar FIELD_MAP.
export const NEWSLETTER_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2717209/forms/201472303973794904/subscribe';
export const FIELD_MAP = { email: 'fields[email]', result: 'quiz_result', country: 'country', consent: 'consent', tags: 'tags' };
