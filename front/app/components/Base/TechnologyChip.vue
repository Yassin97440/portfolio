<template>

    <Chip v-for="technology in technologies" :key="technology.id" 
    :label="technology.name" 
    :icon="getIcon(technology)" 
    class="bg-action text-text  m-1" />


</template>

<script lang="ts" setup>

const props = defineProps({
  technologies: {
    type: Object,
    required: true
  }
})

const getIcon = (technology: any) => {
  if (technology.type === 'backend') {
    return 'pi pi-server'
  } else if (technology.type === 'frontend') {
    return 'pi pi-code'
  } else if (technology.type === 'database') {
    return 'pi pi-database'
  } else if (technology.type === 'OPS') {
    return 'pi pi-cloud'
  } else if (technology.type === 'mobile') {
    return 'pi pi-mobile'
  } else if (technology.type === 'other') {
    return 'pi pi-question'
  }
}
</script>

<style>

</style>