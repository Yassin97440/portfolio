<template>
  <div class="p-5 md:p-14 lg:p-28">
    <Card class="bg-background rounded-lg mb-20">
      <template #title>
        <h2 class="text-xl">Mon profil</h2>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <h3 class="text-xl mb-2">Je = Moi</h3>
          <p class="text-sm space-y-2">
            <span class="block indent-4">
              Salut, moi c'est Yassin, j'ai 24 ans et je suis un développeur
              sympa 😄
            </span>
            <span class="block"> </span>
            <span class="block"> </span>
          </p>
        </div>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20 pt-1">
      <template #title>
        <h2 class="text-2xl">Mes compétences</h2>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <h3 class="text-xl mb-2">Je = Moi</h3>
        </div>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20 pt-1">
      <template #title>
        <h2 class="text-2xl">Mes technologies</h2>
      </template>
      <template #content>
        <BaseSubCard title="TEST">
          <template #content>
            <p>TEST</p>
          </template>
        </BaseSubCard>
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
