<template>
  <div class="bg-primary mx-5 rounded-lg p-4">
    <h3 class="text-xl mb-2">
      <slot name="title">{{ title }}</slot>
    </h3>

    <div class="content">
      <slot></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style></style>
