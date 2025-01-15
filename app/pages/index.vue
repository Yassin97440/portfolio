<template>
  <div class="px-5 py-7 md:p-14 lg:p-28">
    <Card class="bg-background rounded-lg mb-20 overflow-visible">
      <template #title>
        <div class="relative">
          <img src="~/assets/yassin.jpg" alt="Yassin Abdulla"
            class="absolute -top-10 -left-8 w-24 h-24 md:-top-14 md:-left-8 md:w-28 md:h-28 rounded-full border-4 border-background" />
          <h2 class="text-2xl pl-24">Qui suis-je ?</h2>
        </div>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <h3 class="text-xl mb-2">En quelques mots</h3>
          <p class="text-sm space-y-2">
            <span class="block indent-4">
              Salut, moi c'est Yassin, j'ai 24 ans et je suis un développeur
              sympa 😄
            </span>
            <span class="block">
              Cela fait maintenant 4 ans que je suis développeur dans le monde
              du travail. Dont une année en alternance
            </span>
            <span class="block">
              Durant ces 4 dernières années j'ai pu voir et approfondir tout
              pleins de notions en
              <a class="font-semibold">gestion et développement d'application</a>. Qu'il soit technique ou
              "transversale". Que ça soit de
              <a class="font-semibold">l'analyse du besoin</a> client, gestion
              de projet, conception et mise en place de base de données,
              développement d'interfaces graphiques
              <a class="font-semibold">logiciel et web </a>, développement
              back-end. <br />
              Il est possible d'en voir plus sur mon profil sur
              <a class="text-action" href="/my/profil">ma page profil</a>
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
            <Card class="my-4 bg-primary">
              <template #title>
                <div class="text-left">
                  {{ slotProps.item.title }}
                </div>
              </template>
              <template #subtitle>
                <div class="flex flex-col md:block text-left">
                  <p class="text-secondary">{{ slotProps.item.company }}</p>
                  <p class="text-secondary md:hidden">{{ slotProps.item.dates }}</p>
                </div>
              </template>
              <template #content>
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
