// Menú móvil: botón de dos líneas, panel con enlaces, cierra con Esc y al elegir un enlace.
import { t } from './i18n.js';

const boton = document.querySelector('.menu-btn');
const panel = document.getElementById('menu');

if (boton && panel) {
  const etiqueta = () => boton.setAttribute('aria-label', t(boton.getAttribute('aria-expanded') === 'true' ? 'menu.cerrar' : 'menu.abrir'));
  document.addEventListener('langchange', etiqueta);
  etiqueta();
  const abrir = (abierto) => {
    panel.classList.toggle('is-open', abierto);
    document.documentElement.classList.toggle('menu-abierto', abierto);
    boton.setAttribute('aria-expanded', String(abierto));
    etiqueta();
  };

  boton.addEventListener('click', () => abrir(boton.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) abrir(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) { abrir(false); boton.focus(); }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', (m) => { if (m.matches) abrir(false); });
}
