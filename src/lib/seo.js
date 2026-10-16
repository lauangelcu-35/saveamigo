import { SITE_URL } from '../data/site.js';
export const faqLd = (faqs) => ({ '@context':'https://schema.org','@type':'FAQPage', mainEntity: faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) });
export const productsLd = (items, pageUrl) => ({ '@context':'https://schema.org','@type':'ItemList', url: SITE_URL+pageUrl, itemListElement: items.map((p,i)=>({ '@type':'ListItem', position:i+1, item: {
  '@type':'FinancialProduct', name:p.name, url:p.source, category:p.category,
  ...(p.verified && !p.rate.includes('pendiente') ? { interestRate: p.rate } : {}),
  ...(p.cost && !p.cost.includes('pendiente') ? { feesAndCommissionsSpecification: p.cost } : {}),
  provider: { '@type':'Organization', name: p.name.split(/ [–-] /)[0] } } })) });
export const articleLd = (headline, description, url, date) => ({ '@context':'https://schema.org','@type':'Article', headline, description, url: SITE_URL+url, datePublished: date, dateModified: date, inLanguage:'es', author:{'@id':SITE_URL+'/#org'}, publisher:{'@id':SITE_URL+'/#org'} });
