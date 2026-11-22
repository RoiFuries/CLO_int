// Datos de los proyectos: único lugar para editar.
// Para agregar uno: copia un objeto, cambia sus datos y crea su carpeta en assets/fotos/.
// `portada` es la foto principal; `galeria` son las demás fotos (puede ir vacía).

const foto = (carpeta, ...nums) => nums.map((n) => `assets/fotos/${carpeta}/${n}.jpg`);

const creditos = (cliente) => ({
  cliente,
  fotografia: '[Fotógrafo]',
  maquillaje: '[Nombre]',
  styling: '[Nombre]',
  talento: '[Nombre]',
  agencia: '[Agencia]',
  anio: '[Año]'
});

const LOOK = '[Dos o tres líneas de Clo sobre la idea del pelo: la referencia, la técnica y cómo se pensó para la cámara.]';

export const proyectos = [
  {
    slug: 'dior', num: '01', titulo: 'Dior', subtitulo: 'Campaign hair', tipo: 'Campaign hair', categoria: 'Campaña',
    portada: 'assets/fotos/01-dior/03.jpg',
    galeria: foto('01-dior', '01', '02', '04', '05'),
    creditos: creditos('Dior'), look: LOOK,
    alt: 'Campaña Dior: ondas laterales en blanco y negro con tulipanes',
    altEn: 'Dior campaign: side waves in black and white with tulips'
  },
  {
    slug: 'cartier', num: '02', titulo: 'Cartier', subtitulo: 'Editorial', tipo: 'Editorial', categoria: 'Editorial',
    portada: 'assets/fotos/02-cartier/02.jpg',
    galeria: foto('02-cartier', '01', '03', '04'),
    creditos: creditos('Cartier'), look: LOOK,
    alt: 'Editorial Cartier: bob negro y saco morado',
    altEn: 'Cartier editorial: black bob and purple jacket'
  },
  {
    slug: 'glamour-carla-morrison', num: '03', titulo: 'Glamour MX', subtitulo: 'Carla Morrison', tipo: 'Portada', categoria: 'Portada',
    portada: 'assets/fotos/03-glamour-carla-morrison/01.jpg',
    galeria: [],
    creditos: creditos('Glamour México'), look: LOOK,
    alt: 'Portada de Glamour México con Carla Morrison',
    altEn: 'Glamour México cover with Carla Morrison'
  },
  {
    slug: 'matisse-el-ayer', num: '04', titulo: 'Matisse', subtitulo: 'El ayer', tipo: 'Música / portada', categoria: 'Música',
    portada: 'assets/fotos/04-matisse-el-ayer/01.jpg',
    galeria: foto('04-matisse-el-ayer', '02', '03'),
    creditos: creditos('Matisse'), look: LOOK,
    alt: 'Portada del sencillo El ayer de Matisse',
    altEn: 'Cover of the single El ayer by Matisse'
  },
  {
    slug: 'elle-mexico', num: '05', titulo: 'Elle México', subtitulo: 'Editorial', tipo: 'Editorial', categoria: 'Editorial',
    portada: 'assets/fotos/05-elle-mexico/03.jpg',
    galeria: foto('05-elle-mexico', '01', '02', '04', '05', '06'),
    creditos: creditos('Elle México'), look: LOOK,
    alt: 'Editorial Elle México con fleco esculpido',
    altEn: 'Elle México editorial with sculpted bangs'
  },
  {
    slug: 'editorial-corea-bn', num: '06', titulo: 'Editorial Corea', subtitulo: 'Blanco y negro', tipo: 'Portada', categoria: 'Portada',
    portada: 'assets/fotos/06-editorial-corea-bn/02.jpg',
    galeria: foto('06-editorial-corea-bn', '01', '03'),
    creditos: creditos('[Cliente]'), look: LOOK,
    alt: 'Portada editorial coreana en blanco y negro',
    altEn: 'Korean editorial cover in black and white'
  },
  {
    slug: 'yuya', num: '07', titulo: 'Yuya', subtitulo: 'Campaña', tipo: 'Campaña', categoria: 'Campaña',
    portada: 'assets/fotos/07-yuya/02.jpg',
    galeria: foto('07-yuya', '01', '03', '04', '05'),
    creditos: creditos('Yuya'), look: LOOK,
    alt: 'Campaña con Yuya',
    altEn: 'Campaign with Yuya'
  },
  {
    slug: 'bailando-juntos', num: '08', titulo: 'Bailando Juntos', subtitulo: 'Campaña', tipo: 'Campaña', categoria: 'Campaña',
    portada: 'assets/fotos/08-bailando-juntos/01.jpg',
    galeria: foto('08-bailando-juntos', '02', '03'),
    creditos: creditos('Bailando Juntos'), look: LOOK,
    alt: 'Campaña Bailando Juntos',
    altEn: 'Bailando Juntos campaign'
  },
  {
    slug: 'glamour-cristy-camacho', num: '09', titulo: 'Glamour MX', subtitulo: 'Cristy Camacho', tipo: 'Portada', categoria: 'Portada',
    portada: 'assets/fotos/09-glamour-cristy-camacho/01.jpg',
    galeria: [],
    creditos: creditos('Glamour México'), look: LOOK,
    alt: 'Portada de Glamour México con Cristy Camacho',
    altEn: 'Glamour México cover with Cristy Camacho'
  },
  {
    slug: 'elle-mexico-ii', num: '10', titulo: 'Elle México II', subtitulo: 'Editorial', tipo: 'Editorial', categoria: 'Editorial',
    portada: 'assets/fotos/10-elle-mexico-ii/01.jpg',
    galeria: foto('10-elle-mexico-ii', '02', '03'),
    creditos: creditos('Elle México'), look: LOOK,
    alt: 'Segundo editorial para Elle México',
    altEn: 'Second editorial for Elle México'
  },
  {
    slug: 'editorial-corea-color', num: '11', titulo: 'Editorial Corea', subtitulo: 'Color', tipo: 'Portada', categoria: 'Portada',
    portada: 'assets/fotos/11-editorial-corea-color/01.jpg',
    galeria: foto('11-editorial-corea-color', '02', '03'),
    creditos: creditos('[Cliente]'), look: LOOK,
    alt: 'Editorial coreana a color',
    altEn: 'Korean editorial in color'
  },
  {
    slug: 'beauty-trenzas', num: '12', titulo: '[Cliente] Beauty', subtitulo: 'Trenzas', tipo: 'Campaña', categoria: 'Campaña',
    portada: 'assets/fotos/12-beauty-trenzas/01.jpg',
    galeria: foto('12-beauty-trenzas', '02', '03'),
    creditos: creditos('[Cliente]'), look: LOOK,
    alt: 'Campaña beauty con trenzas',
    altEn: 'Beauty campaign with braids'
  }
];
