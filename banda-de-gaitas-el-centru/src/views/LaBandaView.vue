<script setup lang="ts">
import LaBandaSection from '../sections/LaBandaSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb & Header de la Subpágina -->
    <div class="bg-[#18181A] text-white py-12 border-b border-stone-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">La Banda</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          La Banda & Traje Oficial
        </h1>
        <p class="mt-3 text-stone-300 max-w-2xl text-base leading-relaxed">
          Historia, repertorio tradicional y los colores del traje de gala: amarillo mostaza, verde botella y negro.
        </p>
      </div>
    </div>

    <!-- Contenido de la Banda -->
    <LaBandaSection />
  </div>
</template>
