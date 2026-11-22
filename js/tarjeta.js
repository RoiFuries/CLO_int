import { t, tr, altDe } from './i18n.js';

// Ficha de proyecto (foto, "NN — Nombre", Tipo / Foto / Año). La usan home y archivo.
export function tarjeta(p) {
  const href = `proyecto.html?p=${encodeURIComponent(p.slug)}`;
  return `
    <article class="ficha">
      <a class="ficha__foto" href="${href}" tabindex="-1" aria-hidden="true">
        <img src="${p.portada}" alt="${altDe(p)}" width="600" height="800" loading="lazy">
      </a>
      <h3 class="ficha__titulo"><a href="${href}">${p.num} — ${tr(p.titulo)}</a></h3>
      <dl class="datos">
        <dt>${t('ficha.tipo')}</dt><dd>${tr(p.tipo)}</dd>
        <dt>${t('ficha.foto')}</dt><dd>${tr(p.creditos.fotografia)}</dd>
        <dt>${t('ficha.anio')}</dt><dd>${tr(p.creditos.anio)}</dd>
      </dl>
    </article>`;
}

// Cambia el contenido de la cuadrícula con una transición: sale, se reemplaza y entra escalonado.
const reducir = window.matchMedia('(prefers-reduced-motion: reduce)');
let temporizador;
export function repintar(lista, html) {
  clearTimeout(temporizador);
  if (reducir.matches) { lista.innerHTML = html; return; }
  lista.classList.add('is-saliendo');
  temporizador = setTimeout(() => {
    lista.innerHTML = html;
    lista.querySelectorAll('.ficha').forEach((f, i) => f.style.setProperty('--i', i));
    lista.classList.remove('is-saliendo');
    lista.classList.add('is-entrando');
    setTimeout(() => lista.classList.remove('is-entrando'), 600);
  }, 180);
}
