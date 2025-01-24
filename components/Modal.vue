<script lang="ts" setup>
import type { Product } from "~/pages/index.vue";

const listStore = useListStore();

const isOpen = ref(false);

const { label, product } = defineProps<{ label: string; product: Product }>();

console.log("product MODAL:", product);
console.log("listStore", listStore);
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 h-48 flex justify-between">
        <h2 class="font-bold">Your lists</h2>
        <button
          class="flex gap-2 font-bold"
          v-on:click="addtoList(product.title)"
        >
          <span>Create list</span>
          <span>+</span>
        </button>
      </div>
      <div v-for="product in listStore">{{ product }}</div>
    </UModal>
  </div>
</template>
