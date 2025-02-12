<script lang="ts" setup>
const cartCount = useCartCount();
</script>

<template>
  <nav
    class="flex justify-between items-center border-bottom-2 border-solid border-1 border-b border-blue-900 pb-4"
  >
    <NuxtLink to="/">
      <h1 class="text-lg md:text-4xl font-bold w-2/3 md:w-full">
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
  </nav>
</template>
