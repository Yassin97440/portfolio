<template>
  <div class="min-h-screen bg-background text-text relative">
    <MenuBar :model="items" class="bg-primary text-white relative z-20">
      <template #start>
        <h1 class="text-2xl font-bold">Yassin Abdulla</h1>
      </template>
    </MenuBar>
    <div class="absolute inset-0 w-full h-full">
      <img class="w-full h-full object-cover" src="~/assets/bgw.webp" alt="Background" />
    </div>
    <main class="relative z-10 container w-full h-full">
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