// shortcut: fotos de relleno generadas; cuando haya fotos reales, ponlas en public/fotos/ y usa rutas como '/fotos/2019-1.jpg'
const relleno = (texto, color) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="#0b0b0f"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="800" y="830" text-anchor="middle" font-family="system-ui" font-size="44" font-weight="700" fill="rgba(255,255,255,.3)">${texto}</text></svg>`
  )}`

// Para agregar un momento: copia un bloque y cámbiale los datos. Van en orden.
// La primera foto es la que se expande a pantalla completa; las demás salen en abanico.
export const momentos = [
  {
    anio: 2019,
    titulo: 'Conocimos al Carlos',
    descripcion: 'Aquí va la historia de cómo empezó todo.',
    fotos: [relleno('foto 2019', '#7c3aed'), relleno('2019 · 2', '#a855f7'), relleno('2019 · 3', '#6366f1'), relleno('2019 · 4', '#8b5cf6')],
  },
  {
    anio: 2023,
    titulo: 'Su primera novia',
    descripcion: 'Nadie lo vio venir. Aquí va el chisme completo.',
    fotos: [relleno('foto 2023', '#e11d48')],
  },
  {
    anio: 2026,
    titulo: 'El evento X',
    descripcion: 'Aquí va lo que pasó ese día.',
    fotos: [relleno('foto 2026', '#f59e0b')],
  },
]
