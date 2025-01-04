<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Mon Parcours</h1>

    <h2 class="text-xl font-semibold mt-6 mb-2">Mon Cursus Scolaire</h2>
    <div v-for="(edu, index) in education" :key="index" class="mb-4">
      <p class="font-bold">{{ edu.degree }} - {{ edu.school }}</p>
      <p>{{ edu.dates }}</p>
      <p class="text-sm">{{ edu.description }}</p>
    </div>

    <Card class="w-full bg-background rounded-lg ">
      <template #title class="">
        <h2 class="text-2xl ">Mes Expériences Professionnelles</h2>
      </template>
      <template #content>
        <Timeline :value="experiences" align="alternate" class="customized-timeline">
          <template #marker="slotProps">
            <span class="bg-secondary flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm">
              <i class="pi pi-check"></i>
            </span>
          </template>
          <template #content="slotProps">
            <Card class="mt-4 bg-primary">
              <template #title>
                {{ slotProps.item.title }}
              </template>
              <template #subtitle>
                <p class="text-secondary">{{ slotProps.item.company }}</p>
              </template>
              <template #content>
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
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from "~/stores/portfolio";
const store = usePortfolioStore();
const { experiences, education } = store;
</script>
