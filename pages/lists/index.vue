<script lang="ts" setup>
const listStore = useListStore();

// rendering lists in lists
/* VERSION 1
1. Add the product name to the listStore , into the array
2. 

VERSION 2
1. ListStore becomes an Object, and the lists are keys, items are an array of product names
*/

const showListInput = ref(false);
const listName = ref("");
const addList = () => {
  listStore.value.push(listName.value);
  showListInput.value = false;
};
</script>

<template>
  <div class="flex mt-10 justify-between">
    <h1 class="mb-12">Lists</h1>
    <button class="flex gap-2">
      <span @click="showListInput = true">Create list</span>
      <span>+</span>
    </button>
    <!-- <input
      v-if="showListInput"
      class="border-2 border-gray-300 rounded-md"
      type="text"
      placeholder="Enter list name"
      v-model="listName"
      @keyup.enter="addList"
      @change="listName = $event.target.value"
    /> -->
  </div>

  <div v-for="product in listStore">{{ product }}</div>
</template>
