<template>
  <div class="px-5 md:px-14 grid grid-flow-row ">
    <h1 class="text-3xl font-bold mb-4">Mon Parcours</h1>


    <Card class="w-full bg-background rounded-lg mb-20">
      <template #title class="">
        <h2 class="text-2xl ">Mes Expériences Professionnelles</h2>
      </template>
      <template #content>
        <Timeline :value="experiences" :align="width >= 768 ? 'alternate' : 'bottom'" class="">
          <template #marker="slotProps">
            <span class="bg-secondary flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm">
              <i class="pi pi-check"></i>
            </span>
          </template>
          <template #opposite="slotProps">
            <p class="text-secondary sm hidden md:block">{{ slotProps.item.dates }}</p>
          </template>
          <template #content="slotProps">
            <Card class="my-4 bg-primary">
              <template #title>
                {{ slotProps.item.title }}
              </template>
              <template #subtitle>
                <p class="text-secondary">{{ slotProps.item.company }}</p>
              </template>
              <template #content class="w-full">
                <p>
                  {{ slotProps.item.description }}
                </p>
                <Button class="text-action text-sm" label="Read more" text></Button>
              </template>
            </Card>
          </template>
        </Timeline>
      </template>
    </Card>
    <Card class="w-full bg-background rounded-lg">
      <template #title>
        <h2 class="text-xl font-semibold mt-6 mb-2">Mon Cursus Scolaire</h2>
      </template>
      <template #content>
        <Timeline :value="education" layout="horizontal" align="alternate"
          class="horizontal-timeline w-full grid-flow-col">
          <template #marker="slotProps">
            <span class="bg-secondary flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm">
              <i class="pi pi-book"></i>
            </span>
          </template>
          <template #opposite="slotProps">
            {{ slotProps.item.dates }}
          </template>
          <template #content="slotProps">
            <p v-tooltip.top="{
              value: slotProps.item.school + ' - ' + slotProps.item.description,
              showDelay: 800,

            }">{{ slotProps.item.degree }}</p>
          </template>
        </Timeline>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from "~/stores/portfolio";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const store = usePortfolioStore();
const { experiences, education } = store;
</script>

<style scoped></style>
