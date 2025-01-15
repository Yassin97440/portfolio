<template>
  <div class="px-5 py-7 md:p-14 lg:px-28">
    <Card class="bg-background rounded-lg mb-5">
      <template #title>
        <h2 class="text-2xl">Mes Projets</h2>
      </template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BaseSubCard v-for="project in projects" :key="project.id"
            class="bg-primary hover:transform hover:scale-105 transition-transform">
            <template #title>
              <div class="flex justify-between items-center">
                <h3 class="text-xl">{{ project.title }}</h3>
              </div>
            </template>

            <div class="space-y-4">
              <img v-if="project.image" :src="project.image" :alt="project.title"
                class="w-full h-48 object-cover rounded-lg" />

              <p class="text-sm">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-2 py-1 bg-secondary rounded-full text-xs">
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-4 mt-4">
                <Button v-if="project.demoUrl"
                  class="px-4 py-2 bg-action hover:bg-action/80 text-white rounded-lg text-sm transition-colors"
                  @click="openUrl(project.demoUrl)">
                  <i class="pi pi-external-link mr-2"></i>
                  Voir la démo
                </Button>
                <Button v-if="project.githubUrl"
                  class="px-4 py-2 bg-secondary hover:bg-secondary/80 text-text rounded-lg text-sm transition-colors"
                  @click="openUrl(project.githubUrl)">
                  <i class="pi pi-github mr-2"></i>
                  Code source
                </Button>
              </div>
            </div>

          </BaseSubCard>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/data/myselfData.json'

const projects = ref(projectsData.projects)

const openUrl = (url) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}
</script>

<style scoped></style>