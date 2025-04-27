<template>
    <Card class="bg-background rounded-lg mb-20">
        <template #title>
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
                    <Card class="my-4 bg-primary"  @click="navigateTo(`/experience/${slotProps.item.documentId}`)"
                    data-aos="zoom-in-up" data-aos-duration="1000" >
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
                                <BaseRichText :content="slotProps.item.shortDetails" />
                            </div>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { usePortfolioStore } from "~/stores/portfolio";
import { useWindowSize } from "@vueuse/core";
import { StrapiTypes } from "~~/services/strapi/StrapiTypes";

const { width } = useWindowSize();
const store = usePortfolioStore();
const experiences = ref<any[]>([]);

const strapi = useStrapi();

onMounted(async () => {
    const response = await strapi.find(StrapiTypes.EXPERIENCE, { populate: ['skills'] });
    experiences.value = response.data;
    console.log("🚀 ~ onMounted ~ response.data:", response.data)
});
</script>

<style scoped></style>