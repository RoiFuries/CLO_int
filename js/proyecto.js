// Proyecto: lee ?p=<slug>, busca el proyecto y pinta la página. Si no existe, va a 404.html.
import { proyectos } from './proyectos.js';

const slug = new URLSearchParams(location.search).get('p');
const i = proyectos.findIndex((p) => p.slug === slug);
if (i === -1) { location.replace('404.html'); throw new Error('Proyecto no encontrado'); }

const p = proyectos[i];
const siguiente = proyectos[(i + 1) % proyectos.length];
const $ = (id) => document.getElementById(id);
const alt = (n) => `${p.titulo}${p.subtitulo ? ` — ${p.subtitulo}` : ''}: foto ${n}`;

// Pestaña, descripción y Open Graph
const titulo = `${p.titulo} — ${p.subtitulo} · Clo Reyna`;
const descripcion = `${p.titulo} — ${p.subtitulo}. Proyecto de ${p.categoria.toLowerCase()} con hairstyling de Clo Reyna, hairstylist en CDMX.`;
document.title = titulo;
document.querySelector('meta[name="description"]').content = descripcion;
document.querySelector('meta[property="og:title"]').content = titulo;
document.querySelector('meta[property="og:description"]').content = descripcion;

// Cabecera
$('meta').textContent = `${p.num} / ${String(proyectos.length).padStart(2, '0')} — ${p.categoria}`;
$('titulo').textContent = p.titulo;
$('subtitulo').textContent = p.subtitulo;

// Créditos
const c = p.creditos;
const filas = [['Cliente', c.cliente], ['Fotografía', c.fotografia], ['Maquillaje', c.maquillaje], ['Styling', c.styling],
  ['Talento', c.talento], ['Agencia', c.agencia], ['Año', c.anio], ['Pelo', 'Clo Reyna']];
$('creditos').innerHTML = filas.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

// Foto principal
const foto = $('foto');
foto.classList.toggle('proyecto__foto--sola', p.galeria.length === 0);
foto.innerHTML = `<img src="${p.portada}" alt="${p.alt}" width="1280" height="853" fetchpriority="high">`;

// El look
$('look').textContent = p.look;

// Galería: pares desfasados; si sobra una, va sola y centrada
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
const sig = $('siguiente');
sig.href = `proyecto.html?p=${encodeURIComponent(siguiente.slug)}`;
$('siguiente-nombre').textContent = `${siguiente.num} — ${siguiente.titulo}`;
