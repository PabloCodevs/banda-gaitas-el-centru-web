<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'mustard' | 'green' | 'dark' | 'neutral' | 'warning' | 'success';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'mustard',
  size: 'xs',
  className: ''
});

const variantStyles = {
  mustard: 'bg-[#D3A135]/15 text-[#7f5c0e] border border-[#D3A135]/30 font-medium',
  warning: 'bg-[#D3A135]/15 text-[#7f5c0e] border border-[#D3A135]/30 font-medium',
  green: 'bg-[#2A533E]/10 text-[#2A533E] border border-[#2A533E]/25 font-medium',
  success: 'bg-[#2A533E]/10 text-[#2A533E] border border-[#2A533E]/25 font-medium',
  dark: 'bg-[#18181A] text-stone-200 border border-stone-800 font-medium',
  neutral: 'bg-stone-200/80 text-stone-700 border border-stone-300 font-medium'
};

const sizeStyles = {
  xs: 'px-2 py-0.5 text-[11px]',
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs'
};

const badgeClasses = computed(() => {
  return [
    'inline-flex items-center rounded-xs tracking-normal',
    sizeStyles[props.size],
    variantStyles[props.variant],
    props.className
  ].join(' ');
});
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>
