<script setup lang="ts">
import { computed } from 'vue';
import { Calendar, ArrowRight, MapPin } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';
import { ACTUACIONES, HERO_IMAGE } from '../data/mockData';

const proximaActuacion = computed(() => ACTUACIONES[0]);
</script>

<template>
  <section class="relative bg-[#18181A] text-white">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img
        :src="HERO_IMAGE"
        alt="Banda de Gaitas el Centru"
        class="w-full h-full object-cover object-center filter brightness-[0.65]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#18181A] via-[#18181A]/60 to-[#18181A]/40" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#18181A]/90 via-[#18181A]/50 to-transparent" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 md:pt-32 md:pb-36">
      <div class="max-w-2xl">
        
        <!-- Header Tag -->
        <p class="text-xs uppercase tracking-widest text-[#D3A135] font-semibold mb-4">
          Música Tradicional Asturiana
        </p>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
          Banda de Gaitas <br />
          <span class="text-[#D3A135]">el Centru</span>
        </h1>

        <p class="mt-6 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
          Gaitas y percusión tradicional asturiana. Indumentaria de gala con chaleco amarillo mostaza, ribete verde botella y paño negro.
        </p>

        <!-- Botones de Acción -->
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <router-link to="/actuaciones">
            <NuxtButton variant="primary" size="lg">
              <span>Próximas Actuaciones</span>
              <template #iconRight>
                <ArrowRight class="w-4 h-4 ml-1" />
              </template>
            </NuxtButton>
          </router-link>

          <router-link to="/componentes">
            <NuxtButton variant="secondary" size="lg">
              <span>Componentes</span>
            </NuxtButton>
          </router-link>

          <router-link to="/contacto">
            <NuxtButton variant="outline" size="lg" class-name="text-white border-stone-500 hover:border-white">
              <span>Contacto</span>
            </NuxtButton>
          </router-link>
        </div>

        <!-- Próxima Actuación -->
        <div
          v-if="proximaActuacion"
          class="mt-12 p-5 bg-[#18181A]/90 border border-stone-700/80 rounded-xs max-w-xl"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-wider text-[#D3A135] font-semibold block">
                Próxima actuación
              </span>
              <h2 class="text-base font-bold text-white">
                {{ proximaActuacion.titulo }}
              </h2>
              <div class="flex flex-wrap items-center gap-3 text-xs text-stone-300">
                <span class="flex items-center gap-1.5 text-[#D3A135]">
                  <Calendar class="w-3.5 h-3.5" />
                  {{ proximaActuacion.fechaFormateada || proximaActuacion.fecha }} · {{ proximaActuacion.hora }}
                </span>
                <span>·</span>
                <span class="flex items-center gap-1.5 text-stone-300">
                  <MapPin class="w-3.5 h-3.5 text-stone-400" />
                  {{ proximaActuacion.lugar }} ({{ proximaActuacion.municipio }})
                </span>
              </div>
            </div>

            <router-link to="/actuaciones" class="shrink-0">
              <NuxtButton variant="outline" size="sm" class-name="text-stone-200 border-stone-600 hover:text-white">
                <span>Ver agenda</span>
              </NuxtButton>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
