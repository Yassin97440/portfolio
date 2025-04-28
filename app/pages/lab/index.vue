<template>
    <div class="px-5 py-7 md:p-14 lg:p-28">
        <Card class="bg-background rounded-lg mb-10">
            <template #title>
                <div class="flex justify-between items-center">
                    <h1 class="text-3xl">Mon Laboratoire</h1>
                </div>
            </template>
            <template #content>
                <p class="mb-6 text-lg">
                    Bienvenue dans mon laboratoire d'expérimentations ! C'est ici que je présente mes projets techniques
                    avec des démos interactives et des explications plus approfondies.
                </p>
            </template>
        </Card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card v-for="project in labProjects" :key="project.id"
                class="bg-background rounded-lg hover:shadow-lg transition-all cursor-pointer"
                @click="navigateTo(`/lab/${project.slug}`)">
                <template #header>
                    <div class="relative">
                        <img :src="store.getCoverImageUrl(project.coverImage)" 
                            :alt="project.title"
                            class="w-full h-48 object-cover" />
                        <div class="absolute top-0 right-0 bg-action text-white px-3 py-1 rounded-bl-lg">
                            {{ project.category }}
                        </div>
                    </div>
                </template>
                <template #title>
                    <h2 class="text-2xl">{{ project.title }}</h2>
                </template>
                <template #content>
                    <p class="mb-4">
                        {{ project.summary }}
                    </p>
                    <div class="flex justify-around gap-2 mb-4">
                        <BaseTechnologyChip  :technologies="project.technologies"/>
                    </div>
                    <div class="flex justify-center">

                        <Button label="Essayer la démo" icon="pi pi-play" class="bg-action p-1" />
                    </div>
                </template>
            </Card>

            <!-- Placeholder pour futurs projets -->
            <Card
                class="bg-background rounded-lg border-dashed border-2 border-secondary flex items-center justify-center p-10">
                <div class="text-center text-secondary">
                    <i class="pi pi-plus-circle text-4xl mb-4"></i>
                    <p class="text-lg">D'autres projets arrivent bientôt...</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMyStrapiContentStore } from '~/stores/strapi-content';
import { StrapiTypes } from '~~/services/strapi/StrapiTypes';

// Données des projets du laboratoire
const labProjects = ref<any[]>([]);

const store = useMyStrapiContentStore();
const strapi = useStrapi();

onMounted(async () => {
    const response = await strapi.find(StrapiTypes.LAB_ARTICLE, {
        populate: ['coverImage', 'technologies'],
    });
    labProjects.value = response.data;
    console.log("🚀 ~ onMounted ~ labProjects.value:", labProjects.value)
});



definePageMeta({
    layout: 'default',
    title: 'Laboratoire - Yassin Abdulla',
    description: 'Découvrez mes expérimentations techniques et projets interactifs dans mon laboratoire virtuel.'
});
</script>