import { t } from './i18n.js';

// Envío del formulario de booking con Formspree (sin recargar) y pantalla "Gracias".
// Reemplaza el endpoint cuando Clo cree su cuenta de Formspree.
const FORMSPREE_URL = 'https://formspree.io/f/XXXXXXXX';

const EMAIL = 'clo.stylistroom@gmail.com';

function iniciar(form) {
  const vista = document.querySelector(form.dataset.vista);     // lo que se oculta al enviar
  const gracias = document.querySelector(form.dataset.gracias); // lo que aparece
  const error = form.querySelector('.form__error');
  const boton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    error.hidden = true;
    boton.disabled = true;
    boton.textContent = t('form.enviando');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      vista.hidden = true;
      gracias.hidden = false;
      gracias.querySelector('h1, h2')?.focus();
      form.reset();
    } catch {
      error.innerHTML = t('form.error', { email: EMAIL });
      error.hidden = false;
    } finally {
      boton.disabled = false;
      boton.textContent = t('f.enviar');
    }
  });

  gracias.querySelector('[data-reset]')?.addEventListener('click', () => {
    gracias.hidden = true;
    vista.hidden = false;
    form.querySelector('input')?.focus();
  });
}

document.querySelectorAll('form[data-booking]').forEach(iniciar);
