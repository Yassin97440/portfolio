<template>
    <section class="who-am-i-section">
        <UCard class="who-am-i-card" :ui="{ root: 'bg-background rounded-lg' }">
            <template #header>
                <h2 class="section-title">Pourquoi travailler avec moi ?</h2>
            </template>
            <BaseSubCard>
                <div class="who-am-i-content">
                    <!-- Photo en premier sur mobile -->
                    <div class="profile-visual">
                        <div class="profile-placeholder">
                            <img src="~/assets/yassin.jpg" alt="Yassin Abdulla" class="profile-image" />
                        </div>
                    </div>

                    <div class="text-content">
                        <p class="intro-text">
                            Je suis <strong>Yassin</strong> — je traduis vos enjeux business en solutions techniques concrètes.
                        </p>
                        
                        <div class="benefits-list">
                            <div class="benefit-item">
                                <UIcon name="i-lucide-check-circle" class="benefit-icon" />
                                <p><strong>Je parle votre langage</strong> : pas de jargon technique, je comprends vos problématiques métier avant de coder.</p>
                            </div>
                            <div class="benefit-item">
                                <UIcon name="i-lucide-check-circle" class="benefit-icon" />
                                <p><strong>Un interlocuteur unique</strong> : de l'analyse de vos besoins à la mise en production, vous n'avez qu'un seul contact.</p>
                            </div>
                            <div class="benefit-item">
                                <UIcon name="i-lucide-check-circle" class="benefit-icon" />
                                <p><strong>Solutions pérennes</strong> : code maintenable, documentation claire, vous restez maître de votre outil.</p>
                            </div>
                            <div class="benefit-item">
                                <UIcon name="i-lucide-check-circle" class="benefit-icon" />
                                <p><strong>Basé à La Réunion</strong> : disponibilité locale, compréhension du tissu économique réunionnais.</p>
                            </div>
                        </div>

                        <p class="description-text">
                            5+ années d'expérience en développement, lead dev et gestion de projet — je sais ce qui fonctionne et ce qu'il faut éviter.
                            <NuxtLink to="/my/profil" class="text-action hover:underline">Voir mon parcours complet →</NuxtLink>
                        </p>
                    </div>
                </div>
            </BaseSubCard>
        </UCard>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.who-am-i-section {
    margin-bottom: 3rem;
}

.who-am-i-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
}

.who-am-i-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
}

.intro-text {
    font-size: 1.25rem;
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.intro-text strong {
    color: var(--action);
    font-weight: 600;
}

.description-text {
    font-size: 1.1rem;
    color: var(--text);
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.benefits-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background-color: var(--primary);
    border-radius: 0.5rem;
    transition: transform 0.2s ease;
}

.benefit-item:hover {
    transform: translateX(4px);
}

.benefit-icon {
    color: var(--action);
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
}

.benefit-item p {
    color: var(--text);
    margin: 0;
    line-height: 1.5;
    font-size: 0.95rem;
}

.benefit-item strong {
    color: var(--action);
}

.profile-visual {
    display: flex;
    justify-content: center;
    order: -1;
    /* Photo en premier sur mobile */
}

.profile-placeholder {
    width: 120px;
    height: 120px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    overflow: hidden;
    position: relative;
}

.profile-placeholder:hover {
    transform: scale(1.05);
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--action);
}

/* Responsive progressif */
@media (min-width: 480px) {
    .profile-placeholder {
        width: 140px;
        height: 140px;
    }
}

@media (min-width: 641px) and (max-width: 767px) {
    .profile-placeholder {
        width: 160px;
        height: 160px;
    }
}

@media (min-width: 768px) {
    .who-am-i-content {
        grid-template-columns: 3fr 1fr;
    }

    .profile-visual {
        order: 1;
    }

    .text-content {
        order: 0;
    }

    .profile-placeholder {
        width: 180px;
        height: 180px;
    }
}

@media (min-width: 1024px) {
    .who-am-i-content {
        grid-template-columns: 4fr 1fr;
    }

    .profile-placeholder {
        width: 200px;
        height: 200px;
    }
}

@media (min-width: 1200px) {
    .profile-placeholder {
        width: 220px;
        height: 220px;
    }
}

/* Améliorations Responsive pour le texte */
@media (max-width: 640px) {
    .intro-text {
        font-size: 1.1rem;
        text-align: center;
    }

    .description-text {
        font-size: 1rem;
        text-align: center;
    }

    .highlight-box {
        margin-top: 1.5rem;
    }
}

@media (min-width: 641px) and (max-width: 767px) {

    .intro-text,
    .description-text {
        text-align: left;
    }
}

@media (min-width: 641px) and (max-width: 1023px) {
    .who-am-i-content {
        gap: 1.5rem;
    }
}
</style>
