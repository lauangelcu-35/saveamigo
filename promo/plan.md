# SaveAmigo — Plan de difusión (borrador, NO publicado)

Fecha: 2026-10-16. Nada de esto se ha enviado, publicado ni registrado. Todo requiere que la propietaria lo revise y lo haga con su propia cuenta.
Comprobación de URLs (curl desde el box, 2026-10-16): **200** = carga; **403** = la web existe pero bloquea bots (Cloudflare); se comprobó a mano que resuelven. Las normas cambian: **vuelve a leer las reglas antes de publicar.**

Recursos para todas las fichas: logo `public/og/logo.png`, imagen OG `public/og/default.png` (1200×630), lema corto:
- ES: "Comparador para principiantes de ahorro e inversión (España y México) con la fuente oficial de cada dato."
- EN: "Beginner savings & investing comparator for the US, UK and digital nomads — every figure links to its official source."
- Aviso obligatorio en todas las fichas: informativo, no asesoramiento; algunos enlaces son de referido (indicados).

## (a) Directorios y listados (21)

| # | Directorio | URL | ¿Gratis? | Qué hace falta | Check |
|---|---|---|---|---|---|
| 1 | Product Hunt | https://www.producthunt.com/posts/new | Sí | Cuenta personal (la de la maker), nombre, tagline ≤60 car., descripción, 2–6 imágenes, primer comentario de maker; preparar día de lanzamiento | 200 |
| 2 | BetaList | https://www.betalist.com/submit | Gratis con cola larga (pago opcional para acelerar) | Startup en fase temprana, descripción, captura, email | 200 |
| 3 | Indie Hackers (Products) | https://www.indiehackers.com/products | Sí | Cuenta, ficha de producto, idealmente post "building in public" | 200 |
| 4 | AlternativeTo | https://alternativeto.net/ | Sí | Cuenta; añadir app como alternativa a comparadores conocidos (p.ej. NerdWallet, Helpmycash) | 403 (bot block) |
| 5 | SaaSHub | https://www.saashub.com/submit | Sí (verificación de fundador gratis) | URL, categoría, descripción, logo | 200 |
| 6 | Launching Next | https://www.launchingnext.com/submit/ | Gratis (opción de pago para destacar) | Formulario: nombre, URL, descripción, email | 200 |
| 7 | StartupBase | https://startupbase.io/ | Sí | Cuenta, ficha de lanzamiento | 200 |
| 8 | Startup Stash | https://www.startupstash.com/ | Envío gratis, revisión editorial | Formulario con URL, categoría | 200 |
| 9 | Uneed | https://uneed.best/submit-a-tool | Gratis con cola (pago para saltarla) | Cuenta, logo, capturas, fecha de lanzamiento | 403 (bot block) |
| 10 | Peerlist Launchpad | https://peerlist.io/launchpad | Sí | Perfil Peerlist verificado, lanzamiento semanal (lunes) | 200 |
| 11 | DevHunt | https://devhunt.org/ | Gratis con cola (pago para fecha concreta) | Login GitHub, logo, descripción | 200 |
| 12 | TinyLaunch | https://tinylaunch.com/ | Plan gratis | Cuenta, ficha, semana de lanzamiento | 200 |
| 13 | Microlaunch | https://microlaunch.net/ | Plan gratis | Cuenta, ficha, mes de lanzamiento | 200 |
| 14 | SideProjectors | https://www.sideprojectors.com/ | Sí (listado "showcase") | Cuenta, descripción del proyecto | 200 |
| 15 | Futurepedia/FutureTools (AI tools) | https://www.futuretools.io/submit-a-tool | Envío gratis, revisión manual | Solo si se destaca algún componente IA (quiz/explicaciones); si no, omitir | 200 |
| 16 | There's An AI For That | https://theresanaiforthat.com/submit/ | Principalmente de pago — **verificar antes** | Solo aplicable si hay función IA real | 403 (bot block) |
| 17 | Toolify | https://www.toolify.ai/submit | Mayormente de pago — **verificar** | Igual que arriba | 403 (bot block) |
| 18 | Insidr AI tools | https://www.insidr.ai/submit-tools/ | Envío gratis (revisión) | Formulario | 200 |
| 19 | Letterlist (newsletters) | https://letterlist.com/ | Sí | URL de la newsletter/archivo público de MailerLite, categoría Finanzas | 200 |
| 20 | InboxReads (newsletters) | https://inboxreads.co/ | Listado gratis | Archivo público de la newsletter, descripción | 200 (www. no responde; usar sin www) |
| 21 | Crunchbase | https://www.crunchbase.com/ | Perfil básico gratis | Cuenta, datos de la empresa (fundadora, fecha, web) | 200 |
| 22 | F6S | https://www.f6s.com/ | Perfil gratis | Cuenta, perfil de startup | 403 (bot block) |

Descartados: findmynewsletter.com y newsletterstack.com no resolvieron/redirigían de forma rara el 2026-10-16.
Orden recomendado: 1) SaaSHub, AlternativeTo, Crunchbase, Letterlist/InboxReads (fichas "evergreen"); 2) Peerlist, TinyLaunch, Microlaunch, DevHunt, Uneed (lanzamientos semanales); 3) Product Hunt al final, con algo de tracción y la newsletter funcionando. Para newsletters hace falta **activar un archivo web público en MailerLite** (pendiente de la propietaria).

## (b) Comunidades (14) con normas y borrador

Regla general: cuenta personal con historial real, nada de referidos, divulgar siempre "lo he hecho yo", primero aportar valor. En subreddits que prohíben autopromoción, el borrador **no lleva enlace**: es solo una aportación útil para ganar reputación.

### 1. r/SideProject — https://www.reddit.com/r/SideProject/ (200)
Normas: sin reglamento publicado; se acepta compartir proyectos propios si es "show & tell" con petición de feedback. Se penaliza el marketing encubierto: decir que es tuyo.
Borrador (EN):
> **I built a beginner savings comparator where every number links to its official source — feedback welcome**
> I kept seeing "best savings account" pages full of stale rates and no sources. So I built SaveAmigo (Spain, Mexico, US, UK, digital nomads). Rules I set myself: every rate links to the official page or regulator (FDIC, FSCS, Banco de España, tesoro.es…); if I can't confirm it, it says "pending verification" instead of guessing; crypto is a small, clearly labelled high-risk section. It's Astro, static, on GitHub Pages, with a 7-question "save, invest or both?" quiz.
> What I'd love feedback on: is "pending verification" useful or does it make the site look unfinished? Is the quiz result clear? Disclosure: some links are labelled referral links. https://saveamigo.com/guides/

### 2. r/MexicoFinanciero — https://www.reddit.com/r/MexicoFinanciero/ (200)
Normas: autopromoción solo en el **"Hilo dominguero de autopromoción"** (domingos), con contexto; prohibidos enlaces de referido, fraudes y temas ajenos.
Borrador (ES-MX, para el hilo del domingo):
> Hola. Hice una guía gratuita de **CETES para principiantes**: qué son (nominal de $10), plazos de 28/91/182/364 días, cómo registrarse en cetesdirecto (CURP, RFC y CLABE) y la diferencia con SOFIPOs (PROSOFIPO hasta 25,000 UDIs) y bancos (IPAB hasta 400,000 UDIs). Todo enlaza a Banxico, IPAB y CONDUSEF, y lo que no pude confirmar sale como "pendiente de verificar". No es asesoría. Lo hice yo; sin enlaces de referido en la guía: https://saveamigo.com/guias/cetes-para-principiantes/ ¿Qué le agregarían?

### 3. r/digitalnomad — https://www.reddit.com/r/digitalnomad/ (200)
Normas: prohibida la autopromoción/blogspam, afiliados, encuestas. Excepción: en el **Weekly Discussion thread** los colaboradores habituales pueden compartir contenido DN relevante; un blog solo como "learn more" si el contenido completo va en el post.
Borrador (EN, self-post con el contenido completo; enlace solo al final y solo si ya eres colaborador habitual):
> **The banking setup that's kept me from getting locked out abroad (beginner version)**
> 1) Keep one licensed bank in your tax-residence country — that's where deposit protection applies (EU €100k, UK FSCS £120k, US FDIC $250k). 2) Use a multi-currency account for spending, but know many are e-money: safeguarded, not deposit-insured. 3) Carry a backup card from a different provider. 4) Keep 3–6 months' emergency fund at a protected bank, split by the currencies you spend in. 5) Keep your residence address up to date with providers — mismatches are a common reason for closures. Not financial advice. (I wrote a longer version with official sources here if useful: https://saveamigo.com/guides/bank-account-for-digital-nomads/ — my own site.)

### 4. r/personalfinance — https://www.reddit.com/r/personalfinance/ (200)
Normas: prohibido promocionar contenido propio (aunque no esté monetizado), referidos, perfiles promocionales, peticiones por MP. Mínimo de karma/antigüedad.
Borrador (EN, comentario de valor en un hilo de "HYSA vs CD?", **sin enlace**):
> Rough way to split it: money you might need any time → high-yield savings (variable APY, FDIC up to $250k per depositor, per bank, per ownership category — check the bank on FDIC BankFind, and remember fintech apps are only covered once money sits at the partner bank). Money with a fixed date → CD or T-bill ladder matching the date (CDs usually charge an early-withdrawal penalty). Money for 5+ years → low-cost index funds, accepting they can drop. Investor.gov has a good beginner primer.

### 5. r/UKPersonalFinance — https://www.reddit.com/r/UKPersonalFinance/ (200)
Normas: prohibido promocionar web/herramienta/newsletter propia (ban), incluso "encontré esto útil" encubierto; prohibidos referidos. Encuestas/AMAs solo con permiso previo.
Borrador (EN, comentario **sin enlace** en un hilo "Cash ISA or S&S ISA?"):
> Think about timeline first. Under ~5 years or emergency fund → easy-access savings or Cash ISA (FSCS covers £120k per person per banking licence from 1 Dec 2025). 5+ years → Stocks & Shares ISA with a low-cost global tracker; FSCS only covers firm failure (up to £85k), not falls in value. Both share the £20k annual allowance — check GOV.UK for the current year. Compare platform fee + fund fee, not just one.

### 6. r/eupersonalfinance — https://www.reddit.com/r/eupersonalfinance/ (200)
Normas (barra lateral): no se permite autopromoción ni referidos; si crees que tu artículo es útil, **escribe antes a los moderadores**.
Borrador (EN, mensaje a mods vía modmail, no post):
> Hi mods — I run SaveAmigo, a non-advice comparator for beginners (Spain focus) where every figure links to its official source (FGD, tesoro.es, CNMV, ESMA MiCA register). Would you allow a single text post explaining how Spanish Letras del Tesoro work and how to buy them directly via tesoro.es, with a link at the end? Happy to post it without the link if you prefer. No referral links.

### 7. r/SpainFIRE — https://www.reddit.com/r/SpainFIRE/ (200)
Normas: no pudimos leer las reglas (Reddit bloquea la lectura sin sesión). **Leer la barra lateral y preguntar a mods antes.** Asumir: sin referidos ni autopromoción.
Borrador (ES, post de valor sin enlace):
> **Letras del Tesoro directo en tesoro.es: pasos para quien empieza**
> 1) Cuenta directa en el Banco de España desde tesoro.es (certificado digital o Cl@ve). 2) Petición no competitiva (pagas el precio medio). 3) Nominal 1.000 € por Letra; plazos 3/6/9/12 meses. 4) Reinversión opcional al vencimiento. 5) Sin retención: se declara en la base del ahorro. 6) No las cubre el FGD (el emisor es el Estado). Resultados de cada subasta en tesoro.es. ¿Alguien tiene truco para no olvidarse de reinvertir?

### 8. r/finanzaspersonales — https://www.reddit.com/r/finanzaspersonales/ (200)
Normas: no verificadas (bloqueo de Reddit). Revisar barra lateral; por defecto, sin enlace propio.
Borrador (ES, sin enlace):
> **¿Ahorrar o invertir primero? El orden que a mí me ha servido**
> 1) Deudas caras fuera. 2) Fondo de emergencia de 3–6 meses en algo garantizado (en España, FGD hasta 100.000 € por titular y entidad). 3) Objetivos de 1–3 años: depósitos o Letras. 4) 5+ años: fondos indexados de bajo coste, sabiendo que pueden bajar. La cripto, si acaso, una parte pequeña. No es asesoramiento; ¿cambiaríais algo?

### 9. r/expats — https://www.reddit.com/r/expats/ (200)
Normas: no verificadas; tratar como "sin autopromoción". Borrador (EN, comentario sin enlace):
> Before moving, check whether your home bank lets you keep the account with a foreign address — some close it. Keep that account if you can (deposit protection lives there), add a multi-currency account for daily spending (often e-money, i.e. safeguarded but not insured) and a backup card from another provider.

### 10. r/financialindependence — https://www.reddit.com/r/financialindependence/ (200)
Normas: no verificadas; tiene hilo diario. Sin enlaces propios. Borrador (EN, comentario en Daily FI):
> For anyone early on: the boring order still works — kill high-interest debt, 3–6 months' emergency fund in insured savings, then automate a fixed monthly amount into a broad low-cost index fund. The automation matters more than picking the "best" fund.

### 11. Rankia Foros — https://www.rankia.com/foros (200)
Normas: no verificadas en detalle; los foros suelen prohibir spam/publicidad. Leer las normas de la comunidad Rankia y participar con perfil personal. Borrador (ES, respuesta en hilo "cuenta remunerada o depósito"):
> Para comparar, mirad siempre la TAE (incluye la frecuencia de pago), si hay límite de saldo, si es solo para nuevos clientes y cuándo acaba la promoción. Cuenta para el colchón, depósito para dinero con fecha. Ambos cubiertos por el FGD hasta 100.000 € por titular y entidad (si el banco es de otro país UE, por el fondo de ese país con el mismo límite).

### 12. MoneySavingExpert Forum — https://forums.moneysavingexpert.com/ (200)
Normas: prohibido promocionar web/blog/app propios (posts, firma, avatar, MP); los enlaces propios se borran como spam. Solo se puede poner la web en el perfil sin mencionarla. Borrador (EN, respuesta sin enlace): usar el texto del punto 5 adaptado.

### 13. Bogleheads Forum — https://www.bogleheads.org/forum/ (403 bot block; resuelve)
Normas: foro moderado estricto, sin autopromoción comercial. Solo participación de valor. Borrador (EN):
> For a beginner's emergency fund, an insured high-yield savings account or T-bills both work; the key is matching the money's timeline. Index funds are for the 5+ year bucket.

### 14. Global Digital Nomad Network (Facebook) — https://www.facebook.com/groups/globaldigitalnomad/ (200)
Normas: grupo con reglas propias visibles solo al unirse; suelen tener días de promoción. **Unirse y leer antes.** Borrador (EN): usar el post del punto 3, con enlace solo si el día/hilo de promoción lo permite.

Extra (pago, no gratis): Nomad List community (https://nomadlist.com/, 200) requiere membresía de pago; no recomendado de momento.

## Acciones de la propietaria
1. Revisar y publicar manualmente con su cuenta (Reddit pide antigüedad/karma; empezar con comentarios de valor 2–3 semanas).
2. Activar archivo web público de la newsletter en MailerLite para directorios de newsletters.
3. Verificar normas actuales de SpainFIRE, finanzaspersonales, expats, financialindependence, Rankia y el grupo de Facebook (no se pudieron leer sin sesión).
