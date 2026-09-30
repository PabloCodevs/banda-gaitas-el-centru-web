<script setup lang="ts">
import { Music2, MapPin, Phone, Mail, Instagram, Youtube, Facebook, Cookie } from 'lucide-vue-next';

defineEmits<{
  (e: 'openCookieSettings'): void;
}>();
</script>

<template>
  <footer class="bg-[#18181A] text-stone-300 border-t border-stone-800 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
        
        <!-- Col 1: Identidad -->
        <div class="space-y-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xs bg-[#2A533E] border border-[#D3A135]/40 flex items-center justify-center text-[#D3A135]">
              <Music2 class="w-5 h-5" />
            </div>
            <div>
              <span class="block font-serif text-lg font-bold text-white">
                Banda de Gaitas el Centru
              </span>
              <span class="block text-xs text-stone-400 font-sans">
                Asturias
              </span>
            </div>
          </router-link>

          <p class="text-sm text-stone-400 leading-relaxed">
            Música tradicional de gaitas y percusión asturiana para fiestas, certámenes y festivales.
          </p>

          <div class="flex items-center gap-2 pt-1 text-xs text-stone-400">
            <span class="w-3 h-3 rounded-xs bg-[#D3A135]" title="Amarillo Mostaza" />
            <span class="w-3 h-3 rounded-xs bg-[#2A533E]" title="Verde Botella" />
            <span class="w-3 h-3 rounded-xs bg-stone-300" title="Blanco Hueso" />
            <span class="text-xs text-stone-500 font-sans">Colores del traje oficial</span>
          </div>
        </div>

        <!-- Col 2: Navegación -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-[#D3A135]">
            Navegación
          </h4>
          <ul class="space-y-2 text-sm text-stone-400">
            <li>
              <router-link to="/" class="hover:text-white transition-colors">
                Inicio
              </router-link>
            </li>
            <li>
              <router-link to="/la-banda" class="hover:text-white transition-colors">
                La Banda
              </router-link>
            </li>
            <li>
              <router-link to="/componentes" class="hover:text-white transition-colors">
                Componentes
              </router-link>
            </li>
            <li>
              <router-link to="/actuaciones" class="hover:text-white transition-colors">
                Actuaciones
              </router-link>
            </li>
            <li>
              <router-link to="/galeria" class="hover:text-white transition-colors">
                Galería
              </router-link>
            </li>
            <li>
              <router-link to="/noticias" class="hover:text-white transition-colors">
                Noticias
              </router-link>
            </li>
            <li>
              <router-link to="/contacto" class="hover:text-white transition-colors">
                Contacto
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Col 3: Ensayos & Ubicación -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-[#D3A135]">
            Lugar de Ensayo
          </h4>
          <div class="space-y-2 text-sm text-stone-400">
            <div class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>Centro Cultural El Centru, Asturias</span>
            </div>
            <div class="text-xs text-stone-400 pt-2 space-y-1">
              <p class="font-medium text-stone-300">Horarios de ensayo:</p>
              <p>Viernes: 19:30 – 22:00 h</p>
              <p>Sábados: 11:00 – 14:00 h</p>
            </div>
          </div>
        </div>

        <!-- Col 4: Contacto y Redes -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-[#D3A135]">
            Contacto
          </h4>
          <div class="space-y-2 text-sm text-stone-400">
            <a
              href="tel:+34689123456"
              class="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone class="w-4 h-4 text-[#D3A135]" />
              <span>+34 689 123 456</span>
            </a>
            <a
              href="mailto:contacto@bandaelcentru.es"
              class="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail class="w-4 h-4 text-[#D3A135]" />
              <span>contacto@bandaelcentru.es</span>
            </a>
          </div>

          <div class="pt-2">
            <div class="flex items-center gap-2 pt-1">
              <a
                href="#redes"
                aria-label="Instagram"
                class="w-8 h-8 rounded-xs bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-600 transition-colors"
              >
                <Instagram class="w-4 h-4" />
              </a>
              <a
                href="#redes"
                aria-label="YouTube"
                class="w-8 h-8 rounded-xs bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-600 transition-colors"
              >
                <Youtube class="w-4 h-4" />
              </a>
              <a
                href="#redes"
                aria-label="Facebook"
                class="w-8 h-8 rounded-xs bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-600 transition-colors"
              >
                <Facebook class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal Links & Copyright Row -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
        <div>
          <p>© {{ new Date().getFullYear() }} Banda de Gaitas el Centru.</p>
        </div>

        <!-- Links Legales Requeridos -->
        <div class="flex flex-wrap items-center gap-4 text-xs">
          <router-link to="/aviso-legal" class="hover:text-stone-200 transition-colors">
            Aviso Legal
          </router-link>
          <span>·</span>
          <router-link to="/privacidad" class="hover:text-stone-200 transition-colors">
            Política de Privacidad
          </router-link>
          <span>·</span>
          <router-link to="/cookies" class="hover:text-stone-200 transition-colors">
            Política de Cookies
          </router-link>
          <span>·</span>
          <button
            type="button"
            class="text-[#D3A135] hover:underline cursor-pointer flex items-center gap-1"
            @click="$emit('openCookieSettings')"
          >
            <Cookie class="w-3.5 h-3.5" />
            <span>Configuración de Cookies</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
