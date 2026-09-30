<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Music2, Menu, X, Phone } from 'lucide-vue-next';
import NuxtButton from '../ui/NuxtButton.vue';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'La Banda', path: '/la-banda' },
  { name: 'Componentes', path: '/componentes' },
  { name: 'Actuaciones', path: '/actuaciones' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Noticias', path: '/noticias' }
];

const closeMobile = () => {
  mobileMenuOpen.value = false;
};

const isActive = (path: string) => {
  if (path === '/') return route.path === '/';
  return route.path.startsWith(path);
};
</script>

<template>
  <header class="sticky top-0 z-40 bg-[#18181A] border-b border-stone-800 text-white">
    <!-- Top fine colored line -->
    <div class="h-0.5 w-full flex">
      <div class="h-full w-1/3 bg-[#D3A135]" />
      <div class="h-full w-1/3 bg-[#2A533E]" />
      <div class="h-full w-1/3 bg-stone-400" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        
        <!-- Brand / Identity -->
        <router-link
          to="/"
          class="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
          @click="closeMobile"
        >
          <div class="w-9 h-9 rounded-xs bg-[#2A533E] border border-[#D3A135]/40 flex items-center justify-center text-[#D3A135]">
            <Music2 class="w-5 h-5" />
          </div>
          <div>
            <span class="block font-serif text-lg font-bold tracking-tight text-white group-hover:text-[#D3A135] transition-colors">
              Banda de Gaitas el Centru
            </span>
            <span class="block text-[11px] text-stone-400 font-sans -mt-0.5">
              Asturias
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation Bar -->
        <nav class="hidden lg:flex items-center gap-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'px-3.5 py-1.5 rounded-xs text-xs uppercase tracking-wider transition-colors duration-150',
              isActive(item.path)
                ? 'bg-[#2A533E] text-white font-semibold'
                : 'text-stone-300 hover:text-white hover:bg-stone-800'
            ]"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Right Side: Contact Button & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <router-link to="/contacto" class="hidden sm:inline-block">
            <NuxtButton variant="primary" size="sm">
              <template #iconLeft>
                <Phone class="w-3.5 h-3.5 text-[#18181A]" />
              </template>
              <span>Contacto</span>
            </NuxtButton>
          </router-link>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            class="lg:hidden p-2 rounded-xs text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <component :is="mobileMenuOpen ? X : Menu" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden bg-[#18181A] border-t border-stone-800 px-4 pt-3 pb-6 space-y-1"
    >
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'w-full flex items-center justify-between px-3 py-2.5 rounded-xs text-sm transition-colors',
          isActive(item.path)
            ? 'bg-[#2A533E] text-white font-semibold'
            : 'text-stone-200 hover:bg-stone-800'
        ]"
        @click="closeMobile"
      >
        <span>{{ item.name }}</span>
      </router-link>

      <div class="pt-3 border-t border-stone-800 mt-2">
        <router-link
          to="/contacto"
          class="w-full block"
          @click="closeMobile"
        >
          <NuxtButton
            variant="primary"
            size="md"
            class-name="w-full"
          >
            <template #iconLeft>
              <Phone class="w-4 h-4 text-[#18181A]" />
            </template>
            <span>Contacto y Contratación</span>
          </NuxtButton>
        </router-link>
      </div>
    </div>
  </header>
</template>
