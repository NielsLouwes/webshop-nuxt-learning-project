<script lang="ts" setup>
import type { Product } from "~/types/global";

const { listName, product } = defineProps<{
  listName: string;
  product?: Product;
}>();

const { addItemToList } = useListStore();

const isChecked = ref(false);

watch(isChecked, (newValue) => {
  if (newValue && product) {
    addItemToList(listName, product);
  }
});
</script>

<template>
  <div class="flex gap-2">
    <UCheckbox v-model="isChecked">
      <template #label>
        <span>{{ listName }}</span>
      </template>
    </UCheckbox>
  </div>
</template>
