<script setup lang="ts">
import { Lock } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-[#EAECE6] text-[#18181A] py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Cabecera -->
      <div class="bg-[#18181A] text-white p-6 sm:p-8 rounded-xs border border-stone-800 mb-8">
        <div class="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <span>/</span>
          <span class="text-[#D3A135]">Política de Privacidad</span>
        </div>
        <div class="flex items-center gap-3 mt-2">
          <div class="w-9 h-9 rounded-xs bg-[#2A533E] border border-[#D3A135]/40 flex items-center justify-center text-[#D3A135] shrink-0">
            <Lock class="w-5 h-5" />
          </div>
          <div>
            <h1 class="text-2xl sm:text-3xl font-serif font-bold text-white">
              Política de Privacidad
            </h1>
            <p class="text-xs text-stone-400 mt-0.5">
              Protección y tratamiento de datos personales
            </p>
          </div>
        </div>
      </div>

      <!-- Contenido Legal -->
      <div class="bg-white p-6 sm:p-10 rounded-xs border border-stone-200 space-y-6 text-stone-700 leading-relaxed text-sm">
        
        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            1. Responsable del Tratamiento
          </h2>
          <p>
            Los datos personales que se faciliten a través de este sitio web serán tratados por la <strong>Banda de Gaitas el Centru</strong>, con dirección de contacto en <a href="mailto:contacto@bandaelcentru.es" class="text-[#2A533E] font-medium hover:underline">contacto@bandaelcentru.es</a>.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            2. Finalidad del Tratamiento
          </h2>
          <p>
            Los datos recogidos a través de los formularios o canales de contacto se utilizarán exclusivamente para responder a consultas de disponibilidad, coordinar actuaciones y enviar información solicitada sobre la banda.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            3. Legitimación y Conservación
          </h2>
          <p>
            La base para el tratamiento de sus datos es el propio consentimiento del usuario al enviar su mensaje o solicitud. Los datos se conservarán durante el tiempo estrictamente necesario para atender la consulta o relación establecida.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            4. Cesión a Terceros
          </h2>
          <p>
            La Banda de Gaitas el Centru no vende ni comparte datos personales con terceras partes con fines publicitarios o comerciales.
          </p>
        </section>

        <section class="space-y-2">
          <h2 class="text-lg font-bold font-serif text-[#18181A]">
            5. Derechos del Usuario
          </h2>
          <p>
            Cualquier persona puede ejercer sus derechos de acceso, rectificación o supresión de sus datos personales enviando un correo electrónico a <a href="mailto:contacto@bandaelcentru.es" class="text-[#2A533E] font-medium hover:underline">contacto@bandaelcentru.es</a>.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
