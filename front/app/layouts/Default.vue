<template>
  <div class="min-h-screen flex flex-col">
    <UHeader 
      title="Yassin Abdulla" 
      to="/"
    >
      <!-- Navigation desktop -->
      <UNavigationMenu 
        :items="navItems" 
        class="hidden md:flex"
      />

      <template #right>
        <UColorModeButton class="hidden md:flex" />
      </template>

      <!-- Menu mobile -->
      <template #body>
        <UNavigationMenu 
          :items="navItems" 
          orientation="vertical" 
          class="-mx-2.5" 
        />
      </template>
    </UHeader>

    <UMain class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Yassin Abdulla. Tous droits réservés.
        </p>
      </template>
      <template #right>
        <div class="flex gap-2">
          <UButton 
            to="https://github.com/Yassin97440" 
            target="_blank"
            variant="ghost"
            color="neutral"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
          <UButton 
            to="https://www.linkedin.com/in/yassin-abdulla97440" 
            target="_blank"
            variant="ghost"
            color="neutral"
            icon="i-simple-icons-linkedin"
            aria-label="LinkedIn"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const navItems = computed<NavigationMenuItem[]>(() => [
  { label: "Mes services", icon: "i-lucide-briefcase", to: "/services" },
  { label: 'Mes projets', icon: 'i-lucide-code', to: '/my/projects' },
  { label: "Lab", icon: "i-lucide-cpu", to: "/lab" },
  { label: "Me contacter", icon: "i-lucide-mail", to: "/my/Contact" },
])
</script>
