<script setup lang="ts">


// Métadonnées spécifiques à la page
useSeoMeta({
    title: 'À propos - Mon Site',
    description: 'Découvrez mon parcours, mes compétences et ma passion pour le développement web',
})

const skills = {

    tools: [
        'Git',
        'Docker',
        'CI/CD',
        'Jira',
    ]
}

// const openUrl = (url: string) => {
//     if (typeof window !== 'undefined') {
//         window.open(url, '_blank')
//     }
// }
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 py-8">
        <Card>
            <template #title>
                <div class="flex items-center gap-2"></div>
            </template>
            <template #content>

                <BaseSubCard>
                    <template #title>
                        <div class="flex items-center gap-2">
                            <Badge value="01" severity="primary" />
                            À propos
                        </div>
                    </template>
                    <div class="space-y-8">
                        <!-- Section Qui suis-je -->
                        <section>
                            <h2 class="text-xl font-semibold mb-4">Qui suis-je ?</h2>
                            <p class="text-lg">
                                Passionné par le développement web, je crée des solutions numériques innovantes
                                qui combinent performance technique et expérience utilisateur intuitive.
                            </p>
                        </section>

                    </div>
                </BaseSubCard>


                <BaseSubCard>
                    <template #title>
                        <h2 class="text-xl font-semibold mb-4">Mon approche</h2>

                    </template>
                    <!-- Section Approche -->
                    <section>
                        <p class="text-lg">
                            Je crois en la création de solutions web robustes et évolutives,
                            en utilisant les meilleures pratiques et les technologies modernes.
                            Mon objectif est de développer des applications qui non seulement
                            répondent aux besoins actuels mais anticipent aussi les évolutions futures.
                        </p>
                    </section>
                </BaseSubCard>
                <BaseSubCard>
                    <template #title>

                    </template>
                    <!-- Section GitHub -->
                    <h2 class="text-xl font-semibold mb-4">Me retrouver</h2>
                    <!-- <Button icon="pi pi-github" label="Voir mon GitHub" severity="secondary" link
                                    @click="openUrl('https://github.com/VOTRE-USERNAME')" /> -->
                </BaseSubCard>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.bg-surface-0 {
    background-color: var(--surface-0);
}
</style>