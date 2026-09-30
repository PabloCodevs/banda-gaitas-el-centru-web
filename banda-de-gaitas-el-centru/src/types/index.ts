export type TipoActuacion = 'fiesta' | 'festival' | 'concierto' | 'certamen' | 'fiestas';

export interface Actuacion {
  id: string;
  titulo: string;
  tipo: TipoActuacion;
  fecha: string;
  fechaFormateada?: string;
  hora: string;
  lugar: string;
  municipio: string;
  descripcion: string;
  destacada?: boolean;
  destacado?: boolean;
  tipoAcceso?: string;
  programa?: string[];
  contactoOrganizador?: string;
  coordenadas?: { lat: number; lng: number };
}

export interface Noticia {
  id: string;
  titulo: string;
  fecha: string;
  resumen: string;
  extracto?: string;
  tiempoLectura?: string;
  contenido: string;
  imagen: string;
  categoria: string;
  autor: string;
}

export interface FotoGaleria {
  id: string;
  url: string;
  imagen?: string;
  titulo: string;
  subtitulo?: string;
  descripcion?: string;
  categoria: 'conciertos' | 'fiestas' | 'ensayos' | 'historicas' | 'traje' | 'gaitas';
  fecha?: string;
}

export type GaleriaItem = FotoGaleria;

export type SeccionMusical = 'gaitas' | 'tambores' | 'bombos_timbales' | 'direccion';

export interface ComponenteBanda {
  id: string;
  nombre: string;
  apellidos: string;
  rol: SeccionMusical;
  cargo: string;
  instrumento: string;
  lugar?: string;
  foto: string;
  antiguedad?: string;
  biografia?: string;
}

export interface SeccionBanda {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  instrumentos: string;
  rol: string;
  numeroMiembros?: number;
}
