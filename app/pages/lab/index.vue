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
                @click="navigateTo(project.route)">
                <template #header>
                    <div class="relative">
                        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
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
                        {{ project.description }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <Chip v-for="tech in project.technologies" :key="tech" :label="tech"
                            class="bg-secondary text-sm" />
                    </div>
                    <Button :label="project.buttonText" icon="pi pi-play" class="w-full" />
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
// Données des projets du laboratoire
const labProjects = [
    {
        id: 1,
        title: "Classification d'Images : Chat vs Chien",
        description: "Un modèle de deep learning qui classifie les images de chats et de chiens avec une précision de 95%. Essayez-le avec vos propres images !",
        image: "/cat_vs_dog.webp",
        category: "Deep Learning",
        technologies: ["Python", "TensorFlow", "FastAPI", "CNN"],
        buttonText: "Essayer la démo",
        route: "/lab/cat-vs-dog",
        status: "active"
    },
    // Vous pourrez ajouter d'autres projets ici facilement
    // {
    //     id: 2,
    //     title: "Générateur de texte avec GPT",
    //     description: "Un modèle de génération de texte basé sur l'architecture GPT, entraîné sur des articles scientifiques.",
    //     image: "/text_generator.jpg",
    //     category: "NLP",
    //     technologies: ["Python", "PyTorch", "Transformers", "CUDA"],
    //     buttonText: "Générer du texte",
    //     route: "/lab/text-generator",
    //     status: "coming-soon"
    // }
];

definePageMeta({
    layout: 'default',
    title: 'Laboratoire - Yassin Abdulla',
    description: 'Découvrez mes expérimentations techniques et projets interactifs dans mon laboratoire virtuel.'
});
</script>