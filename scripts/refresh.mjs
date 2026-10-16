// Weekly refresh: fetch official pages, extract rate snippets, diff against last snapshot, flag changes.
// Never writes rates into products.json automatically: changes require human review.
import fs from 'node:fs'; import crypto from 'node:crypto';
const UA = 'Mozilla/5.0 (X11; Linux x86_64) Chrome/124 SaveAmigo-refresh';
const SOURCES = [
  { id: 'openbank', url: 'https://www.openbank.es/cuenta-remunerada', re: /[0-9],[0-9]{1,2} ?% ?TAE/g },
  { id: 'ing', url: 'https://www.ing.es/cuenta-naranja', re: /[0-9],[0-9]{1,3} ?% ?TAE/g },
  { id: 'myinvestor', url: 'https://www.myinvestor.es/cuentas/cuenta-remunerada/', re: /[0-9],[0-9]{1,2} ?% ?TAE/g },
  { id: 'bunq', url: 'https://www.bunq.com/es-es/savings', re: /hasta un [0-9],[0-9]{1,2} ?%/g },
  { id: 'tesoro', url: 'https://www.tesoro.es/deuda-publica/subastas/resultado-ultimas-subastas/letras-del-tesoro', re: /Tipo de inter[eé]s (marginal|medio)[^A-Za-z]{0,200}/g },
  { id: 'esma_casps', url: 'https://www.esma.europa.eu/sites/default/files/2024-12/CASPS.csv', csv: true },
];
const dir = new URL('../data-snapshots/', import.meta.url); fs.mkdirSync(dir, { recursive: true });
const prevF = new URL('latest.json', dir); const prev = fs.existsSync(prevF) ? JSON.parse(fs.readFileSync(prevF)) : {};
const out = {}; const report = [];
for (const s of SOURCES) {
  try {
    const r = await fetch(s.url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(60000) });
    const body = await r.text();
    let snap;
    if (s.csv) { const rows = body.trim().split('\n').slice(1); snap = { rows: rows.length, names: rows.map(l => l.split(',')[2]).sort() }; }
    else { const text = body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' '); snap = { matches: [...new Set(text.match(s.re) || [])].slice(0, 20) }; }
    snap.status = r.status; snap.hash = crypto.createHash('sha1').update(JSON.stringify(snap)).digest('hex');
    out[s.id] = snap;
    const changed = prev[s.id] && prev[s.id].hash !== snap.hash;
    report.push(`${changed ? '⚠️ CAMBIO' : prev[s.id] ? 'sin cambios' : 'nuevo'}  ${s.id} (${r.status}) ${s.csv ? snap.rows + ' CASPs' : snap.matches.join(' | ')}`);
    if (changed && s.csv) { const a = new Set(prev[s.id].names), b = new Set(snap.names);
      report.push('   añadidos: ' + snap.names.filter(n => !a.has(n)).join('; ') + ' / eliminados: ' + prev[s.id].names.filter(n => !b.has(n)).join('; ')); }
  } catch (e) { out[s.id] = prev[s.id]; report.push(`❌ ERROR ${s.id}: ${e.message} (marcar como pendiente de verificar si persiste)`); }
}
const stamp = new Date().toISOString().slice(0, 10);
fs.writeFileSync(prevF, JSON.stringify(out, null, 1)); fs.writeFileSync(new URL(`${stamp}.json`, dir), JSON.stringify(out, null, 1));
fs.writeFileSync(new URL(`report-${stamp}.txt`, dir), report.join('\n')); console.log(report.join('\n'));
