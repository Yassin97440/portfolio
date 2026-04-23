<template>
    <section class="hero-section">
        <UCard class="hero-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard>
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            Votre entreprise à La Réunion mérite mieux qu'Excel et WhatsApp.
                        </h1>
                        <p class="hero-subtitle">
                            Je suis Yassin, développeur freelance basé à La Réunion. Je crée les outils
                            digitaux qui font gagner du temps aux dirigeants de TPE/PME — sans jargon,
                            sans stress, à votre rythme.
                        </p>

                        <div class="value-propositions">
                            <div class="value-item" v-for="value in valuePropositions" :key="value.title">
                                <UIcon :name="value.icon" class="value-icon" />
                                <div class="value-content">
                                    <h2 class="value-title">{{ value.title }}</h2>
                                    <p class="value-description">{{ value.description }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="hero-actions">
                            <a :href="whatsappHref" target="_blank" rel="noopener" class="btn-primary">
                                <UIcon name="i-simple-icons-whatsapp" class="btn-icon" />
                                Discuter sur WhatsApp
                            </a>
                            <NuxtLink to="/my/Contact" class="btn-secondary">
                                Demander un devis gratuit
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
const { whatsappLink, whatsappMessages } = useContactChannels()
const whatsappHref = whatsappLink({ message: whatsappMessages.homepage })

const valuePropositions = [
    {
        title: 'Plus d\'heures perdues à ressaisir',
        icon: 'i-lucide-clock',
        description: 'Vos tâches répétitives tournent toutes seules pendant que vous vous concentrez sur vos clients.'
    },
    {
        title: 'Un outil qui colle à votre métier',
        icon: 'i-lucide-settings',
        description: 'On conçoit ensemble un logiciel qui suit VOTRE façon de travailler, pas l\'inverse.'
    },
    {
        title: 'Vos chiffres enfin clairs',
        icon: 'i-lucide-bar-chart-3',
        description: 'Un tableau de bord simple pour savoir en un coup d\'œil où en est votre activité.'
    },
    {
        title: 'Vous reprenez une longueur d\'avance',
        icon: 'i-lucide-compass',
        description: 'Pendant que vos concurrents réfléchissent, vous avancez avec un plan digital clair et rentable.'
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
}

.hero-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.05rem;
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
    gap: 0.5rem;
}

.btn-primary {
    background-color: #25D366;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background-color: #1ebe5b;
}

.btn-icon {
    font-size: 1.25rem;
}

.btn-secondary {
    background-color: var(--action);
    color: white;
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
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

@media (min-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
}

@media (min-width: 1024px) {
    .hero-title {
        font-size: 3rem;
    }
}

@media (max-width: 640px) {
    .hero-title {
        font-size: 1.6rem;
    }

    .hero-subtitle {
        font-size: 1rem;
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
    .hero-content {
        gap: 1.5rem;
    }
}
</style>
