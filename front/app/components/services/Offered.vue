<template>
    <section class="services-offered-section">
        <Card class="services-offered-card">
            <template #title>
                <h2 class="section-title">Services Proposés</h2>
            </template>
            <template #content>
                <BaseSubCard>
                    <div class="services-grid">
                        <div v-for="service in services" :key="service.id" class="service-item">
                            <div class="service-header">
                                <i :class="service.icon" class="service-icon"></i>
                                <h3 class="service-title">{{ service.title }}</h3>
                            </div>

                            <ul class="service-features">
                                <li v-for="feature in service.features" :key="feature" class="service-feature">
                                    <i class="pi pi-check feature-check"></i>
                                    {{ feature }}
                                </li>
                            </ul>

                            <!-- <div class="service-pricing">
                                <p class="pricing-text">{{ service.pricing }}</p>
                            </div> -->
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        id: 1,
        icon: 'pi pi-code',
        title: 'Solutions sur-mesure',
        features: [
            'Applications web et logiciels (frontend/backend)',
            'SaaS',
            'Sites internet (vitrine, e-commerce)',
            'Progiciels client lourd',
            'API REST'
        ],
        pricing: 'À partir de 500€/jour ou forfaits à discuter'
    },
    {
        id: 2,
        icon: 'pi pi-sitemap',
        title: 'Architecture logicielle & bases de données',
        features: [
            'Conception DDD, monolithes modulaires ou microservices',
            'Base de données relationnelle ou NoSQL (MySQL, PgSQL, Mongo, Supabase, Redis…)',
            'From scratch ou reprise d\'existant'
        ],
        pricing: 'Tarif : 500–700€/jour ou forfaits à discuter'
    },
    {
        id: 3,
        icon: 'pi pi-users',
        title: 'Accompagnement / CTO freelance',
        features: [
            'Accompagnement transition digitale (changement ou ajout de logiciel dans les processus métiers)',
            'Structuration et stratégie de digitalisation',
            'Accompagnement technique ponctuel ou récurrent',
            'Coaching pour devs junior / équipes techniques',
            'Audit de votre système d\'informations',
            'Accompagnement, conseil',
        ],
        pricing: 'À partir de 500€/semaine ou forfaits à discuter'
    },
    {
        id: 4,
        icon: 'pi pi-bolt',
        title: 'IA / Automatisation intelligente',
        features: [
            'Mise en place de support client',
            'Création d\'assistants IA personnalisés (agents, vector store…)',
            'Intégration IA dans des workflows métier'
        ],
        pricing: 'A partir de 650€'
    },
]
</script>

<style scoped>
.services-offered-section {
    margin-bottom: 3rem;
}

.services-offered-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.service-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.service-item::before {
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

.service-item:hover::before {
    transform: scaleX(1);
}

.service-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.service-icon {
    color: var(--action);
    font-size: 1.5rem;
    margin-right: 0.75rem;
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    flex: 1;
}

.service-feature {
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

.service-pricing {
    padding-top: 1rem;
    border-top: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
    margin-top: auto;
}

.pricing-text {
    color: var(--action);
    font-weight: 600;
    margin: 0;
    font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 640px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-item {
        padding: 1.25rem;
    }

    .service-title {
        font-size: 1.1rem;
    }

    .service-feature {
        font-size: 0.95rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>