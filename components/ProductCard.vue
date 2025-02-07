<script lang="ts" setup>
import type { Product } from "~/types/global";

const { product } = defineProps<{
  product: Product;
}>();

console.log("product", product);

// product.rating > 4 , create a border that stands out!
const highRating = product.rating.rate >= 4;
</script>

<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    :class="{
      'border-2 border-red-500': highRating,
      'border border-gray-300': !highRating,
      'p-4 w-64 h-[450px] flex flex-col rounded-lg bg-white cursor-pointer hover:border-2 hover:border-orange-500': true,
    }"
  >
    <div class="flex flex-col gap-4 relative">
      <h2 class="text-lg font-bold line-clamp-2">
        {{ product.title }}
      </h2>
      <p class="text-sm line-clamp-3 text-ellipsis">
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
