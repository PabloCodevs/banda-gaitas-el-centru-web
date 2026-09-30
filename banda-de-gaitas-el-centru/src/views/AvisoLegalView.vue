<script setup lang="ts">
import { Scale } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-[#EAECE6] text-[#18181A] py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Cabecera -->
      <div class="bg-[#18181A] text-white p-6 sm:p-8 rounded-xs border border-stone-800 mb-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">Aviso Legal</span>
        </div>
        <div class="flex items-center gap-3 mt-2">
          <div class="w-9 h-9 rounded-xs bg-[#2A533E] border border-[#D3A135]/40 flex items-center justify-center text-[#D3A135] shrink-0">
            <Scale class="w-5 h-5" />
          </div>
          <div>
            <h1 class="text-2xl sm:text-3xl font-serif font-bold text-white">
              Aviso Legal
            </h1>
            <p class="text-xs text-stone-400 mt-0.5">
              Términos de uso del sitio web oficial
            </p>
          </div>
        </div>
      </div>

      <!-- Contenido Legal Limpio -->
      <div class="bg-white p-6 sm:p-10 rounded-xs border border-stone-200 space-y-6 text-stone-700 leading-relaxed text-sm">
        
        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            1. Titularidad del Sitio Web
          </h2>
          <p>
            El presente sitio web es el portal oficial de la <strong>Banda de Gaitas el Centru</strong>, formación de música tradicional radicada en el Principado de Asturias.
          </p>
          <div class="p-3 bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
            <p><strong>Titular:</strong> Banda de Gaitas el Centru</p>
            <p><strong>Ámbito:</strong> Música tradicional asturiana y actuaciones en directo</p>
            <p><strong>Correo electrónico:</strong> contacto@bandaelcentru.es</p>
          </div>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            2. Condiciones de Uso
          </h2>
          <p>
            El acceso a esta página web atribuye la condición de usuario e implica la aceptación de las condiciones reflejadas en este documento. El usuario se compromete a hacer un uso adecuado de los contenidos y de los canales de contacto disponibles.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            3. Propiedad Intelectual
          </h2>
          <p>
            Los textos, imágenes, composiciones y fotografías de las actuaciones e integrantes presentes en este sitio web son propiedad de la <strong>Banda de Gaitas el Centru</strong> o cuentan con la debida autorización de sus autores. Queda prohibida su reproducción o distribución con fines comerciales sin autorización expresa.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            4. Agenda y Actuaciones
          </h2>
          <p>
            La información relativa a las fechas, horarios y lugares de actuación recogida en la agenda es de carácter informativo y puede estar sujeta a variaciones organizativas de los respectivos eventos o condiciones meteorológicas.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
