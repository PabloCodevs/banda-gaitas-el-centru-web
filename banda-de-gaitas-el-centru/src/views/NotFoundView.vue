<script setup lang="ts">
import { Music2, Home, Users } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';
</script>

<template>
  <div class="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-md w-full text-center space-y-5 bg-white p-8 sm:p-10 rounded-xs border border-stone-200">
      
      <div class="w-14 h-14 rounded-xs bg-[#18181A] text-[#D3A135] flex items-center justify-center mx-auto border border-[#D3A135]/40">
        <Music2 class="w-7 h-7" />
      </div>

      <span class="text-6xl font-bold font-serif tracking-tight text-[#18181A] block">
        404
      </span>

      <h1 class="text-xl font-bold font-serif text-[#18181A]">
        Página no encontrada
      </h1>

      <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
        La página que buscas no existe o ha cambiado de dirección. Puedes regresar al inicio para continuar navegando.
      </p>

      <div class="pt-4 flex flex-wrap items-center justify-center gap-3">
        <router-link to="/">
          <NuxtButton variant="primary" size="sm">
            <template #iconLeft>
              <Home class="w-3.5 h-3.5" />
            </template>
            <span>Volver al Inicio</span>
          </NuxtButton>
        </router-link>

        <router-link to="/componentes">
          <NuxtButton variant="secondary" size="sm">
            <template #iconLeft>
              <Users class="w-3.5 h-3.5 text-[#D3A135]" />
            </template>
            <span>Componentes</span>
          </NuxtButton>
        </router-link>
      </div>

      <div class="pt-6 border-t border-stone-100 text-xs text-stone-400">
        Banda de Gaitas el Centru
      </div>
    </div>
  </div>
</template>
