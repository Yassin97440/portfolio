<template>
  <UCard 
    :ui="{
      root: 'bg-primary mx-5 rounded-lg',
      body: 'p-4'
    }"
  >
    <template v-if="title || $slots.title" #header>
      <h3 class="title">
        <slot name="title">{{ title }}</slot>
      </h3>
    </template>

    <slot />

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}
</style>
