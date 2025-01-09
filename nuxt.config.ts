// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yassin Abdulla | Développeur Full Stack',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logoYA.png' },
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  ssr: false,
  css: [
    '~/assets/css/tailwind.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      'postcss-nesting': {},

    },
  },

  build: {
    transpile: ['nuxt-primevue'],
  },

  primevue: {
    options: {
      theme: 'none'
    }
  },

  modules: [
    // Ajoutez ici le module Pinia
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],


  compatibilityDate: '2025-01-03'
})