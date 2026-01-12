<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="100">
      <!-- Name -->
      <label for="name" class="block text-sm font-medium mb-1 text-text">Nom complet <span class="text-red-500">*</span></label>
      <UInput
        id="name"
        v-model="formData.name"
        :color="errors.name ? 'error' : undefined"
        class="w-full transition-all duration-200"
        :class="{'shadow-action/20 scale-101': fieldFocus.name}"
        placeholder="Votre nom et prénom"
        @focus="fieldFocus.name = true"
        @blur="fieldFocus.name = false"
      />
      <small v-if="errors.name" class="text-red-500 block mt-1 animate-pulse">{{ errors.name }}</small>
    </div>

    <!-- Email -->
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="150">
      <label for="email" class="block text-sm font-medium mb-1 text-text">Email <span class="text-red-500">*</span></label>
      <UInput
        id="email"
        v-model="formData.email"
        type="email"
        :color="errors.email ? 'error' : undefined"
        class="w-full transition-all duration-200"
        :class="{'shadow-action/20 scale-101': fieldFocus.email}"
        placeholder="votre.email@exemple.com"
        @focus="fieldFocus.email = true"
        @blur="fieldFocus.email = false"
      />
      <small v-if="errors.email" class="text-red-500 block mt-1 animate-pulse">{{ errors.email }}</small>
    </div>

    <!-- Subject -->
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="200">
      <label for="subject" class="block text-sm font-medium mb-1 text-text">Sujet <span class="text-red-500">*</span></label>
      <USelect
        id="subject"
        v-model="formData.subject"
        :items="subjectOptions"
        value-key="value"
        label-key="label"
        placeholder="Sélectionnez un sujet"
        class="w-full transition-all duration-200"
        :class="{'shadow-action/20 scale-101': fieldFocus.subject}"
        :color="errors.subject ? 'error' : undefined"
        @focus="fieldFocus.subject = true"
        @blur="fieldFocus.subject = false"
      />
      <small v-if="errors.subject" class="text-red-500 block mt-1 animate-pulse">{{ errors.subject }}</small>
    </div>

    <!-- Message -->
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="250">
      <label for="message" class="block text-sm font-medium mb-1 text-text">Message <span class="text-red-500">*</span></label>
      <UTextarea
        id="message"
        v-model="formData.message"
        :rows="5"
        :color="errors.message ? 'error' : undefined"
        class="w-full transition-all duration-200"
        :class="{'shadow-action/20 scale-101': fieldFocus.message}"
        placeholder="Décrivez votre projet ou votre besoin en détail..."
        @focus="fieldFocus.message = true"
        @blur="fieldFocus.message = false"
      />
      <small v-if="errors.message" class="text-red-500 block mt-1 animate-pulse">{{ errors.message }}</small>
    </div>

    <!-- Budget -->
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="300">
      <label class="block text-sm font-medium mb-1 text-text">Budget estimé (facultatif)</label>
      <div class="p-3 bg-primary/50 rounded-lg">
        <URadioGroup 
          v-model="formData.budget" 
          :items="budgetOptions"
          value-key="value"
          label-key="label"
          orientation="horizontal"
          variant="list"
          color="primary"
        />
      </div>
    </div>

    <!-- Found Through -->
    <div class="form-group hover:shadow-sm" data-aos="fade-up" data-aos-delay="350">
      <label class="block text-sm font-medium mb-1 text-text">Comment m'avez-vous trouvé? (facultatif)</label>
      <USelect
        v-model="formData.foundThrough"
        :items="foundThroughOptions"
        value-key="value"
        label-key="label"
        placeholder="Sélectionnez une option"
        class="w-full transition-all duration-200"
        :class="{'shadow-action/20 scale-101': fieldFocus.foundThrough}"
        @focus="fieldFocus.foundThrough = true"
        @blur="fieldFocus.foundThrough = false"
      />
    </div>

    <!-- Submit -->
    <div data-aos="fade-up" data-aos-delay="400">
      <UButton 
        type="submit" 
        :disabled="submitting"
        :loading="submitting"
        block
        class="bg-action hover:bg-action/80 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      >
        <template #leading>
          <UIcon v-if="submitting" name="i-lucide-loader-2" class="animate-spin" />
        </template>
        {{ submitting ? 'Envoi en cours...' : 'Envoyer le message' }}
      </UButton>
    </div>

    <transition name="fade">
      <div v-if="formStatus.showMessage" 
           class="mt-4 text-center p-3 rounded-lg" 
           :class="[formStatus.success ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50']">
        {{ formStatus.message }}
      </div>
    </transition>
  </form>
</template>

<script setup lang="ts">
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  foundThrough: string;
}

interface FormError {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  showMessage: boolean;
  success: boolean;
  message: string;
}

interface FieldFocus {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
  foundThrough: boolean;
}

interface Option {
  label: string;
  value: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: '',
  foundThrough: ''
});

const errors = reactive<FormError>({});

const fieldFocus = reactive<FieldFocus>({
  name: false,
  email: false,
  subject: false,
  message: false,
  foundThrough: false
});

const subjectOptions: Option[] = [
  { label: 'Proposition de projet', value: 'project' },
  { label: 'Opportunité freelance', value: 'freelance' },
  { label: 'Collaboration', value: 'collaboration' },
  { label: 'Question technique', value: 'technical' },
  { label: 'Autre', value: 'other' }
];

const budgetOptions: Option[] = [
  { label: '< 1000€', value: 'low' },
  { label: '1000€ - 5000€', value: 'medium' },
  { label: '5000€ - 10000€', value: 'high' },
  { label: '> 10000€', value: 'enterprise' }
];

const foundThroughOptions: Option[] = [
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'GitHub', value: 'github' },
  { label: 'Référencement (Google)', value: 'search' },
  { label: 'Recommandation', value: 'recommendation' },
  { label: 'Autre', value: 'other' }
];

const submitting = ref(false);
const formStatus = reactive<FormStatus>({
  showMessage: false,
  success: false,
  message: ''
});

// Validation simple côté client
const validateForm = (): boolean => {
  // Réinitialisation des erreurs
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof FormError];
  });

  let isValid = true;

  if (!formData.name || formData.name.length < 3) {
    errors.name = 'Le nom doit contenir au moins 3 caractères';
    isValid = false;
  }

  if (!formData.email) {
    errors.email = 'L\'email est requis';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
    isValid = false;
  }

  if (!formData.subject) {
    errors.subject = 'Veuillez sélectionner un sujet';
    isValid = false;
  }

  if (!formData.message || formData.message.length < 20) {
    errors.message = 'Le message doit contenir au moins 20 caractères';
    isValid = false;
  }

  return isValid;
};

const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.subject = '';
  formData.message = '';
  formData.budget = '';
  formData.foundThrough = '';
};

const handleSubmit = async () => {
  formStatus.showMessage = false;
  
  if (!validateForm()) return;
  
  submitting.value = true;
  
  try {
     // Utilisation d'EmailJS pour envoyer un email
     const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: subjectOptions.find(option => option.value === formData.subject)?.label || formData.subject,
      message: formData.message,
      budget: budgetOptions.find(option => option.value === formData.budget)?.label || 'Non spécifié',
      found_through: foundThroughOptions.find(option => option.value === formData.foundThrough)?.label || 'Non spécifié'
    };

    const response = await $fetch('/api/sendContactMail', {
      method: 'POST',
      body: templateParams
    });
    
    if (response.status === 200) {
    formStatus.showMessage = true;
    formStatus.success = true;
    formStatus.message = 'Votre message a été envoyé avec succès. Je vous répondrai dans les meilleurs délais.';
    }
    
    // Réinitialisation du formulaire
    resetForm();
  } catch (error) {
    formStatus.showMessage = true;
    formStatus.success = false;
    formStatus.message = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.';
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>

.form-group {
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.scale-101 {
  transform: scale(1.01);
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
