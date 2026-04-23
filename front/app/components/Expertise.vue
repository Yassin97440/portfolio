<template>
    <section id="services" class="expertise-section">
        <UCard class="expertise-card">
            <template #header>
                <h2 class="section-title">Ce que je peux faire pour vous</h2>
                <h3 class="seo-subtitle">Sites & logiciels sur-mesure, IA & automatisation, conseil digital, audit et structuration de vos outils</h3>
            </template>
                <BaseSubCard>
                    <div class="expertise-grid">
                        <div v-for="expertise in expertises" :key="expertise.id" class="expertise-item">
                            <div class="expertise-header">
                                <i :class="expertise.icon" class="expertise-icon"></i>
                                <h4 class="expertise-title">{{ expertise.title }}</h4>
                            </div>
                            <p class="expertise-description">{{ expertise.description }}</p>
                            <ul class="expertise-tags">
                                <li v-for="tag in expertise.tags" :key="tag" class="expertise-tag">
                                    {{ tag }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const expertises = [
    {
        id: 1,
        icon: 'pi pi-bolt',
        title: 'IA & tâches automatiques',
        description: "Chatbot qui répond à vos clients la nuit, devis générés tout seuls, factures relancées automatiquement… Je mets de l'intelligence artificielle là où vous passez vos heures, pour que votre équipe se concentre sur ce qui compte vraiment.",
        tags: ['Chatbot client', 'Relances automatiques', 'Gain de temps', 'Assistants IA']
    },
    {
        id: 2,
        icon: 'pi pi-code',
        title: 'Sites internet & logiciels sur-mesure',
        description: "Site vitrine qui rapporte des clients, boutique en ligne, application métier, outil interne pour votre équipe. Je vous accompagne de l'idée à la mise en ligne — et je forme vos équipes pour qu'elles soient autonomes.",
        tags: ['Site vitrine', 'E-commerce', 'Logiciel métier', 'Application mobile']
    },
    {
        id: 3,
        icon: 'pi pi-sitemap',
        title: 'Remise au propre de vos outils',
        description: "Vous jonglez entre Excel, WhatsApp, un logiciel qui bugue et trois tableurs ? J'analyse ce qui existe, je vous dis ce qui tient la route, ce qu'il faut refaire, et je structure l'ensemble pour que ça tienne dans le temps.",
        tags: ['Audit outils', 'Remise à plat', 'Structuration', 'Migration']
    },
    {
        id: 4,
        icon: 'pi pi-users',
        title: 'Conseil & accompagnement digital',
        description: "Vous savez qu'il faut bouger côté digital mais vous ne savez pas par où commencer ? On fait le point ensemble, je vous propose un plan simple, priorisé et chiffré — vous avancez sereinement, à votre rythme.",
        tags: ['Audit digital', 'Plan d\'action', 'Accompagnement', 'Formation']
    }
]
</script>

<style scoped>
.expertise-section {
    margin-bottom: 3rem;
}

.expertise-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
}

.seo-subtitle {
    font-size: 1rem;
    color: var(--text);
    opacity: 0.7;
    font-weight: 400;
    margin-bottom: 1rem;
}

.expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.expertise-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.expertise-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.expertise-item::before {
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

.expertise-item:hover::before {
    transform: scaleX(1);
}

.expertise-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.expertise-icon {
    color: var(--action);
    font-size: 1.5rem;
    margin-right: 0.75rem;
}

.expertise-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
}

.expertise-description {
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.expertise-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.expertise-tag {
    background-color: var(--secondary);
    color: var(--text);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.expertise-tag:hover {
    background-color: var(--action);
    transform: translateY(-1px);
}

/* Animation d'entrée */
.expertise-item {
    animation: fadeIn 0.6s ease forwards;
    opacity: 0;
}

.expertise-item:nth-child(1) {
    animation-delay: 0.1s;
}

.expertise-item:nth-child(2) {
    animation-delay: 0.2s;
}

.expertise-item:nth-child(3) {
    animation-delay: 0.3s;
}

.expertise-item:nth-child(4) {
    animation-delay: 0.4s;
}

.expertise-item:nth-child(5) {
    animation-delay: 0.5s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Améliorations Responsive */
@media (max-width: 640px) {
    .expertise-grid {
        grid-template-columns: 1fr;
    }

    .expertise-item {
        padding: 1.25rem;
    }

    .expertise-title {
        font-size: 1.1rem;
    }

    .expertise-description {
        font-size: 0.95rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .expertise-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>