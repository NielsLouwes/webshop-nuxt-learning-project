<script lang="ts" setup>
const isOpen = ref(false);

const { label } = defineProps<{ label: string }>();
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 h-48 flex justify-between">
        <h2 class="font-bold">Your lists</h2>
        <div class="flex gap-2 font-bold">
          <span>New list</span>
          <p>+</p>
        </div>
      </div>
    </UModal>
  </div>
</template>
