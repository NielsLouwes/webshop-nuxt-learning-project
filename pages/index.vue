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

const route = useRoute();
const router = useRouter();
const selectedCategory = ref(route.query.category || "All");

// Fetch products and handle loading and error states
const {
  data: products,
  pending,
  error,
} = useFetch<Product[]>("https://fakestoreapi.com/products");

// Watch for category changes and update the URL query
watch(selectedCategory, (newCategory) => {
  router.push({ query: { ...route.query, category: newCategory } });
});

// Extract categories after products are fetched
const uniqueCategories = computed(() => {
  const categories = products.value?.map((product) => product.category) || [];
  return [...new Set(categories)];
});

// Filter products based on selected category
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
    <!-- Category Filter -->
    <div class="flex gap-2 mt-4">
      <h2 class="text-xl font-bold">Filters</h2>
      <select class="border-2 p-1" v-model="selectedCategory">
        <option>All</option>
        <option v-for="category in uniqueCategories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Loading and Error Handling -->
    <div v-if="pending">
      <p>Loading products...</p>
    </div>
    <div v-else-if="error">
      <p>Error loading products. Please try again later.</p>
    </div>
    <div v-else>
      <!-- Product List -->
      <div class="flex flex-wrap gap-4 p-3 m-3">
        <div v-for="product in filteredProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
