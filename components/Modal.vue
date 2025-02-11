<script lang="ts" setup>
import type { Product } from "~/types/global";

const { objectStore } = useListStore();

const isOpen = ref(false);

const { label, product } = defineProps<{ label: string; product: Product }>();
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <div class="flex justify-between mb-8">
          <h2 class="font-bold">Your lists</h2>
          <UButton
            @click="isOpen = false"
            color="white"
            icon="ic:baseline-close"
            size="xs"
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
  </div>
</template>
