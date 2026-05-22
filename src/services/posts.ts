export interface Post {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  author: string;
  author_avatar?: string;
  read_time?: string;
  featured_image: string;
  youtube_id?: string; // Optional YouTube ID for embedding a premium play overlay
  content: string;
  category?: { name: string }[];
  tags?: string[];
}

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'El Arte del Doblaje: Cómo dar Alma a un Personaje Animado',
    subtitle: 'Detrás de cada voz en la pantalla hay un proceso de inmersión y técnica emocional. Te cuento las claves de mi trayectoria interpretando personajes icónicos.',
    excerpt: 'El doblaje de voz va mucho más allá de leer un guión sincronizadamente. Descubre cómo la interpretación vocal puede transformar un dibujo animado en un ser lleno de matices y emociones reales.',
    date: '2026-05-15',
    author: 'Leyla Rangel',
    author_avatar: '/img/hero-vertical.png',
    read_time: '6 min read',
    featured_image: '/img/hero-horizontal.png',
    youtube_id: 'c9L-78kKk7o',
    category: [{ name: 'Interpretación' }, { name: 'Doblaje' }],
    tags: ['doblaje', 'animacion', 'actuacion-vocal', 'historias'],
    content: `<p>Cuando vemos un personaje animado, rara vez pensamos en el proceso que hay detrás para darle vida. El doblaje de voz va mucho más allá de leer un guión sincronizadamente. Es un ejercicio de actuación pura, donde la voz es la única herramienta para transmitir miedo, alegría, vulnerabilidad y determinación.</p>
<h2>La Sincronía Emocional</h2>
<p>Muchos creen que la sincronía de labios (lip-sync) es la parte más difícil del doblaje. Sin embargo, el verdadero reto es la sincronía emocional. Tienes que respirar al mismo tiempo que el personaje, sentir sus mismos impulsos y encajar perfectamente con la animación original creada por el ilustrador. Esto requiere una inmensa concentración y años de entrenamiento técnico.</p>
<blockquote>"El doblaje no es imitar, es recrear. Es entender la intención del creador original y trasladarla con la misma fuerza a nuestro idioma."</blockquote>
<p>A lo largo de mis 33 años de carrera, he tenido la fortuna de interpretar personajes inolvidables como Hermione Granger, Astrid y Kim Possible. Cada uno de estos roles me enseñó a modular diferentes registros, pero el núcleo siempre fue el mismo: la verdad emocional en cada fraseo.</p>
<p>El doblaje es, en última instancia, un arte invisible. Si el espectador se olvida de la voz y se conecta completamente con el personaje, entonces el trabajo ha sido un éxito rotundo.</p>`
  },
  {
    id: '2',
    title: 'Dirección de Doblaje: Guiando la Emoción en el Estudio',
    subtitle: 'Dirigir a otros actores requiere empatía, precisión y un entendimiento profundo del ritmo narrativo cinematográfico.',
    excerpt: '¿Qué hace un director de doblaje en la cabina? Conoce el rol fundamental de coordinar matices tonales, actuación y fidelidad en grandes producciones.',
    date: '2026-05-10',
    author: 'Leyla Rangel',
    author_avatar: '/img/hero-vertical.png',
    read_time: '5 min read',
    featured_image: '/img/el-nino-y-la-garza.gif',
    youtube_id: '7v-KzH7vLzI',
    category: [{ name: 'Dirección' }, { name: 'Cine' }],
    tags: ['direccion', 'produccion', 'estudio-de-grabacion'],
    content: `<p>Dirigir doblaje es un acto de traducción no verbal. Es ser el puente entre la visión original del director de cine y el actor de voz en el atril. En la cabina de grabación, mi papel no es solo dictar cuándo entrar o salir, sino crear la atmósfera perfecta para que el actor exprese su máxima sensibilidad.</p>
<h2>La Construcción de la Atmósfera</h2>
<p>Cuando un actor entra a grabar una escena altamente dramática, su mente debe estar allí. Mi trabajo como directora es platicarle el contexto, los matices psicológicos y guiarlo para que alcance el nivel de intensidad exacto sin desgastar su voz. Cada milésima de segundo cuenta en la sincronía, pero el alma del doblaje está en la respiración.</p>
<blockquote>"El mejor director de doblaje no es el que más habla, sino el que sabe escuchar and detectar la micro-emoción exacta que la escena requiere."</blockquote>
<p>En producciones recientes de directores de renombre internacional, la exigencia técnica es superlativa. La voz debe encajar como si se hubiera grabado originalmente en esa lengua. Esto requiere disciplina, pero sobre todo, una gran dosis de empatía artística.</p>`
  },
  {
    id: '3',
    title: 'Locución Comercial: La Conexión Inmediata con la Audiencia',
    subtitle: 'El arte de vender, inspirar e informar en tan solo unos segundos usando el poder de los tonos vocales.',
    excerpt: 'Descubre los secretos de la locución comercial premium. Cómo modular la voz para campañas de grandes marcas mundiales y lograr una resonancia profunda.',
    date: '2026-05-05',
    author: 'Leyla Rangel',
    author_avatar: '/img/hero-vertical.png',
    read_time: '4 min read',
    featured_image: '/img/personajes/ahsoka-main_88c206d7.jpeg',
    youtube_id: 'ePqGjM2hF5o',
    category: [{ name: 'Locución' }, { name: 'Comercial' }],
    tags: ['locucion', 'publicidad', 'marcas', 'marketing'],
    content: `<p>En la locución comercial, el tiempo es nuestro competidor más feroz. Tienes 15 o 30 segundos para conectar, inspirar y transmitir un mensaje claro a la audiencia. Aquí, la precisión vocal y la capacidad de sugerir emociones inmediatas a través del tono son cruciales.</p>
<h2>Menos es Más: El Tono Conversacional Moderno</h2>
<p>La locución comercial tradicional con tonos hiper-exaltados y artificiales ha quedado atrás. Hoy en día, las marcas buscan voces reales, conversacionales y empáticas. Voces que te hablen como una amiga o un mentor, no como un vendedor impersonal.</p>
<blockquote>"La locución moderna busca la autenticidad. La voz debe sonar honesta, fluida y con la textura natural del habla cotidiana."</blockquote>
<p>Darle voz a campañas globales para marcas líderes me ha enseñado a calibrar la voz a niveles micro. Cambiar el énfasis en una sola sílaba puede transformar por completo el sentido de un comercial y redefinir la respuesta emocional del consumidor.</p>`
  }
];

export async function getListPost(type: string, count: number, slug: string): Promise<Post[]> {
  const normalizedSlug = slug.replace(/^\/blog\//, '').replace(/^\/historias\//, '').replace(/^\//, '');
  const found = mockPosts.find(p => {
    const pSlug = p.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return pSlug === normalizedSlug;
  });
  return found ? [found] : [mockPosts[0]];
}
