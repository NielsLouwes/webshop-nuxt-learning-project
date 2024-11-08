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
  category: string;
};

const { data: products } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

const selectedCategory = ref("All");

const categories = products.value?.map((product) => product.category);
const uniqueCategories = [...new Set(categories)];

console.log("uniqueCategories", uniqueCategories);

const filteredProducts = computed(() => {
  if (selectedCategory.value === "All") {
    return products.value;
  }
  return products.value?.filter(
    (product) => product.category === selectedCategory.value
  );
});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex gap-2 mt-4">
      <h2 class="text-xl font-bold">Filters</h2>
      <select class="border-2 p-1" v-model="selectedCategory">
        <option>All</option>
        <option v-for="category in uniqueCategories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="flex flex-wrap gap-4 p-3 m-3">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
