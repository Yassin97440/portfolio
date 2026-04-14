<template>
    <section class="hero-section">
        <UCard class="hero-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard title="Vos défis business, mes solutions digitales">
                <div class="hero-content">
                    <div class="hero-text">
                        <p class="hero-subtitle">
                            <strong>Vous perdez du temps sur des tâches répétitives ?</strong> Vos processus métier manquent de fluidité ? 
                            Vous avez des données mais aucune visibilité claire sur votre activité ? 
                            Votre digitalisation est en retard ou désorganisée ?
                        </p>
                        
                        <div class="value-propositions">
                            <div class="value-item" v-for="value in valuePropositions" :key="value.title">
                                <UIcon :name="value.icon" class="value-icon" />
                                <div class="value-content">
                                    <h3 class="value-title">{{ value.title }}</h3>
                                    <p class="value-description">{{ value.description }}</p>
                                </div>
                            </div>
                        </div>

                        <p class="hero-cta-text">
                            <strong>Développeur freelance à La Réunion (974)</strong>, j'accompagne TPE, PME et startups 
                            dans leur transformation digitale — de la stratégie à la mise en production.
                        </p>

                        <div class="hero-actions">
                            <NuxtLink to="/my/Contact" class="btn-primary">
                                Discutons de votre projet →
                            </NuxtLink>
                            <NuxtLink to="/services" class="btn-secondary">
                                Découvrir mes services
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const valuePropositions = [
    { 
        title: 'Gain de temps', 
        icon: 'i-lucide-clock',
        description: 'Automatisation des tâches répétitives, workflows optimisés, moins de saisie manuelle.'
    },
    { 
        title: 'Processus métier optimisés', 
        icon: 'i-lucide-settings',
        description: 'Logiciels sur-mesure adaptés à VOTRE façon de travailler, pas l\'inverse.'
    },
    { 
        title: 'Données accessibles', 
        icon: 'i-lucide-bar-chart-3',
        description: 'Tableaux de bord clairs, indicateurs pertinents, prise de recul sur votre business.'
    },
    { 
        title: 'Stratégie digitale', 
        icon: 'i-lucide-compass',
        description: 'Mise en place, réorganisation et accompagnement de votre transformation numérique.'
    }
]
</script>

<style scoped>
.hero-section {
    margin-bottom: 3rem;
}

.hero-card {
    border-radius: 0.5rem;
}

.hero-content {

    gap: 0.75rem;
    align-items: start;
    /* min-height: 500px; */
}

.hero-title {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
    padding: 0.875rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.btn-primary {
    background-color: var(--action);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
    background-color: transparent;
    color: var(--action);
    border: 2px solid var(--action);
}

.btn-secondary:hover {
    background-color: var(--action);
    color: white;
}

.value-propositions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    margin: 2rem 0;
}

.value-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    background-color: var(--primary);
    border-radius: 0.75rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 3px solid var(--action);
}

.value-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.value-icon {
    color: var(--action);
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
}

.value-content {
    flex: 1;
}

.value-title {
    color: var(--text);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
}

.value-description {
    color: var(--text);
    opacity: 0.85;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
}

.hero-cta-text {
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    opacity: 0.9;
}

@media (min-width: 768px) {
    .hero-content {
        grid-template-columns: 2fr 1fr;
    }

    .hero-title {
        font-size: 3rem;
    }
}

@media (min-width: 1024px) {
    .hero-title {
        font-size: 3.5rem;
    }
}

/* Améliorations Responsive */
@media (max-width: 640px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .hero-actions {
        flex-direction: column;
        width: 100%;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
    }

    .value-propositions {
        grid-template-columns: 1fr;
    }

    .value-item {
        padding: 0.875rem;
    }

    .value-title {
        font-size: 0.95rem;
    }

    .value-description {
        font-size: 0.8rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-content {
        gap: 1.5rem;
    }
}
</style>
