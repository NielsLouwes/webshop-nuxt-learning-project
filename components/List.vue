<script lang="ts" setup>
import type { Product } from "~/types/global";

const { listName, product } = defineProps<{
  listName: string;
  product?: Product;
}>();

const { addItemToList } = useListStore();

const isChecked = ref(false);

console.log("isChecked", isChecked);

// whenever isChecked changes, do this function
watch(isChecked, (newValue) => {
  if (newValue && product) {
    console.log(" Selected list:", listName);
    addItemToList(listName, product);
  }
});

// need the selected attached to the input
// pass that to the addItemToList function
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
