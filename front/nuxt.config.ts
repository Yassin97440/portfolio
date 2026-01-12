// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yassin Abdulla | Développeur logiciel - Web',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logoYA.png' },
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        },
        { name: 'description', content: 'Freelance développeur logiciel et web Full Stack Expert en Backend, bases de données et architectures logicielles. Experiences en progiciel, site vitrine, développement web moderne. Conseils et accompagnements digitalisation. Sur Ile de La Réunion (974).' },
        { property: 'og:image', content: 'https://yassin.abdulla.fr/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
      ]
    },
  },
  site: {
    url: 'https://yassin.abdulla.fr',
    name: 'Yassin Abdulla | Développeur logiciel',
    description: 'Freelance développeur logiciel et web Full Stack. Expert en Backend, bases de données et architectures logicielles. Accompagnement technique en digitalisation pour startups, indépendants, TPE, PME. Sur Ile de La Réunion (974).',
    defaultLocale: 'fr',
  },

  devtools: { enabled: true },

  ssr: false,

  // CSS with Nuxt UI imports
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    mistralApiKey: process.env.MISTRAL_API_KEY,
    catDogApi: process.env.CAT_DOG_API,
    resendApiKey: process.env.RESEND_API_KEY,

    public: {
      strapiUrl: process.env.STRAPI_URL,
    }
  },

  sitemap: {
    exclude: []
  },

  strapi: {
    url: process.env.STRAPI_URL,
    token: process.env.STRAPI_TOKEN,
  },

  // @nuxt/ui must be first in modules
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/mdc', 'nuxt-aos', '@nuxtjs/strapi', '@nuxtjs/seo'],

  // Nuxt UI configuration
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      transitions: true
    }
  },

  devServer: {
    https: {
      key: fs.readFileSync('./localhost-key.pem', 'utf-8'),
      cert: fs.readFileSync('./localhost.pem', 'utf-8')
    },
    port: 3000
  },

  compatibilityDate: '2025-01-03',

  ogImage: { enabled: false },

  robots: {}
})
