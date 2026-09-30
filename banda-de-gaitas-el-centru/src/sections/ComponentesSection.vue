<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search, Music, MapPin } from 'lucide-vue-next';
import { COMPONENTES_BANDA } from '../data/mockData';
import type { SeccionMusical } from '../types';

const selectedSeccion = ref<string>('todos');
const searchQuery = ref<string>('');

const seccionTabs = [
  { id: 'todos', label: 'Todos' },
  { id: 'gaitas', label: 'Gaitas' },
  { id: 'tambores', label: 'Tambores' },
  { id: 'bombos_timbales', label: 'Bombos & Timbales' },
  { id: 'direccion', label: 'Dirección' }
];

const filteredComponentes = computed(() => {
  return COMPONENTES_BANDA.filter((comp) => {
    if (selectedSeccion.value !== 'todos' && comp.rol !== selectedSeccion.value) {
      return false;
    }

    if (searchQuery.value.trim() !== '') {
      const q = searchQuery.value.toLowerCase();
      const matchName = `${comp.nombre} ${comp.apellidos}`.toLowerCase().includes(q);
      const matchCargo = comp.cargo.toLowerCase().includes(q);
      const matchInstrumento = comp.instrumento.toLowerCase().includes(q);
      const matchLugar = (comp.lugar || '').toLowerCase().includes(q);
      return matchName || matchCargo || matchInstrumento || matchLugar;
    }

    return true;
  });
});
</script>

<template>
  <section class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-12">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Formación
        </span>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          Componentes
        </h1>
        <p class="mt-3 text-stone-600 text-base leading-relaxed">
          Músicos que integran la formación en las secciones de gaitas, tambores de alta tensión, bombos y dirección musical.
        </p>
      </div>

      <!-- Filtros por sección y buscador -->
      <div class="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-300 pb-5">
        
        <!-- Pestañas simples sin contadores -->
        <div class="flex flex-wrap gap-1">
          <button
            v-for="tab in seccionTabs"
            :key="tab.id"
            type="button"
            :class="[
              'px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer',
              selectedSeccion === tab.id
                ? 'bg-[#18181A] text-white'
                : 'text-stone-700 hover:text-black hover:bg-stone-200'
            ]"
            @click="selectedSeccion = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Buscador -->
        <div class="relative w-full sm:w-64">
          <Search class="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nombre..."
            class="w-full pl-9 pr-3 py-1.5 bg-white rounded-xs border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#2A533E]"
          />
        </div>
      </div>

      <!-- Cuadrícula limpia y digna de los componentes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="comp in filteredComponentes"
          :key="comp.id"
          class="bg-white border border-stone-200 rounded-xs overflow-hidden transition-colors hover:border-stone-400 flex flex-col"
        >
          <!-- Fotografía oficial -->
          <div class="relative h-64 overflow-hidden bg-stone-900">
            <img
              :src="comp.foto"
              :alt="`${comp.nombre} ${comp.apellidos}`"
              class="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <!-- Datos del componente -->
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-base font-bold text-[#18181A]">
                {{ comp.nombre }} {{ comp.apellidos }}
              </h3>
              <p class="text-xs text-[#2A533E] font-medium mt-0.5">
                {{ comp.cargo }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span class="flex items-center gap-1.5">
                <Music class="w-3.5 h-3.5 text-stone-400" />
                {{ comp.instrumento }}
              </span>
              <span v-if="comp.lugar" class="flex items-center gap-1 text-stone-400">
                <MapPin class="w-3 h-3" />
                {{ comp.lugar }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sin resultados -->
      <div
        v-if="filteredComponentes.length === 0"
        class="text-center py-12 bg-white border border-stone-200 rounded-xs p-6 max-w-md mx-auto mt-6"
      >
        <p class="text-sm text-stone-700">
          No se encontraron componentes para "{{ searchQuery }}".
        </p>
        <button
          type="button"
          class="mt-3 px-3 py-1.5 bg-stone-100 text-xs text-stone-800 rounded-xs hover:bg-stone-200 transition-colors"
          @click="searchQuery = ''; selectedSeccion = 'todos'"
        >
          Ver todos
        </button>
      </div>

    </div>
  </section>
</template>
