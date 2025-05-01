<template>
  <div class="project-container bg-background min-h-screen py-10">
    <div class="container mx-auto px-4 max-w-6xl">
      <div v-if="project" class="grid">
        <div class="col-12 lg:col-10 lg:col-offset-1 p-5 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl shadow-lg">
          <!-- En-tête du projet avec effet gradient -->
          <div class="project-header mb-8 border-l-4 border-action pl-4">
            <h1 class="text-4xl font-bold mb-3 text-text">{{ project.title }}</h1>
            <div class="flex flex-wrap gap-3 mb-4">
              <Tag severity="info" class="border-none bg-primary/20 ">
                <i class="pi pi-calendar mr-2"></i>
                {{ formatDate(project.date) }}
              </Tag>
              <Tag v-if="project.isPersonal" severity="success" class="border-none bg-secondary/30 ">
                <i class="pi pi-user mr-2"></i>
                Projet Personnel
              </Tag>
            </div>
          </div>

          <Divider class="mb-6 border-action/30" />

          <!-- Contenu du projet avec amélioration visuelle -->
          <div class="project-content">
            <div class="grid">
              <div class="col-12">
                <Card class="mb-6 border-none bg-secondary shadow-md">
                  <template #content>
                    <div class="code-badge flex items-center mb-5">
                      <i class="pi pi-code text-action mr-2 text-xl"></i>
                      <span class="text-accent font-medium text-xl">Technologies</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <BaseTechnologyChip :technologies="project.technologies" />

                    </div>
                  </template>
                </Card>
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
import { useMyStrapiContentStore } from '~/stores/strapi-content'


const route = useRoute()
const project = ref(null)
const strapiContentStore = useMyStrapiContentStore()
onMounted(() => {
  fetchProject()
})
// Récupère un projet spécifique par son slug
const fetchProject = async () => {
  try {
    const response = await strapiContentStore.findProjectById(route.params.id)
    project.value = response
  } catch (error) {
    console.error("Erreur lors du chargement du projet:", error)
  }
}


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
  background-color: var(--action);
}
</style>