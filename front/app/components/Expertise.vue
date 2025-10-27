<template>
    <section id="services" class="expertise-section">
        <Card class="expertise-card">
            <template #title>
                <h2 class="section-title">Mes expertises</h2>
                <h3 class="seo-subtitle">Développeur fullstack freelance, expertise Java, Spring Boot, Nuxt 3</h3>
            </template>
            <template #content>
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
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const expertises = [
    {
        id: 1,
        icon: 'pi pi-code',
        title: 'Développement web fullstack',
        description: 'Création d\'applications web complètes avec les dernières technologies. De l\'application web classique à la solution sur-mesure. En partant de l\'analyse de besoin jusqu\'au déploiement et la formation des équipes.',
        tags: ['NuxtJS', 'Spring Boot', 'PostgreSQL', 'MySQL', 'NodeJS']
    },
    {
        id: 2,
        icon: 'pi pi-sitemap',
        title: 'Architecture logicielle',
        description: 'Conception de systèmes robustes et évolutifs.',
        tags: ['SQL/NoSQL', 'DDD', 'Microservices', 'Monolithes']
    },
    // {
    //     id: 3,
    //     icon: 'pi pi-bolt',
    //     title: 'IA & Automatisation intelligente',
    //     description: 'Intégration d\'intelligence artificielle dans vos processus.',
    //     tags: ['RAG', 'Agents IA', 'LangChain', 'OpenCV']
    // },
    // {
    //     id: 4,
    //     icon: 'pi pi-wifi',
    //     title: 'Développement embarqué & IoT',
    //     description: 'Solutions connectées et systèmes embarqués.',
    //     tags: ['ESP32', 'Raspberry Pi', 'Arduino']
    // },
    {
        id: 5,
        icon: 'pi pi-users',
        title: 'Conseil technique',
        description: 'Accompagnement stratégique et expertise technique. Analyse et conseil dans les choix stratégiques en liens avec le digital et la nuémrisation de votre entreprise.',
        tags: ['MVP', 'Audit code', 'Stratégie technique', 'Digitalisation', 'Nuémrisation']
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