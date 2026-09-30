import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

// Vistas / Subpáginas
import InicioView from '../views/InicioView.vue';
import LaBandaView from '../views/LaBandaView.vue';
import ComponentesView from '../views/ComponentesView.vue';
import ActuacionesView from '../views/ActuacionesView.vue';
import GaleriaView from '../views/GaleriaView.vue';
import NoticiasView from '../views/NoticiasView.vue';
import ContactoView from '../views/ContactoView.vue';
import CookiesView from '../views/CookiesView.vue';
import AvisoLegalView from '../views/AvisoLegalView.vue';
import PrivacidadView from '../views/PrivacidadView.vue';
import NotFoundView from '../views/NotFoundView.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView,
    meta: { title: 'Inicio · Banda de Gaitas el Centru' }
  },
  {
    path: '/la-banda',
    name: 'la-banda',
    component: LaBandaView,
    meta: { title: 'La Banda & Traje Oficial · Banda de Gaitas el Centru' }
  },
  {
    path: '/componentes',
    name: 'componentes',
    component: ComponentesView,
    meta: { title: 'Componentes · Banda de Gaitas el Centru' }
  },
  {
    path: '/actuaciones',
    name: 'actuaciones',
    component: ActuacionesView,
    meta: { title: 'Calendario de Actuaciones · Banda de Gaitas el Centru' }
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: GaleriaView,
    meta: { title: 'Archivo Fotográfico · Banda de Gaitas el Centru' }
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView,
    meta: { title: 'Noticias & Actualidad · Banda de Gaitas el Centru' }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView,
    meta: { title: 'Contacto & Contratación · Banda de Gaitas el Centru' }
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookiesView,
    meta: { title: 'Política de Cookies · Banda de Gaitas el Centru' }
  },
  {
    path: '/aviso-legal',
    name: 'aviso-legal',
    component: AvisoLegalView,
    meta: { title: 'Aviso Legal · Banda de Gaitas el Centru' }
  },
  {
    path: '/privacidad',
    name: 'privacidad',
    component: PrivacidadView,
    meta: { title: 'Política de Privacidad · Banda de Gaitas el Centru' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Página no encontrada (404) · Banda de Gaitas el Centru' }
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0, behavior: 'instant' };
  }
});

router.afterEach((to) => {
  if (to.meta?.title && typeof document !== 'undefined') {
    document.title = to.meta.title as string;
  }
});

export default router;
