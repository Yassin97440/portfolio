<template>
  <div class="p-5 md:p-14 lg:p-28">
    <Card class="bg-background rounded-lg mb-20">
      <template #header>
        <h2 class="text-2xl">Mon profil</h2>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20">
      <template #header>
        <h2 class="text-3xl font-bold mb-4">Mes compétences</h2>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20">
      <template #header>
        <h2 class="text-3xl font-bold mb-4">Mes technologies</h2>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from "~/stores/portfolio";
const portfolioStore = usePortfolioStore();

const myselfData = portfolioStore.myself;
</script>

<style></style>
