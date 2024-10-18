<template>
  <div class="product-card">
    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-bold line-clamp-2 hover:line-clamp-none">
        {{ product.title }}
      </h2>
      <p class="text-sm line-clamp-5 text-ellipsis">
        {{ product.description }}
      </p>
      <p class="text-lg font-bold">Price: {{ product.price }}</p>
    </div>
    <div class="flex flex-col gap-4">
      <div class="h-40">
        <img
          :src="product.image"
          :alt="product.title"
          width="80"
          height="auto"
        />
        <button
          v-on:click="addToCart(product)"
          class="bg-blue-500 text-white p-2 rounded-md mb-10 mt-4 w-1/2"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/app.vue";

const props = defineProps<{
  product: Product;
}>();
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 250px;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
}
</style>
