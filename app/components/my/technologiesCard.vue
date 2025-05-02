<template>
  <div>
    <section class="skills-section">
      <Card class="skills-card">
        <template #title>
          <h2 class="skills-title">Technologies</h2>
        </template>
        <template #content>
          <BaseSubCard>
            <section class="skills-container">
              <!-- Génération dynamique des cartes par type de technologie -->
              <div v-for="type in uniqueTypes" :key="type" class="tech-category">
                <div class="tech-header">
                  <i :class="getTechIcon(type)" class="tech-icon"></i>
                  <h3 class="tech-title">{{ formatType(type) }}</h3>
                </div>
                
                <ul class="tech-list">
                  <li v-for="tech in getTechsByType(type)" :key="tech.id" class="tech-item">
                    <i class="pi pi-check tech-check"></i>
                    <span class="tech-name">{{ tech.name }}</span>
                  </li>
                </ul>
              </div>
            </section>
          </BaseSubCard>
        </template>
      </Card>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { StrapiTypes } from '~~/services/strapi/StrapiTypes';

interface Technology {
  id: number;
  documentId: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const strapi = useStrapi();
const technos = ref<Technology[]>([]);
onMounted(async () => {
  try {
    const technosResponse = await strapi.find(StrapiTypes.TECHNOLOGIES);
    technos.value = technosResponse.data as Technology[];
  } catch (error) {
    console.error("Erreur lors du chargement des technologies:", error)
  }
})
// Obtenir tous les types uniques de technologies
const uniqueTypes = computed(() => {
  if (!technos.value) return []
  return [...new Set(technos.value.map(tech => tech.type))].sort()
})

// Filtrer les technologies par type
const getTechsByType = (type: string) => {
  return technos.value.filter(tech => tech.type === type)
}

// Mettre en forme le nom du type
const formatType = (type: string) => {
  return type?.charAt(0).toUpperCase() + type.slice(1)
}

// Associer une icône à chaque type de technologie
const getTechIcon = (type: string) => {
  const icons: Record<string, string> = {
    'frontend': 'pi pi-desktop',
    'backend': 'pi pi-server',
    'database': 'pi pi-database',
    'mobile': 'pi pi-mobile',
    'devops': 'pi pi-cog',
    'cloud': 'pi pi-cloud',
    'ai': 'pi pi-bolt',
    'iot': 'pi pi-wifi'
  }
  
  return icons[type] || 'pi pi-code'
}


</script>

<style scoped>
.skills-section {
  margin-bottom: 3rem;
}

.skills-card {
  background-color: var(--background);
  border-radius: 0.5rem;
}

.skills-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tech-category {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.tech-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--action);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.tech-category:hover::before {
  transform: scaleX(1);
}

.tech-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
}

.tech-icon {
  color: var(--action);
  font-size: 1.25rem;
  margin-right: 0.75rem;
}

.tech-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text);
  text-transform: capitalize;
}

.tech-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tech-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;
}

.tech-item:hover {
  background-color: rgba(var(--primary-rgb, 0, 0, 0), 0.1);
}

.tech-check {
  color: var(--action);
  margin-right: 0.75rem;
  font-size: 0.875rem;
}

.tech-name {
  color: var(--text);
  font-size: 1rem;
}

/* Animation d'entrée pour les catégories */
.tech-category {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Appliquer des décalages d'animation pour chaque catégorie */
.tech-category:nth-child(1) { animation-delay: 0.1s; }
.tech-category:nth-child(2) { animation-delay: 0.2s; }
.tech-category:nth-child(3) { animation-delay: 0.3s; }
.tech-category:nth-child(4) { animation-delay: 0.4s; }
.tech-category:nth-child(5) { animation-delay: 0.5s; }

/* Adaptations pour différentes tailles d'écran */
@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style>