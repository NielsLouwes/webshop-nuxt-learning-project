<script lang="ts" setup>
import type { Product } from "~/types/global";

const objectStore = useListStore();

const isOpen = ref(false);

const { label, product } = defineProps<{ label: string; product: Product }>();
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 h-48 flex justify-between">
        <h2 class="font-bold">Your lists</h2>
        <button class="flex gap-2 font-bold">
          <span>Create list</span>
          <span>+</span>
        </button>
      </div>
      <div v-for="list in Object.keys(objectStore)">{{ list }}</div>
    </UModal>
  </div>
</template>
