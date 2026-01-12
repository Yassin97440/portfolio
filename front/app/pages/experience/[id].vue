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
                <UIcon name="i-lucide-building" class="mr-2" />
                <span class="font-medium">{{ experience.company }}</span>
              </div>
              <div class="flex items-center text-secondary" v-if="experience.location">
                <UIcon name="i-lucide-map-pin" class="mr-2" />
                <span>{{ experience.location }}</span>
              </div>
            </div>
            
            <!-- Période -->
            <div class="flex items-center mt-3 bg-primary/20 text-text p-3 rounded-lg w-fit">
              <UIcon name="i-lucide-calendar" class="mr-3 text-action" />
              <span>{{ formatDate(experience.start_date) }} - {{ experience.end_date ? formatDate(experience.end_date) : 'Présent' }}</span>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="grid">
            <!-- Description -->
            <div class="col-12 mb-6">
              <UCard class="border-none bg-background bg-opacity-75 shadow-md" :ui="{ root: 'bg-background border-none' }">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <UIcon name="i-lucide-file-text" class="text-action mr-2 text-xl" />
                    <span class="text-xl font-medium text-text">Description</span>
                  </div>
                </template>
                <BaseRichText :content="experience.description" />
              </UCard>
            </div>
            
            <!-- Compétences -->
            <div class="col-12 mb-6" v-if="experience.skills && experience.skills.length">
              <UCard class="border-none bg-background/60 shadow-md" :ui="{ root: 'bg-background/60 border-none' }">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <UIcon name="i-lucide-code" class="text-action mr-2 text-xl" />
                    <span class="text-xl font-medium text-text">Compétences</span>
                  </div>
                </template>
                <div class="flex flex-wrap gap-2 mt-2">
                  <UBadge v-for="skill in experience.skills" :key="skill" 
                    :label="skill" 
                    color="neutral"
                    variant="subtle"
                    class="bg-primary/20 text-text border-none" />
                </div>
              </UCard>
            </div>
            
            <!-- Détails (si nécessaire) -->
            <div class="col-12" v-if="experience.Details && experience.Details.length">
              <UCard class="border-none bg-background/60 shadow-md" :ui="{ root: 'bg-background/60 border-none' }">
                <template #header>
                  <div class="flex items-center p-3 border-b border-action/30">
                    <UIcon name="i-lucide-list" class="text-action mr-2 text-xl" />
                    <span class="text-xl font-medium text-text">Détails</span>
                  </div>
                </template>
                <ul class="pl-4 space-y-2">
                  <li v-for="detail in experience.Details" :key="detail" class="flex items-start">
                    <UIcon name="i-lucide-chevron-right" class="text-action mr-2 mt-1" />
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center h-[80vh]">
        <UIcon name="i-lucide-loader-2" class="text-6xl text-action mb-4 animate-spin" />
        <p class="text-text">Chargement de l'expérience...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
</style>
