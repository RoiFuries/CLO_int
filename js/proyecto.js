// Proyecto: lee ?p=<slug>, busca el proyecto y pinta la página. Si no existe, va a 404.html.
import { proyectos } from './proyectos.js';
import { lang, t, tr, altDe } from './i18n.js';

const slug = new URLSearchParams(location.search).get('p');
const i = proyectos.findIndex((p) => p.slug === slug);
if (i === -1) { location.replace('404.html'); throw new Error('Proyecto no encontrado'); }

const p = proyectos[i];
const siguiente = proyectos[(i + 1) % proyectos.length];
const $ = (id) => document.getElementById(id);

function pintar() {
  const sub = tr(p.subtitulo);
  const cat = tr(p.categoria);

  // Pestaña, descripción y Open Graph
  const titulo = `${tr(p.titulo)} — ${sub} · Clo Reyna`;
  const descripcion = t('meta.desc', { titulo: tr(p.titulo), sub, cat: lang === 'en' ? cat : cat.toLowerCase() });
  document.title = titulo;
  document.querySelector('meta[name="description"]').content = descripcion;
  document.querySelector('meta[property="og:title"]').content = titulo;
  document.querySelector('meta[property="og:description"]').content = descripcion;

  // Cabecera
  $('meta').textContent = `${p.num} / ${String(proyectos.length).padStart(2, '0')} — ${cat}`;
  $('titulo').textContent = tr(p.titulo);
  $('subtitulo').textContent = sub;

  // Créditos
  const c = p.creditos;
  const filas = [['cliente', c.cliente], ['fotografia', c.fotografia], ['maquillaje', c.maquillaje], ['styling', c.styling],
    ['talento', c.talento], ['agencia', c.agencia], ['anio', c.anio], ['pelo', 'Clo Reyna']];
  $('creditos').innerHTML = filas.map(([k, v]) => `<dt>${t(`cred.${k}`)}</dt><dd>${tr(v)}</dd>`).join('');

  // Foto principal
  const foto = $('foto');
  foto.classList.toggle('proyecto__foto--sola', p.galeria.length === 0);
  foto.innerHTML = `<img src="${p.portada}" alt="${altDe(p)}" width="1280" height="853" fetchpriority="high">`;

  // El look (si Clo aún no lo manda, se muestra el texto de relleno en el idioma activo)
  $('look').textContent = lang === 'en' ? p.lookEn ?? (p.look.startsWith('[') ? t('look.ph') : p.look) : p.look;

  // Galería: pares desfasados; si sobra una, va sola y centrada
  const alt = (n) => `${tr(p.titulo)} — ${sub}: ${t('foto')} ${n}`;
  const img = (src, n, clase = '') => `<img src="${src}" alt="${alt(n)}" width="800" height="1000" loading="lazy"${clase ? ` class="${clase}"` : ''}>`;
  let html = '';
  for (let k = 0; k < p.galeria.length; k += 2) {
    const [a, b] = [p.galeria[k], p.galeria[k + 1]];
    html += b
      ? `<div class="galeria__par">${img(a, k + 2)}${img(b, k + 3)}</div>`
      : img(a, k + 2, 'galeria__sola');
  }
  $('galeria').innerHTML = html;
  $('galeria').hidden = p.galeria.length === 0;

  // Siguiente proyecto
  $('siguiente').href = `proyecto.html?p=${encodeURIComponent(siguiente.slug)}`;
  $('siguiente-nombre').textContent = `${siguiente.num} — ${tr(siguiente.titulo)}`;
}

document.addEventListener('langchange', pintar);
pintar();
