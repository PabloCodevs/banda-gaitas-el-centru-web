<script setup lang="ts">
import { ref } from 'vue';
import { Clock, MapPin, Share2, Check, ChevronRight, ListMusic } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';
import NuxtModal from '../components/ui/NuxtModal.vue';
import { ACTUACIONES } from '../data/mockData';
import type { Actuacion } from '../types';

const activeModalEvent = ref<Actuacion | null>(null);
const copiedId = ref<string | null>(null);

const handleShare = (act: Actuacion) => {
  const text = `Actuación de la Banda de Gaitas el Centru: ${act.titulo} el ${act.fechaFormateada || act.fecha} a las ${act.hora} en ${act.lugar} (${act.municipio}).`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    copiedId.value = act.id;
    setTimeout(() => (copiedId.value = null), 2500);
  }
};

const getDateParts = (fecha: string) => {
  let year = '2026';
  let monthLabel = 'ABR';
  let day = '18';

  if (fecha.includes('-')) {
    const parts = fecha.split('-');
    year = parts[0] || '2026';
    const mNum = parseInt(parts[1], 10);
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    monthLabel = months[mNum - 1] || 'FEST';
    day = parts[2] || '01';
  } else {
    const match = fecha.match(/(\d{1,2})\s+de\s+([A-Za-z]+)\s+de\s+(\d{4})/i);
    if (match) {
      day = match[1];
      monthLabel = match[2].slice(0, 3).toUpperCase();
      year = match[3];
    } else {
      day = fecha.slice(0, 2) || '18';
      monthLabel = 'FEST';
    }
  }

  return { day, monthLabel, year };
};
</script>

<template>
  <section id="actuaciones" class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-12">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Agenda Oficial
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          Próximas Actuaciones
        </h2>
        <p class="mt-3 text-stone-600 text-base leading-relaxed">
          Fechas, festivales y fiestas populares donde sonará la Banda de Gaitas el Centru.
        </p>
      </div>

      <!-- Cuadrícula de Actuaciones (Sin filtros de categorías) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="act in ACTUACIONES"
          :key="act.id"
          class="bg-white border border-stone-200 rounded-xs flex flex-col justify-between hover:border-stone-400 transition-colors"
        >
          <div class="p-6">
            <!-- Fecha y Tipo -->
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="flex flex-col items-center justify-center w-12 h-12 bg-[#18181A] text-white rounded-xs shrink-0">
                  <span class="text-[10px] text-[#D3A135] font-semibold uppercase">
                    {{ getDateParts(act.fecha).monthLabel }}
                  </span>
                  <span class="text-lg font-bold leading-tight">
                    {{ getDateParts(act.fecha).day }}
                  </span>
                </div>
                <div>
                  <span class="text-xs text-stone-500 block">
                    {{ getDateParts(act.fecha).year }}
                  </span>
                  <span class="text-xs text-[#2A533E] font-medium capitalize">
                    {{ act.tipo }}
                  </span>
                </div>
              </div>

              <span class="text-xs px-2 py-0.5 bg-stone-100 text-stone-600 rounded-xs border border-stone-200">
                {{ act.tipoAcceso || 'Acceso Libre' }}
              </span>
            </div>

            <!-- Título -->
            <h3 class="text-base font-bold text-[#18181A] leading-snug">
              {{ act.titulo }}
            </h3>

            <!-- Ubicación y Hora -->
            <div class="mt-4 space-y-1.5 text-xs text-stone-600 pt-3 border-t border-stone-100">
              <div class="flex items-center gap-2">
                <Clock class="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{{ act.hora }}</span>
              </div>
              <div class="flex items-start gap-2">
                <MapPin class="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>{{ act.lugar }} ({{ act.municipio }})</span>
              </div>
            </div>

            <p class="mt-3 text-xs text-stone-500 leading-relaxed line-clamp-3">
              {{ act.descripcion }}
            </p>
          </div>

          <!-- Pie de tarjeta con acciones sobrias -->
          <div class="px-6 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <button
              type="button"
              class="text-xs text-stone-600 hover:text-black flex items-center gap-1.5 cursor-pointer"
              title="Copiar información"
              @click="handleShare(act)"
            >
              <template v-if="copiedId === act.id">
                <Check class="w-3.5 h-3.5 text-emerald-600" />
                <span class="text-emerald-700">Copiado</span>
              </template>
              <template v-else>
                <Share2 class="w-3.5 h-3.5 text-stone-400" />
                <span>Compartir</span>
              </template>
            </button>

            <button
              type="button"
              class="text-xs font-semibold text-[#2A533E] hover:text-[#18181A] flex items-center gap-1 cursor-pointer"
              @click="activeModalEvent = act"
            >
              <span>Ver programa</span>
              <ChevronRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Modal de Programa Musical (Sin Google Calendar) -->
      <NuxtModal
        :is-open="!!activeModalEvent"
        :title="activeModalEvent?.titulo"
        :description="`${activeModalEvent ? (activeModalEvent.fechaFormateada || activeModalEvent.fecha) : ''} · ${activeModalEvent?.hora}`"
        size="md"
        @close="activeModalEvent = null"
      >
        <div v-if="activeModalEvent" class="space-y-5">
          <div class="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-semibold text-stone-800">
              <MapPin class="w-4 h-4 text-stone-500" />
              <span>{{ activeModalEvent.lugar }} ({{ activeModalEvent.municipio }})</span>
            </div>
            <p class="text-xs text-stone-600 leading-relaxed">
              {{ activeModalEvent.descripcion }}
            </p>
          </div>

          <div v-if="activeModalEvent.programa && activeModalEvent.programa.length > 0" class="space-y-2">
            <h4 class="text-xs uppercase tracking-wider text-stone-600 font-semibold flex items-center gap-1.5">
              <ListMusic class="w-4 h-4 text-[#D3A135]" />
              <span>Programa Musical</span>
            </h4>
            <ul class="space-y-1.5">
              <li
                v-for="(pieza, i) in activeModalEvent.programa"
                :key="i"
                class="flex items-center gap-2 p-2 bg-white border border-stone-200 rounded-xs text-xs text-stone-800"
              >
                <span class="w-5 h-5 bg-stone-100 text-stone-700 text-[11px] font-bold flex items-center justify-center shrink-0">
                  {{ i + 1 }}
                </span>
                <span>{{ pieza }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-4 border-t border-stone-200 flex justify-end">
            <NuxtButton
              variant="dark"
              size="sm"
              @click="activeModalEvent = null"
            >
              <span>Cerrar</span>
            </NuxtButton>
          </div>
        </div>
      </NuxtModal>

    </div>
  </section>
</template>
