<script setup lang="ts">
import { watch, onUnmounted } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
  title?: string;
  description?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  maxWidth: 'lg',
  size: 'lg'
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const effectiveSize = props.maxWidth || props.size;

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl'
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close');
  }
};

watch(
  () => props.isOpen,
  (open) => {
    if (typeof window !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
      } else {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleKeyDown);
  }
});

const close = () => {
  emit('close');
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      role="dialog"
      aria-modal="true"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity"
      @click="close"
    >
      <div
        :class="[
          'relative w-full bg-white rounded-xs shadow-xl border border-stone-300 overflow-hidden transform transition-all max-h-[90vh] flex flex-col',
          maxWidthClasses[effectiveSize]
        ]"
        @click.stop
      >
        <!-- Header -->
        <div
          v-if="title || description"
          class="flex items-start justify-between px-6 py-5 border-b border-stone-200 bg-stone-50/80 shrink-0"
        >
          <div>
            <h3 v-if="title" class="text-xl font-bold text-[#18181A] font-serif tracking-tight">
              {{ title }}
            </h3>
            <p v-if="description" class="mt-1 text-sm text-stone-600">
              {{ description }}
            </p>
          </div>
          <button
            type="button"
            class="p-1.5 text-stone-400 hover:text-[#18181A] hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
            @click="close"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 overflow-y-auto flex-1">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
