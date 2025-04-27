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
                    <div class="code-badge flex items-center mb-4">
                      <i class="pi pi-code text-action mr-2 text-xl"></i>
                      <span class="text-accent font-medium">Technologies</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <Chip label="NuxtJS" icon="pi pi-code" class="bg-primary/20 text-text border-none" />
                      <Chip label="Spring Boot" icon="pi pi-server" class="bg-primary/20 text-text border-none" />
                      <Chip label="MySQL" icon="pi pi-database" class="bg-primary/20 text-text border-none" />
                    </div>
                  </template>
                </Card>
              </div>
              
              <div class="col-12">
                <div v-for="(block, index) in project.description" :key="index"
                  class="rich-text-block text-text mb-5 leading-relaxed">
                  <p v-if="block.type === 'paragraph'" 
                    class="first-letter:text-2xl first-letter:font-medium first-letter:text-action">
                    {{ getTextContent(block) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-column align-items-center justify-content-center h-80vh">
        <i class="pi pi-code-branch text-6xl text-action mb-4 animate-pulse"></i>
        <Button label="Découvrir le projet" @click="fetchProject" 
          class="p-button-lg  hover:bg-action/80 text-action border-none" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { StrapiTypes } from '~~/services/strapi/StrapiTypes'

const { findOne } = useStrapi()
const project = ref(null)

// Récupère un projet spécifique par son slug
const fetchProject = async () => {
  try {
    const response = await findOne(StrapiTypes.PROJECT, "u8jdy09xsgp42n7jfej1obeu")
    project.value = response.data
    console.log("🚀 ~ Projet chargé:", project.value)
  } catch (error) {
    console.error("Erreur lors du chargement du projet:", error)
  }
}

// Extrait le texte d'un bloc rich text
const getTextContent = (block) => {
  if (!block.children || !block.children.length) return ''
  return block.children.map(child => child.text || '').join('')
}

// Formate la date pour l'affichage
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}
</script>

<style scoped>
.rich-text-block p {
  line-height: 1.9;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.rich-text-block p:hover {
  transform: translateX(4px);
}

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