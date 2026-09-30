<script setup lang="ts">
import { ref, computed } from 'vue';
import { ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-vue-next';
import { GALERIA_ITEMS } from '../data/mockData';
import type { FotoGaleria } from '../types';

const activeCategory = ref<string>('todos');
const lightboxIndex = ref<number | null>(null);

const tabs = [
  { id: 'todos', label: 'Todas' },
  { id: 'conciertos', label: 'Conciertos' },
  { id: 'traje', label: 'Traje de Gala' },
  { id: 'gaitas', label: 'Gaitas' },
  { id: 'ensayos', label: 'Ensayos' }
];

const filteredItems = computed(() => {
  if (activeCategory.value === 'todos') return GALERIA_ITEMS;
  return GALERIA_ITEMS.filter((item) => item.categoria === activeCategory.value);
});

const openLightbox = (item: FotoGaleria) => {
  const idx = filteredItems.value.findIndex((i) => i.id === item.id);
  if (idx !== -1) lightboxIndex.value = idx;
};

const closeLightbox = () => {
  lightboxIndex.value = null;
};

const prevImage = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value =
      lightboxIndex.value === 0 ? filteredItems.value.length - 1 : lightboxIndex.value - 1;
  }
};

const nextImage = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value =
      lightboxIndex.value === filteredItems.value.length - 1 ? 0 : lightboxIndex.value + 1;
  }
};

const currentItem = computed(() => {
  if (lightboxIndex.value === null) return null;
  return filteredItems.value[lightboxIndex.value];
});
</script>

<template>
  <section id="galeria" class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-12">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Fotografía
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          Galería
        </h2>
        <p class="mt-3 text-stone-600 text-base leading-relaxed">
          Momentos de nuestras actuaciones, detalles del traje oficial y sesiones de ensayo.
        </p>
      </div>

      <!-- Filtros simples -->
      <div class="mb-10 flex gap-1 border-b border-stone-300 pb-4 overflow-x-auto no-scrollbar">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="[
            'px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer',
            activeCategory === tab.id
              ? 'bg-[#18181A] text-white'
              : 'text-stone-700 hover:text-black hover:bg-stone-200'
          ]"
          @click="activeCategory = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Cuadrícula de Fotos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="group relative rounded-xs overflow-hidden bg-stone-900 border border-stone-200 cursor-pointer h-72"
          @click="openLightbox(item)"
        >
          <img
            :src="item.imagen || item.url"
            :alt="item.titulo"
            class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
            <span class="text-[11px] text-[#D3A135] font-sans">
              {{ item.fecha }}
            </span>
            <h4 class="text-sm font-bold font-serif leading-tight mt-0.5">
              {{ item.titulo }}
            </h4>
            <p class="text-xs text-stone-300 mt-1 line-clamp-1">
              {{ item.descripcion || item.subtitulo }}
            </p>

            <div class="mt-2 flex items-center text-xs text-[#D3A135] pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="flex items-center gap-1">
                <ZoomIn class="w-3.5 h-3.5" /> Ampliar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Visor a pantalla completa -->
    <Teleport to="body">
      <div
        v-if="currentItem"
        role="dialog"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
        @click="closeLightbox"
      >
        <button
          type="button"
          class="absolute top-6 right-6 p-2 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Cerrar visor"
          @click="closeLightbox"
        >
          <X class="w-6 h-6" />
        </button>

        <button
          type="button"
          class="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Anterior"
          @click.stop="prevImage"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>

        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Siguiente"
          @click.stop="nextImage"
        >
          <ChevronRight class="w-6 h-6" />
        </button>

        <div
          class="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          @click.stop
        >
          <div class="border border-stone-800 bg-black max-h-[75vh] overflow-hidden">
            <img
              :src="currentItem.imagen || currentItem.url"
              :alt="currentItem.titulo"
              class="max-h-[75vh] w-auto object-contain mx-auto"
            />
          </div>

          <div class="w-full mt-3 text-center text-white space-y-1">
            <h3 class="text-base font-bold font-serif">
              {{ currentItem.titulo }}
            </h3>
            <p class="text-xs text-stone-400">
              {{ currentItem.descripcion || currentItem.subtitulo }}
            </p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
