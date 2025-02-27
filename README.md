# Portfolio Nuxt 3 avec Chatbot IA

Portfolio professionnel développé avec Nuxt 3, intégrant un chatbot IA propulsé par Mistral AI pour une expérience utilisateur interactive.

## Technologies Utilisées

- **Frontend**: Nuxt 3 (Vue.js)
- **Styling**: TailwindCSS + PrimeVue
- **Backend**: API Serverless Nuxt
- **IA**: Mistral AI
- **Déploiement**: Docker + GitHub Actions

## Configuration Requise

- Node.js 18+
- Docker (pour le déploiement)
- Clé API Mistral AI

## Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```bash
NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_verification_code_here
MISTRAL_API_KEY=your_mistral_api_key_here
```



## Déploiement Docker

Le projet inclut un Dockerfile multi-stage pour optimiser le déploiement :

```bash
# Build de l'image
docker build -t portfolio .

# Lancement du conteneur
docker run -p 3000:3000 portfolio
```

## Déploiement Automatisé

Le workflow GitHub Actions est configuré pour :
1. Construire l'image Docker
2. Déployer automatiquement sur votre serveur
3. Exposer l'application sur le port 3010

## Fonctionnalités Principales

- **Design Responsive**: Interface adaptative avec TailwindCSS
- **Chatbot IA**: Assistant personnel propulsé par Mistral AI
- **Thème Adaptatif**: Support des modes clair/sombre
- **SEO Optimisé**: Meta tags et sitemap automatique

## Structure du Projet

```
├── app/
│   ├── assets/         # Styles et ressources
│   └── components/     # Composants Vue
├── server/
│   └── api/           # API Serverless
├── services/          # Services (Chat, IA)
└── public/           # Fichiers statiques
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

[MIT License](https://opensource.org/licenses/MIT)
