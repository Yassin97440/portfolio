// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    // Ajoutez ici le module Pinia
    '@pinia/nuxt'
  ],

  compatibilityDate: '2025-01-03'
})