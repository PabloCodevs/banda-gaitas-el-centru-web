<script setup lang="ts">
import { Cookie, Settings } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';

defineEmits<{
  (e: 'openCookieSettings'): void;
}>();
</script>

<template>
  <div class="min-h-screen bg-[#EAECE6] text-[#18181A] py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Cabecera -->
      <div class="bg-[#18181A] text-white p-6 sm:p-8 rounded-xs border border-stone-800 mb-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">Política de Cookies</span>
        </div>
        <div class="flex items-center gap-3 mt-2">
          <div class="w-9 h-9 rounded-xs bg-[#2A533E] border border-[#D3A135]/40 flex items-center justify-center text-[#D3A135] shrink-0">
            <Cookie class="w-5 h-5" />
          </div>
          <div>
            <h1 class="text-2xl sm:text-3xl font-serif font-bold text-white">
              Política de Cookies
            </h1>
            <p class="text-xs text-stone-400 mt-0.5">
              Información sobre el uso y gestión de cookies
            </p>
          </div>
        </div>
      </div>

      <!-- Contenido Legal -->
      <div class="bg-white p-6 sm:p-10 rounded-xs border border-stone-200 space-y-6 text-stone-700 leading-relaxed text-sm">
        
        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Una cookie es un pequeño archivo que se almacena en su navegador al visitar un sitio web. Permite recordar información técnica básica de su navegación y sus preferencias de visualización.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            2. Tipos de cookies utilizadas
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
              <h3 class="font-bold text-[#18181A] text-xs uppercase tracking-wider">Cookies Técnicas (Necesarias)</h3>
              <p class="text-xs text-stone-600">
                Imprescindibles para el funcionamiento y seguridad de la página web, así como para guardar su consentimiento.
              </p>
            </div>
            <div class="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1">
              <h3 class="font-bold text-[#18181A] text-xs uppercase tracking-wider">Cookies Analíticas</h3>
              <p class="text-xs text-stone-600">
                Permiten obtener estadísticas anónimas de visitas para mejorar la navegación y los contenidos.
              </p>
            </div>
          </div>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            3. Modificar o retirar el consentimiento
          </h2>
          <p>
            Puede revisar y modificar sus preferencias de cookies en cualquier momento:
          </p>
          <div class="pt-2">
            <NuxtButton variant="primary" size="sm" @click="$emit('openCookieSettings')">
              <template #iconLeft>
                <Settings class="w-4 h-4 text-[#18181A]" />
              </template>
              <span>Abrir Gestor de Cookies</span>
            </NuxtButton>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>
