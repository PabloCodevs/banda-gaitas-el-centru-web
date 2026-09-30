<script setup lang="ts">
import type { Component } from 'vue';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: Component;
}

interface Props {
  items: TabItem[];
  modelValue: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', id: string): void;
  (e: 'change', id: string): void;
}>();

const selectTab = (id: string) => {
  emit('update:modelValue', id);
  emit('change', id);
};
</script>

<template>
  <div
    role="tablist"
    :class="[
      'inline-flex p-1 bg-stone-200/80 rounded-xl max-w-full overflow-x-auto no-scrollbar gap-1',
      className
    ]"
  >
    <button
      v-for="tab in items"
      :key="tab.id"
      role="tab"
      :aria-selected="tab.id === modelValue"
      type="button"
      :class="[
        'flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer select-none',
        tab.id === modelValue
          ? 'bg-white text-[#18181A] shadow-xs font-semibold'
          : 'text-stone-600 hover:text-[#18181A] hover:bg-white/50'
      ]"
      @click="selectTab(tab.id)"
    >
      <component :is="tab.icon" v-if="tab.icon" class="w-4 h-4 shrink-0" />
      <span>{{ tab.label }}</span>
      <span
        v-if="tab.count !== undefined"
        :class="[
          'text-[11px] px-1.5 py-0.2 rounded-md font-mono',
          tab.id === modelValue
            ? 'bg-[#D3A135]/20 text-[#846011] font-bold'
            : 'bg-stone-300/70 text-stone-600'
        ]"
      >
        {{ tab.count }}
      </span>
    </button>
  </div>
</template>
