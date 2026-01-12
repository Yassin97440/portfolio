<template>
  <div class="px-5 py-7 md:p-14 lg:px-28">
    <UCard class="projects-card rounded-lg mb-5" :ui="{ root: 'rounded-lg' }">
      <template #header>
        <h2 class="text-2xl text-text">Mes Projets</h2>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BaseSubCard v-for="project in projects" :key="project.id"
          class="bg-primary hover:transform hover:scale-105 transition-transform cursor-pointer"
          @click="navigateToProject(project.slug)">
          <template #title>
            <div class="flex justify-between items-center">
              <h3 class="text-xl text-text">{{ project.title }}</h3>
            </div>
          </template>

          <div class="space-y-4">
            <img v-if="project.coverImage" :src="strapiContentStore.getCoverImageUrl(project.coverImage)" :alt="project.title"
              class="w-full h-48 object-cover rounded-lg" />

            <p class="text-sm">{{ project.shortDescription }}</p>

            <div class="flex justify-evenly flex-wrap gap-2">
              <BaseTechnologyChip :technologies="project.technologies" />
            </div>

            <div class="flex gap-4 mt-4">
              <UButton v-if="project.demoUrl"
                class="bg-action hover:bg-action/80 text-white"
                @click.stop="openUrl(project.demoUrl)">
                <UIcon name="i-lucide-external-link" class="mr-2" />
                Voir la démo
              </UButton>
              <UButton v-if="project.codeSourceUrl"
                color="neutral"
                variant="outline"
                @click.stop="openUrl(project.codeSourceUrl)">
                <UIcon name="i-simple-icons-github" class="mr-2" />
                Code source
              </UButton>
            </div>
          </div>

        </BaseSubCard>
      </div>
    </UCard>
  </div>
</template>

<script setup>
import { usePortfolioStore } from "@/stores/portfolio";
import { useRouter } from "vue-router";
import { useStrapiContentStore } from "~/stores/strapiContent";

const store = usePortfolioStore();
const router = useRouter();
const strapi = useStrapi();
const strapiContentStore = useStrapiContentStore()
const projects = ref([])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/my/projects'
    }
  ]
})

onMounted(async () => {
  const response = await strapi.find(StrapiTypes.PROJECT, {populate: ['coverImage', 'technologies']})
  projects.value = response.data
  
})

const navigateToProject = (slug) => {
  router.push(`/project/${slug}`);
};

const openUrl = (url) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
.projects-card {
  background-color: var(--background);
}
</style>
