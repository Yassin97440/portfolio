<template>
    <section class="cta-section">
        <UCard class="cta-card" :ui="{ root: 'bg-background rounded-lg' }">
            <BaseSubCard>
                <div class="cta-content">
                    <div class="cta-text">
                        <h2 class="cta-title">On en parle autour d'un café ?</h2>
                        <p class="cta-description">
                            Le premier échange est gratuit, sans engagement et sans jargon.
                            Racontez-moi ce qui vous fait perdre du temps dans votre activité —
                            on voit ensemble si je peux vous aider.
                            <strong>Réponse sous 24h ouvrées.</strong>
                        </p>
                        <div class="cta-actions">
                            <a :href="whatsappHref" target="_blank" rel="noopener" class="cta-button whatsapp">
                                <UIcon name="i-simple-icons-whatsapp" class="cta-icon" />
                                Discuter sur WhatsApp
                            </a>
                            <NuxtLink to="/my/Contact" class="cta-button primary">
                                <UIcon name="i-lucide-mail" class="cta-icon" />
                                Écrire un message
                            </NuxtLink>
                        </div>
                        <p class="cta-micro">
                            <UIcon name="i-lucide-shield-check" class="micro-icon" />
                            Devis gratuit &nbsp;·&nbsp; Prix fixé d'avance &nbsp;·&nbsp; Interlocuteur unique
                        </p>
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
const { whatsappLink, whatsappMessages } = useContactChannels()
const whatsappHref = whatsappLink({ message: whatsappMessages.homepage })
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
    gap: 0.5rem;
}

.cta-icon {
    font-size: 1.25rem;
}

.cta-button.whatsapp {
    background-color: #25D366;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cta-button.whatsapp:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background-color: #1ebe5b;
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

.cta-micro {
    margin-top: 1.25rem;
    font-size: 0.9rem;
    opacity: 0.85;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.micro-icon {
    color: var(--action);
    font-size: 1.1rem;
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
