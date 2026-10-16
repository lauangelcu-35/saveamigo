import { SITE_URL } from '../data/site.js';
import { categories } from '../data/categories.js';
import { categoriesMx } from '../data/categories_mx.js';
import { esToMx } from '../data/faqs.js';
import data from '../data/products.json';
import { CLUSTERS, REGIONS } from '../data/en.js';
export function GET() {
  const pairs = [['/','/mx/'],['/quiz/','/mx/quiz/'],['/aprende/','/mx/aprende/'],['/privacidad/','/mx/privacidad/'],['/metodologia/',null],['/empieza-aqui/',null],
    ...Object.keys(categories).map(c=>['/comparar/'+c+'/', esToMx[c] ? '/mx/comparar/'+esToMx[c]+'/' : null]),
    ...Object.keys(categoriesMx).filter(c=>c!=='cuentas'&&c!=='cetes'&&c!=='inversion'&&c!=='cripto').map(c=>[null,'/mx/comparar/'+c+'/'])];
  const u = p => SITE_URL + p;
  const inCl = p => CLUSTERS.find(c=>Object.values(c).includes(p));
  const clAlt = c => Object.entries(c).map(([h,x])=>`<xhtml:link rel="alternate" hreflang="${h}" href="${u(x)}"/>`).join('')+`<xhtml:link rel="alternate" hreflang="x-default" href="${u(c['es-ES']||Object.values(c)[0])}"/>`;
  const en = ['us','uk','nomads'].flatMap(r=>['/'+r+'/','/'+r+'/quiz/','/'+r+'/learn/',...Object.keys(REGIONS[r].cats).map(c=>'/'+r+'/compare/'+c+'/')]).concat(['/en/privacy/','/nomadas/']);
  const alt = (es,mx) => es && mx ? `<xhtml:link rel="alternate" hreflang="es-ES" href="${u(es)}"/><xhtml:link rel="alternate" hreflang="es-MX" href="${u(mx)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${u(es)}"/>` : '';
  const urls = pairs.flatMap(([es,mx]) => [es,mx].filter(Boolean).map(p => `<url><loc>${u(p)}</loc><lastmod>${data.updated}</lastmod>${inCl(p)?clAlt(inCl(p)):alt(es,mx)}</url>`)).concat(en.map(p=>`<url><loc>${u(p)}</loc><lastmod>${data.updated}</lastmod>${inCl(p)?clAlt(inCl(p)):''}</url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
