<script setup lang="ts">
useSeoMeta({
  title: "Nuxt 3 Ecommerce Webshop",
  description: "Fake Ecommerce website built with Nuxt 3",
  ogTitle: "Nuxt 3 Ecommerce Webshop",
  ogDescription:
    "Fake Ecommerce website built with Nuxt 3. We offer the latest products on the market for a great price.",
  ogUrl: "https://nuxt3onlinewebshopexample.com",
  ogType: "website",
  ogLocale: "nl_NL",
  ogSiteName: "Nuxt 3 Ecommerce Webshop Example",
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
