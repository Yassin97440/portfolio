<template>
    <section class="hero-section">
        <Card class="hero-card">
            <template #content>
                <BaseSubCard title="Ingénieur logiciel — je conçois vos solutions sur mesure">
                    <div class="hero-content">
                        <div class="hero-text">
                            <p class="hero-subtitle">
                                Architecture, développement logiciel/WEB, digitalisation, automatisation : je transforme
                                vos idées en produits performants et maintenables.
                            </p>
                            <div class="tech-stack">
                                <div class="tech-item" v-for="tech in techStack" :key="tech.name">
                                    <i :class="tech.icon"></i>
                                    <span>{{ tech.name }}</span>
                                </div>
                            </div>
                            <div class="hero-actions">
                                <NuxtLink to="/my/Contact" class="btn-primary">
                                    Me contacter
                                </NuxtLink>
                                <a href="#services" class="btn-secondary">
                                    Voir mes services
                                </a>
                            </div>
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const techStack = [
    { name: 'Web', icon: 'pi pi-globe' },
    { name: 'Logiciel', icon: 'pi pi-code' },
    { name: 'Automatisation', icon: 'pi pi-bolt' },
    { name: 'Stratégie digitalisation', icon: 'pi pi-chart-line' }
]
</script>

<style scoped>
.hero-section {
    margin-bottom: 3rem;
}

.hero-card {
    background-color: var(--background);
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

.tech-stack {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 2rem;
}

.tech-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem;
    background-color: var(--primary);
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}

.tech-item:hover {
    transform: translateY(-3px);
}

.tech-item i {
    color: var(--action);
    font-size: 1.25rem;
}

.tech-item span {
    color: var(--text);
    font-weight: 500;
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

    .tech-stack {
        grid-template-columns: 1fr;
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
