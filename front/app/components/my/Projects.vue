<template>
  <Card class="bg-background rounded-lg mb-20">
    <template #title>
      <div class="flex justify-between items-center">
        <h2 class="text-2xl text-text">Mes Projets</h2>
        <NuxtLink to="/my/projects" class="text-action hover:underline text-sm">
          voir tout
        </NuxtLink>
      </div>
    </template>
    <template #content>
      <Swiper :slides-per-view="'auto'" :centered-slides="true" :space-between="30" :loop="true"
        :pagination="{ clickable: true }" :navigation="true" :modules="[Navigation, Pagination]"
        class="bg-primary p-4 rounded-lg">
        <SwiperSlide v-for="project in projects" :key="project.id" class="md:!w-[400px]">
          <div
            class="border border-secondary rounded p-4 bg-background transition-all duration-300 cursor-pointer hover:shadow-lg"
            @click="navigateToProject(project.documentId)">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img v-if="project.coverImage" :src="store.getCoverImageUrl(project.coverImage)" :alt="project.title"
                  class="w-full h-40 object-cover rounded" />
                <Tag :value="project.type" :severity="getTypeSeverity(project.type)" class="absolute left-2 top-2" />
              </div>
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-medium mb-2">{{ project.title }}</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <BaseTechnologyChip :technologies="project.technologies" />
              </div>
            </div>
            <div class="flex justify-between items-center">
              <Button icon="pi pi-github" severity="secondary" outlined
                @click.stop="navigateToGithub(project.githubUrl)" />
              <Button v-if="project.demoUrl" icon="pi pi-external-link" class="ml-2"
                @click.stop="navigateToDemo(project.demoUrl)" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from "vue-router";
import { useMyStrapiContentStore } from '@/stores/strapi-content';

const store = useMyStrapiContentStore();
const strapi = useStrapi();
const router = useRouter();


const projects = ref();

onMounted(async () => {
  const response = await strapi.find(StrapiTypes.PROJECT, {
    populate: ['coverImage', 'technologies'],
  });
  projects.value = response.data;

});

const getTypeSeverity = (type: string) => {
  switch (type) {
    case 'Pro':
      return 'success';
    case 'Perso':
      return 'info';
    case 'Auto-formation':
      return 'warning';
    default:
      return 'info';
  }
};

const navigateToProject = (id: number) => {
  router.push(`/project/${id}`);
};

const navigateToGithub = (url: string) => {
  if (url) window.open(url, '_blank');
};

const navigateToDemo = (url: string) => {
  if (url) window.open(url, '_blank');
};
</script>

<style scoped>
:deep(.swiper-slide) {
  opacity: 0.4;
  transform: scale(0.85);
  /* transition: all 0.3s ease; */
}

:deep(.swiper-slide-active) {
  opacity: 1;
  transform: scale(1);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--text);
  width: 1.5rem;
  height: 1.5rem;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 1.2rem;
}

:deep(.swiper-pagination-bullet) {
  background: var(--text);
}


:deep(.swiper-pagination-bullet-active) {
  background: var(--action);
}
</style>