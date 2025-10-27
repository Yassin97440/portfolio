const projects = [
    {
        id: 1,
        title: "Digilbum - Album Digital",
        shortDescription: "Application web permettant de créer et partager des albums photos numériques avec ses proches, offrant une expérience immersive pour revivre ses souvenirs.",
        description: `J'ai eu une idée grâce à ma sœur d'un projet d'album digital qui permet de partager des photos avec ses proches.
        Mais je voulais faire bien plus qu'un Google Drive où on dépose et puis voilà.
        L'idée principale que j'avais au début pour cette app était d'avoir la meilleure immersion
        dans des souvenirs qu'on regarde à travers les photos partagées.
        Le but pour moi était de pouvoir créer un événement avec des dates, auquel on peut ajouter un ou plusieurs albums
        (qu'on peut dater aussi) avec des photos pour chaque album.
        Ou tout simplement partager un album. Le fait d'ajouter des dates et de structurer les photos rajoute un plus
        dans cette immersion de souvenirs je trouve.
        \n 
        \nPour ce faire, j'ai fait le choix de NuxtJS et Vuetify, qui sont les seules technos front web avec lesquelles j'ai pu travailler.
        N'ayant pas trop d'expérience front web autre que Nuxt et Vue, j'avais regardé rapidement les différentes technos comme React ou Angular.
        Mais j'avoue qu'avec l'habitude, je trouve le développement tellement agréable avec Nuxt. De plus je pense que cette techno a un gros potentiel, et sa communauté est en forte croissance !
        \nPour le back, j'ai fait du Spring Boot. Voulant renforcer mes compétences sur ce framework je suis parti sur ça.
        J'avais déjà une première expérience de quelques années avec Spring Framework (mais à la version 3, le dinosaure !).
        La prise en main de Spring Boot a été assez simple du coup. Mais connaissant le gros potentiel et tout ce qu'a à offrir ce framework,
        je voulais (je veux toujours d'ailleurs) apprendre à développer un back en utilisant tout l'écosystème que Spring a à proposer.
        Que ce soit pour la partie sécurité, base de données, web, cloud, ...
        \nJ'ai fait le choix de MySQL pour la base de données. Ayant travaillé uniquement sur MySQL pour la base de données, j'ai fait ce choix pour démarrer rapidement.
        J'avais déjà pas mal fait de conception de BDD avec la méthode Merise en utilisant MySQL,
        même si j'avais d'autres idées de bases de données à explorer comme PostgreSQL ou MariaDB.
        \nPour la sauvegarde et l'affichage des photos j'ai fait mes petites recherches.
        Ayant des contraintes de budget j'ai fait le choix de stocker les images directement sur mon serveur.
        Et pour les rendre accessibles, j'ai fait le choix de Nginx. Une petite image Docker et c'est parti.
        \nDu coup dans l'idée l'utilisateur envoie ses photos via un formulaire au back.
        Le back se charge de sauvegarder les images tout en enregistrant en base de données le path de l'image.
        Quand l'utilisateur voudra regarder ses images, le back renverra une URL qui est celle de Nginx suivi du bon path pour chaque image.
        \n(petit schéma qui devrait arriver)`,
        image: "/digilbum_screenshot.png",
        technologies: [
            "Nuxt",
            "Vuetify",
            "TailwindCSS",
            "Java",
            "Spring Boot",
            "MySQL",
            "Nginx",
            "Docker",
        ],
        demoUrl: "https://digilbum.abdulla.fr/",
        githubUrl: "https://github.com/Yassin97440/digilbum-front",
        type: "Perso"
    },
    {
        id: 2,
        title: "Portfolio + ChatBot IA",
        shortDescription: "Portfolio personnel développé avec Nuxt, PrimeVue et TailwindCSS, pour mettre en avant mon expérience et mes projets. Avec une attention particulière au SEO.",
        description: `Un portfolio qui présente mon parcours et mes expériences. Comme beaucoup de développeurs, 
        je voulais mettre en avant mon expérience professionnelle, mes projets pros et perso.
        Voulant partir sur quelque chose de techniquement simple,
        j'ai fait le choix de Nuxt que je trouve très agréable pour développer une app web front, et la techno front avec laquelle je suis vraiment à l'aise.
        \nJe me suis aussi lancé sur l'indexation et le référencement de mon portfolio, afin de m'exercer et de mettre en avant mon profil au mieux.
        Et les sujets de SEO et de référencement sont, je pense, des sujets avec un enjeu business fort.
        Et Nuxt prend bien en charge la partie SEO, ce qui en fait un bon choix pour mes critères.
        \nJ'ai ensuite eu l'idée d'intégrer un chatbot IA. Voulant me spécialiser dans ce domaine ça m'a permis de faire un premier pas dans ce domaine.
        J'ai fait le choix simple de faire des appels API.`,
        image: "/portfolio_screenshot.png",
        technologies: [
            "Nuxt",
            "PrimeVue",
            "TailwindCSS",
            "TypeScript",
            "Docker",
            "Mistral API"
        ],
        githubUrl: "https://github.com/Yassin97440/portfolio",
        type: "Perso"
    },
    {
        id: 3,
        title: "Cat vs dog",
        shortDescription: "Projet d'auto-formation en deep learning, développement d'un modèle de classification d'images pour différencier les chats des chiens en utilisant Python.",
        description: `Voulant monter en compétences techniquement en machine learning et deep learning, j'ai commencé à m'auto-former en autodidacte.
        J'ai pu suivre une petite formation aux formats vidéos dans un premier temps. Sur la chaîne Youtube de MachineLearnia.
        \nJ'ai pu voir mathématiquement ce qu'est un perceptron et ce qui en suit (activation, forward propagation, backward propagation).
        J'ai aussi pu comprendre les enjeux de la data dans le processus de développement et d'entraînement d'un modèle.
        J'ai pu voir certaines étapes de préparation de données comme la préparation matricielle des données et la normalisation des données.
        Je suis aussi passé par des petites révisions en probabilités et en calcul matriciel 😵‍💫.
        \nJ'ai ensuite pu comprendre comment mettre en œuvre un réseau de neurones, mais aussi pourquoi et dans quel cas.
        Comme le but était de comprendre les concepts de base, je n'ai pas utilisé de librairie dans un premier temps.
        Après avoir eu de bons résultats avec ce modèle fait à la main, j'ai voulu faire le même exercice en utilisant une librairie cette fois-ci.
        J'ai fait le choix de TensorFlow, étant une librairie haut niveau, ça me facilite la compréhension et la mise en place pour une première.
        \nEn faisant mes petites recherches, j'ai pu voir les réseaux de convolution. J'ai pu lire que les CNN offrent de très bons résultats 
        sur des besoins de classifications d'images. J'ai du coup plongé la tête dans ce type de réseaux.
        De plus, en utilisant bien les LLM je trouve que c'est encore plus accessible de comprendre techniquement (une IA qui t'aide à développer des IA, on y est 😅).
        \nJ'ai au fur et à mesure pu voir d'autres notions comme les autres types d'activations optimisés pour les réseaux de neurones.
        Notamment ReLU, que j'ai utilisé + une activation sigmoid pour la sortie de mon modèle afin d'avoir la classification d'image.
        J'ai aussi vu les transformers...`,
        image: "/cat_vs_dog.webp",
        technologies: [
            "Python",
            "NumPy",
            "TensorFlow/Keras",
            "Deep Learning"
        ],
        githubUrl: "https://github.com/Yassin97440/portfolio",
        type: "Auto-formation"
    }
]

export { projects }