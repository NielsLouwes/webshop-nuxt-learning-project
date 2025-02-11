<script lang="ts" setup>
const { objectStore, createList, deleteList } = useListStore();

const showListInput = ref(false);
const inputValue = ref("");
const selectedList = ref("");
const inputError = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

const MIN_LIST_NAME_LENGTH = 3;

watch(showListInput, () => {
  if (showListInput.value) {
    nextTick(() => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    });
  }
});
</script>

<template>
  <div class="flex mt-10 justify-between">
    <h1 class="mb-12 text-2xl font-bold">Lists</h1>
    <div>
      <button class="flex gap-2" v-on:click="showListInput = true">
        <span>Create list</span>
        <span>+</span>
      </button>
      <input
        v-if="showListInput"
        ref="inputRef"
        :class="[
          'border-2',
          inputError ? 'border-red-500' : 'border-orange-300',
          'rounded-md',
          'p-2',
        ]"
        type="text"
        placeholder="Enter list name"
        v-model="inputValue"
        v-on:keyup.enter="
          if (inputValue.trim() && inputValue.length >= MIN_LIST_NAME_LENGTH) {
            createList(inputValue);
            inputValue = '';
            showListInput = false;
            inputError = false;
          } else {
            inputError = true;
          }
        "
      />
    </div>
  </div>

  <div v-for="listName in Object.keys(objectStore)" :key="listName">
    <div class="flex gap-6 mb-2 items-center cursor-pointer">
      <UButton
        color="white"
        icon="ic:baseline-close"
        size="2xs"
        @click="deleteList(listName)"
      />
      <h2 class="text-xl" @click="selectedList = listName">{{ listName }}</h2>
    </div>
    <ul
      v-if="selectedList === listName"
      v-for="listItem in objectStore[listName]"
      :key="listItem.id"
      class="border-2 p-2"
    >
      <li class="capitalize">{{ listItem.title }}</li>
    </ul>
  </div>
</template>
