<template>
  <section class="skills-section">
    <Card class="skills-card">
      <template #title>
        <h2 class="skills-title">Compétences</h2>
      </template>
      <template #content>
        <BaseSubCard>
          <div class="skills-container">
            <!-- Section des compétences techniques (hard) -->
            <div v-if="hasSkillsOfType('hard')" class="skill-category">
              <div class="skill-header">
                <i class="pi pi-cog skill-icon"></i>
                <h3 class="skill-title">Compétences techniques</h3>
              </div>
              <div class="skill-chips">
                <div v-for="skill in getSkillsByType('hard')" :key="skill.id" 
                  class="skill-chip">
                  {{ skill.name }}
                </div>
              </div>
            </div>

            <!-- Section des compétences interpersonnelles (soft) -->
            <div v-if="hasSkillsOfType('soft')" class="skill-category">
              <div class="skill-header">
                <i class="pi pi-users skill-icon"></i>
                <h3 class="skill-title">Compétences interpersonnelles</h3>
              </div>
              <div class="skill-chips">
                <div v-for="skill in getSkillsByType('soft')" :key="skill.id" 
                  class="skill-chip">
                  {{ skill.name }}
                </div>
              </div>
            </div>
          </div>
        </BaseSubCard>
      </template>
    </Card>
  </section>
</template>

<script lang="ts" setup>

interface Skill {
  id: number;
  documentId: string;
  name: string;
  type: 'hard' | 'soft';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const strapi = useStrapi();
const skills = ref<Skill[]>([]);

// Vérifier si nous avons des compétences d'un type spécifique
const hasSkillsOfType = (type: 'hard' | 'soft') => {
  return skills.value && skills.value.some(skill => skill.type === type);
}

// Filtrer les compétences par type
const getSkillsByType = (type: 'hard' | 'soft') => {
  return skills.value.filter(skill => skill.type === type);
}

onMounted(async () => {
  try {
    const response = await strapi.find(StrapiTypes.SKILLS);
    skills.value = response.data as Skill[];
    console.log("🚀 ~ Compétences chargées:", skills.value);
  } catch (error) {
    console.error("Erreur lors du chargement des compétences:", error);
  }
})
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-category {
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--action);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.skill-category:hover::before {
  transform: scaleY(1);
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
}

.skill-icon {
  color: var(--action);
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

.skill-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text);
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-chip {
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.5rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: default;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.skill-chip::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.skill-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: var(--action);
}

.skill-chip:hover::after {
  transform: translateX(100%);
}

/* Animation d'entrée pour les catégories */
.skill-category {
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
}

.skill-category:nth-child(1) {
  animation-delay: 0.1s;
}

.skill-category:nth-child(2) {
  animation-delay: 0.3s;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour les puces de compétences */
.skill-chip {
  animation: fadeIn 0.4s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Appliquer un délai d'animation pour chaque puce */
.skill-chip:nth-child(1) { animation-delay: 0.1s; }
.skill-chip:nth-child(2) { animation-delay: 0.15s; }
.skill-chip:nth-child(3) { animation-delay: 0.2s; }
.skill-chip:nth-child(4) { animation-delay: 0.25s; }
.skill-chip:nth-child(5) { animation-delay: 0.3s; }
.skill-chip:nth-child(6) { animation-delay: 0.35s; }
.skill-chip:nth-child(7) { animation-delay: 0.4s; }
.skill-chip:nth-child(8) { animation-delay: 0.45s; }
.skill-chip:nth-child(9) { animation-delay: 0.5s; }
.skill-chip:nth-child(10) { animation-delay: 0.55s; }

/* Adaptations pour différentes tailles d'écran */
@media (min-width: 768px) {
  .skills-container {
    flex-direction: row;
    gap: 1.5rem;
  }
  
  .skill-category {
    flex: 1;
  }
}

@media (max-width: 767px) {
  .skill-category {
    margin-bottom: 1.5rem;
  }
  
  .skill-category:last-child {
    margin-bottom: 0;
  }
}
</style>