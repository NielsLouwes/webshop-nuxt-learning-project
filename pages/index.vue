<script setup lang="ts">
export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: Rating;
};

const { data: products } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap gap-4 p-3 m-3">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
