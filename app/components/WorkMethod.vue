<template>
    <section class="work-method-section">
        <Card class="work-method-card">
            <template #title>
                <h2 class="section-title">Comment je travaille ?</h2>
            </template>
            <template #content>
                <BaseSubCard>
                    <div class="work-method-content">
                        <div class="workflow-diagram">
                            <div class="workflow-step" v-for="(step, index) in workflowSteps" :key="index">
                                <div class="step-number">{{ index + 1 }}</div>
                                <div class="step-content">
                                    <h4 class="step-title">{{ step.title }}</h4>
                                    <p class="step-description">{{ step.description }}</p>
                                </div>
                                <div class="step-connector" v-if="index < workflowSteps.length - 1"></div>
                            </div>
                        </div>

                        <div class="work-principles">
                            <div class="principle-item" v-for="principle in principles" :key="principle.id">
                                <div class="principle-icon">
                                    <i :class="principle.icon"></i>
                                </div>
                                <div class="principle-content">
                                    <h4 class="principle-title">{{ principle.title }}</h4>
                                    <p class="principle-description">{{ principle.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseSubCard>
            </template>
        </Card>
    </section>
</template>

<script setup lang="ts">
const workflowSteps = [
    {
        title: 'Audit (Analyse & Brief)',
        description: 'Compréhension approfondie de vos besoins et objectifs'
    },
    {
        title: 'Conception (Design & Architecture)',
        description: 'Architecture technique et planification du développement'
    },
    {
        title: 'Développement (Code & Tests)',
        description: 'Implémentation avec des revues régulières et des ajustements'
    },
    {
        title: 'Livraison',
        description: 'Formation utilisateur, documentation, déploiement'
    },
    {
        title: 'Maintenance & Support',
        description: 'Suivi et ajustements pour garantir la performance et la satisfaction'
    }

]

const principles = [
    {
        id: 1,
        icon: 'pi pi-users',
        title: 'Approche personnalisée',
        description: 'Solutions adaptées à vos besoins spécifiques et à votre contexte'
    },
    {
        id: 2,
        icon: 'pi pi-comments',
        title: 'Communication claire',
        description: 'Échanges réguliers et transparents tout au long du projet'
    },
    {
        id: 3,
        icon: 'pi pi-file',
        title: 'Livrables documentés',
        description: 'Code maintenable et documentation complète pour une pérennité optimale'
    },
    {
        id: 4,
        icon: 'pi pi-chart-line',
        title: 'Focus performance',
        description: 'Optimisation continue pour des solutions rapides et efficaces'
    }
]
</script>

<style scoped>
.work-method-section {
    margin-bottom: 3rem;
}

.work-method-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.work-method-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.workflow-diagram {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
}

.workflow-step {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    position: relative;
}

.step-number {
    width: 40px;
    height: 40px;
    background-color: var(--action);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
}

.step-content {
    flex: 1;
}

.step-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
}

.step-description {
    color: var(--text);
    opacity: 0.9;
    line-height: 1.6;
}

.step-connector {
    position: absolute;
    left: 20px;
    top: 60px;
    bottom: -20px;
    width: 2px;
    background-color: var(--action);
    opacity: 0.5;
}

.work-principles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.principle-item {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.principle-item:hover {
    transform: translateY(-5px);
}

.principle-icon {
    width: 40px;
    height: 40px;
    background-color: var(--action);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.principle-icon i {
    color: white;
    font-size: 1.25rem;
}

.principle-content {
    flex: 1;
}

.principle-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
}

.principle-description {
    color: var(--text);
    opacity: 0.9;
    font-size: 0.95rem;
    line-height: 1.5;
}

/* Responsive */
@media (max-width: 640px) {
    .work-method-content {
        gap: 2rem;
    }

    .workflow-step {
        gap: 1rem;
    }

    .step-number {
        width: 32px;
        height: 32px;
        font-size: 0.9rem;
    }

    .step-title {
        font-size: 1.1rem;
    }

    .step-description {
        font-size: 0.95rem;
    }

    .step-connector {
        left: 16px;
    }

    .work-principles {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .principle-item {
        padding: 1rem;
        gap: 0.75rem;
        width: 100%;
        min-width: 0;
    }

    .principle-icon {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
    }

    .principle-icon i {
        font-size: 1rem;
    }

    .principle-content {
        min-width: 0;
        flex: 1;
    }

    .principle-title {
        font-size: 1rem;
    }

    .principle-description {
        font-size: 0.9rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .work-principles {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }

    .principle-item {
        width: 100%;
        min-width: 0;
    }
}

@media (min-width: 768px) {
    .workflow-diagram {
        padding-left: 1rem;
    }

    .workflow-step {
        max-width: 80%;
    }
}

@media (min-width: 1024px) {
    .workflow-step {
        max-width: 70%;
    }

    .work-principles {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
}
</style>