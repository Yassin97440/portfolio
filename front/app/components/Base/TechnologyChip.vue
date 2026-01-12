<template>
  <UBadge 
    v-for="technology in technologies" 
    :key="technology.id" 
    :label="technology.name"
    :icon="getIcon(technology)"
    color="neutral"
    variant="solid"
    class="technology-chip text-text m-0.5"
  />
</template>

<script lang="ts" setup>
defineProps({
  technologies: {
    type: Object,
    required: true
  }
})

const getIcon = (technology: any) => {
  if (technology.type === 'backend') {
    return 'i-lucide-server'
  } else if (technology.type === 'frontend') {
    return 'i-lucide-code'
  } else if (technology.type === 'database') {
    return 'i-lucide-database'
  } else if (technology.type === 'OPS') {
    return 'i-lucide-cloud'
  } else if (technology.type === 'mobile') {
    return 'i-lucide-smartphone'
  } else if (technology.type === 'other') {
    return 'i-lucide-help-circle'
  }
  return 'i-lucide-circle'
}
</script>

<style scoped>
.technology-chip {
  background-color: var(--action);
  font-size: 1rem;
}
</style>