<template>
  <div class="landing">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__inner">
        <span class="hero__eyebrow">
          <UIcon name="i-lucide-map-pin" /> Spécial dirigeants 974
        </span>
        <h1 class="hero__title">
          Vous êtes dirigeant à La Réunion<br />
          et vous voulez digitaliser votre activité&nbsp;?
        </h1>
        <p class="hero__sub">
          Site internet, logiciel sur-mesure, automatisation de vos tâches :
          un seul interlocuteur, basé à La Réunion, qui parle votre langage — sans jargon, sans stress,
          à votre rythme.
        </p>

        <div class="hero__cta">
          <a :href="whatsappHref" target="_blank" rel="noopener" class="cta-whatsapp">
            <UIcon name="i-simple-icons-whatsapp" class="cta-icon" />
            Discuter tout de suite sur WhatsApp
          </a>
          <a href="#form" class="cta-form">Ou laisser un message (30 secondes) ↓</a>
        </div>

        <ul class="hero__reassurance">
          <li><UIcon name="i-lucide-check-circle" /> Premier échange gratuit</li>
          <li><UIcon name="i-lucide-check-circle" /> Réponse sous 24 h</li>
          <li><UIcon name="i-lucide-check-circle" /> Devis fixe, sans engagement</li>
        </ul>
      </div>
    </section>

    <!-- PREUVE SOCIALE -->
    <section class="proof">
      <div class="proof__inner">
        <div class="proof__stat">
          <div class="proof__value">+8h / semaine</div>
          <div class="proof__label">C'est le temps moyen récupéré par mes clients sur leurs tâches administratives</div>
        </div>

        <blockquote class="proof__quote">
          <p class="proof__text">
            « Avant, je passais mes dimanches à recompter les stocks sur papier.
            Yassin m'a monté un outil simple sur mon téléphone :
            je scanne un produit, c'est à jour partout.
            <strong>6 à 8 heures gagnées par semaine</strong>,
            et plus d'erreurs de caisse. Il a pris le temps de tout m'expliquer,
            comme un membre de la famille. »
          </p>
          <footer class="proof__author">
            <div class="proof__avatar">
              <UIcon name="i-lucide-user" />
            </div>
            <div>
              <strong>Jean-Marc Payet</strong><br />
              <span>Gérant, boutique de prêt-à-porter — Saint-Pierre (974)</span>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>

    <!-- CE QUE VOUS GAGNEZ -->
    <section class="benefits">
      <div class="benefits__inner">
        <h2 class="benefits__title">Concrètement, qu'est-ce que ça change pour vous ?</h2>
        <div class="benefits__grid">
          <div class="benefit">
            <UIcon name="i-lucide-clock" class="benefit__icon" />
            <h3>Vous arrêtez de perdre des heures</h3>
            <p>Fini les saisies en double, les relances à la main, les tableurs qui ne parlent pas entre eux.</p>
          </div>
          <div class="benefit">
            <UIcon name="i-lucide-eye" class="benefit__icon" />
            <h3>Vous pilotez votre activité clairement</h3>
            <p>Un tableau de bord simple, vos vrais chiffres à jour, sur votre téléphone comme sur votre ordinateur.</p>
          </div>
          <div class="benefit">
            <UIcon name="i-lucide-users" class="benefit__icon" />
            <h3>Vos clients sont mieux servis</h3>
            <p>Prise de rendez-vous en ligne, relances automatiques, chatbot qui répond même le dimanche.</p>
          </div>
          <div class="benefit">
            <UIcon name="i-lucide-shield-check" class="benefit__icon" />
            <h3>Vous avancez sans risque</h3>
            <p>On commence petit, prix fixé, vous validez chaque étape. Si ça ne vous convient pas, on s'arrête.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMULAIRE COURT -->
    <section id="form" class="form-section">
      <div class="form-section__inner">
        <h2 class="form-section__title">Parlons de votre activité</h2>
        <p class="form-section__sub">
          Trois questions, pas plus. Je vous réponds personnellement dans la journée.
        </p>

        <div v-if="submitted" class="form-success">
          <div class="form-success__icon">
            <UIcon name="i-lucide-check" class="h-6 w-6 text-white" />
          </div>
          <h3>Merci {{ lastName || '' }} !</h3>
          <p>
            J'ai bien reçu votre message et je vous rappelle au plus vite —
            souvent dans l'heure pendant les jours ouvrés.
            Si c'est plus simple pour vous,
            <a :href="whatsappHref" target="_blank" rel="noopener">
              continuez la conversation sur WhatsApp
            </a>.
          </p>
        </div>

        <form v-else @submit.prevent="submitForm" class="short-form">
          <div class="field">
            <label for="ln-name">Votre prénom *</label>
            <input
              id="ln-name"
              v-model="form.name"
              type="text"
              placeholder="Ex : Marie"
              required
              minlength="2"
            />
          </div>

          <div class="field">
            <label for="ln-phone">Votre numéro (téléphone ou WhatsApp) *</label>
            <input
              id="ln-phone"
              v-model="form.phone"
              type="tel"
              placeholder="Ex : 0692 12 34 56"
              required
              pattern="[+\d\s().-]{6,}"
            />
          </div>

          <div class="field">
            <label for="ln-activity">Votre activité *</label>
            <input
              id="ln-activity"
              v-model="form.activity"
              type="text"
              placeholder="Ex : Salon de coiffure, BTP, restaurant…"
              required
            />
          </div>

          <button type="submit" class="form-submit" :disabled="submitting">
            <UIcon v-if="submitting" name="i-lucide-loader-2" class="animate-spin" />
            <UIcon v-else name="i-lucide-send" />
            {{ submitting ? 'Envoi…' : 'Je veux être rappelé(e)' }}
          </button>

          <p v-if="error" class="form-error">{{ error }}</p>

          <p class="form-note">
            <UIcon name="i-lucide-lock" /> Vos informations restent entre nous,
            elles ne servent qu'à vous rappeler.
          </p>
        </form>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="final-cta">
      <div class="final-cta__inner">
        <h2>Plus simple : un mot sur WhatsApp</h2>
        <p>Je vois votre message, je vous réponds — souvent dans l'heure.</p>
        <a :href="whatsappHref" target="_blank" rel="noopener" class="cta-whatsapp large">
          <UIcon name="i-simple-icons-whatsapp" class="cta-icon" />
          Ouvrir WhatsApp maintenant
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://yassin.abdulla.fr/contact-reunion' }
  ]
})

useSeoMeta({
  title: "Digitaliser votre entreprise à La Réunion (974) | Yassin Abdulla, freelance péi",
  description: "Dirigeants de TPE/PME à La Réunion : un freelance péi pour créer vos sites, logiciels et automatisations. Premier échange gratuit, devis fixe, réponse 24h.",
  ogTitle: "Digitaliser votre entreprise à La Réunion",
  ogDescription: "Un freelance local, un interlocuteur unique, sans jargon. Discutons sur WhatsApp."
})

const { whatsappLink, whatsappMessages } = useContactChannels()
const whatsappHref = whatsappLink({ message: whatsappMessages.landingAd })

const form = reactive({
  name: '',
  phone: '',
  activity: ''
})

const submitting = ref(false)
const submitted = ref(false)
const error = ref('')
const lastName = ref('')

const submitForm = async () => {
  error.value = ''
  submitting.value = true
  try {
    const payload = {
      from_name: form.name,
      from_email: 'landing-ads@placeholder.local',
      subject: `[Landing Ads 974] ${form.activity}`,
      message:
        `Prénom : ${form.name}\n` +
        `Téléphone / WhatsApp : ${form.phone}\n` +
        `Activité : ${form.activity}\n\n` +
        `(Soumission depuis /contact-reunion)`,
      budget: 'Non spécifié',
      found_through: 'Publicité Facebook / Instagram'
    }

    await $fetch('/api/sendContactMail', {
      method: 'POST',
      body: payload
    })

    lastName.value = form.name
    submitted.value = true
  } catch (e) {
    error.value = "L'envoi n'est pas passé. Passez par WhatsApp, ça marchera à coup sûr."
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.landing {
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
}

section {
  padding: 3rem 1.25rem;
}

/* ===== HERO ===== */
.hero {
  padding: 3rem 1.25rem 2rem;
  background: linear-gradient(180deg,
    rgba(var(--action-rgb, 230, 180, 80), 0.08) 0%,
    transparent 100%);
}

.hero__inner {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--action);
  background: rgba(var(--action-rgb, 230, 180, 80), 0.12);
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
}

.hero__title {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero__sub {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 640px;
  margin: 0 auto 2rem;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 2rem;
}

.cta-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 1rem 1.75rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 8px 22px rgba(37, 211, 102, 0.35);
  transition: all 0.25s ease;
}

.cta-whatsapp:hover {
  transform: translateY(-2px);
  background-color: #1ebe5b;
  box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
}

.cta-whatsapp.large {
  padding: 1.15rem 2.25rem;
  font-size: 1.15rem;
}

.cta-icon {
  font-size: 1.35rem;
}

.cta-form {
  color: var(--text);
  opacity: 0.75;
  text-decoration: underline;
  font-size: 0.95rem;
}

.hero__reassurance {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.hero__reassurance li {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

/* ===== PROOF ===== */
.proof {
  background-color: rgba(255, 255, 255, 0.03);
}

.proof__inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.proof__stat {
  text-align: center;
}

.proof__value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--action);
  line-height: 1.1;
}

.proof__label {
  font-size: 0.95rem;
  opacity: 0.85;
  max-width: 320px;
  margin: 0.5rem auto 0;
}

.proof__quote {
  margin: 0;
  padding: 1.5rem;
  background-color: rgba(var(--action-rgb, 230, 180, 80), 0.08);
  border-left: 4px solid var(--action);
  border-radius: 0.75rem;
}

.proof__text {
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.proof__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-style: normal;
}

.proof__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--action);
  flex-shrink: 0;
}

/* ===== BENEFITS ===== */
.benefits__inner {
  max-width: 1000px;
  margin: 0 auto;
}

.benefits__title {
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.benefits__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.benefit {
  padding: 1.25rem 1.25rem 1.25rem 3.25rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 0.75rem;
}

.benefit h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.benefit p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

.benefit__icon {
  position: absolute;
  top: 1.25rem;
  left: 1rem;
  color: var(--action);
  font-size: 1.5rem;
}

/* ===== FORM ===== */
.form-section {
  background: linear-gradient(180deg,
    rgba(var(--action-rgb, 230, 180, 80), 0.05) 0%,
    transparent 100%);
}

.form-section__inner {
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
}

.form-section__title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.form-section__sub {
  opacity: 0.85;
  margin-bottom: 2rem;
}

.short-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-weight: 600;
  font-size: 0.95rem;
}

.field input {
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.15);
  background-color: rgba(255, 255, 255, 0.03);
  color: var(--text);
  font-size: 1rem;
}

.field input:focus {
  outline: none;
  border-color: var(--action);
  box-shadow: 0 0 0 3px rgba(var(--action-rgb, 230, 180, 80), 0.2);
}

.form-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: var(--action);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.form-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-note {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.form-error {
  color: #dc2626;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;
}

.form-success {
  padding: 2rem;
  background-color: rgba(37, 211, 102, 0.08);
  border: 1px solid rgba(37, 211, 102, 0.3);
  border-radius: 0.75rem;
  text-align: center;
}

.form-success__icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.form-success h3 {
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.form-success p {
  line-height: 1.55;
  opacity: 0.9;
}

.form-success a {
  color: var(--action);
  font-weight: 600;
  text-decoration: underline;
}

/* ===== FINAL CTA ===== */
.final-cta {
  text-align: center;
  background-color: rgba(37, 211, 102, 0.06);
}

.final-cta__inner {
  max-width: 620px;
  margin: 0 auto;
}

.final-cta h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.final-cta p {
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

/* ===== RESPONSIVE ===== */
@media (min-width: 640px) {
  .hero__cta {
    flex-direction: row;
    justify-content: center;
  }

  .benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .proof__inner {
    grid-template-columns: 1fr 2fr;
  }
}

@media (min-width: 900px) {
  .hero__title {
    font-size: 2.75rem;
  }

  section {
    padding: 4.5rem 1.5rem;
  }
}
</style>
