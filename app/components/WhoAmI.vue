<template>
    <section class="who-am-i-section">
        <Card class="who-am-i-card">
            <template #title>
                <h2 class="section-title">Qui suis-je ?</h2>
            </template>
            <template #content>
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
                                Je m'appelle <strong>Yassin</strong>, développeur fullstack, architecte logiciel et
                                passionné d'intelligence artificielle.
                            </p>
                            <p class="description-text">
                                Après plusieurs années en tant que développeur, lead dev et chef de projet, j'aide
                                aujourd'hui
                                startups, PME et indépendants à concevoir des solutions robustes et évolutives — avec
                                une attention particulière portée à la qualité, la performance et l'expérience
                                utilisateur.
                            </p>
                            <p class="description-text"> Vous pouvez en savoir plus sur mon profil <NuxtLink to="/my/profil" class="text-action hover:underline">ici</NuxtLink></p>
                            <div class="highlight-box">
                                <i class="pi pi-lightbulb highlight-icon"></i>
                                <p>Passion pour l'innovation technique et l'excellence du code</p>
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

.highlight-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: rgba(var(--action-rgb, 0, 0, 0), 0.1);
    border-left: 4px solid var(--action);
    border-radius: 0.5rem;
}

.highlight-icon {
    color: var(--action);
    font-size: 1.25rem;
}

.highlight-box p {
    color: var(--text);
    font-weight: 500;
    margin: 0;
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