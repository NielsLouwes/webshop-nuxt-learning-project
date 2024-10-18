<script lang="ts" setup>
const cartStore = useCartStore();
const cartCount = useCartCount();
console.log("cartCount", cartCount.value);
</script>

<template>
  <div>
    <p class="text-xl font-bold cursor-pointer">
      <span class="text-sm text-orange-500 py-4">{{ cartCount }}</span>
      Cart
    </p>

    <!-- <div v-for="product in cartStore" :key="product.id">
      <div class="flex flex-row gap-4">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div> -->

    <!-- <p>{{ cartStore }}</p> -->
  </div>
</template>
