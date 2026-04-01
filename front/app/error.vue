<template>
  <UApp>
    <div class="min-h-screen flex flex-col bg-[var(--ui-bg)]">
      <UHeader title="Yassin Abdulla" to="/" class="bg-background" />

      <div class="flex-1 flex items-center justify-center px-6 py-16">
        <div class="text-center max-w-lg">
          <p class="text-8xl font-black text-earth-500 tabular-nums leading-none select-none">
            {{ error?.statusCode || 500 }}
          </p>

          <div class="mt-6 flex justify-center">
            <UIcon :name="errorMeta.icon" class="size-16 text-olive-400" />
          </div>

          <h1 class="mt-4 text-2xl md:text-3xl font-bold text-[var(--ui-text-highlighted)]">
            {{ errorMeta.title }}
          </h1>

          <p class="mt-3 text-base text-[var(--ui-text-muted)] leading-relaxed">
            {{ errorMeta.description }}
          </p>

          <USeparator class="my-8" />

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <UButton
              icon="i-lucide-home"
              size="lg"
              color="primary"
              to="/"
              @click="handleError"
            >
              Retour à l'accueil
            </UButton>

            <UButton
              icon="i-lucide-book"
              size="lg"
              color="neutral"
              variant="outline"
              to="/blog"
              @click="handleError"
            >
              Voir le blog
            </UButton>

            <UButton
              v-if="canGoBack"
              icon="i-lucide-arrow-left"
              size="lg"
              color="neutral"
              variant="ghost"
              @click="goBack"
            >
              Page précédente
            </UButton>
          </div>

          <p class="mt-10 text-sm text-[var(--ui-text-dimmed)]">
            Erreur {{ error?.statusCode || 500 }} — {{ error?.statusMessage || 'Erreur interne du serveur' }}
          </p>
        </div>
      </div>

      <UFooter>
        <template #left>
          <p class="text-sm text-muted">
            © {{ new Date().getFullYear() }} Yassin Abdulla. Tous droits réservés.
          </p>
        </template>
        <template #right>
          <div class="flex gap-2">
            <UButton
              to="https://github.com/Yassin97440"
              target="_blank"
              variant="ghost"
              color="neutral"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
            <UButton
              to="https://www.linkedin.com/in/yassin-abdulla97440"
              target="_blank"
              variant="ghost"
              color="neutral"
              icon="i-simple-icons-linkedin"
              aria-label="LinkedIn"
            />
          </div>
        </template>
      </UFooter>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const canGoBack = ref(false)

onMounted(() => {
  canGoBack.value = window.history.length > 1
})

interface ErrorMeta {
  icon: string
  title: string
  description: string
}

const errorMap: Record<number, ErrorMeta> = {
  401: {
    icon: 'i-lucide-lock',
    title: 'Accès non autorisé',
    description: 'Vous devez être authentifié pour accéder à cette page. Vérifiez vos identifiants ou retournez à l\'accueil.',
  },
  403: {
    icon: 'i-lucide-shield-x',
    title: 'Accès interdit',
    description: 'Vous n\'avez pas les permissions nécessaires pour accéder à cette ressource.',
  },
  404: {
    icon: 'i-lucide-search-x',
    title: 'Page introuvable',
    description: 'La page que vous recherchez n\'existe pas ou a été déplacée. Vérifiez l\'URL ou explorez le site depuis l\'accueil.',
  },
  408: {
    icon: 'i-lucide-clock',
    title: 'Délai d\'attente dépassé',
    description: 'Le serveur a mis trop de temps à répondre. Vérifiez votre connexion internet et réessayez.',
  },
  429: {
    icon: 'i-lucide-timer',
    title: 'Trop de requêtes',
    description: 'Vous avez envoyé trop de requêtes en peu de temps. Patientez quelques instants avant de réessayer.',
  },
  500: {
    icon: 'i-lucide-server-crash',
    title: 'Erreur interne du serveur',
    description: 'Quelque chose s\'est mal passé de notre côté. L\'équipe a été notifiée. Réessayez dans quelques instants.',
  },
  502: {
    icon: 'i-lucide-cloud-off',
    title: 'Passerelle invalide',
    description: 'Le serveur a reçu une réponse invalide. Le problème est temporaire, réessayez dans un instant.',
  },
  503: {
    icon: 'i-lucide-hard-drive-off',
    title: 'Service indisponible',
    description: 'Le site est temporairement en maintenance ou surchargé. Revenez dans quelques minutes.',
  },
}

const defaultError: ErrorMeta = {
  icon: 'i-lucide-triangle-alert',
  title: 'Une erreur est survenue',
  description: 'Quelque chose d\'inattendu s\'est produit. Essayez de revenir à l\'accueil ou réessayez plus tard.',
}

const errorMeta = computed<ErrorMeta>(() => {
  const code = props.error?.statusCode
  if (code && errorMap[code]) return errorMap[code]
  return defaultError
})

const handleError = () => clearError()

const goBack = () => {
  clearError()
  if (import.meta.client) {
    window.history.back()
  }
}

useSeoMeta({
  title: () => `${errorMeta.value.title} | Yassin Abdulla`,
  description: () => errorMeta.value.description,
  robots: 'noindex, nofollow',
})
</script>
