<template>
  <div class="p-5 md:p-14 lg:p-28">
    <Card class="bg-background rounded-lg mb-20">
      <template #title>
        <h2 class="text-xl">Salut</h2>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <p class="text-sm md:text-base space-y-2">
            <BaseExpandableText class="">
              {{ myselfData.longDescription1 }}
            </BaseExpandableText>

            <BaseExpandableText>
              {{ myselfData.longDescription2 }}
            </BaseExpandableText>

            <BaseExpandableText>
              {{ myselfData.longDescription3 }}
            </BaseExpandableText>

            <BaseExpandableText>
              {{ myselfData.longDescription4 }}
            </BaseExpandableText>
          </p>
        </div>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20 pt-1">
      <template #title>
        <h2 class="text-2xl">Mes compétences</h2>
      </template>
      <template #content>
        <BaseSubCard>
          <div class="flex flex-wrap gap-2">
            <Chip v-for="skill in myselfData.skills" :key="skill" class="bg-secondary text-white ">
              {{ skill }}
            </Chip>
          </div>
        </BaseSubCard>
      </template>
    </Card>
    <Card class="bg-background rounded-lg mb-20 pt-1">
      <template #title>
        <h2 class="text-2xl">Mes technologies</h2>
      </template>
      <template #content>
        <BaseSubCard title="Technologies">
          <div class="flex flex-wrap gap-2">
            <Chip v-for="tech in myselfData.technos" :key="tech" class="bg-secondary text-white">
              {{ tech }}
            </Chip>
          </div>
        </BaseSubCard>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from "~/stores/portfolio";

const portfolioStore = usePortfolioStore();
const { myselfData } = portfolioStore;
</script>

<style></style>
