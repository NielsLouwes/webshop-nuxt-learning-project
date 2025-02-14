<script lang="ts" setup>
import type { Product } from "~/types/global";

const { objectStore } = useListStore();
const isOpen = ref(false);
const showAlert = ref(false);
const { label, product } = defineProps<{ label: string; product: Product }>();
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 z-1">
        <div class="flex justify-between mb-8">
          <h2 class="font-bold">Your lists</h2>
          <UButton
            @click="[(isOpen = false), (showAlert = true)]"
            color="white"
            icon="ic:baseline-close"
            size="xs"
            role="button"
            type="button"
            aria-label="Open add item modal"
          ></UButton>
        </div>
        <div
          v-if="Object.keys(objectStore).length"
          v-for="listName in Object.keys(objectStore)"
          :key="listName"
          class="p"
        >
          <List :listName="listName" :product="product" />
        </div>
        <p v-else>No saved lists. Go to /lists to create one!</p>
      </div>
    </UModal>
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
</template>
