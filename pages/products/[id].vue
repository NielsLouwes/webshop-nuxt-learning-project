<script lang="ts" setup>
import Button from "~/components/Button.vue";
import type { Product } from "~/types/global";

const { id } = useRoute().params;

const { data: product } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${id}`
);

const showAlert = ref(false);
</script>

<template>
  <Head>
    <Title>{{ product?.title }}</Title>
    <Meta name="description" :content="product?.description" />
  </Head>
  <div class="flex gap-12 py-20 px-24 bg-white-200 z-0">
    <div class="w-1/3 lg:w-1/2 flex justify-center">
      <img
        :src="product?.image"
        :alt="product?.title"
        height="auto"
        class="max-w-[150px] lg:max-w-[300px]"
      />
    </div>
    <div>
      <h1 class="text-3xl font-bold pb-4">{{ product?.title }}</h1>
      <h2>{{ product?.description }}</h2>
      <h3 class="mt-10"><strong>Price:</strong> {{ product?.price }}</h3>
      <p
        class="text-orange-500 text-sm"
        v-if="product?.rating?.rate && product?.rating?.rate > 4"
      >
        Highly rated by other users!
      </p>

      <div class="flex gap-3 items-center">
        <Button
          v-on:click="addToCart(product as Product)"
          class="bg-orange-500 text-white py-2 px-4 rounded-md mb-10 mt-4 w-40"
          text="Add to cart"
        >
        </Button>

        <Modal
          v-if="product"
          label="Add to list"
          :product="product"
          showAlert="showAlert"
        />
        <UAlert
          v-if="showAlert"
          title="Product added!"
          class="w-32 h-16 z-10"
          color="green"
          variant="outline"
          :close-button="{
            icon: 'i-heroicons-x-mark-20-solid',
            color: 'gray',
            variant: 'link',
            padded: false,
          }"
        />
      </div>
    </div>
  </div>
</template>
