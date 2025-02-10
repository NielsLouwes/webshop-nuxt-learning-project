<script lang="ts" setup>
const { objectStore, createList } = useListStore();

const showListInput = ref(false);
const inputValue = ref("");
const selectedList = ref("");
</script>

<template>
  <div class="flex mt-10 justify-between">
    <h1 class="mb-12">Lists</h1>
    <div>
      <button class="flex gap-2" v-on:click="showListInput = true">
        <span>Create list</span>
        <span>+</span>
      </button>
      <input
        v-if="showListInput"
        class="border-2 border-orange-300 rounded-md p-2"
        type="text"
        placeholder="Enter list name"
        v-model="inputValue"
        v-on:keyup.enter="
          createList(inputValue);
          inputValue = '';
          showListInput = false;
        "
      />
    </div>
  </div>

  <div v-for="listName in Object.keys(objectStore)" :key="listName">
    <!-- <List :listName="listName" /> -->
    <h2 @click="selectedList = listName">{{ listName }}</h2>
    <!--click on listName, show its contents-->
    <ul
      v-if="selectedList === listName"
      v-for="listItem in objectStore[listName]"
      :key="listItem.id"
      class="border-2 p-2"
    >
      <li>{{ listItem.title }}</li>
    </ul>
  </div>
</template>
