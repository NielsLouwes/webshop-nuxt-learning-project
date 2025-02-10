<script lang="ts" setup>
const { listName } = defineProps<{
  listName: string;
}>();
</script>

<template>
  <div class="flex gap-2">
    <input type="checkbox" />
    <span>{{ listName }}</span>
  </div>
</template>
