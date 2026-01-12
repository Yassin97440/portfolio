<template>
  <div class="project-container bg-transparent min-h-screen py-10">
    <div class="container mx-auto px-4 max-w-6xl">
      <div v-if="project" class="grid">
        <div class="col-12 lg:col-10 lg:col-offset-1 p-5 bg-background bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg">
          <!-- En-tête du projet avec effet gradient -->
          <div class="project-header mb-8 border-l-4 border-accent pl-4">
            <h1 class="text-4xl font-bold mb-3 text-text">{{ project.title }}</h1>
            <div class="flex flex-wrap gap-3 mb-4">
              <UBadge color="info" variant="subtle" class="border-none bg-primary/20">
                <UIcon name="i-lucide-calendar" class="mr-2" />
                {{ formatDate(project.date) }}
              </UBadge>
              <UBadge v-if="project.isPersonal" color="success" variant="subtle" class="border-none bg-secondary/30">
                <UIcon name="i-lucide-user" class="mr-2" />
                Projet Personnel
              </UBadge>
            </div>
          </div>

          <USeparator class="mb-6" />

          <!-- Contenu du projet avec amélioration visuelle -->
          <div class="project-content">
            <div class="grid">
              <div class="col-12">
                <UCard class="mb-6 border-none bg-secondary shadow-md" :ui="{ root: 'bg-secondary border-none' }">
                  <div class="code-badge flex items-center mb-5">
                    <UIcon name="i-lucide-code" class="text-accent mr-2 text-xl" />
                    <span class="text-accent font-medium text-xl">Technologies</span>
                  </div>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <BaseTechnologyChip :technologies="project.technologies" />
                  </div>
                </UCard>
              </div>
              
              <div class="col-12">
                <BaseRichText :content="project.description" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useStrapiContentStore } from '~/stores/strapiContent'

const route = useRoute()
const project = ref(null)
const strapiContentStore = useStrapiContentStore()
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://yassin.abdulla.fr/project/${route.params.id}`
    }
  ]
})

// Récupère un projet spécifique par son slug
const fetchProject = async () => {
  try {
    const response = await strapiContentStore.findProject(route.params.id)
    project.value = response
  } catch (error) {
    console.error("Erreur lors du chargement du projet:", error)
  }
}

onMounted(() => {
  fetchProject()
})

// Formate la date pour l'affichage
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

</script>

<style scoped>


.project-header {
  position: relative;
  transition: all 0.3s ease;
}

.code-badge {
  position: relative;
}

.code-badge::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--accent);
}
</style>
