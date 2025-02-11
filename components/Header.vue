<script lang="ts" setup>
const cartCount = useCartCount();
</script>

<template>
  <div
    class="flex justify-between items-center border-bottom-2 border-solid border-1 border-b border-blue-900 pb-4"
  >
    <NuxtLink to="/">
      <h1 class="text-4xl font-bold">
        Online Webshop Example - Built in Nuxt 3
      </h1>
    </NuxtLink>
    <div class="flex gap-3">
      <NuxtLink :to="`/lists`">
        <Button text="Lists" />
      </NuxtLink>
      <NuxtLink :to="`/cart`">
        <Button text="Cart" :count="cartCount" />
      </NuxtLink>
    </div>
  </div>
</template>
