<script setup lang="ts">
import HeroSection from '../sections/HeroSection.vue';
import ActuacionesSection from '../sections/ActuacionesSection.vue';
import NoticiasSection from '../sections/NoticiasSection.vue';
import GaleriaSection from '../sections/GaleriaSection.vue';
import ContactoSection from '../sections/ContactoSection.vue';
import { Calendar, ArrowRight, Shield, Image as ImageIcon } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen">
    <!-- Portada con imagen de gala -->
    <HeroSection />

    <!-- Accesos Directos Sobrios -->
    <div class="bg-[#18181A] border-y border-stone-800 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <router-link 
            to="/la-banda" 
            class="group p-4 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 bg-[#2A533E]/30 flex items-center justify-center text-[#D3A135]">
                <Shield class="w-4 h-4" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white group-hover:text-[#D3A135] transition-colors">
                  La Banda & Traje
                </h4>
                <p class="text-xs text-stone-400">Historia y colores tradicionales</p>
              </div>
            </div>
            <ArrowRight class="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
          </router-link>

          <router-link 
            to="/actuaciones" 
            class="group p-4 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 bg-[#2A533E]/30 flex items-center justify-center text-[#D3A135]">
                <Calendar class="w-4 h-4" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white group-hover:text-[#D3A135] transition-colors">
                  Actuaciones
                </h4>
                <p class="text-xs text-stone-400">Agenda de fiestas y conciertos</p>
              </div>
            </div>
            <ArrowRight class="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
          </router-link>

          <router-link 
            to="/galeria" 
            class="group p-4 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 bg-[#2A533E]/30 flex items-center justify-center text-[#D3A135]">
                <ImageIcon class="w-4 h-4" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white group-hover:text-[#D3A135] transition-colors">
                  Galería
                </h4>
                <p class="text-xs text-stone-400">Imágenes de actuaciones y desfiles</p>
              </div>
            </div>
            <ArrowRight class="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
          </router-link>

        </div>
      </div>
    </div>

    <!-- Actuaciones -->
    <ActuacionesSection />

    <!-- Galería -->
    <GaleriaSection />

    <!-- Noticias -->
    <NoticiasSection />

    <!-- Contacto -->
    <ContactoSection />
  </div>
</template>
