<script setup lang="ts">
import ComponentesSection from '../sections/ComponentesSection.vue';
</script>

<template>
  <div class="min-h-screen">
    <!-- Cabecera sobria -->
    <div class="bg-[#18181A] text-white py-12 border-b border-stone-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-3">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">Componentes</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Componentes de la Banda
        </h1>
        <p class="mt-3 text-stone-300 max-w-2xl text-base leading-relaxed">
          Músicos que integran la formación de gaitas y percusión con el traje oficial tradicional.
        </p>
      </div>
    </div>

    <!-- Sección de Componentes Limpia -->
    <ComponentesSection />
  </div>
</template>
