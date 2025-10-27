<template>
    <section class="services-intro-section">
        <Card class="services-intro-card">
            <template #content>
                <BaseSubCard>
                    <div class="intro-content">
                        <h1 class="intro-title">Mes Services Freelance</h1>
                        <p class="intro-description">
                            En tant que <strong>freelance développeur logiciel</strong>, je propose des prestations sur
                            mesure autour de l'accompagnement digital, du développement web et logiciel, de
                            l'architecture logicielle, de l'automatisation, de l'intelligence artificielle et de la
                            gestion de système d'informations.
                        </p>
                        <div class="intro-highlights">
                            <div class="highlight-item">
                                <i class="pi pi-check-circle highlight-icon"></i>
                                <span>Solutions sur-mesure</span>
                            </div>
                            <div class="highlight-item">
                                <i class="pi pi-check-circle highlight-icon"></i>
                                <span>Expertise technique avancée</span>
                            </div>
                            <div class="highlight-item">
                                <i class="pi pi-check-circle highlight-icon"></i>
                                <span>Accompagnement personnalisé</span>
                            </div>
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.services-intro-section {
    margin-bottom: 3rem;
}

.services-intro-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.intro-content {
    text-align: center;
    padding: 2rem 0;
}

.intro-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.intro-description {
    font-size: 1.1rem;
    color: var(--text);
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.intro-description strong {
    color: var(--action);
    font-weight: 600;
}

.intro-highlights {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--text);
}

.highlight-icon {
    color: var(--action);
    font-size: 1.25rem;
}

/* Responsive */
@media (max-width: 640px) {
    .intro-title {
        font-size: 2rem;
    }

    .intro-description {
        font-size: 1rem;
    }

    .intro-highlights {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
}

@media (min-width: 1024px) {
    .intro-title {
        font-size: 3rem;
    }
}
</style>
