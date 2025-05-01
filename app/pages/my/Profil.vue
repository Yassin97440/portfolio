<template>
  <div class="p-5 md:p-14 lg:px-24 lg:py-16">
    <main>
      <section class="mb-8 md:mb-12">
        <h1 class="text-3xl font-bold mb-4">Mon Profil</h1>
      </section>

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #title>
            <h2 class="text-2xl font-semibold">Compétences</h2>
          </template>
          <template #content>
            <BaseSubCard>
              <div class="flex flex-wrap gap-3 p-4">
                <Chip v-for="skill in myselfData.skills.otherSkills" :key="skill"
                  class="bg-secondary text-white px-4 py-2">
                  {{ skill }}
                </Chip>
              </div>
            </BaseSubCard>
          </template>
        </Card>
      </section>

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #title>
            <h2 class="text-2xl font-semibold">Technologies</h2>
          </template>
          <template #content>

            <BaseSubCard>
              <template #title>
                <h2 class="text-xl font-semibold mb-4">Mes technologies</h2>

              </template>
              <section>
                <!-- Section Compétences -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="p-4 border rounded-lg bg-surface-0">
                    <h3 class="font-medium mb-4 capitalize">frontend</h3>
                    <ul class="list-none p-0 m-0">
                      <li v-for="skill in myselfData.skills.technos.frontend" :key="skill"
                        class="mb-2 flex items-center">
                        <i class="pi pi-check text-green-500 mr-2"></i>
                        {{ skill }}
                      </li>
                    </ul>
                  </div>
                  <div class="p-4 border rounded-lg bg-surface-0">
                    <h3 class="font-medium mb-4 capitalize">Backend</h3>
                    <ul class="list-none p-0 m-0">
                      <li v-for="skill in myselfData.skills.technos.backend" :key="skill"
                        class="mb-2 flex items-center">
                        <i class="pi pi-check text-green-500 mr-2"></i>
                        {{ skill }}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </BaseSubCard>
          </template>
        </Card>
      </section>
      <MyDegrees class="mb-12" />

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #content>
            <article class="space-y-8 p-6">
              <BaseRichText :content="description?.description" />
            </article>
          </template>
        </Card>
      </section>


    </main>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from "~/stores/portfolio";
import { StrapiTypes } from "~~/services/strapi/StrapiTypes";

const portfolioStore = usePortfolioStore();
const { myselfData } = portfolioStore;

const strapi = useStrapi();
const description = ref<any>(null);


onMounted(async () => {
  const response = await strapi.find(StrapiTypes.MY_PROFIL);
  description.value = response.data;
})


useSeoMeta({
  title: 'Mon Profil - Développeur logiciel',
  description: 'Découvrez mon parcours de développeur full stack, mes compétences techniques et mon expérience professionnelle dans le développement web et logiciel.',
  ogTitle: 'Mon Profil - Développeur logiciel',
  ogDescription: 'Développeur passionné spécialisé en développement logiciel web. Mais également en IA et IoT.',
})
</script>

<style>
.prose {
  @apply text-base md:text-lg;
}

/* Ajout d'une règle CSS native plus performante */
p {
  line-height: 1.6;
}

/* On peut aussi cibler spécifiquement les paragraphes de la prose */
.prose p {
  line-height: 1.6;
}
</style>
