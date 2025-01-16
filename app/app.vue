<template>
  <div>
    <SeoHead />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Configuration SEO globale
useHead({
  htmlAttrs: {
    lang: 'fr'
  },

})
</script>
