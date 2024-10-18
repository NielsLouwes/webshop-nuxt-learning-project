<script lang="ts" setup>
import type { Product } from "~/pages/index.vue";

const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" class="product-card">
    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-bold line-clamp-2 hover:line-clamp-none">
        {{ product.title }}
      </h2>
      <p class="text-sm line-clamp-5 text-ellipsis">
        {{ product.description }}
      </p>
      <p class="text-lg font-bold">Price: {{ product.price }}</p>
    </div>
    <div>
      <div class="h-40 flex justify-center items-center pt-24">
        <img
          :src="product.image"
          :alt="product.title"
          width="80"
          height="auto"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 250px;
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  &:hover {
    border: 2px solid orange;
  }
}
</style>
