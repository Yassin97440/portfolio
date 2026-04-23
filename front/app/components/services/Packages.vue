<template>
    <section class="services-packages-section">
        <UCard class="services-packages-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Démarrer petit, sans risque</h2>
                <p class="section-subtitle">
                    Vous hésitez sur le budget ? Commencez par une mission cadrée, à prix fixe.
                    Si ça vous plaît, on voit la suite ensemble.
                </p>
            </template>
            <BaseSubCard>
                <div class="packages-grid">
                    <div
                        v-for="package_ in packages"
                        :key="package_.id"
                        class="package-item"
                        :class="{ highlight: package_.highlight }"
                    >
                        <div v-if="package_.highlight" class="package-badge">
                            <UIcon name="i-lucide-sparkles" />
                            Offre d'appel
                        </div>

                        <div class="package-header">
                            <h3 class="package-name">{{ package_.name }}</h3>
                            <div class="package-price">
                                <span class="price-prefix">à partir de</span>
                                <span class="price-value">{{ package_.price }}</span>
                            </div>
                            <div class="package-duration">
                                <UIcon name="i-lucide-calendar" class="duration-icon" />
                                {{ package_.duration }}
                            </div>
                        </div>

                        <p class="package-description">{{ package_.description }}</p>

                        <ul class="package-features">
                            <li v-for="feature in package_.features" :key="feature" class="package-feature">
                                <UIcon name="i-lucide-check" class="feature-check" />
                                {{ feature }}
                            </li>
                        </ul>

                        <div class="package-action">
                            <a
                                v-if="package_.waMessage"
                                :href="whatsappLink({ message: package_.waMessage })"
                                target="_blank"
                                rel="noopener"
                                class="package-button whatsapp"
                            >
                                <UIcon name="i-simple-icons-whatsapp" />
                                {{ package_.buttonText }}
                            </a>
                            <NuxtLink v-else to="/my/Contact" class="package-button">
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
interface PricingPackage {
    id: number
    name: string
    price: string
    duration: string
    highlight?: boolean
    description: string
    features: string[]
    buttonText: string
    waMessage?: string
}

const { whatsappLink, whatsappMessages } = useContactChannels()

const packages: PricingPackage[] = [
    {
        id: 1,
        name: "Pack Essentiel Digital",
        price: "900 €",
        duration: "2 à 5 jours de travail",
        highlight: true,
        description:
            "Idéal si vous voulez mettre un pied dans le digital sans y laisser votre trésorerie. On choisit ensemble une priorité qui va vraiment changer votre quotidien.",
        features: [
            "Un appel d'une heure pour comprendre votre activité et vos urgences",
            "UNE action concrète mise en place : site vitrine simple, prise de rendez-vous en ligne, ou automatisation d'une tâche qui vous pèse",
            "Formation de 30 minutes pour que vous soyez autonome",
            "Un rapport écrit avec les 2 ou 3 étapes suivantes recommandées"
        ],
        buttonText: "Réserver mon Pack Essentiel",
        waMessage: whatsappMessages.packEssentiel
    },
    {
        id: 2,
        name: "Pack Audit Digital",
        price: "1 500 €",
        duration: "3 à 7 jours",
        description:
            "On fait le grand ménage : vos outils, vos données, vos logiciels actuels. Vous ressortez avec un plan d'action clair, utilisable avec n'importe quel prestataire.",
        features: [
            "Analyse complète de vos outils et processus actuels",
            "Entretiens avec vos équipes clés (1 à 3 personnes)",
            "Rapport détaillé : ce qui va, ce qui ne va pas, ce qu'il faut prioriser",
            "Plan d'action chiffré à 6 et 12 mois"
        ],
        buttonText: "Planifier mon audit",
        waMessage: whatsappMessages.audit
    },
    {
        id: 3,
        name: "Pack MVP",
        price: "4 000 €",
        duration: "4 à 8 semaines",
        description:
            "Pour lancer votre application métier, votre boutique ou votre logiciel interne. Une version fonctionnelle, jolie, que vous pouvez tester avec de vrais clients.",
        features: [
            "Cadrage, conception et maquettes",
            "Développement de votre outil en version utilisable",
            "Mise en ligne + formation de votre équipe",
            "Un mois de support inclus pour les ajustements"
        ],
        buttonText: "En discuter",
        waMessage: whatsappMessages.webApp
    }
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
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 0.95rem;
    color: var(--text);
    opacity: 0.85;
    line-height: 1.5;
    margin: 0;
    max-width: 650px;
}

.packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.package-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    padding: 1.75rem;
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

.package-item.highlight {
    border: 2px solid var(--action);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.package-badge {
    position: absolute;
    top: -12px;
    left: 1.25rem;
    background-color: var(--action);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.package-header {
    text-align: center;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.1);
}

.package-name {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.75rem 0;
}

.package-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.35rem;
    margin-bottom: 0.4rem;
}

.price-prefix {
    font-size: 0.85rem;
    opacity: 0.7;
    color: var(--text);
}

.price-value {
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--action);
}

.package-duration {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--text);
    opacity: 0.8;
    font-size: 0.85rem;
}

.duration-icon {
    font-size: 1rem;
}

.package-description {
    color: var(--text);
    opacity: 0.9;
    line-height: 1.55;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
}

.package-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    flex: 1;
}

.package-feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.7rem;
    color: var(--text);
    line-height: 1.5;
    font-size: 0.92rem;
}

.feature-check {
    color: var(--action);
    margin-right: 0.6rem;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    flex-shrink: 0;
}

.package-action {
    margin-top: auto;
}

.package-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.875rem 1.5rem;
    background-color: var(--action);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}

.package-button.whatsapp {
    background-color: #25D366;
}

.package-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.package-button.whatsapp:hover {
    background-color: #1ebe5b;
}

@media (max-width: 640px) {
    .packages-grid {
        grid-template-columns: 1fr;
    }

    .package-item {
        padding: 1.25rem;
    }

    .package-name {
        font-size: 1.2rem;
    }

    .price-value {
        font-size: 1.5rem;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .packages-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
