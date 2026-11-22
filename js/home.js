// Home: pinta las 6 fichas del archivo desde los datos y las filtra con los selectores.
import { proyectos } from './proyectos.js';
import { tarjeta, repintar } from './tarjeta.js';
import { t, slugCat } from './i18n.js';

const DESTACADOS = ['dior', 'cartier', 'matisse-el-ayer', 'elle-mexico', 'editorial-corea-bn', 'yuya']
  .map((slug) => proyectos.find((p) => p.slug === slug))
  .filter(Boolean);

const lista = document.getElementById('fichas');
const filtros = [...document.querySelectorAll('.filtros button')];
const verTodos = document.getElementById('ver-todos');
let actual = 'todo';

function pintar(animar = true) {
  const visibles = actual === 'todo' ? DESTACADOS : DESTACADOS.filter((p) => slugCat(p.categoria) === actual);
  const html = visibles.length
    ? visibles.map(tarjeta).join('')
    : `<p class="etiqueta">${t('vacio')}</p>`;
  if (animar) repintar(lista, html); else lista.innerHTML = html;
  filtros.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === actual)));
  // "Ver todos" conserva el filtro elegido
  verTodos.href = actual === 'todo' ? 'archivo.html' : `archivo.html?f=${actual}`;
}

filtros.forEach((b) => b.addEventListener('click', () => { actual = b.dataset.filtro; pintar(); }));
document.addEventListener('langchange', () => pintar(false));
pintar(false);
