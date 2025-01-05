<template>
  <div class="p-5 md:p-14 lg:p-20 ">
    <Card>
      <template #title>
        <h1 class="text-2xl">{{ experience?.title }}</h1>
        <p class="text-secondary">{{ experience?.company }}</p>
      </template>
      <template #content>
        <Fieldset legend="Description" :toggleable="true" class="border mb-10">
          <p>{{ experience?.description }}</p>
        </Fieldset>
        <Fieldset legend="Détails" :toggleable="true" class="border mb-10">
          <ul class="relative list-disc ml-3">
            <li v-for="detail in experience?.Details" :key="detail">{{ detail }}</li>
          </ul>
        </Fieldset>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from '~/stores/portfolio'
const route = useRoute()
const experienceId = route.params.id
const experience = usePortfolioStore().getExperienceById(Number(experienceId))
</script>

<style>

</style>