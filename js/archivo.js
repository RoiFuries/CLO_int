// Archivo: filtros (con ?f= en la URL) y cuadrícula pintada desde los datos.
import { proyectos } from './proyectos.js';
import { tarjeta, repintar } from './tarjeta.js';

const normalizar = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const filtros = [...document.querySelectorAll('.filtros button')];
const lista = document.getElementById('fichas');
const contador = document.getElementById('contador');

const validos = filtros.map((b) => b.dataset.filtro);
let actual = new URLSearchParams(location.search).get('f');
if (!validos.includes(actual)) actual = 'todo';

function pintar(animar = true) {
  const visibles = actual === 'todo' ? proyectos : proyectos.filter((p) => normalizar(p.categoria) === actual);
  if (animar) repintar(lista, visibles.map(tarjeta).join('')); else lista.innerHTML = visibles.map(tarjeta).join('');
  contador.textContent = `${visibles.length} proyecto${visibles.length === 1 ? '' : 's'}`;
  filtros.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === actual)));
}

filtros.forEach((b) => b.addEventListener('click', () => {
  actual = b.dataset.filtro;
  const url = new URL(location.href);
  if (actual === 'todo') url.searchParams.delete('f'); else url.searchParams.set('f', actual);
  history.replaceState(null, '', url);
  pintar();
}));

pintar(false);
