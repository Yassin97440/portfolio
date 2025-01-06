<template>
  <div class="p-5 md:p-14 lg:p-28">
    <Card class=" bg-background rounded-lg mb-20 ">
      <template #title>
        <h2 class="text-2xl">Qui suis-je ?</h2>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <h3 class="text-xl mb-2">Dans les grosss lignes</h3>
          <p class="text-sm space-y-2">
            <span class="block indent-4">
              Salut, moi c'est Yassin, j'ai 24 ans et je suis développeur sympa 😄. <br>
              J'ai eu la chance de grandir dans l'océan indien, majoritairement à l'île de la réunion. Avant de venir
              sur le continent pour continuer mes études et pour découvrir le monde.
            </span>
            <span class="block">
              Cela fait maintenant 4 ans que je suis développeur dans le monde du travail. Dont une année en alternance.
              Avant cela, j'ai suivi un cursus orienté éléctronique et IoT. J'ai voulu développer mes compétences en
              développement d'intérface graphique et web afin d'avoir un "spectre" de compétences plus large.
              Ce qui dans l'idée m'aurait permis d'avoir les compétences nécessaires pour concevoir et développer un
              projet de A à Z. Qu'il soit purement logiciel ou bien en intégrant des systèmes embarqués.
            </span>
            <span class="block">
              Mais j'avoue que j'ai beaucoup trop kiffé le développement logiciel et web,
              et j'ai un peu délaissé l'éléctronique ces 3 dernières années.
              Ce qui m'a permis de découvrir et d'approfondir des notions en développement d'application. De la
              conception et la mise en place d'une base de données,
              au développement d'interfaces graphiques, en passant par le développement du back-end.
              Pendant ma première année je me suis rendu compte que les compétences techniques n'étaient que la moitié
              des compétences nécessaires pour être un bon développeur.
              J'ai au fur et à mesure pu découvrir ce qu'est l'analyse du besoin client et son importance.
              Et peu plus tard j'a eu la chance de voir d'autres problématiques de gestion de projet et la gestion
              d'équipe....
            </span>
          </p>
        </div>
      </template>

    </Card>
    <!-- experiences pro -->
    <Card class="bg-background rounded-lg mb-20">
      <template #title class="">
        <h2 class="text-2xl">Mes Expériences Professionnelles</h2>
      </template>
      <template #content>
        <Timeline :value="experiences" :align="width >= 768 ? 'alternate' : 'bottom'" class="">
          <template #marker="slotProps">
            <span class="bg-secondary flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm">
              <i class="pi pi-check"></i>
            </span>
          </template>
          <template #opposite="slotProps">
            <p class="text-secondary sm hidden md:block">
              {{ slotProps.item.dates }}
            </p>
          </template>
          <template #content="slotProps">
            <DeferredContent>
              <Card class="my-4 bg-primary">
                <template #title>
                  {{ slotProps.item.title }}
                </template>
                <template #subtitle>
                  <p class="text-secondary">{{ slotProps.item.company }}</p>
                </template>
                <template #content class="">
                  <div class="">
                    <ul class="relative list-disc ml-3">
                      <li v-for="detail in slotProps.item.Details" :key="detail" class="text-left">
                        {{ detail }}
                      </li>
                      <Button class="text-action text-sm absolute left-0" label="Lire plus" text
                        @click="navigateTo(`/experience/${slotProps.item.id}`)">
                      </Button>
                    </ul>
                  </div>
                </template>
              </Card>
            </DeferredContent>
          </template>
        </Timeline>
      </template>
    </Card>

    <!-- cursus scolaire -->
    <Card class="w-full bg-background rounded-lg">
      <template #title>
        <h2 class="text-xl font-semibold mt-6 mb-2">Mon Cursus Scolaire</h2>
      </template>
      <template #content>
        <Timeline :value="education" layout="horizontal" align="top" class="horizontal-timeline w-full grid-flow-col">
          <template #marker="slotProps">
            <span class="bg-secondary flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm">
              <i class="pi pi-book"></i>
            </span>
          </template>
          <template #opposite="slotProps">
            <p class="text-secondary">{{ slotProps.item.dates }}</p>
          </template>
          <template #content="slotProps">
            <p v-tooltip.top="{
              value:
                slotProps.item.school +
                ' - ' +
                slotProps.item.shortDescription,
              showDelay: 800,
            }" class="text-action">
              {{ slotProps.item.degree }}
            </p>
          </template>
        </Timeline>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from "~/stores/portfolio";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const store = usePortfolioStore();
const { experiences, education } = store;
</script>

<style scoped></style>
