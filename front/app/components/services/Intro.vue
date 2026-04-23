<template>
    <section class="services-intro-section">
        <UCard class="services-intro-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard>
                <div class="intro-content">
                    <h1 class="intro-title">Des outils digitaux qui font vraiment avancer votre entreprise</h1>
                    <p class="intro-description">
                        Quatre façons concrètes de vous faire gagner du temps et de l'argent :
                        je crée <strong>vos sites et logiciels sur-mesure</strong>, j'<strong>automatise</strong> ce qui vous mange vos journées,
                        je vous <strong>conseille</strong> sur votre stratégie digitale et je <strong>remets à plat</strong> les outils existants.
                        Tout ça avec un langage clair, un prix fixé à l'avance, et un seul interlocuteur : moi.
                    </p>
                    <div class="intro-highlights">
                        <div class="highlight-item">
                            <UIcon name="i-lucide-check-circle" class="highlight-icon" />
                            <span>Prix fixé avant de démarrer</span>
                        </div>
                        <div class="highlight-item">
                            <UIcon name="i-lucide-check-circle" class="highlight-icon" />
                            <span>Interlocuteur unique, basé à La Réunion</span>
                        </div>
                        <div class="highlight-item">
                            <UIcon name="i-lucide-check-circle" class="highlight-icon" />
                            <span>Premier échange gratuit &amp; sans engagement</span>
                        </div>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
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
