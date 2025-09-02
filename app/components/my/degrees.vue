<template>
  <div>
    <Card class="w-full bg-background rounded-lg">
      <template #title>
        <h2 class="text-xl text-text font-semibold mt-6 mb-2">Mon Cursus Scolaire</h2>
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

<script lang="ts" setup>
import { usePortfolioStore } from "~/stores/portfolio";

const store = usePortfolioStore();

const { education } = store;

</script>

<style></style>