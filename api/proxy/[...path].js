
const TARGET = process.env.THIRD_API_BASE || 'https://domus-back-5529.onrender.com/api';

// dominios que pueden llamar al proxy
const ALLOWED_ORIGINS = new Set([
  'https://domus-frontend.onrender.com',
  'https://landing-domus.vercel.app',
  'http://localhost:5173',
]);

export default async function handler(req, res) {
  const origin = req.headers.origin || '';

  // ----- Cabeceras CORS -----
  if (ALLOWED_ORIGINS.has(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // ----- Construir URL destino -----
  const path = (req.query.path || []).join('/');
  const qs = req.url.includes('?') ? '?' + req.url.split('?')[1] : '';
  const url = `${TARGET}/${path}${qs}`;

  try {
    // reenviar la request
    const { host, origin: _o, ...rest } = req.headers;
    const upstream = await fetch(url, {
      method: req.method,
      headers: rest,
      body: ['GET','HEAD'].includes(req.method) ? undefined : JSON.stringify(req.body || {}),
    });

    // devolver la respuesta del backend
    res.status(upstream.status);
    const ct = upstream.headers.get('content-type');
    if (ct) res.setHeader('Content-Type', ct);
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.send(buf);
  } catch (err) {
    res.status(502).json({ error: 'Upstream fetch failed', message: String(err) });
  }
}
