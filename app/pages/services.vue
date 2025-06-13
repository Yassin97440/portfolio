<template>
    <div class="services-page">
        <ServicesIntro />
        <ServicesOffered />
        <ServicesPackages />
        <ServicesFAQ />
        <ServicesCallToAction />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Services - Yassin Abdulla | Freelance Développeur Fullstack',
    description: 'Freelance développeur logiciel Montpellier / La Réunion (974) : création d\'applications web, architecture logicielle, IA/automatisation, accompagnement CTO. Devis gratuit.',
    ogTitle: 'Services Développement Web & IA - Freelance Montpellier/ La Réunion (974)',
    ogDescription: 'Développeur freelance spécialisé en solutions web sur-mesure, architecture logicielle. Accompagnement technique pour startups, indépendants et PME.',
})
</script>

<style scoped>
.services-page {
    padding: 1.25rem 1.25rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 768px) {
    .services-page {
        padding: 3.5rem;
    }
}

@media (min-width: 1024px) {
    .services-page {
        padding: 7rem;
    }
}
</style>
