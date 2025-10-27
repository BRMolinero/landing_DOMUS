
const TARGET = process.env.THIRD_API_BASE || 'https://domus-back-5529.onrender.com/api';

// En vez de una lista cerrada como Set(['auth/login', ...]),
// permitimos PREFIJOS (todo lo que empiece con "auth/" o "sensors")
const ALLOWED_PREFIXES = ['auth', 'sensors'];

// Orígenes permitidos (front en Render, landing en Vercel y opcional localhost)
const ORIGINS = new Set([
  'https://domus-frontend.onrender.com',
  'https://landing-domus.vercel.app',
  'http://localhost:5173',
]);

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Preflight
  if (req.method === 'OPTIONS') return res.status(204).end();

  // Normalizar path y querystring
  const raw = (req.query.path || []).join('/');
  const normalized = raw.replace(/^\/+/, '').replace(/\/+$/, '');
  const qs = req.url.includes('?') ? '?' + req.url.split('?')[1] : '';

  // Chequeo por prefijos (ej: "auth/login", "auth/login?x", "sensors/latest", etc.)
  const isAllowed = ALLOWED_PREFIXES.some(p => normalized === p || normalized.startsWith(p + '/'));
  if (!isAllowed) {
    return res.status(403).json({ error: 'Ruta no permitida', path: normalized });
  }

  const url = `${TARGET}/${normalized}${qs}`;

  try {
    // Evitar reenviar host/origin
    const { host, origin: _o, ...rest } = req.headers;

    // En Vercel, req.body ya viene parseado si es JSON; re-serializamos
    const init = {
      method: req.method,
      headers: {
        ...rest,
        'Content-Type': rest['content-type'] || 'application/json',
      },
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : JSON.stringify(req.body || {}),
    };

    const upstream = await fetch(url, init);

    // Propagar status y content-type
    res.status(upstream.status);
    const ct = upstream.headers.get('content-type');
    if (ct) res.setHeader('Content-Type', ct);

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.send(buf);
  } catch (err) {
    res.status(502).json({ error: 'Upstream fetch failed', message: String(err) });
  }
}
