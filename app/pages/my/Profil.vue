<template>
  <div class="p-5 md:p-14 lg:px-24 lg:py-16">
    <main>
      <section class="mb-8 md:mb-12">
        <h1 class="text-3xl font-bold mb-4">Mon Profil</h1>
      </section>

      <MySkillsCard />

      <MyTechnologiesCard />
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
const skills = ref<any>(null);

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/my/profil'
    }
  ]
})

onMounted(async () => {
  const response = await strapi.find(StrapiTypes.MY_PROFIL);
  description.value = response.data;
  const skillsResponse = await strapi.find(StrapiTypes.SKILLS);
  skills.value = skillsResponse.data;

})


useSeoMeta({
  title: 'Yassin Abdulla - Ingénieur logiciel',
  description: 'Découvrez mon parcours de développeur full stack, mes compétences techniques et mon expérience professionnelle dans le développement web et logiciel.',
  ogTitle: 'Yassin Abdulla - Ingénieur logiciel',
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
