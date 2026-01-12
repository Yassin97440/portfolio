<template>
    <section class="services-packages-section">
        <UCard class="services-packages-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Formules</h2>
            </template>
            <BaseSubCard>
                <div class="packages-grid">
                    <div v-for="package_ in packages" :key="package_.id" class="package-item">
                        <div class="package-header">
                            <h3 class="package-name">{{ package_.name }}</h3>
                            <div class="package-price">{{ package_.price }}</div>
                        </div>

                        <p class="package-description">{{ package_.description }}</p>

                        <ul class="package-features">
                            <li v-for="feature in package_.features" :key="feature" class="package-feature">
                                <UIcon name="i-lucide-check" class="feature-check" />
                                {{ feature }}
                            </li>
                        </ul>

                        <div class="package-action">
                            <NuxtLink to="/my/Contact" class="package-button">
                                {{ package_.buttonText }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const packages = [
    {
        id: 1,
        name: 'Pack MVP',
        price: 'dès 2000 €',
        description: 'Solution complète pour lancer votre produit rapidement',
        features: [
            'Audit',
            'Architecture logicielle',
            'Mise en place de base de données',
            'Développement fullstack',
            'Déploiement initial',
            'Documentation technique',
            'Formation équipe',
            '1 mois de support'
        ],
        buttonText: 'Demander un devis'
    },
    {
        id: 2,
        name: 'Pack Audit',
        price: '2-7 jours',
        description: 'Analyse approfondie de votre système existant',
        features: [
            'Revue de code',
            'Audit complet de votre SI',
            'Conseil architecture',
            'Recommandations détaillées',
            'Plan d\'action',
            'Rapport complet'
        ],
        buttonText: 'Planifier un audit'
    },
    {
        id: 3,
        name: 'Pack IA ',
        price: 'prix selon le besoin',
        description: 'Intégrez l\'intelligence artificielle dans vos processus',
        features: [
            'Intégration support client IA',
            'Assistant IA personnalisé',
            'Vector Database',
        ],
        buttonText: 'Demande de contact'
    },

]
</script>

<style scoped>
.services-packages-section {
    margin-bottom: 3rem;
}

.services-packages-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.package-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
}

.package-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    border-color: var(--action);
}

.package-header {
    text-align: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
}

.package-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin: 0 0 0.5rem 0;
}

.package-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--action);
}

.package-description {
    color: var(--text);
    opacity: 0.9;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    text-align: center;
}

.package-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    flex: 1;
}

.package-feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.75rem;
    color: var(--text);
    line-height: 1.5;
}

.feature-check {
    color: var(--action);
    margin-right: 0.75rem;
    margin-top: 0.125rem;
    font-size: 0.875rem;
    flex-shrink: 0;
}

.package-action {
    margin-top: auto;
}

.package-button {
    display: block;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background-color: var(--action);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
}

.package-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 640px) {
    .packages-grid {
        grid-template-columns: 1fr;
    }

    .package-item {
        padding: 1.25rem;
    }

    .package-name {
        font-size: 1.25rem;
    }

    .package-price {
        font-size: 1.1rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .packages-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
