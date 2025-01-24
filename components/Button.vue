<script lang="ts" setup>
const { text, count } = defineProps<{ text: string; count?: number }>();
</script>

<template>
  <p
    class="text-xl font-bold cursor-pointer border-solid border-2 px-2 border-orange-200 rounded-lg"
  >
    <span v-if="count" class="text-sm text-orange-500 py-4">{{ count }}</span>
    {{ text }}
  </p>
</template>
