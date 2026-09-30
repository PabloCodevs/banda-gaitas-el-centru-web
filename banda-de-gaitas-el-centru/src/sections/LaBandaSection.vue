<script setup lang="ts">
import { SECCIONES_BANDA } from '../data/mockData';

const coloresTraje = [
  {
    nombre: 'Amarillo Mostaza',
    hex: '#D3A135',
    elemento: 'Chaleco de Gala',
    descripcion:
      'Chaleco tradicional con botonadura metálica. Aporta la personalidad visual característica de la banda en desfiles y escenarios.'
  },
  {
    nombre: 'Verde Botella',
    hex: '#2A533E',
    elemento: 'Ribetes y Pasamanería',
    descripcion:
      'Detalles en vivo en solapas, borlas de los roncones y complementos de la indumentaria.'
  },
  {
    nombre: 'Negro',
    hex: '#18181A',
    elemento: 'Montera y Calzón',
    descripcion:
      'La clásica montera asturiana y el calzón de paño negro tupido, completado con camisa blanca y calzado tradicional.'
  }
];
</script>

<template>
  <section id="la-banda" class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-14">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Historia y Tradición
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          La Banda de Gaitas el Centru
        </h2>
        <p class="mt-4 text-base text-stone-600 leading-relaxed">
          Nacida con el propósito de interpretar la música tradicional asturiana con fuerza y respeto por las melodías populares. Un repertorio que abarca alboradas, pasacalles, marchas solemnes y piezas de concierto para gaitas y percusión.
        </p>
      </div>

      <!-- El Traje Tradicional -->
      <div class="mb-16 p-8 bg-[#18181A] text-white rounded-xs border border-stone-800">
        <div class="mb-8 border-b border-stone-800 pb-5">
          <span class="text-xs uppercase tracking-widest text-[#D3A135] font-semibold block mb-1">
            Indumentaria
          </span>
          <h3 class="text-2xl font-serif font-bold text-white">
            El Traje Oficial
          </h3>
          <p class="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            La indumentaria de la banda respeta los patrones tradicionales asturianos combinando tres colores representativos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(color, i) in coloresTraje"
            :key="i"
            class="p-5 bg-stone-900 border border-stone-800 rounded-xs"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-6 h-6 rounded-xs border border-white/20 shrink-0"
                :style="{ backgroundColor: color.hex }"
              />
              <div>
                <h4 class="text-sm font-bold text-white">
                  {{ color.nombre }}
                </h4>
                <span class="text-xs text-stone-400">
                  {{ color.elemento }}
                </span>
              </div>
            </div>
            <p class="text-xs text-stone-400 leading-relaxed">
              {{ color.descripcion }}
            </p>
          </div>
        </div>
      </div>

      <!-- Cuerpos y Secciones Instrumentales -->
      <div>
        <div class="mb-8">
          <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-1">
            Estructura Musical
          </span>
          <h3 class="text-2xl font-serif font-bold text-[#18181A]">
            Secciones Instrumentales
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="seccion in SECCIONES_BANDA"
            :key="seccion.id"
            class="bg-white border border-stone-200 rounded-xs overflow-hidden flex flex-col"
          >
            <div class="h-44 overflow-hidden bg-stone-100">
              <img
                :src="seccion.imagen"
                :alt="seccion.nombre"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 class="text-base font-bold text-[#18181A]">
                  {{ seccion.nombre }}
                </h4>
                <p class="mt-2 text-xs text-stone-600 leading-relaxed">
                  {{ seccion.descripcion }}
                </p>
              </div>

              <div class="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
                <strong class="text-stone-700 block mb-0.5">Instrumentación:</strong>
                <span>{{ seccion.instrumentos }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
