<template>
    <section class="services-cta-section">
        <Card class="services-cta-card">
            <template #content>
                <BaseSubCard>
                    <div class="cta-content">
                        <div class="cta-main">
                            <h2 class="cta-title">Un besoin spécifique ? Parlons-en.</h2>
                            <p class="cta-subtitle">
                                Je suis réactif et transparent. Échangeons sur votre projet pour définir ensemble la
                                meilleure approche technique.
                            </p>

                            <div class="cta-features">
                                <div class="cta-feature">
                                    <i class="pi pi-clock feature-icon"></i>
                                    <span>Réponse sous 24h</span>
                                </div>
                                <div class="cta-feature">
                                    <i class="pi pi-shield feature-icon"></i>
                                    <span>Devis gratuit</span>
                                </div>
                                <div class="cta-feature">
                                    <i class="pi pi-comments feature-icon"></i>
                                    <span>Échange transparent</span>
                                </div>
                            </div>

                            <div class="cta-actions">
                                <NuxtLink to="/my/Contact" class="cta-button primary">
                                    <i class="pi pi-send"></i>
                                    Demander un devis
                                </NuxtLink>
                                <a href="https://calendly.com/yassin-abdulla" target="_blank"
                                    class="cta-button secondary">
                                    <i class="pi pi-calendar"></i>
                                    Prendre rendez-vous
                                </a>
                            </div>
                        </div>

                        <div class="cta-visual">
                            <div class="visual-container">
                                <div class="visual-circle main-circle">
                                    <i class="pi pi-user main-icon"></i>
                                </div>
                                <div class="visual-circle floating-circle circle-1">
                                    <i class="pi pi-code"></i>
                                </div>
                                <div class="visual-circle floating-circle circle-2">
                                    <i class="pi pi-bolt"></i>
                                </div>
                                <div class="visual-circle floating-circle circle-3">
                                    <i class="pi pi-cog"></i>
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
</script>

<style scoped>
.services-cta-section {
    margin-bottom: 3rem;
}

.services-cta-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.cta-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2rem 0;
}

.cta-main {
    text-align: center;
}

.cta-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1.2;
}

.cta-subtitle {
    font-size: 1.1rem;
    color: var(--text);
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    font-weight: 500;
}

.feature-icon {
    color: var(--action);
    font-size: 1.25rem;
}

.cta-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.cta-button.primary {
    background-color: var(--action);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.cta-button.secondary {
    background-color: transparent;
    color: var(--action);
    border: 2px solid var(--action);
}

.cta-button.secondary:hover {
    background-color: var(--action);
    color: white;
}

.cta-button i {
    font-size: 1rem;
}

.cta-visual {
    display: flex;
    justify-content: center;
}

.visual-container {
    position: relative;
    width: 200px;
    height: 200px;
}

.visual-circle {
    position: absolute;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    transition: transform 0.3s ease;
}

.main-circle {
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--action);
    z-index: 2;
}

.main-icon {
    color: white;
    font-size: 2.5rem;
}

.floating-circle {
    width: 60px;
    height: 60px;
    border: 2px solid var(--action);
}

.floating-circle i {
    color: var(--action);
    font-size: 1.5rem;
}

.circle-1 {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: float 3s ease-in-out infinite;
}

.circle-2 {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation: float 3s ease-in-out infinite 1s;
}

.circle-3 {
    bottom: 0;
    left: 0;
    animation: float 3s ease-in-out infinite 2s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.visual-container:hover .floating-circle {
    transform: scale(1.1);
}

/* Responsive */
@media (max-width: 640px) {
    .cta-title {
        font-size: 1.75rem;
    }

    .cta-subtitle {
        font-size: 1rem;
    }

    .cta-features {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .cta-actions {
        flex-direction: column;
        width: 100%;
    }

    .cta-button {
        width: 100%;
        justify-content: center;
    }

    .visual-container {
        width: 150px;
        height: 150px;
    }

    .main-circle {
        width: 80px;
        height: 80px;
    }

    .main-icon {
        font-size: 2rem;
    }

    .floating-circle {
        width: 45px;
        height: 45px;
    }

    .floating-circle i {
        font-size: 1.25rem;
    }
}

@media (min-width: 768px) {
    .cta-content {
        grid-template-columns: 2fr 1fr;
    }

    .cta-main {
        text-align: left;
    }
}

@media (min-width: 1024px) {
    .cta-title {
        font-size: 2.5rem;
    }

    .visual-container {
        width: 250px;
        height: 250px;
    }

    .main-circle {
        width: 120px;
        height: 120px;
    }

    .main-icon {
        font-size: 3rem;
    }

    .floating-circle {
        width: 70px;
        height: 70px;
    }

    .floating-circle i {
        font-size: 1.75rem;
    }
}
</style>
