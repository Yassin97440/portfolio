<template>
  <div v-if="formStatus.success" class="success-box" data-aos="fade-up">
    <div class="success-icon">
      <UIcon name="i-lucide-check" class="h-6 w-6 text-white" />
    </div>
    <h3 class="success-title">Message bien reçu, merci !</h3>
    <p class="success-text">
      Je vous réponds personnellement sous 24 h ouvrées
      (souvent bien plus vite depuis La Réunion).
      En attendant, si votre projet est urgent,
      <a :href="whatsappHref" target="_blank" rel="noopener" class="success-link">
        un mot sur WhatsApp
      </a>
      et je vous rappelle dans la journée.
    </p>
    <UButton variant="soft" color="neutral" @click="resetAll">
      Envoyer un autre message
    </UButton>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="space-y-5">
    <!-- 1. Prénom / Nom -->
    <div class="form-group" data-aos="fade-up" data-aos-delay="100">
      <label for="name" class="block text-sm font-medium mb-1 text-text">
        Votre prénom et nom <span class="text-red-500">*</span>
      </label>
      <UInput
        id="name"
        v-model="formData.name"
        :color="errors.name ? 'error' : undefined"
        class="w-full"
        placeholder="Ex : Marie Payet"
      />
      <small v-if="errors.name" class="text-red-500 block mt-1">{{ errors.name }}</small>
    </div>

    <!-- 2. Email ou téléphone -->
    <div class="form-group" data-aos="fade-up" data-aos-delay="150">
      <label for="contact" class="block text-sm font-medium mb-1 text-text">
        Comment je vous réponds ? <span class="text-red-500">*</span>
      </label>
      <UInput
        id="contact"
        v-model="formData.contact"
        :color="errors.contact ? 'error' : undefined"
        class="w-full"
        placeholder="Votre email ou numéro WhatsApp"
      />
      <small class="block mt-1 opacity-70 text-xs">Email ou numéro mobile — comme vous préférez.</small>
      <small v-if="errors.contact" class="text-red-500 block mt-1">{{ errors.contact }}</small>
    </div>

    <!-- 3. Activité -->
    <div class="form-group" data-aos="fade-up" data-aos-delay="200">
      <label for="activity" class="block text-sm font-medium mb-1 text-text">
        Votre activité
      </label>
      <UInput
        id="activity"
        v-model="formData.activity"
        class="w-full"
        placeholder="Ex : Salon de coiffure à Saint-Denis, BTP, restaurant…"
      />
    </div>

    <!-- 4. Projet / besoin -->
    <div class="form-group" data-aos="fade-up" data-aos-delay="250">
      <label for="message" class="block text-sm font-medium mb-1 text-text">
        Que puis-je faire pour vous ? <span class="text-red-500">*</span>
      </label>
      <UTextarea
        id="message"
        v-model="formData.message"
        :rows="5"
        :color="errors.message ? 'error' : undefined"
        class="w-full"
        placeholder="Dites-moi simplement ce qui vous fait perdre du temps, ou l'idée qui vous trotte dans la tête. Pas besoin de parler technique."
      />
      <small v-if="errors.message" class="text-red-500 block mt-1">{{ errors.message }}</small>
    </div>

    <div data-aos="fade-up" data-aos-delay="300">
      <UButton
        type="submit"
        :disabled="submitting"
        :loading="submitting"
        block
        size="lg"
        class="bg-action hover:bg-action/90 text-white py-3 rounded-lg"
      >
        <template #leading>
          <UIcon v-if="submitting" name="i-lucide-loader-2" class="animate-spin" />
          <UIcon v-else name="i-lucide-send" />
        </template>
        {{ submitting ? 'Envoi en cours…' : 'Envoyer mon message' }}
      </UButton>

      <p class="mt-3 text-xs opacity-70 text-center">
        Vos informations ne servent qu'à vous répondre. Réponse sous 24 h ouvrées.
      </p>
    </div>

    <transition name="fade">
      <div v-if="formStatus.showMessage && !formStatus.success"
           class="mt-4 text-center p-3 rounded-lg text-red-500 bg-red-50">
        {{ formStatus.message }}
      </div>
    </transition>
  </form>
</template>

<script setup lang="ts">
interface FormData {
  name: string;
  contact: string;
  activity: string;
  message: string;
}

interface FormError {
  name?: string;
  contact?: string;
  message?: string;
}

interface FormStatus {
  showMessage: boolean;
  success: boolean;
  message: string;
}

const { whatsappLink, whatsappMessages } = useContactChannels()
const whatsappHref = whatsappLink({ message: whatsappMessages.homepage })

const formData = reactive<FormData>({
  name: '',
  contact: '',
  activity: '',
  message: ''
});

const errors = reactive<FormError>({});
const submitting = ref(false);
const formStatus = reactive<FormStatus>({
  showMessage: false,
  success: false,
  message: ''
});

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof FormError];
  });

  let isValid = true;

  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Merci de renseigner votre prénom et nom';
    isValid = false;
  }

  const isEmail = /^\S+@\S+\.\S+$/.test(formData.contact);
  // numéro simple : 6+ chiffres, spaces / + / . acceptés
  const isPhone = /^[+\d\s().-]{6,}$/.test(formData.contact);

  if (!formData.contact) {
    errors.contact = 'Un email ou un numéro pour vous répondre';
    isValid = false;
  } else if (!isEmail && !isPhone) {
    errors.contact = 'Format non reconnu — email ou numéro mobile ?';
    isValid = false;
  }

  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Quelques mots sur votre besoin, même bref, suffisent';
    isValid = false;
  }

  return isValid;
};

const resetForm = () => {
  formData.name = '';
  formData.contact = '';
  formData.activity = '';
  formData.message = '';
};

const resetAll = () => {
  resetForm()
  formStatus.showMessage = false
  formStatus.success = false
  formStatus.message = ''
}

const handleSubmit = async () => {
  formStatus.showMessage = false;

  if (!validateForm()) return;

  submitting.value = true;

  try {
    const isEmail = /^\S+@\S+\.\S+$/.test(formData.contact)
    const templateParams = {
      from_name: formData.name,
      from_email: isEmail ? formData.contact : 'non-renseigne@placeholder.local',
      subject: formData.activity
        ? `Contact freelance — ${formData.activity}`
        : 'Contact freelance',
      message:
        `Activité : ${formData.activity || 'Non précisée'}\n` +
        `Canal préféré : ${isEmail ? 'Email' : 'Téléphone / WhatsApp : ' + formData.contact}\n\n` +
        `---\n${formData.message}`,
      budget: 'Non spécifié',
      found_through: 'Formulaire site'
    };

    const response = await $fetch('/api/sendContactMail', {
      method: 'POST',
      body: templateParams
    });

    if ((response as { status: number }).status === 200) {
      formStatus.showMessage = true;
      formStatus.success = true;
      resetForm();
    }
  } catch (error) {
    formStatus.showMessage = true;
    formStatus.success = false;
    formStatus.message = "Aïe, l'envoi n'est pas passé. Réessayez ou écrivez-moi sur WhatsApp ?";
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.form-group {
  border-radius: 0.5rem;
  padding: 0.25rem 0;
}

.success-box {
  padding: 2rem 1.5rem;
  text-align: center;
  background-color: rgba(var(--action-rgb, 230, 180, 80), 0.08);
  border: 1px solid rgba(var(--action-rgb, 230, 180, 80), 0.3);
  border-radius: 0.75rem;
}

.success-icon {
  width: 56px;
  height: 56px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.success-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.75rem;
}

.success-text {
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}

.success-link {
  color: var(--action);
  font-weight: 600;
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
