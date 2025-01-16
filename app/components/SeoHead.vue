<script setup lang="ts">
interface Props {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Yassin | Développeur logiciel et web',
    description: 'Développeur Full Stack, Java, SPring boot, Nuxt. Machine learning, IA, ',
    image: '/images/og-banner.svg',
    url: 'https://yassin.abdulla.fr',
    type: 'website'
})

useHead({
    title: props.title,
    meta: [
        { name: 'description', content: props.description },

        // Open Graph
        { property: 'og:title', content: props.title },
        { property: 'og:description', content: props.description },
        { property: 'og:image', content: props.image },
        { property: 'og:url', content: props.url },
        { property: 'og:type', content: props.type },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        { name: 'twitter:description', content: props.description },
        { name: 'twitter:image', content: props.image },
    ],
    link: [
        { rel: 'canonical', href: props.url }
    ]
})
</script>

<template>
    <div></div>
</template>