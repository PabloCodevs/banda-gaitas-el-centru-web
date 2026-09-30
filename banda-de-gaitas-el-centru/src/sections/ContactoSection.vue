<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-vue-next';
import NuxtButton from '../components/ui/NuxtButton.vue';

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  tipoEvento: 'Fiesta Patronal / Municipal',
  fechaEvento: '',
  lugar: '',
  mensaje: ''
});

const isSubmitted = ref(false);
const loading = ref(false);

const handleSubmit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isSubmitted.value = true;
  }, 500);
};

const handleReset = () => {
  isSubmitted.value = false;
  formData.value = {
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: 'Fiesta Patronal / Municipal',
    fechaEvento: '',
    lugar: '',
    mensaje: ''
  };
};
</script>

<template>
  <section id="contacto" class="py-16 md:py-24 bg-[#EAECE6] text-[#18181A]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado -->
      <div class="max-w-2xl mb-12">
        <span class="text-xs uppercase tracking-widest text-[#2A533E] font-semibold block mb-2">
          Contacto y Contratación
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#18181A] tracking-tight">
          Contacta con la Banda
        </h2>
        <p class="mt-3 text-stone-600 text-base leading-relaxed">
          Consulta disponibilidad y condiciones para fiestas patronales, festivales, conciertos o pasacalles.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Información de Contacto -->
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 bg-[#18181A] text-white rounded-xs border border-stone-800 space-y-6">
            <h3 class="text-lg font-bold font-serif text-[#D3A135]">
              Canales Directos
            </h3>

            <div class="space-y-4 text-sm text-stone-300">
              <div class="flex items-start gap-3">
                <Phone class="w-4 h-4 text-[#D3A135] shrink-0 mt-1" />
                <div>
                  <span class="block text-xs text-stone-400">Teléfono</span>
                  <a href="tel:+34689123456" class="text-sm font-semibold text-white hover:text-[#D3A135] transition-colors">
                    +34 689 123 456
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <Mail class="w-4 h-4 text-[#D3A135] shrink-0 mt-1" />
                <div>
                  <span class="block text-xs text-stone-400">Correo Electrónico</span>
                  <a href="mailto:contacto@bandaelcentru.es" class="text-sm font-semibold text-white hover:text-[#D3A135] transition-colors">
                    contacto@bandaelcentru.es
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <MapPin class="w-4 h-4 text-[#D3A135] shrink-0 mt-1" />
                <div>
                  <span class="block text-xs text-stone-400">Lugar de Ensayo</span>
                  <span class="text-sm text-white">Centro Cultural El Centru, Asturias</span>
                </div>
              </div>
            </div>

            <!-- Horarios -->
            <div class="pt-4 border-t border-stone-800 space-y-1.5 text-xs text-stone-300">
              <span class="font-semibold text-[#D3A135] block">
                Horarios de Ensayo:
              </span>
              <div class="flex items-center gap-2 text-stone-400">
                <Clock class="w-3.5 h-3.5" />
                <span>Viernes: 19:30 – 22:00 h</span>
              </div>
              <div class="flex items-center gap-2 text-stone-400">
                <Clock class="w-3.5 h-3.5" />
                <span>Sábados: 11:00 – 14:00 h</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="lg:col-span-7">
          <div class="bg-white p-6 sm:p-8 rounded-xs border border-stone-200">
            
            <!-- Éxito -->
            <div v-if="isSubmitted" class="py-8 text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold font-serif text-[#18181A]">
                Mensaje Enviado
              </h3>
              <p class="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                Gracias por ponerte en contacto. Responderemos a tu solicitud lo antes posible.
              </p>
              <div class="pt-3">
                <NuxtButton variant="outline" size="sm" @click="handleReset">
                  <span>Enviar otro mensaje</span>
                </NuxtButton>
              </div>
            </div>

            <!-- Formulario -->
            <form v-else class="space-y-4" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Nombre o Comisión Organizadora *
                  </label>
                  <input
                    v-model="formData.nombre"
                    type="text"
                    required
                    placeholder="Ej. Comisión de Fiestas / Nombre"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Teléfono *
                  </label>
                  <input
                    v-model="formData.telefono"
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Correo Electrónico *
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="contacto@ejemplo.com"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Tipo de Evento
                  </label>
                  <select
                    v-model="formData.tipoEvento"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  >
                    <option value="Fiesta Patronal / Municipal">Fiesta Patronal / Municipal</option>
                    <option value="Festival de Música Tradicional">Festival Tradicional</option>
                    <option value="Concierto">Concierto</option>
                    <option value="Pasacalles / Desfile">Pasacalles / Desfile</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Fecha Prevista
                  </label>
                  <input
                    v-model="formData.fechaEvento"
                    type="date"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-stone-700">
                    Localidad / Municipio
                  </label>
                  <input
                    v-model="formData.lugar"
                    type="text"
                    placeholder="Ej. Candás, Asturias"
                    class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label class="block text-xs font-semibold text-stone-700">
                  Mensaje o Detalles del Acto *
                </label>
                <textarea
                  v-model="formData.mensaje"
                  rows="4"
                  required
                  placeholder="Detalles sobre el acto, horarios previstos o necesidades..."
                  class="w-full px-3 py-2 rounded-xs border border-stone-300 text-xs text-stone-900 bg-white focus:outline-hidden focus:border-[#2A533E]"
                />
              </div>

              <div class="pt-2 flex items-center justify-between">
                <span class="text-xs text-stone-400">
                  * Campos obligatorios
                </span>

                <NuxtButton
                  type="submit"
                  variant="primary"
                  size="md"
                  :disabled="loading"
                >
                  <template #iconLeft>
                    <Send class="w-4 h-4 text-[#18181A]" />
                  </template>
                  <span>{{ loading ? 'Enviando...' : 'Enviar Consulta' }}</span>
                </NuxtButton>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
