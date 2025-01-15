<template>
  <div class="p-5 md:p-14 lg:p-28">
    <main>
      <section class="mb-12">
        <h1 class="text-3xl font-bold mb-4">Mon Profil</h1>
        <p class="text-xl text-gray-600">Développeur passionné par l'innovation</p>
      </section>

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #content>
            <article class="space-y-8 p-6">
              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Qui suis-je ?</h2>
                <p class="leading-relaxed">
                  {{ myselfData.longDescription1 }}
                </p>
              </div>

              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Mon Parcours</h2>
                <p class="leading-relaxed">
                  Passionné par la technologie depuis mon plus jeune âge, j'ai commencé avec l'électronique et l'IoT au
                  lycée.
                  Mon BTS Système numérique m'a permis d'approfondir ces connaissances, avant de me spécialiser dans le
                  développement logiciel.
                </p>
              </div>

              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Expériences dans le développement logiciel</h2>
                <ul class="space-y-4">
                  <li>
                    <h3 class="text-xl font-medium mb-2">Lead Développeur</h3>
                    <p class="leading-relaxed">
                      Direction technique d'une équipe sur un ERP complexe, gestion de projets et développement
                      full-stack.
                    </p>
                  </li>
                  <li>
                    <h3 class="text-xl font-medium mb-2">Développeur Full Stack</h3>
                    <p class="leading-relaxed">
                      Développement back-end et front-end, participation à la conception et à l'amélioration continue
                      des solutions de l'entreprise. Principalement l'EPR. Avec une stack full java.
                    </p>
                  </li>
                </ul>
              </div>
            </article>
          </template>
        </Card>
      </section>

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #title>
            <h2 class="text-2xl font-semibold">Compétences</h2>
          </template>
          <template #content>
            <BaseSubCard>
              <div class="flex flex-wrap gap-3 p-4">
                <Chip v-for="skill in myselfData.skills" :key="skill" class="bg-secondary text-white px-4 py-2">
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
              <div class="flex flex-wrap gap-3 p-4">
                <Chip v-for="tech in myselfData.technos" :key="tech" class="bg-secondary text-white px-4 py-2">
                  {{ tech }}
                </Chip>
              </div>
            </BaseSubCard>
          </template>
        </Card>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from "~/stores/portfolio";

const portfolioStore = usePortfolioStore();
const { myselfData } = portfolioStore;

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
</style>
