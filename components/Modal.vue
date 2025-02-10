<script lang="ts" setup>
import type { Product } from "~/types/global";

const { objectStore } = useListStore();

const isOpen = ref(false);

const { label, product } = defineProps<{ label: string; product: Product }>();
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <div class="flex justify-between mb-8">
          <h2 class="font-bold">Your lists</h2>
          <button class="flex gap-2 font-bold">
            <span>Create list</span>
            <span>+</span>
          </button>
        </div>
        <div
          v-for="listName in Object.keys(objectStore)"
          :key="listName"
          class="p"
        >
          <List :listName="listName" />
        </div>
      </div>
    </UModal>
  </div>
</template>
