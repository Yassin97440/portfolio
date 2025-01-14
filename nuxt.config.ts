// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yassin Abdulla | Développeur Full Stack',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logoYA.png' },
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: "ImFW6sDHGh4hTyrq67W5_u0QABKjflDEwOclhWnq55s",
        }
      ]
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

  devServer: {
    https: {
      key: fs.readFileSync('./localhost-key.pem', 'utf-8'),
      cert: fs.readFileSync('./localhost.pem', 'utf-8')
    },
    port: 3000
  },

  compatibilityDate: '2025-01-03'
})
