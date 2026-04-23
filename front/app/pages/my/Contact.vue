<template>
  <div class="p-3 md:p-14 lg:p-28">
    <UCard class="contact-card text-text">
      <template #header>
        <h1 class="text-3xl font-bold">Parlons de votre projet</h1>
        <p class="mt-3 text-base opacity-90 max-w-3xl">
          Vous n'êtes pas en train de me déranger — j'ai ouvert cette page pour ça.
          Que vous ayez un projet précis, une question qui traîne depuis des mois,
          ou juste envie de savoir si le digital peut vraiment vous faire gagner du temps :
          écrivez-moi. Premier échange <strong>gratuit</strong>, sans engagement,
          réponse sous <strong>24 h ouvrées</strong>.
        </p>
      </template>

      <!-- 1) Canal prioritaire : WhatsApp -->
      <BaseSubCard class="mb-6">
        <div data-aos="fade-up" class="whatsapp-hero">
          <div class="whatsapp-hero__icon">
            <UIcon name="i-simple-icons-whatsapp" class="h-8 w-8 text-white" />
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold mb-1">Le plus rapide : un mot sur WhatsApp</h2>
            <p class="text-sm opacity-90 mb-4">
              C'est généralement là que je réponds le plus vite, souvent dans l'heure pendant les jours ouvrés.
              Cliquez, le message est déjà pré-rempli — vous n'avez qu'à l'ajuster.
            </p>
            <a
              :href="whatsappHref"
              target="_blank"
              rel="noopener"
              class="whatsapp-button"
            >
              <UIcon name="i-simple-icons-whatsapp" class="h-5 w-5" />
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </BaseSubCard>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 2) Formulaire -->
        <div data-aos="fade-up" data-aos-duration="800">
          <BaseSubCard>
            <h2 class="text-xl font-semibold mb-2">Ou écrivez-moi un message</h2>
            <p class="text-sm opacity-80 mb-6">
              4 champs suffisent. Je reviens vers vous dans la journée.
            </p>
            <ClientOnly>
              <ContactForm />
            </ClientOnly>
          </BaseSubCard>
        </div>

        <!-- 3) Infos complémentaires (email / horaires / localisation) -->
        <BaseSubCard>
          <div class="space-y-6">
            <div data-aos="fade-left" data-aos-delay="100">
              <h2 class="text-xl font-semibold mb-4">Autres façons de me joindre</h2>

              <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                <div class="bg-action/10 p-3 rounded-full">
                  <UIcon name="i-lucide-mail" class="h-6 w-6 text-action" />
                </div>
                <div class="w-full overflow-hidden">
                  <p class="text-sm text-secondary font-medium">Par email</p>
                  <a :href="`mailto:${email}`"
                    class="text-action font-medium hover:underline block text-ellipsis overflow-hidden">
                    {{ email }}
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                <div class="bg-action/10 p-3 rounded-full">
                  <UIcon name="i-lucide-clock" class="h-6 w-6 text-action" />
                </div>
                <div>
                  <p class="text-sm text-secondary font-medium">Disponibilité</p>
                  <p class="font-medium">Lundi &mdash; Vendredi, 9h &mdash; 18h (heure Réunion)</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 transition-all duration-300 hover:bg-primary/30 rounded-lg">
                <div class="bg-action/10 p-3 rounded-full">
                  <UIcon name="i-lucide-map-pin" class="h-6 w-6 text-action" />
                </div>
                <div>
                  <p class="text-sm text-secondary font-medium">Où je suis</p>
                  <p class="font-medium">La Réunion (974) &mdash; déplacements possibles sur toute l'île</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 class="text-lg font-semibold mb-3">Me retrouver ailleurs</h3>
              <div class="flex flex-wrap gap-3">
                <UButton
                  to="https://www.linkedin.com/in/yassin-abdulla97440/"
                  target="_blank"
                  color="neutral"
                  variant="outline"
                  icon="i-simple-icons-linkedin"
                >
                  LinkedIn
                </UButton>
                <UButton
                  to="https://github.com/Yassin97440"
                  target="_blank"
                  color="neutral"
                  variant="outline"
                  icon="i-simple-icons-github"
                >
                  GitHub
                </UButton>
              </div>
            </div>

            <div class="reassurance">
              <UIcon name="i-lucide-shield-check" class="reassurance__icon" />
              <p>
                Vos informations restent entre nous. Je ne partage aucune donnée,
                je ne revends rien, je ne vous inscris à aucune newsletter sans votre accord.
              </p>
            </div>
          </div>
        </BaseSubCard>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { whatsappLink, whatsappMessages, email } = useContactChannels()
const whatsappHref = whatsappLink({ message: whatsappMessages.homepage })

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://yassin.abdulla.fr/my/Contact'
    }
  ]
})

useSeoMeta({
  title: 'Contact | Développeur Freelance La Réunion (974) — Yassin Abdulla',
  description: "Parlons de votre projet. Freelance basé à La Réunion (974), WhatsApp, email, formulaire : 3 façons de me joindre, réponse sous 24 h, devis gratuit.",
  ogTitle: 'Contactez-moi | Développeur Freelance La Réunion',
  ogDescription: "Un mot sur WhatsApp, un formulaire de 4 champs, ou un email : on se donne rendez-vous pour un premier échange gratuit."
})
</script>

<style scoped>
.contact-card {
  background-color: var(--background);
}

.whatsapp-hero {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1rem 0;
}

.whatsapp-hero__icon {
  background-color: #25D366;
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #25D366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  background-color: #1ebe5b;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
}

.reassurance {
  display: flex;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background-color: rgba(var(--action-rgb, 230, 180, 80), 0.1);
  border-radius: 0.5rem;
  font-size: 0.85rem;
  opacity: 0.9;
  line-height: 1.45;
}

.reassurance__icon {
  color: var(--action);
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

@media (max-width: 640px) {
  .whatsapp-hero {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
