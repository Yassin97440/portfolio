import { defineStore } from 'pinia'

interface PredictionResponse {
  className: string,
  confidence: number
}
export const useCatVsDogStore = defineStore('catVsDogStore', {
  state: () => ({
    isLoading: false,
    result: null as { prediction: string; confidence: number } | null
  }),
  actions: {
    async classifyImage(imageFile: File) {
      this.isLoading = true;
      this.result = null;

      try {
        // Créer un FormData pour envoyer l'image
        const formData = new FormData();
        formData.append('file', imageFile);
        // Appeler l'API du serveur Nuxt
        const response = await $fetch('/api/cat-vs-dog', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const typedResponse = response as PredictionResponse;
        this.result = {
          prediction: typedResponse.className,
          confidence: typedResponse.confidence
        };

        return this.result;
      } catch (error) {
        console.error('Erreur:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
