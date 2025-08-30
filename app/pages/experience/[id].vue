<template>
  <div class="bg-background min-h-screen py-10">
    <div class="container mx-auto px-4 max-w-6xl">
      <div v-if="experience" class="grid">
        <div class="col-12 lg:col-10 lg:col-offset-1 p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl shadow-lg">
          
          <!-- En-tête de l'expérience avec effet gradient -->
          <div class="experience-header mb-8 border-l-4 border-action pl-4">
            <h1 class="text-4xl font-bold mb-2 text-text">{{ experience.title }}</h1>
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
              <div class="flex items-center text-secondary">
                <i class="pi pi-building mr-2"></i>
                <span class="font-medium">{{ experience.company }}</span>
              </div>
              <div class="flex items-center text-secondary" v-if="experience.location">
                <i class="pi pi-map-marker mr-2"></i>
                <span>{{ experience.location }}</span>
              </div>
            </div>
            
            <!-- Période -->
            <div class="flex items-center mt-3 bg-primary/20 text-text p-3 rounded-lg w-fit">
              <i class="pi pi-calendar mr-3 text-action"></i>
              <span>{{ formatDate(experience.start_date) }} - {{ experience.end_date ? formatDate(experience.end_date) : 'Présent' }}</span>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="grid">
            <!-- Description -->
            <div class="col-12 mb-6">
              <Card class="border-none bg-background bg-opacity-75 shadow-md">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <i class="pi pi-file-edit text-action mr-2 text-xl"></i>
                    <span class="text-xl font-medium text-text">Description</span>
                  </div>
                </template>
                <template #content>
                  <BaseRichText :content="experience.description"
                    />
                </template>
              </Card>
            </div>
            
            <!-- Compétences -->
            <div class="col-12 mb-6" v-if="experience.skills && experience.skills.length">
              <Card class="border-none bg-background/60 shadow-md">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <i class="pi pi-code text-action mr-2 text-xl"></i>
                    <span class="text-xl font-medium text-text">Compétences</span>
                  </div>
                </template>
                <template #content>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <Chip v-for="skill in experience.skills" :key="skill" 
                      :label="skill" 
                      class="bg-primary/20 text-text border-none" />
                  </div>
                </template>
              </Card>
            </div>
            
            <!-- Détails (si nécessaire) -->
            <div class="col-12" v-if="experience.Details && experience.Details.length">
              <Card class="border-none bg-background/60 shadow-md">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <i class="pi pi-list text-action mr-2 text-xl"></i>
                    <span class="text-xl font-medium text-text">Détails</span>
                  </div>
                </template>
                <template #content>
                  <ul class="pl-4 space-y-2">
                    <li v-for="detail in experience.Details" :key="detail" class="flex items-start">
                      <i class="pi pi-chevron-right text-action mr-2 mt-1"></i>
                      <span>{{ detail }}</span>
                    </li>
                  </ul>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-column align-items-center justify-content-center h-80vh">
        <i class="pi pi-spin pi-spinner text-6xl text-action mb-4"></i>
        <p class="text-text">Chargement de l'expérience...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StrapiTypes } from '~~/services/strapi/StrapiTypes'

const route = useRoute()
const strapi = useStrapi()
const experience = ref<any>(null)

useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://yassin.abdulla.fr/experience/${route.params.id}`
    }
  ]
})

onMounted(async () => {
  
  const response = await strapi.findOne(StrapiTypes.EXPERIENCE, String(route.params.id))
  experience.value = response.data
  console.log(experience.value)
})

// Formate la date pour l'affichage
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}
</script>

<style scoped>
.experience-header {
  position: relative;
  transition: all 0.3s ease;
}

/* Effet subtil d'éclairage sur les cartes */
:deep(.p-card) {
  transition: all 0.3s ease;
}

:deep(.p-card:hover) {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>