<template>
    <div class="px-5 py-7 md:p-14 lg:p-28">
        <UCard class="bg-background rounded-lg mb-10" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <div class="flex justify-between items-center">
                    <h1 class="text-3xl text-text">Mon Laboratoire</h1>
                </div>
            </template>
            <p class="mb-6 text-lg text-text">
                Bienvenue dans mon laboratoire d'expérimentations ! C'est ici que je présente mes projets techniques
                avec des démos interactives et des explications plus approfondies.
            </p>
        </UCard>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UCard v-for="project in labProjects" :key="project.id"
                class="bg-primary rounded-lg hover:shadow-lg transition-all cursor-pointer"
                :ui="{ root: 'bg-primary rounded-lg' }"
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
                <h2 class="text-2xl text-text mb-4">{{ project.title }}</h2>
                <p class="mb-8 text-text">
                    {{ project.summary }}
                </p>
                <div class="flex justify-around gap-2 mb-4">
                    <BaseTechnologyChip :technologies="project.technologies"/>
                </div>
                <div class="flex justify-center">
                    <UButton icon="i-lucide-play" class="bg-action">
                        Essayer la démo
                    </UButton>
                </div>
            </UCard>

            <!-- Placeholder pour futurs projets -->
            <UCard
                class="bg-background rounded-lg border-dashed border-2 border-secondary flex items-center justify-center p-10"
                :ui="{ root: 'bg-background rounded-lg border-dashed border-2 border-secondary' }">
                <div class="text-center text-secondary">
                    <UIcon name="i-lucide-plus-circle" class="text-4xl mb-4" />
                    <p class="text-lg">D'autres projets arrivent bientôt...</p>
                </div>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">

// Données des projets du laboratoire
const labProjects = ref<any[]>([]);

const store = useStrapiContentStore();
const strapi = useStrapi();

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/lab'
    }
  ]
})

onMounted(async () => {
    const response = await strapi.find(StrapiTypes.LAB_ARTICLE, {
        populate: ['coverImage', 'technologies'],
    });
    labProjects.value = response.data;
});



definePageMeta({
    layout: 'default',
    title: 'Laboratoire - Yassin Abdulla',
    description: 'Découvrez mes expérimentations techniques et projets interactifs dans mon laboratoire virtuel.'
});
</script>
