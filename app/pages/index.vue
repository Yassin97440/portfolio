<template>
  <div class="p-5 md:p-14 lg:p-20 grid grid-flow-row ">



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
          </template>
        </Timeline>
      </template>
    </Card>
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
            <p class="text-secondary ">{{ slotProps.item.dates }}</p>
          </template>
          <template #content="slotProps">
            <p v-tooltip.top="{
              value: slotProps.item.school + ' - ' + slotProps.item.shortDescription,
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
