<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Mon Parcours</h1>

    <h2 class="text-xl font-semibold mt-6 mb-2">Mon Cursus Scolaire</h2>
    <div v-for="(edu, index) in education" :key="index" class="mb-4">
      <p class="font-bold">{{ edu.degree }} - {{ edu.school }}</p>
      <p>{{ edu.dates }}</p>
      <p class="text-sm">{{ edu.description }}</p>
    </div>

    <h2 class="text-xl font-semibold mt-6 mb-2">
      Mes Expériences Professionnelles & Personnelles
    </h2>
    <div v-for="(exp, index) in experiences" :key="index" class="mb-4">
      <p class="font-bold">{{ exp.title }} - {{ exp.company }}</p>
      <p>{{ exp.dates }}</p>
      <p class="text-sm">{{ exp.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from "~/stores/portfolio";
const store = usePortfolioStore();
const { experiences, education } = store;
</script>
