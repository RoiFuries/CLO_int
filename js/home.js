// Home: pinta las 6 fichas del archivo desde los datos y las filtra con los selectores.
import { proyectos } from './proyectos.js';
import { tarjeta, repintar } from './tarjeta.js';

const DESTACADOS = ['dior', 'cartier', 'matisse-el-ayer', 'elle-mexico', 'editorial-corea-bn', 'yuya']
  .map((slug) => proyectos.find((p) => p.slug === slug))
  .filter(Boolean);

const normalizar = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const lista = document.getElementById('fichas');
const filtros = [...document.querySelectorAll('.filtros button')];
const verTodos = document.getElementById('ver-todos');

function pintar(filtro, animar = true) {
  const visibles = filtro === 'todo' ? DESTACADOS : DESTACADOS.filter((p) => normalizar(p.categoria) === filtro);
  const html = visibles.length
    ? visibles.map(tarjeta).join('')
    : '<p class="etiqueta">Sin proyectos en esta categoría. Mira el archivo completo.</p>';
  if (animar) repintar(lista, html); else lista.innerHTML = html;
  filtros.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === filtro)));
  // "Ver todos" conserva el filtro elegido
  verTodos.href = filtro === 'todo' ? 'archivo.html' : `archivo.html?f=${filtro}`;
}

filtros.forEach((b) => b.addEventListener('click', () => pintar(b.dataset.filtro)));
pintar('todo', false);
