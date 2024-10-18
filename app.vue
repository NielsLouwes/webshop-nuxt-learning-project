<script setup lang="ts">
import { addToCart } from "~/composables/cartState";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const { data: products } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

const cartStore = useCartStore();
console.log("cartStore", cartStore);

const colorStore = useColorStore();
console.log("color", colorStore.value);

const cartCount = useCartCount();
console.log("cartCount", cartCount);
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-4 p-3 m-3">
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
