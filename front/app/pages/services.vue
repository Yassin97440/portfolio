<template>
    <div class="services-page">
        <ServicesIntro />
        <ServicesList />
        <ServicesOffered />
        <ServicesPackages />
        <ServicesFAQ />
        <ServicesCallToAction />
    </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/services'
    }
  ]
})
useSeoMeta({
    title: 'Services Développement Web & IA | Freelance La Réunion (974) — Yassin Abdulla',
    description: 'Développeur freelance à La Réunion (974) : création d\'applications web sur-mesure, architecture logicielle, IA & automatisation, accompagnement CTO. Devis gratuit sous 24h.',
    ogTitle: 'Services Développement Web & IA | Freelance La Réunion (974)',
    ogDescription: 'Développeur freelance spécialisé en solutions web sur-mesure, architecture logicielle et IA. Accompagnement technique pour startups, indépendants et PME à La Réunion.',
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
