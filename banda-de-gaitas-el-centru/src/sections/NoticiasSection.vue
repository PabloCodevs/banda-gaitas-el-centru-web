<script setup lang="ts">
import { ref } from 'vue';
import { Calendar, ChevronRight } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';
import NuxtModal from '../components/ui/NuxtModal.vue';
import { NOTICIAS } from '../data/mockData';
import type { Noticia } from '../types';

const activeArticle = ref<Noticia | null>(null);
</script>

<template>
  <section id="noticias" class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-12">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Actualidad
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          Noticias y Novedades
        </h2>
        <p class="mt-3 text-stone-600 text-base leading-relaxed">
          Novedades sobre repertorio, ensayos y actividad de la Banda de Gaitas el Centru.
        </p>
      </div>

      <!-- Cuadrícula de Artículos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="noticia in NOTICIAS"
          :key="noticia.id"
          class="bg-white border border-stone-200 rounded-xs overflow-hidden flex flex-col justify-between hover:border-stone-400 transition-colors"
        >
          <div>
            <!-- Imagen -->
            <div class="h-48 overflow-hidden bg-stone-100">
              <img
                :src="noticia.imagen"
                :alt="noticia.titulo"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Contenido -->
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <Calendar class="w-3.5 h-3.5 text-stone-400" />
                <span>{{ noticia.fecha }}</span>
                <span>·</span>
                <span class="text-[#2A533E] font-medium">{{ noticia.categoria }}</span>
              </div>

              <h3 class="text-base font-bold text-[#18181A] leading-snug">
                {{ noticia.titulo }}
              </h3>

              <p class="mt-2 text-xs text-stone-600 leading-relaxed line-clamp-3">
                {{ noticia.extracto || noticia.resumen }}
              </p>
            </div>
          </div>

          <!-- Pie del artículo -->
          <div class="px-5 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">
              {{ noticia.autor }}
            </span>
            <button
              type="button"
              class="text-xs font-semibold text-[#2A533E] hover:text-black flex items-center gap-1 cursor-pointer"
              @click="activeArticle = noticia"
            >
              <span>Leer más</span>
              <ChevronRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      </div>

      <!-- Modal de Lectura -->
      <NuxtModal
        :is-open="!!activeArticle"
        :title="activeArticle?.titulo"
        :description="`${activeArticle?.fecha} · ${activeArticle?.autor}`"
        size="md"
        @close="activeArticle = null"
      >
        <div v-if="activeArticle" class="space-y-4">
          <div class="h-56 overflow-hidden bg-stone-100 border border-stone-200 rounded-xs">
            <img
              :src="activeArticle.imagen"
              :alt="activeArticle.titulo"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="text-sm text-stone-700 space-y-3 leading-relaxed">
            <p>{{ activeArticle.contenido }}</p>
          </div>

          <div class="pt-4 border-t border-stone-200 flex justify-end">
            <NuxtButton
              variant="dark"
              size="sm"
              @click="activeArticle = null"
            >
              <span>Cerrar</span>
            </NuxtButton>
          </div>
        </div>
      </NuxtModal>

    </div>
  </section>
</template>
