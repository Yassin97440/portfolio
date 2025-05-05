<template>
  <div class="min-h-screen text-text relative flex flex-col">
    <MenuBar class="bg-background min-w-screen relative z-20 py-3">
      <template #start>
        <h1 class="ml-4 text-2xl text-action font-bold" @click="navigateTo('/')">
          Yassin Abdulla
        </h1>
      </template>
      <template #end>
        <!-- Menu pour mobile -->
        <div class="card flex justify-center md:hidden">
          <Button type="button" icon="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
            <template #item="{ item }">
              <a v-ripple class="flex items-center gap-4 px-4 py-3">
                <span :class="item.icon" class="text-md" />
                <span>
                  <NuxtLink :to="item.to" class="text-action text-md">{{
                    item.label
                  }}</NuxtLink>
                </span>
              </a>
            </template>
          </Menu>
        </div>
        <!-- Boutons pour desktop -->
        <div class="hidden md:flex gap-6 mr-6">
          <NuxtLink v-for="item in items" :key="item.to" :to="item.to"
            class="text-action hover:text-action/80 transition-colors flex items-center gap-2">
            <i :class="item.icon"></i>
            {{ item.label }}
          </NuxtLink>
        </div>
      </template>
    </MenuBar>
    <div class="fixed inset-0 w-full h-full bg-background">
      <!-- <img class="w-full h-full object-cover blur-md brightness-95" src="~/assets/bgw.webp" alt="Background" /> -->
    </div>
    <main class="relative z-10 min-h-screen pb-20">
      <slot />
    </main>

    <footer class="relative z-10 bg-primary/80 text-text py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-sm mb-2 md:mb-0">
            © {{ new Date().getFullYear() }} Yassin Abdulla. Tous droits réservés.
          </div>
          <div class="flex gap-4">
            <a href="https://github.com/Yassin97440" target="_blank" rel="noopener noreferrer"
              class="hover:text-action transition-colors">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/yassin-abdulla97440" target="_blank" rel="noopener noreferrer"
              class="hover:text-action transition-colors">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const menu = ref();

const items = [
  { label: 'Mes projets', icon: 'pi pi-briefcase', to: '/my/projects' },
  { label: "Me contacter", icon: "pi pi-envelope", to: "/my/Contact" },
  { label: "Lab", icon: "pi pi-microchip", to: "/lab" },
];

const toggle = (event: any) => {
  menu.value.toggle(event);
};
</script>

<style></style>
