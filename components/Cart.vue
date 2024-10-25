<script lang="ts" setup>
const cartStore = useCartStore();
const cartCount = useCartCount();
</script>

<template>
  <NuxtLink :to="`/cart`">
    <p
      class="text-xl font-bold cursor-pointer border-solid border-2 px-2 border-orange-200 rounded-lg"
    >
      <span class="text-sm text-orange-500 py-4">{{ cartCount }}</span>
      Cart
    </p>
  </NuxtLink>
</template>
