<script lang="ts" setup>
const listStore = useListStore();
</script>

<template>
  <h1>Lists</h1>
  <div v-for="product in listStore">{{ product }}</div>
</template>
