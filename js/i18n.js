// Idioma ES / EN. El español vive en el HTML (se ve sin JS); aquí están las traducciones al inglés.
// - Texto fijo: elementos con data-i18n="clave" (innerHTML) y data-i18n-attr="atributo:clave;otro:clave".
// - Texto pintado por JS: usa t('clave') y tr('texto en español').
// Cada vez que cambia el idioma se emite el evento "langchange" para que las páginas repinten.

const EN = {
  skip: 'Skip to content',
  'nav.label': 'Main', 'nav.archivo': 'Archive', 'nav.portadas': 'Covers', 'nav.info': 'About', 'nav.booking': 'Booking',
  'lang.label': 'Language',
  'footer.links': 'Links', 'footer.video': 'Book video',
  'hero.label': 'Hairstylist — Mexico City — Editorial / Campaign / Music',
  'hero.frase': 'Sculpted shapes, water waves and texture made for camera. Available to travel.',
  'hero.alt': 'Black and white editorial with sculpted waves',
  'hero.pie': 'Fig. 00 — [Project]',
  'hero.indice': 'Featured projects',
  'idx.glamour': 'Glamour México — Cover',
  'cat.todo': 'All', 'cat.editorial': 'Editorial', 'cat.campana': 'Campaign', 'cat.musica': 'Music', 'cat.portada': 'Cover',
  'clientes.label': 'Clients',
  'archivo.h': 'Archive', 'archivo.lista': 'Projects',
  'filtro.label': 'Filter by type',
  vertodos: 'View all projects →',
  'portadas.label': '03 — Covers',
  retrato: '[Portrait of Clo]', 'retrato.label': 'Placeholder for Clo’s portrait',
  'info.bio': 'Claudia “Clo” Reyna is a hairstylist based in Mexico City. [A sentence about her approach and signature.]',
  'info.marcas': 'Brands', 'info.revistas': 'Magazines', 'info.musica': 'Music', 'info.artistas': 'Matisse, [Artists]',
  'cierre.titulo': 'Got a<br><i>shoot?</i>', 'cta.titulo': 'Got a <i>shoot?</i>',
  'f.nombre': 'Name *', 'f.email': 'Email *', 'f.proyecto': 'Tell me about the project',
  'f.ph': 'Type of project (editorial, campaign, video…), dates, city and any reference or moodboard link.',
  'f.enviar': 'Send request',
  'gracias.titulo': 'Thank you<i>.</i>',
  'gracias.texto': 'I received your project details. I’ll email you availability and a proposal within [response time]. If it’s urgent, write me directly at clo.stylistroom@gmail.com.',
  'gracias.archivo': 'View the archive', 'gracias.otra': 'Send another request', 'gracias.etiqueta': 'Request sent',
  'proy.volver': '← Back to archive', 'proy.creditos': 'Credits', 'proy.look': 'The look', 'proy.nav': 'Projects',
  'proy.archivo': '← Archive', 'proy.todos': 'All projects', 'proy.sig': 'Next →',
  'booking.lado': 'Direct contact', 'booking.contacto': 'Direct contact',
  'booking.base': 'Based in Mexico City. Available to travel.',
  'booking.intro': 'Editorial, campaign, music video or talent. The more details you share, the sooner I’ll send availability and a proposal.',
  'booking.alt': 'Cartier editorial: black bob in profile',
  'booking.alt2': 'Cartier editorial: portrait in a red armchair',
  'p404.texto': 'This page doesn’t exist or has moved.', 'p404.ir': 'Go to the archive →',
  'title.index': 'Clo Reyna — Editorial and campaign hairstylist in Mexico City',
  'desc.index': 'Portfolio of Claudia “Clo” Reyna, an editorial and commercial hairstylist in Mexico City. Campaign, editorial, music and covers. Available to travel.',
  'title.archivo': 'Archive — Clo Reyna',
  'desc.archivo': 'Full archive of Clo Reyna’s projects: editorial, campaign, music and covers.',
  'title.booking': 'Booking — Clo Reyna',
  'desc.booking': 'Request availability and a proposal for your editorial, campaign or video project with Clo Reyna, hairstylist in Mexico City.',
  'desc.404': 'Page not found.',
  // — usadas desde JS —
  'ficha.tipo': 'Type', 'ficha.foto': 'Photo', 'ficha.anio': 'Year',
  'cred.cliente': 'Client', 'cred.fotografia': 'Photography', 'cred.maquillaje': 'Makeup', 'cred.styling': 'Styling',
  'cred.talento': 'Talent', 'cred.agencia': 'Agency', 'cred.anio': 'Year', 'cred.pelo': 'Hair',
  'form.enviando': 'Sending…',
  'form.error': 'Your request could not be sent. Write me directly at <a href="mailto:{email}">{email}</a>.',
  'menu.abrir': 'Open menu', 'menu.cerrar': 'Close menu',
  'contador.uno': '{n} project', 'contador.otros': '{n} projects',
  foto: 'photo', vacio: 'No projects in this category. See the full archive.',
  'look.ph': '[Two or three lines from Clo about the idea behind the hair: the reference, the technique and how it was thought for camera.]',
  'meta.desc': '{titulo} — {sub}. {cat} project with hairstyling by Clo Reyna, hairstylist in Mexico City.'
};

// Claves que el JS necesita también en español (el resto del español está en el HTML)
const ES = {
  'cat.todo': 'Todo', 'cat.editorial': 'Editorial', 'cat.campana': 'Campaña', 'cat.musica': 'Música', 'cat.portada': 'Portada',
  'f.enviar': 'Enviar solicitud',
  'ficha.tipo': 'Tipo', 'ficha.foto': 'Foto', 'ficha.anio': 'Año',
  'cred.cliente': 'Cliente', 'cred.fotografia': 'Fotografía', 'cred.maquillaje': 'Maquillaje', 'cred.styling': 'Styling',
  'cred.talento': 'Talento', 'cred.agencia': 'Agencia', 'cred.anio': 'Año', 'cred.pelo': 'Pelo',
  'form.enviando': 'Enviando…',
  'form.error': 'No se pudo enviar tu solicitud. Escríbeme directo a <a href="mailto:{email}">{email}</a>.',
  'menu.abrir': 'Abrir menú', 'menu.cerrar': 'Cerrar menú',
  'contador.uno': '{n} proyecto', 'contador.otros': '{n} proyectos',
  foto: 'foto', vacio: 'Sin proyectos en esta categoría. Mira el archivo completo.',
  'meta.desc': '{titulo} — {sub}. Proyecto de {cat} con hairstyling de Clo Reyna, hairstylist en CDMX.'
};

// Textos de los datos (js/proyectos.js): español → inglés
const STR = {
  'Campaña': 'Campaign', 'Música': 'Music', 'Portada': 'Cover', 'Música / portada': 'Music / cover',
  'Blanco y negro': 'Black & white', 'Trenzas': 'Braids',
  '[Fotógrafo]': '[Photographer]', '[Nombre]': '[Name]', '[Agencia]': '[Agency]', '[Año]': '[Year]',
  '[Cliente]': '[Client]', '[Cliente] Beauty': '[Client] Beauty'
};

export let lang = 'es';
try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch { /* sin almacenamiento */ }

const lookup = (k) => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k] ?? EN[k] ?? k;
export const t = (k, vars = {}) => lookup(k).replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? '');
export const tr = (s) => (lang === 'en' ? STR[s] ?? s : s);
export const altDe = (p) => (lang === 'en' && p.altEn ? p.altEn : p.alt);
export const slugCat = (categoria) => categoria.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function aplicar() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
    el.innerHTML = lang === 'en' ? EN[el.dataset.i18n] ?? el.dataset.es : el.dataset.es;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((par) => {
      const [attr, clave] = par.split(':');
      const guardado = `es${attr.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase())}`;
      if (el.dataset[guardado] === undefined) el.dataset[guardado] = el.getAttribute(attr) ?? '';
      el.setAttribute(attr, lang === 'en' ? EN[clave] ?? el.dataset[guardado] : el.dataset[guardado]);
    });
  });
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

export function setLang(nuevo) {
  if (nuevo === lang) return;
  lang = nuevo;
  try { localStorage.setItem('lang', lang); } catch { /* sin almacenamiento */ }
  aplicar();
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]');
  if (b) setLang(b.dataset.lang);
});
aplicar();
