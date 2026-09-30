<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import CookieBanner from './components/layout/CookieBanner.vue';

const cookieBannerRef = ref<InstanceType<typeof CookieBanner> | null>(null);

const handleOpenCookieSettings = () => {
  if (cookieBannerRef.value) {
    cookieBannerRef.value.openModal();
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#EAECE6] text-[#18181A] selection:bg-[#D3A135] selection:text-[#18181A]">
    <!-- Header Oficial con Colores de Gala -->
    <Header />

    <!-- Main Content con enrutamiento dinámico de subpáginas -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer Oficial con Enlaces a Subpáginas, Aviso Legal, Cookies y Privacidad -->
    <Footer @open-cookie-settings="handleOpenCookieSettings" />

    <!-- Banner Interactivo de Cookies con Centro de Preferencias -->
    <CookieBanner ref="cookieBannerRef" />
  </div>
</template>

<style>
/* Estilos globales y scroll suave */
html {
  scroll-behavior: smooth;
}

/* Ocultar barra de scroll en contenedores horizontales preservando el scroll táctil */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
