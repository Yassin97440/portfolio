<template>
  <div class="p-5 md:p-14 lg:px-24 lg:py-16">
    <main>
      <section class="mb-8 md:mb-12">
        <h1 class="text-3xl font-bold mb-4">Mon Profil</h1>
        <p class="text-xl text-gray-600">Développeur passionné par l'innovation</p>
      </section>

      <section class="mb-12">
        <Card class="bg-background rounded-lg">
          <template #content>
            <article class="space-y-8 p-6">
              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Qui suis-je ?</h2>
                <p class="">
                  {{ myselfData.longDescription1 }}
                </p>
              </div>

              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Mon Parcours</h2>
                <p class="">
                  J'ai toujours aimé résoudre des problèmes et aussi bidouiller sur l'ordinateur. Je me suis dès le
                  début orienté
                  dans le domaine de l'informatique et des systèmes numériques.Ca me parassait être une évidence. <br>
                  Mes dernières années de lycée et mon BTS Système numérique m'ont permis d'approfondir de décourvir et
                  d'appronfir des notions assez "bas niveau" dans les systèmes numériques, avant de me spécialiser dans
                  le développement logiciel et web.
                </p>
              </div>

              <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-4">Expériences dans le développement logiciel</h2>
                <ul class="space-y-4">
                  <li>
                    <h3 class="text-xl font-medium mb-2">Après cette expérience</h3>
                    <p class="">
                      Aujourd'hui, je pense que je suis loin d'avoir vu 1/4 des problèmatiques qui peuvent être
                      rencontrés dans le domaine du développement logiciel.
                      Mais j'ai pu traiter tellement de demandes et problèmatiques, touchant au développement logiciel,
                      à la digitalisation d'une entreprise, sa stratégie vis à vis du digital. <br>
                      J'ai pu apprendre à développer un logiciel de la base de données à l'interface utilisateur à
                      partir d'un besoin.
                      J'ai pu apprendre à gérer des équipes de développeurs, à gérer des projets, développer avec des
                      délais très serrés (et très larges aussi). <br>
                      J'ai appris à prioriser les demandes et les problèmatiques en prenant en compte les enjeux
                      business et les contraintes techniques. <br>
                      J'ai appris à commuiquer avec mes clients, avec mon équipe en tant que développeur, mais aussi en
                      tant que lead dév, chef de projet, et d'équipe.
                      Et également avec des équipes éxternes. <br>
                      Tout ça bien sur en faisant des erreurs, en essayant, en allant chercher. <br>
                      Ce que je peux dire que j'ai étais bien accompagné avec une super équipe, ce qui m'a permit
                      d'évoluer en autonomie sur pleins de nouveaux sujets.
                      Je parle plus en détailx

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
                <Chip v-for="skill in myselfData.skills.otherSkills" :key="skill"
                  class="bg-secondary text-white px-4 py-2">
                  {{ skill }}
                </Chip>
              </div>
            </BaseSubCard>
          </template>
        </Card>
      </section>

      <section class="">
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

/* Ajout d'une règle CSS native plus performante */
p {
  line-height: 1.6;
}

/* On peut aussi cibler spécifiquement les paragraphes de la prose */
.prose p {
  line-height: 1.6;
}
</style>
