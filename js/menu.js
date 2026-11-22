// Menú móvil: botón de dos líneas, panel con enlaces, cierra con Esc y al elegir un enlace.
const boton = document.querySelector('.menu-btn');
const panel = document.getElementById('menu');

if (boton && panel) {
  const abrir = (abierto) => {
    panel.classList.toggle('is-open', abierto);
    document.documentElement.classList.toggle('menu-abierto', abierto);
    boton.setAttribute('aria-expanded', String(abierto));
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  };

  boton.addEventListener('click', () => abrir(boton.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) abrir(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) { abrir(false); boton.focus(); }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', (m) => { if (m.matches) abrir(false); });
}
