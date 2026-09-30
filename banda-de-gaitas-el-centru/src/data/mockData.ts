import { Actuacion, Noticia, FotoGaleria, ComponenteBanda, SeccionBanda } from '../types';

export const HERO_IMAGE = '/src/assets/images/banda_hero_gaitas_1790773519693.jpg';
export const ESCENARIO_IMAGE = '/src/assets/images/actuacion_escenario_1790773534534.jpg';
export const GAITEROS_IMAGE = '/src/assets/images/gaiteros_detalle_1790773545346.jpg';
export const PERCUSION_IMAGE = '/src/assets/images/percusion_tradicional_1790773557319.jpg';
export const DIRECTOR_IMAGE = '/src/assets/images/director_musical_1790774107525.jpg';
export const GAITERA_IMAGE = '/src/assets/images/gaitera_solista_1790774120962.jpg';
export const TAMBOR_IMAGE = '/src/assets/images/percusion_bombo_1790774133609.jpg';

export const SECCIONES_BANDA: SeccionBanda[] = [
  {
    id: 'sec-gaitas',
    nombre: 'Cuerpo de Gaitas',
    imagen: GAITEROS_IMAGE,
    descripcion: 'Bloque armónico principal afinado en tonalidad tradicional. Interpretan primeras, segundas y terceras voces polifónicas con rigor melódico.',
    instrumentos: 'Gaita asturiana tradicional con fuelle de terciopelo verde botella y roncón afinado.',
    rol: 'Conducción melódica y polifonía tradicional asturiana.'
  },
  {
    id: 'sec-tambores',
    nombre: 'Tambores',
    imagen: TAMBOR_IMAGE,
    descripcion: 'Línea de cajas de marcha con parches de alta tensión que otorgan la sonoridad marcial y cristalina propia de las formaciones asturianas.',
    instrumentos: 'Cajas de alta tensión con bordoneras inferiores y baquetas de roble.',
    rol: 'Marcación rítmica, redobles y precisión de paso.'
  },
  {
    id: 'sec-bombos',
    nombre: 'Bombos & Timbales',
    imagen: PERCUSION_IMAGE,
    descripcion: 'La base grave de resonancia que marca el pulso y los timbales que acompañan los compases en desfiles y escenarios.',
    instrumentos: 'Bombos tradicionales de madera con mazas compensadas y timbales afinados.',
    rol: 'Pulso de la marcha y cambios de compás.'
  },
  {
    id: 'sec-direccion',
    nombre: 'Dirección Musical',
    imagen: DIRECTOR_IMAGE,
    descripcion: 'Supervisión de los arreglos musicales, afinación colectiva previa a las actuaciones y dirección en escenario.',
    instrumentos: 'Gaita solista y dirección ceremonial.',
    rol: 'Afinación general, entradas de compás y dirección del repertorio.'
  }
];

export const COMPONENTES_BANDA: ComponenteBanda[] = [
  {
    id: 'comp-1',
    nombre: 'Pelayo',
    apellidos: 'Fernández Menéndez',
    rol: 'direccion',
    cargo: 'Director Musical',
    instrumento: 'Gaita Asturiana',
    lugar: 'Villaviciosa',
    foto: DIRECTOR_IMAGE,
    antiguedad: 'Fundador'
  },
  {
    id: 'comp-2',
    nombre: 'Covadonga',
    apellidos: 'Álvarez Suárez',
    rol: 'gaitas',
    cargo: 'Cabo de Gaitas',
    instrumento: 'Gaita Asturiana',
    lugar: 'Gijón',
    foto: GAITERA_IMAGE,
    antiguedad: 'Desde 2012'
  },
  {
    id: 'comp-3',
    nombre: 'Mateo',
    apellidos: 'González Estrada',
    rol: 'tambores',
    cargo: 'Cabo de Percusión',
    instrumento: 'Tambor de Alta Tensión',
    lugar: 'Oviedo',
    foto: TAMBOR_IMAGE,
    antiguedad: 'Desde 2013'
  },
  {
    id: 'comp-4',
    nombre: 'Rodrigo',
    apellidos: 'García Cueto',
    rol: 'bombos_timbales',
    cargo: 'Bombo Principal',
    instrumento: 'Bombo Tradicional',
    lugar: 'Siero',
    foto: PERCUSION_IMAGE,
    antiguedad: 'Desde 2015'
  },
  {
    id: 'comp-5',
    nombre: 'Lucía',
    apellidos: 'Pérez Morán',
    rol: 'gaitas',
    cargo: 'Gaitera de Primera Voz',
    instrumento: 'Gaita Asturiana',
    lugar: 'Avilés',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2017'
  },
  {
    id: 'comp-6',
    nombre: 'Ignacio',
    apellidos: 'Blanco Riestra',
    rol: 'gaitas',
    cargo: 'Gaitero de Segunda Voz',
    instrumento: 'Gaita Asturiana',
    lugar: 'Villaviciosa',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2018'
  },
  {
    id: 'comp-7',
    nombre: 'David',
    apellidos: 'Díaz Cangas',
    rol: 'tambores',
    cargo: 'Tambor',
    instrumento: 'Tambor de Alta Tensión',
    lugar: 'Mieres',
    foto: TAMBOR_IMAGE,
    antiguedad: 'Desde 2019'
  },
  {
    id: 'comp-8',
    nombre: 'Enol',
    apellidos: 'Suárez Campa',
    rol: 'bombos_timbales',
    cargo: 'Timbal Tenor',
    instrumento: 'Timbal Tenor',
    lugar: 'Cangas de Onís',
    foto: PERCUSION_IMAGE,
    antiguedad: 'Desde 2020'
  },
  {
    id: 'comp-9',
    nombre: 'Sara',
    apellidos: 'Martínez Baragaño',
    rol: 'gaitas',
    cargo: 'Gaitera de Tercera Voz',
    instrumento: 'Gaita Asturiana',
    lugar: 'Gijón',
    foto: GAITERA_IMAGE,
    antiguedad: 'Desde 2021'
  },
  {
    id: 'comp-10',
    nombre: 'Hugo',
    apellidos: 'Navia Cienfuegos',
    rol: 'tambores',
    cargo: 'Tambor',
    instrumento: 'Tambor de Alta Tensión',
    lugar: 'Langreo',
    foto: TAMBOR_IMAGE,
    antiguedad: 'Desde 2021'
  },
  {
    id: 'comp-11',
    nombre: 'Alba',
    apellidos: 'Rodríguez Valdés',
    rol: 'gaitas',
    cargo: 'Gaitera',
    instrumento: 'Gaita Asturiana',
    lugar: 'Pola de Lena',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2022'
  },
  {
    id: 'comp-12',
    nombre: 'Marcos',
    apellidos: 'Iglesias Solís',
    rol: 'bombos_timbales',
    cargo: 'Timbal Tenor',
    instrumento: 'Timbal Tenor',
    lugar: 'Noreña',
    foto: PERCUSION_IMAGE,
    antiguedad: 'Desde 2022'
  },
  {
    id: 'comp-13',
    nombre: 'Adrián',
    apellidos: 'Colunga Prieto',
    rol: 'gaitas',
    cargo: 'Gaitero',
    instrumento: 'Gaita Asturiana',
    lugar: 'Colunga',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2022'
  },
  {
    id: 'comp-14',
    nombre: 'Elena',
    apellidos: 'Vega Casado',
    rol: 'gaitas',
    cargo: 'Gaitera',
    instrumento: 'Gaita Asturiana',
    lugar: 'Llanes',
    foto: GAITERA_IMAGE,
    antiguedad: 'Desde 2023'
  },
  {
    id: 'comp-15',
    nombre: 'Samuel',
    apellidos: 'Pando Bernaldo',
    rol: 'tambores',
    cargo: 'Tambor',
    instrumento: 'Tambor de Alta Tensión',
    lugar: 'Ribadesella',
    foto: TAMBOR_IMAGE,
    antiguedad: 'Desde 2023'
  },
  {
    id: 'comp-16',
    nombre: 'Marta',
    apellidos: 'Hevia Cardín',
    rol: 'gaitas',
    cargo: 'Gaitera',
    instrumento: 'Gaita Asturiana',
    lugar: 'Villaviciosa',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2023'
  },
  {
    id: 'comp-17',
    nombre: 'Pablo',
    apellidos: 'Montes Somoano',
    rol: 'gaitas',
    cargo: 'Gaitero',
    instrumento: 'Gaita Asturiana',
    lugar: 'Infiesto',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2024'
  },
  {
    id: 'comp-18',
    nombre: 'Carmen',
    apellidos: 'Valle Berdasco',
    rol: 'gaitas',
    cargo: 'Gaitera',
    instrumento: 'Gaita Asturiana',
    lugar: 'Pravia',
    foto: GAITERA_IMAGE,
    antiguedad: 'Desde 2024'
  },
  {
    id: 'comp-19',
    nombre: 'Guillermo',
    apellidos: 'Riera Candás',
    rol: 'gaitas',
    cargo: 'Gaitero',
    instrumento: 'Gaita Asturiana',
    lugar: 'Candás',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2024'
  },
  {
    id: 'comp-20',
    nombre: 'Nicolás',
    apellidos: 'Ordóñez Granda',
    rol: 'gaitas',
    cargo: 'Gaitero',
    instrumento: 'Gaita Asturiana',
    lugar: 'Gijón',
    foto: GAITEROS_IMAGE,
    antiguedad: 'Desde 2025'
  }
];

export const ACTUACIONES: Actuacion[] = [
  {
    id: 'act-1',
    titulo: 'Alborada y Desfile de Gala de San Xuan',
    tipo: 'fiestas',
    fecha: '2026-06-23',
    fechaFormateada: '23 de Junio de 2026',
    hora: '19:30 h',
    lugar: 'Plaza del Ayuntamiento y Casco Histórico',
    municipio: 'Mieres',
    descripcion: 'Pasacalles tradicional con todo el cuerpo de gaitas y percusión abriendo la festividad de la noche de San Juan, seguido de concierto en la plaza principal.',
    destacada: true,
    destacado: true,
    tipoAcceso: 'Acceso Libre',
    programa: [
      'Marcha Procesional de San Xuan',
      'Pasacalles de Corao',
      'Xiringüelu de Naves',
      'Alborada Tradicional de Tinéu',
      'Himno de Asturias'
    ]
  },
  {
    id: 'act-2',
    titulo: 'Concierto en el Festival Intercéltico',
    tipo: 'festival',
    fecha: '2026-07-18',
    fechaFormateada: '18 de Julio de 2026',
    hora: '22:00 h',
    lugar: 'Escenario Principal del Puerto',
    municipio: 'Tapia de Casariego',
    descripcion: 'Actuación central dentro de la programación oficial del festival, interpretando la suite instrumental de temas asturianos y del arco atlántico.',
    destacada: true,
    destacado: true,
    tipoAcceso: 'Entrada Libre',
    programa: [
      'Suite Cantábrica',
      'Muñeira de Boal',
      'Danza de Arcos',
      'Saltón de la Cuenca',
      'Marcha del Dos de Mayo'
    ]
  },
  {
    id: 'act-3',
    titulo: 'Procesión y Misa Solemne de la Virgen del Carmen',
    tipo: 'fiestas',
    fecha: '2026-07-16',
    fechaFormateada: '16 de Julio de 2026',
    hora: '12:00 h',
    lugar: 'Paseo Marítimo y Puerto Pesquero',
    municipio: 'Candás',
    descripcion: 'Acompañamiento a la patrona de los marineros con marchas lentas de honor, toques de diana y posterior desfile festivo.',
    tipoAcceso: 'Público',
    programa: [
      'Marcha de la Virgen del Carmen',
      'Diana Floreada de Carreño',
      'Pasodoble Tradicional',
      'Xota de Llacín'
    ]
  },
  {
    id: 'act-4',
    titulo: 'Certamen Oficial de Bandas de Gaitas',
    tipo: 'certamen',
    fecha: '2026-08-08',
    fechaFormateada: '8 de Agosto de 2026',
    hora: '17:30 h',
    lugar: 'Parque de la Alameda',
    municipio: 'Villaviciosa',
    descripcion: 'Participación en el certamen anual compitiendo en marcha reglamentaria, bloque sonoro y pieza libre polifónica.',
    destacada: false,
    tipoAcceso: 'Acceso Gratuito',
    programa: [
      'Marcha de Concurso El Centru',
      'Muñeira de Tormaleo',
      'Pieza Libre Polifónica a 3 Voces'
    ]
  },
  {
    id: 'act-5',
    titulo: 'Gran Noche Folk de las Fiestas de Begoña',
    tipo: 'concierto',
    fecha: '2026-08-14',
    fechaFormateada: '14 de Agosto de 2026',
    hora: '23:00 h',
    lugar: 'Plaza Mayor',
    municipio: 'Gijón',
    descripcion: 'Gran concierto de verano con iluminación escénica y repertorio festivo para miles de asistentes en el corazón de la Semana Grande.',
    destacada: true,
    destacado: true,
    tipoAcceso: 'Entrada Libre',
    programa: [
      'Entamando el Camín (Obertura)',
      'Muñeira del Puertu',
      'Xiringüelu Popular',
      'Danza de San Roque',
      'Cantu de Vendimia',
      'Asturias, Patria Querida'
    ]
  },
  {
    id: 'act-6',
    titulo: 'Desfile del Día de América en Asturias',
    tipo: 'fiestas',
    fecha: '2026-09-19',
    fechaFormateada: '19 de Septiembre de 2026',
    hora: '18:00 h',
    lugar: 'Calle Uría y Centro Ciudad',
    municipio: 'Oviedo',
    descripcion: 'Desfile de carrozas, folclore y música en las Fiestas de San Mateo, abriendo el cortejo tradicional asturiano.',
    tipoAcceso: 'Público',
    programa: [
      'Marcha Solemne de San Mateo',
      'Pasacalles del Uvieo Antiguo',
      'Muñeira de Cangas'
    ]
  }
];

export const NOTICIAS: Noticia[] = [
  {
    id: 'not-1',
    titulo: 'Presentación del repertorio para la nueva temporada',
    fecha: '24 Febrero 2026',
    resumen: 'Incorporamos nuevas suites armónicas y arreglos tradicionales para la temporada de certámenes y festivales de verano.',
    extracto: 'Incorporamos nuevas suites armónicas y arreglos tradicionales para la temporada de certámenes y festivales de verano.',
    tiempoLectura: '3 min lectura',
    contenido: 'La dirección musical de la Banda de Gaitas el Centru presenta el nuevo repertorio que se interpretará a lo largo de este año en las diferentes plazas y escenarios de Asturias y del circuito intercéltico. Las nuevas piezas integran composiciones tradicionales con arreglos a tres voces polifónicas y variaciones rítmicas de percusión.',
    imagen: ESCENARIO_IMAGE,
    categoria: 'Repertorio',
    autor: 'Dirección Musical'
  },
  {
    id: 'not-2',
    titulo: 'Jornadas de afinación y ensayo general conjunto',
    fecha: '15 Febrero 2026',
    resumen: 'Intenso fin de semana de trabajo con toda la formación para sincronizar el bloque sonoro y los toques de marcha.',
    extracto: 'Intenso fin de semana de trabajo con toda la formación para sincronizar el bloque sonoro y los toques de marcha.',
    tiempoLectura: '2 min lectura',
    contenido: 'Durante el último fin de semana la formación llevó a cabo varias sesiones de trabajo centradas en la afinación colectiva de los roncones y pallones, así como en la precisión rítmica de los tambores de alta tensión. Los ensayos permiten consolidar el sonido compacto característico de la banda.',
    imagen: GAITEROS_IMAGE,
    categoria: 'Ensayos',
    autor: 'Coordinación'
  },
  {
    id: 'not-3',
    titulo: 'Confirmadas las fechas para los festivales de verano',
    fecha: '10 Enero 2026',
    resumen: 'La banda estará presente en las principales citas de Tapia de Casariego, Candás, Gijón y Villaviciosa.',
    extracto: 'La banda estará presente en las principales citas de Tapia de Casariego, Candás, Gijón y Villaviciosa.',
    tiempoLectura: '2 min lectura',
    contenido: 'El calendario estival de la Banda de Gaitas el Centru queda confirmado con fechas en certámenes, desfiles patronales y festivales de música tradicional. Toda la información de horarios y lugares puede consultarse en la sección de actuaciones de este sitio web.',
    imagen: HERO_IMAGE,
    categoria: 'Agenda',
    autor: 'Secretaría'
  }
];

export const FOTOS_GALERIA: FotoGaleria[] = [
  {
    id: 'gal-1',
    url: HERO_IMAGE,
    imagen: HERO_IMAGE,
    titulo: 'Formación de Gala en la Plaza Mayor',
    subtitulo: 'Uniforme tradicional con chaleco mostaza y ribetes verdes',
    descripcion: 'Uniforme tradicional con chaleco mostaza y ribetes verdes',
    categoria: 'historicas',
    fecha: 'Verano 2025'
  },
  {
    id: 'gal-2',
    url: ESCENARIO_IMAGE,
    imagen: ESCENARIO_IMAGE,
    titulo: 'Concierto en Escenario de Festival',
    subtitulo: 'Interpretación de temas polifónicos en directo',
    descripcion: 'Interpretación de temas polifónicos en directo',
    categoria: 'conciertos',
    fecha: 'Agosto 2025'
  },
  {
    id: 'gal-3',
    url: GAITEROS_IMAGE,
    imagen: GAITEROS_IMAGE,
    titulo: 'Punteros y Roncones en Desfile',
    subtitulo: 'Detalle de digitación y borlas de gala',
    descripcion: 'Detalle de digitación y borlas de gala',
    categoria: 'gaitas',
    fecha: 'Mayo 2025'
  },
  {
    id: 'gal-4',
    url: PERCUSION_IMAGE,
    imagen: PERCUSION_IMAGE,
    titulo: 'Cuerpo de Percusión en Plena Marcha',
    subtitulo: 'Precisión de baquetas y base rítmica',
    descripcion: 'Precisión de baquetas y base rítmica',
    categoria: 'fiestas',
    fecha: 'Septiembre 2025'
  },
  {
    id: 'gal-5',
    url: DIRECTOR_IMAGE,
    imagen: DIRECTOR_IMAGE,
    titulo: 'Traje Tradicional y Dirección',
    subtitulo: 'Chaleco mostaza con ribete verde y botonadura labrada',
    descripcion: 'Chaleco mostaza con ribete verde y botonadura labrada',
    categoria: 'traje',
    fecha: 'Junio 2025'
  },
  {
    id: 'gal-6',
    url: GAITERA_IMAGE,
    imagen: GAITERA_IMAGE,
    titulo: 'Ensayo y Ajuste de Afinación',
    subtitulo: 'Detalle de ajuste de cañuela y afinación',
    descripcion: 'Detalle de ajuste de cañuela y afinación',
    categoria: 'ensayos',
    fecha: 'Julio 2025'
  }
];

export const GALERIA_ITEMS = FOTOS_GALERIA;
