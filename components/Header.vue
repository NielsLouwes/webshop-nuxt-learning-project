<script lang="ts" setup>
const cartCount = useCartCount();
</script>

<template>
  <div class="flex justify-between items-center">
    <h1 class="text-4xl font-bold">Online Webshop Example - Built in Nuxt 3</h1>
    <NuxtLink :to="`/cart`">
      <Button text="Cart" :count="cartCount" />
    </NuxtLink>
  </div>
</template>
