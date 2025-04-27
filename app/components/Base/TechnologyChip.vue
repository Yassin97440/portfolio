<template>
  <div>
    <Chip v-for="technology in technologies" :key="technology.id" :label="technology.name" class="bg-primary/20 text-text border-none" />

  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  technologies: {
    type: Object,
    required: true
  }
})
</script>

<style>

</style>