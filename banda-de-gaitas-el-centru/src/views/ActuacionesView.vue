<script setup lang="ts">
import ActuacionesSection from '../sections/ActuacionesSection.vue';
import NuxtButton from '../components/ui/NuxtButton.vue';
import { PhoneCall } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb & Header de la Subpágina -->
    <div class="bg-[#18181A] text-white py-12 border-b border-stone-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">Actuaciones</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Calendario de Actuaciones
        </h1>
        <p class="mt-3 text-stone-300 max-w-2xl text-base leading-relaxed">
          Conciertos, pasacalles, festivales y fiestas populares donde podrás escuchar a la Banda de Gaitas el Centru.
        </p>
      </div>
    </div>

    <!-- Contenido de Actuaciones -->
    <ActuacionesSection />

    <!-- Barra de Contratación -->
    <div class="bg-[#18181A] py-12 border-t border-stone-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold font-serif text-[#D3A135]">
            ¿Quieres contar con la banda en tu evento?
          </h3>
          <p class="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            Consulta disponibilidad para fiestas patronales, festivales, conciertos o eventos tradicionales.
          </p>
        </div>
        <router-link to="/contacto" class="shrink-0">
          <NuxtButton variant="primary" size="md">
            <template #iconLeft>
              <PhoneCall class="w-4 h-4 text-[#18181A]" />
            </template>
            <span>Solicitar Disponibilidad</span>
          </NuxtButton>
        </router-link>
      </div>
    </div>
  </div>
</template>
