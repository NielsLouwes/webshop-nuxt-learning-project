<script lang="ts" setup>
const cartStore = useCartStore();
const totalCost = cartTotalCost();
</script>

<template>
  <h1 class="text-2xl font-bold py-4">Cart Overview</h1>
  <div
    v-for="product in cartStore"
    :key="product.id"
    class="flex flex-row gap-4 border-2 border-gray-200 py-4 px-4 rounded-lg mb-2 justify-between"
  >
    <div class="flex gap-10">
      <img :src="product.image" alt="product image" width="100" />
      <span class="text-lg font-bold">{{ product.title }}</span>
    </div>

    <div class="flex">
      <div class="flex flex-col pr-2 gap-2">
        <span class="text-sm">Cost: ${{ product.price }}</span>
        <span class="text-sm"> Quantity: {{ product.quantity }}</span>
      </div>
    </div>
  </div>

  <div v-if="cartStore.length">
    <h2><strong>Total Cost:</strong> {{ totalCost }}</h2>
  </div>
</template>
