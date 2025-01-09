<template>
  <div class="min-h-screen text-text relative">
    <MenuBar class="bg-primary min-w-screen relative z-20">
      <template #start>
        <h1 class="ml-4 text-2xl font-bold" @click="navigateTo('/')">Yassin Abdulla</h1>
      </template>
      <template #end>
        <div class="flex flex-row">
          <Button v-for="item in items" :key="item.label" class="p-2 mx-2 hover:bg-slate-300">
            <NuxtLink :to="item.to" class="text-action">{{
              item.label
            }}</NuxtLink>
          </Button>
        </div>
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
import Toolbar from "primevue/toolbar";

const items = [
  // { label: 'Mes projets', icon: 'pi pi-home', to: '/' },
  { label: "Me contacter", icon: "pi pi-envelope", to: "/my/Contact" },
];
</script>

<style></style>
