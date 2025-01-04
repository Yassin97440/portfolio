<template>
  <div class="min-h-screen text-text relative">
    <MenuBar :model="items" class="bg-primary  relative z-20">
      <template #start>
        <h1 class="text-2xl font-bold">Yassin Abdulla</h1>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span class="text-action">{{ item.label }}</span>
        </a>
      </template>
    </MenuBar>
    <div class="fixed inset-0 w-full h-full">
      <img class="w-full h-full object-cover" src="~/assets/bgw.webp" alt="Background" />
    </div>
    <main class="relative z-10 h-screen">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
const items = [
  { label: 'Mes projets', icon: 'pi pi-home', to: '/' },
  { label: 'Me contacter', icon: 'pi pi-envelope', to: '/contact' },
];
</script>

<style></style>