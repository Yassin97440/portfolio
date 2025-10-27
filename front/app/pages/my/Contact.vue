<template>
  <div class="p-3 md:p-14 lg:p-28">
    <Card class="bg-background text-text">
      <template #title>
        <h2 class="text-3xl font-bold">Contactez-moi</h2>
      </template>
      <template #content>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Colonne d'informations de contact -->
          <BaseSubCard>
            <div class="space-y-6">
              <div data-aos="fade-right" data-aos-delay="100">
                <h3 class="text-xl font-semibold mb-4">Restons en contact</h3>
                <p class="mb-6">
                  Que vous ayez un projet en tête, besoin d'une expertise technique, ou simplement envie d'échanger
                  sur des opportunités de collaboration, je suis à votre écoute.
                </p>

                <!-- Email -->
                <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                  <div class="bg-action/10 p-3 rounded-full">
                    <EnvelopeIcon class="h-6 w-6 text-action" />
                  </div>
                  <div class="w-full overflow-hidden">
                    <p class="text-sm text-secondary font-medium">Email</p>
                    <a href="mailto:yassin.abdulla.pro@protonmail.com"
                      class="text-action font-medium hover:underline block text-ellipsis overflow-hidden">
                      yassin.abdulla.pro@protonmail.com
                    </a>
                  </div>
                </div>

                <!-- Disponibilité -->
                <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                  <div class="bg-action/10 p-3 rounded-full">
                    <ClockIcon class="h-6 w-6 text-action" />
                  </div>
                  <div>
                    <p class="text-sm text-secondary font-medium">Disponibilité</p>
                    <p class="font-medium">Lundi - Vendredi, 9h - 18h</p>
                  </div>
                </div>

                <!-- Localisation -->
                <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                  <div class="bg-action/10 p-3 rounded-full">
                    <MapPinIcon class="h-6 w-6 text-action" />
                  </div>
                  <div>
                    <p class="text-sm text-secondary font-medium">Localisation</p>
                    <p class="font-medium">La Réunion (974) et Montpellier, France (Remote friendly)</p>
                  </div>
                </div>
              </div>

              <!-- Réseaux sociaux -->
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 class="text-xl font-semibold mb-4">Retrouvez-moi sur</h3>
                <div class="flex flex-wrap gap-4">
                  <a href="https://www.linkedin.com/in/yassin-abdulla97440/" target="_blank"
                    class="flex items-center gap-2 bg-primary hover:bg-action/10 px-4 py-2 rounded-lg transition-colors duration-300">
                    <img src="/icons/linkedin.svg" class="h-5 w-5" alt="LinkedIn" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/votre-username" target="_blank"
                    class="flex items-center gap-2 bg-primary hover:bg-action/10 px-4 py-2 rounded-lg transition-colors duration-300">
                    <img src="/icons/github.svg" class="h-5 w-5" alt="GitHub" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Statut actuel -->
              <!-- <div data-aos="fade-up" data-aos-delay="300" class="p-4 bg-action/10 rounded-lg border-l-4 border-action">
                <h4 class="font-semibold text-action mb-2">Statut actuel</h4>
                <p>Disponible pour des missions freelance à partir de <span class="font-bold">Janvier 2024</span></p>
              </div> -->
            </div>
          </BaseSubCard>

          <!-- Colonne de formulaire -->
          <div data-aos="fade-left" data-aos-duration="800">
            <BaseSubCard>
              <h3 class="text-xl font-semibold mb-6 ">Envoyez-moi un message</h3>
              <ClientOnly>
                <ContactForm />
              </ClientOnly>
            </BaseSubCard>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/solid'
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/my/Contact'
    }
  ]
})

useSeoMeta({
  title: 'Contact - Yassin Abdulla | Développeur logiciel - Web',
  description: 'Contactez-moi pour discuter de vos projets ou pour toute demande de collaboration.',
  ogTitle: 'Contact - Yassin Abdulla | Développeur logiciel - Web',
  ogDescription: 'Contactez-moi pour discuter de vos projets ou pour toute demande de collaboration.',
})
</script>
