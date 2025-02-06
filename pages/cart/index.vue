<script lang="ts" setup>
const cartStore = useCartStore();
</script>

<template>
  <h1 class="text-2xl font-bold py-4">Cart Overview</h1>
  <div
    v-for="product in cartStore"
    :key="product.id"
    class="flex flex-row gap-4 border-2 border-gray-200 py-4 px-4 rounded-lg mb-2"
  >
    <img :src="product.image" alt="product image" width="100" />
    <div class="flex flex-row gap-24">
      <span class="text-lg font-bold">{{ product.title }}</span>
      <span class="text-sm">Total: ${{ product.price }}</span>
      <span> # of items: {{ product.quantity }}</span>
    </div>
  </div>
</template>
