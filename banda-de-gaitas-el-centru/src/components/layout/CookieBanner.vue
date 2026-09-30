<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Cookie } from 'lucide-vue-next';
import NuxtButton from '../ui/NuxtButton.vue';
import NuxtModal from '../ui/NuxtModal.vue';

const showBanner = ref(false);
const showSettingsModal = ref(false);

const cookiePreferences = ref({
  necesarias: true,
  analiticas: true
});

onMounted(() => {
  const consent = localStorage.getItem('cookies_consent_centru');
  if (!consent) {
    setTimeout(() => {
      showBanner.value = true;
    }, 600);
  }
});

const acceptAll = () => {
  cookiePreferences.value = {
    necesarias: true,
    analiticas: true
  };
  saveConsent('all');
};

const rejectOptional = () => {
  cookiePreferences.value = {
    necesarias: true,
    analiticas: false
  };
  saveConsent('minimal');
};

const saveCustom = () => {
  saveConsent('custom');
  showSettingsModal.value = false;
};

const saveConsent = (type: string) => {
  localStorage.setItem(
    'cookies_consent_centru',
    JSON.stringify({
      type,
      date: new Date().toISOString(),
      preferences: cookiePreferences.value
    })
  );
  showBanner.value = false;
};

const openModal = () => {
  showSettingsModal.value = true;
};

defineExpose({
  openModal
});
</script>

<template>
  <!-- Cookie Banner Inferior -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform translate-y-8 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-8 opacity-0"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 md:max-w-3xl md:mx-auto z-40 bg-[#18181A] border border-stone-700 rounded-xs shadow-xl p-5 text-white"
    >
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <h4 class="text-xs uppercase tracking-wider text-[#D3A135] font-semibold">
            Uso de Cookies
          </h4>
          <p class="text-xs text-stone-300 leading-relaxed max-w-xl">
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para mejorar la navegación. Puedes aceptar todas, rechazarlas o configurarlas.
          </p>
          <div class="flex items-center gap-3 pt-0.5 text-xs text-stone-400">
            <router-link to="/cookies" class="hover:text-white underline">
              Política de Cookies
            </router-link>
            <span>·</span>
            <router-link to="/privacidad" class="hover:text-white underline">
              Privacidad
            </router-link>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
          <button
            type="button"
            class="px-3 py-1.5 text-xs text-stone-300 hover:text-white border border-stone-600 rounded-xs transition-colors cursor-pointer"
            @click="showSettingsModal = true"
          >
            Configurar
          </button>
          <button
            type="button"
            class="px-3 py-1.5 text-xs text-stone-300 hover:text-white border border-stone-600 rounded-xs transition-colors cursor-pointer"
            @click="rejectOptional"
          >
            Rechazar
          </button>
          <NuxtButton
            variant="primary"
            size="sm"
            @click="acceptAll"
          >
            Aceptar todas
          </NuxtButton>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Modal de Configuración -->
  <NuxtModal
    :is-open="showSettingsModal"
    title="Configuración de Cookies"
    description="Selecciona las cookies que autorizas durante tu visita."
    size="md"
    @close="showSettingsModal = false"
  >
    <div class="space-y-4 text-xs text-stone-700">
      <!-- Cookie Técnica -->
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-start justify-between gap-3">
        <div>
          <span class="font-bold text-stone-900 block">Cookies Técnicas</span>
          <p class="text-stone-500 mt-0.5">Necesarias para la navegación y recordar tus preferencias.</p>
        </div>
        <span class="text-[11px] font-semibold text-[#2A533E]">Obligatorias</span>
      </div>

      <!-- Cookie Analítica -->
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xs flex items-start justify-between gap-3">
        <div>
          <span class="font-bold text-stone-900 block">Cookies Analíticas</span>
          <p class="text-stone-500 mt-0.5">Métricas de visita anónimas para evaluar el interés en la agenda y contenidos.</p>
        </div>
        <input
          v-model="cookiePreferences.analiticas"
          type="checkbox"
          class="w-4 h-4 accent-[#2A533E] mt-1 cursor-pointer"
        />
      </div>

      <div class="pt-3 border-t border-stone-200 flex justify-end gap-2">
        <NuxtButton
          variant="outline"
          size="sm"
          @click="showSettingsModal = false"
        >
          Cancelar
        </NuxtButton>
        <NuxtButton
          variant="primary"
          size="sm"
          @click="saveCustom"
        >
          Guardar preferencias
        </NuxtButton>
      </div>
    </div>
  </NuxtModal>
</template>
