import { defineEventHandler, readMultipartFormData, H3Event } from 'h3'

const config = useRuntimeConfig()
const apiUrl = config.public.catDogApi

export default defineEventHandler(async (event) => {
  try {
    // Lire les données multipart (l'image)
    const formData = await readMultipartFormData(event);
    if (!formData || !formData.length) {
      throw new Error('Aucun fichier reçu');
    }

    const fileField = formData.find(field => field.name === 'file');
    if (!fileField || !fileField.data) {
      throw new Error('Fichier non trouvé dans la requête');
    }

    // Créer un FormData pour l'API FastAPI
    const apiFormData = new FormData();
    const fileBlob = new Blob([fileField.data], { type: fileField.type || 'image/jpeg' });
    apiFormData.append('file', fileBlob);

    // Appeler l'API du modèle
    const response = await fetch(apiUrl + '/predict/', {
      method: 'POST',
      body: apiFormData
    });

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
    }

    // Retourner le résultat
    const result = await response.json();
    return result;

  } catch (error) {
    console.error('Erreur serveur:', error);
    return {
      statusCode: 500,
      statusMessage: 'Erreur lors de la classification'
    }
  }
})
