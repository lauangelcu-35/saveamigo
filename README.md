# ahorrarinvertir.com (prototipo local)
- Datos: src/data/products.json (verified=false => "pendiente de verificar"). Fuente CASP: /workspace/ahorro-vs-cripto/CASPS.csv
- Build: `ASTRO_TELEMETRY_DISABLED=1 npx astro build` -> dist/ ; servir: `python3 -m http.server 4321 -d dist`
- Refresh semanal: `node scripts/refresh.mjs` -> data-snapshots/report-YYYY-MM-DD.txt (marca cambios, no edita datos)
- Capturas: `python3 scripts/screenshots.py`
- México: src/data/products_mx.json + categories_mx.js; páginas en src/pages/mx/
- Referidos: src/data/referrals.json (url vacía = no se muestra; rel="sponsored nofollow")
- Newsletter/quiz: cambiar NEWSLETTER_ENDPOINT (y FIELD_MAP si hace falta) en src/data/site.js
- SEO: sitemap.xml y llms.txt se generan en build; public/robots.txt; OG en public/og/; fuentes self-hosted en public/fonts/
- Lighthouse: `CHROME_PATH=... lighthouse http://localhost:4321/ [--preset=desktop]` -> lighthouse/*.json
