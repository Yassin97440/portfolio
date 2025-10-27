<template>
    <div class="px-5 py-7 md:p-14 lg:p-28">
        <Card class="bg-background rounded-lg mb-10 text-text">
            <template #title>
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl">{{ projectData.title }}</h1>
                    <NuxtLink to="/lab" class="text-action hover:underline text-sm">
                        Retour au Lab
                    </NuxtLink>
                </div>
            </template>
            <template #content>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Partie démo -->
                    <div class="demo-section">
                        <Card class="bg-primary mb-6">
                            <template #title>
                                <h2 class="text-xl text-text">Essayez le modèle</h2>
                            </template>
                            <template #content>
                                <div class="flex flex-col items-center">
                                    <div v-if="imagePreview" class="mb-4 relative w-full">
                                        <img :src="imagePreview" alt="Preview"
                                            class="max-h-64 max-w-full rounded-lg mx-auto" />
                                        <div v-if="result"
                                            class="absolute top-2 right-2 px-3 py-1 rounded-lg text-white font-bold"
                                            :class="result.prediction === 'dog' ? 'bg-blue-500' : 'bg-orange-500'">
                                            {{ result.prediction }} ({{result.confidence }}%)
                                        </div>
                                    </div>

                                    <FileUpload v-if="!imagePreview" :multiple="false" accept="image/*"
                                        :maxFileSize="1000000" @select="onImageSelect" @error="onFileError"
                                        :customUpload="true" class="w-full">
                                        <template #empty>
                                            <div class="flex items-center justify-center flex-col p-6">
                                                <i class="pi pi-image text-4xl mb-2 text-secondary" />
                                                <p class="text-text">Glissez une image ou cliquez sur une image exemple
                                                </p>
                                            </div>
                                        </template>
                                        <template #header="{ chooseCallback }">
                                            <div class="flex justify-center p-3">
                                                <Button @click="chooseCallback()" icon="pi pi-upload"
                                                    label="Sélectionner une image" class="p-button-action p-2" />
                                            </div>
                                        </template>
                                    </FileUpload>

                                    <div v-if="imagePreview && !result && !isLoading" class="flex gap-4  mt-4">
                                        <Button icon="pi pi-search" label="Analyser l'image" @click="analyzeImage"
                                            class="w-full bg-action" severity="success" />
                                    </div>

                                    <div v-if="imagePreview" class="flex gap-4 mt-4">
                                        <Button icon="pi pi-refresh" label="Réinitialiser" @click="resetDemo"
                                            class="w-full" severity="secondary" />
                                    </div>
                                    <ProgressBar v-if="isLoading" mode="indeterminate" class="w-full mt-4" />
                                </div>
                            </template>
                        </Card>

                        <Card class="bg-primary">
                            <template #title>
                                <h2 class="text-xl text-text">Images d'exemple</h2>
                            </template>
                            <template #content>
                                <div class="grid grid-cols-3 gap-2">
                                    <img v-for="(img, index) in projectData.sampleImages" :key="index" :src="img"
                                        @click="useSampleImage(img)"
                                        class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity" />
                                </div>
                            </template>
                        </Card>
                    </div>

                    <!-- Partie explication -->
                    <div class="explanation-section">
                        <Card class="bg-primary mb-6">
                            <template #title>
                                <h2 class="text-xl text-text">Comment ça marche ?</h2>
                            </template>
                            <template #content>
                                <div class="space-y-4 text-sm text-text">
                                    <p v-html="projectData.explanation.intro"></p>

                                    <h3 class="font-bold mt-4">Architecture du modèle :</h3>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li v-for="(item, index) in projectData.explanation.architecture" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>

                                    <h3 class="font-bold mt-4">Performances :</h3>
                                    <p>{{ projectData.explanation.performance }}</p>

                                    <h3 class="font-bold mt-4">Limitations :</h3>
                                    <p>Le modèle peut avoir des difficultés avec :</p>
                                    <ul class="list-disc pl-5">
                                        <li v-for="(item, index) in projectData.explanation.limitations" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </Card>

                        <Card class="bg-primary">
                            <template #title>
                                <h2 class="text-xl text-text">Technologies utilisées</h2>
                            </template>
                            <template #content>
                                <div class="space-y-4">
                                    <div v-for="(tech, index) in projectData.technologies" :key="index"
                                        class="flex items-start gap-3">
                                        <div class="bg-secondary rounded-full p-2 flex-shrink-0">
                                            <i :class="tech.icon" class="text-lg"></i>
                                        </div>
                                        <div class="text-text">
                                            <h3 class="font-bold">{{ tech.name }}</h3>
                                            <p class="text-sm">{{ tech.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCatVsDogStore } from '~/stores/cat-vs-dog';
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/lab/cat-vs-dog'
    }
  ]
})

definePageMeta({
    layout: 'default',
    title: 'Classification Chat vs Chien - Lab',
    description: 'Essayez mon modèle de deep learning qui classifie les images de chats et de chiens avec une précision de 95%.'
});

// Données du projet structurées
const projectData = {
    title: "Classification d'Images : Chat vs Chien",
    apiEndpoint: "http://localhost:8000/predict/",
    sampleImages: [
        '/lab/cat_vs_dog/sample_cat_1.jpg',
        '/lab/cat_vs_dog/sample_cat_2.jpg',
        '/lab/cat_vs_dog/sample_cat_3.jpg',
        '/lab/cat_vs_dog/sample_dog_1.jpg',
        '/lab/cat_vs_dog/sample_dog_2.jpg',
        '/lab/cat_vs_dog/sample_dog_3.jpg',
    ],
    explanation: {
        intro: "Ce modèle utilise un <strong>réseau de neurones convolutif (CNN)</strong> entraîné sur plus de 8 000 images de chats et de chiens. J'ai pu experimenté pas mal de fois différentes configurations en jouant avec les hyper-paramètres jusqu'à stagner dans l'apprentissage sur les configurations les optis que j'avais notés au fur et à mesure. Je pense que je pourrai améliorer les résultats en augmentant le datasets, et/ou en optimisant la transformation d'images pour l'entrainement. Et dans un second temps, j'ai pu essayé <strong>le transfert d'apprentissage en utilisant un modèle pré-entraîné (MobileNet)</strong> pour optimiser la pérformance et la taille du modèle.",
        architecture: [
            "Couches de convolution pour extraire les caractéristiques/ Couche pré-entrainté (MobileNetV2)",
            "Couches de pooling pour réduire la dimensionnalité",
            "Couches denses pour la classification finale",
            "Dropout pour éviter le surapprentissage",
        ],
        performance: "Le modèle atteint une précision de 80% avec les couches CNN entrainé qu'avec ces images. Et 97% avec l'utilisation de transfert d'apprentissage.",
        limitations: [
            "limitations de l'entrainements avec les couches CNN dûe à la taille du dataset je pense "
        ]
    },
    technologies: [
        {
            name: 'TensorFlow/Keras',
            icon: 'pi pi-microchip-ai',
            description: 'Framework de deep learning utilisé pour construire et entraîner le modèle CNN.'
        },
        {
            name: 'FastAPI',
            icon: 'pi pi-bolt',
            description: 'API Python qui sert le modèle et traite les requêtes.'
        },
        {
            name: 'Nuxt.js',
            icon: 'pi pi-desktop',
            description: 'Utilisation du portfolio existant pour la démo'
        },
        {
            name: 'Docker',
            icon: 'pi pi-box',
            description: 'Conteneurisation du modèle et de l\'API pour un déploiement facile.'
        }
    ]
};

const catVsDogStore = useCatVsDogStore();
const imagePreview = ref<string | null>(null);
const selectedFile = ref<File | null>(null);

// Utiliser les valeurs du store
const isLoading = computed(() => catVsDogStore.isLoading);
const result = computed(() => catVsDogStore.result);

// Séparation de la sélection et de l'analyse
const onImageSelect = (event: any) => {
    const file = event.files[0];
    if (!file) return;

    // Créer un aperçu de l'image
    imagePreview.value = URL.createObjectURL(file);
    selectedFile.value = file;
};

const useSampleImage = async (imageSrc: string) => {
    // Réinitialiser le résultat précédent
    catVsDogStore.result = null;

    // Mettre à jour l'aperçu de l'image
    imagePreview.value = imageSrc;

    // Convertir l'URL en Blob pour l'envoyer à l'API
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    selectedFile.value = new File([blob], 'sample.jpg', { type: 'image/jpeg' });
};

// Fonction pour analyser l'image sélectionnée
const analyzeImage = async () => {
    if (!selectedFile.value) return;
    try {
        await catVsDogStore.classifyImage(selectedFile.value);
    } catch (error) {
        // Gérer l'erreur (afficher un message, etc.)
    }
};

const onFileError = (event: any) => {
    // Gérer les erreurs de téléchargement
    console.error('Erreur de téléchargement:', event);
};

const resetDemo = () => {
    imagePreview.value = null;
    catVsDogStore.result = null;
    selectedFile.value = null;
};
</script>

<style scoped>
:deep(.p-fileupload-content) {
    border: 2px dashed var(--secondary);
    border-radius: 0.5rem;
    background-color: transparent;
}

:deep(.p-fileupload-buttonbar) {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    justify-content: center;
}

:deep(.p-fileupload-buttonbar .p-button) {
    background-color: var(--action);
    border-color: var(--action);
    margin: 0;
}

:deep(.p-fileupload-buttonbar .p-button:hover) {
    background-color: var(--action);
    filter: brightness(1.1);
    border-color: var(--action);
}

:deep(.p-button-action) {
    background-color: var(--action);
    border-color: var(--action);
}

:deep(.p-button-action:hover) {
    background-color: var(--action);
    filter: brightness(1.1);
    border-color: var(--action);
}

:deep(.p-fileupload-header) {
    background-color: transparent;
    border: none;
    padding: 0;
}

:deep(.p-fileupload .p-button-icon-only) {
    display: none;
}
</style>