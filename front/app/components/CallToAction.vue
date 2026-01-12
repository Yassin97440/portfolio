<template>
    <section class="cta-section">
        <UCard class="cta-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard>
                <div class="cta-content">
                    <div class="cta-text">
                        <h2 class="cta-title">Travaillons ensemble</h2>
                        <p class="cta-description">
                            Un projet, une idée, une problématique ou un besoin ?
                            Contactez-moi, ou découvrez mes services en détail.
                        </p>
                        <div class="cta-actions">
                            <NuxtLink to="/my/Contact" class="cta-button primary">
                                Me contacter
                            </NuxtLink>
                            <NuxtLink to="/services" class="cta-button secondary">
                                Mes services
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="cta-visual">
                        <div class="cta-decoration">
                            <UIcon name="i-lucide-send" class="text-action text-5xl relative z-1" />
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
.cta-section {
    margin-bottom: 3rem;
}

.cta-card {
    background-color: var(--background);
    border-radius: 0.5rem;
}

.cta-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
    padding: 2rem 0;
}

.cta-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
}

.cta-description {
    font-size: 1.1rem;
    color: var(--text);
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.cta-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.cta-button {
    padding: 0.875rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

.cta-visual {
    display: flex;
    justify-content: center;
}

.cta-decoration {
    width: 120px;
    height: 120px;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.cta-decoration::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, var(--action) 0%, transparent 70%);
    opacity: 0.3;
}

/* Responsive */
@media (max-width: 640px) {
    .cta-title {
        font-size: 1.75rem;
    }

    .cta-description {
        font-size: 1rem;
    }

    .cta-actions {
        flex-direction: column;
        width: 100%;
    }

    .cta-button {
        width: 100%;
    }

    .cta-decoration {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 768px) {
    .cta-content {
        grid-template-columns: 2fr 1fr;
    }

    .cta-decoration {
        width: 150px;
        height: 150px;
    }
}

@media (min-width: 1024px) {
    .cta-title {
        font-size: 2.5rem;
    }
}
</style>
