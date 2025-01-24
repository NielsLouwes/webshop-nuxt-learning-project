<script lang="ts" setup>
const { text, count, className } = defineProps<{
  text: string;
  count?: number;
  className?: string;
}>();
</script>

<template>
  <button
    class="` text-xl font-bold cursor-pointer border-solid border-2 px-2 border-orange-300 rounded-lg ${className}`"
  >
    <span v-if="count" class="text-sm text-orange-500 py-4">{{ count }}</span>
    {{ text }}
  </button>
</template>
