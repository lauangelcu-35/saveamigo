import { GUIDES, gPath } from '../data/guides.js';
import { REGIONS } from '../data/en.js';
import us from '../data/products_us.json';
import uk from '../data/products_uk.json';
import nm from '../data/products_nomads.json';
import data from '../data/products.json';
import mx from '../data/products_mx.json';
import coD from '../data/products_co.json';
import { categoriesCo } from '../data/categories_co.js';
import { categories } from '../data/categories.js';
import { categoriesMx } from '../data/categories_mx.js';
export function GET(){
 const S='https://saveamigo.com';
 const t=`# SaveAmigo

> Comparador informativo (no asesoramiento) de productos de ahorro e inversión para principiantes en España, México y Colombia, y en inglés para Estados Unidos, Reino Unido y nómadas digitales. Cada dato enlaza a su fuente oficial; los no confirmados se marcan "pendiente de verificar". Datos actualizados: ES ${data.updated}, MX ${mx.updated}, CO ${coD.updated}.

## España
- [Inicio España](${S}/): resumen y datos verificados
- [Quiz ¿Ahorrar, invertir o los dos?](${S}/quiz/)
${Object.entries(categories).map(([k,c])=>`- [${c.title}](${S}/comparar/${k}/): ${c.intro}`).join('\n')}
- [Aprende](${S}/aprende/): TAE, FGD, Letras, fondos, MiCA
- [Metodología](${S}/metodologia/): verificación y fuentes

## México
- [Inicio México](${S}/mx/)
- [Quiz México](${S}/mx/quiz/)
${Object.entries(categoriesMx).map(([k,c])=>`- [${c.title}](${S}/mx/comparar/${k}/): ${c.intro}`).join('\n')}
- [Aprende México](${S}/mx/aprende/): IPAB (400,000 UDIs), PROSOFIPO, CNBV, CETES

## Colombia
- [Inicio Colombia](${S}/co/): Fogafín asegura hasta $50 millones por depositante y entidad inscrita
- [Quiz Colombia](${S}/co/quiz/)
${Object.entries(categoriesCo).map(([k,c])=>`- [${c.title}](${S}/co/comparar/${k}/): ${c.intro}`).join('\n')}
- [Aprende Colombia](${S}/co/aprende/): Fogafín, Superfinanciera, 4x1000 (exención 350 UVT), TES

${['us','uk','nomads'].map(r=>{const R=REGIONS[r];return `## ${R.name} (English)\n- [${R.name} home](${S}/${r}/): ${R.answer}\n- [Quiz: save, invest or both? (${R.short})](${S}/${r}/quiz/)\n${Object.entries(R.cats).map(([k,c])=>`- [${c.title}](${S}/${r}/compare/${k}/): ${c.intro}`).join('\n')}\n- [Learn (${R.short})](${S}/${r}/learn/)\n`}).join('\n')}
- [Resumen nómadas en español](${S}/nomadas/)

## Guías / Guides
- [Guías en español](${S}/guias/)
- [Guides in English](${S}/guides/)
${GUIDES.map(g=>`- [${g.title}](${S}${gPath(g)}): ${g.answer}`).join('\n')}

## Datos verificados
${[...data.products,...mx.products,...coD.products,...us.products,...uk.products,...nm.products].filter(p=>p.verified).map(p=>`- ${p.name}: ${p.rate} (verificado ${p.last_verified}; fuente ${p.source})`).join('\n')}
`;
 return new Response(t,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
