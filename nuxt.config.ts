// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  ssr: false,
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
      'postcss-nesting': {},

    },
  },

  build: {
    transpile: ['vuetify', 'vue-toastification', 'nuxt-primevue'],
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
  ],


  compatibilityDate: '2025-01-03'
})