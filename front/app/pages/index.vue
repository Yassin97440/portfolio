<template>
  <div class="px-5 py-7 md:p-14 lg:p-28">
    <LandingPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr'
    }
  ]
})

useSeoMeta({
  title: 'Yassin Abdulla | Développeur logiciel - Web',
  description: 'Freelance développeur logiciel et web Full Stack. Expert en Backend, bases de données et architectures logicielles. Accompagnement technique en digitalisation pour startups, indépendants, TPE, PME. Sur Ile de La Réunion (974).',
  ogTitle: 'Yassin Abdulla | Développeur logiciel - Web',
  ogDescription: 'Freelance développeur logiciel et web Full Stack. Expert en Backend, bases de données et architectures logicielles. Accompagnement technique en digitalisation pour startups, indépendants, TPE, PME. Sur Ile de La Réunion (974).',
})
</script>

<style scoped></style>
