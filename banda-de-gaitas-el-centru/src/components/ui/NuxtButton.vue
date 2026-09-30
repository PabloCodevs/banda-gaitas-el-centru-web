<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'soft';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  className: ''
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const sizeClasses = {
  xs: 'px-2.5 py-1 text-xs gap-1.5',
  sm: 'px-3.5 py-1.5 text-xs gap-2',
  md: 'px-4.5 py-2 text-sm gap-2',
  lg: 'px-6 py-2.5 text-sm gap-2.5'
};

const variantClasses = {
  primary:
    'bg-[#D3A135] text-[#18181A] font-semibold hover:bg-[#c39129] active:bg-[#aa7d20] border border-[#b88824]',
  secondary:
    'bg-[#2A533E] text-white font-medium hover:bg-[#204030] active:bg-[#183225] border border-[#2A533E]',
  dark:
    'bg-[#18181A] text-white font-medium hover:bg-[#27272a] active:bg-black border border-stone-800',
  outline:
    'bg-transparent text-current font-medium border border-current/30 hover:border-current hover:bg-current/5',
  ghost:
    'bg-transparent text-current font-medium hover:bg-black/5 active:bg-black/10',
  soft:
    'bg-[#2A533E]/10 text-[#2A533E] font-medium hover:bg-[#2A533E]/15 border border-[#2A533E]/20'
};

const buttonClasses = computed(() => {
  return [
    'inline-flex items-center justify-center whitespace-nowrap transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xs tracking-normal',
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.className
  ].join(' ');
});

const handleClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('click', e);
  }
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="$slots.iconLeft" class="shrink-0 flex items-center">
      <slot name="iconLeft" />
    </span>
    <span>
      <slot />
    </span>
    <span v-if="$slots.iconRight" class="shrink-0 flex items-center">
      <slot name="iconRight" />
    </span>
  </button>
</template>
