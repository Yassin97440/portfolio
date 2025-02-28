<template>
  <div class="px-5 py-7 md:p-14 lg:p-28">
    <Card class="bg-background rounded-lg mb-20 overflow-visible" data-aos="fade-up" data-aos-duration="500">
      <template #title>
        <div class="relative">
          <img src="~/assets/yassin.jpg" alt="Yassin Abdulla"
            class="absolute -top-10 -left-8 w-24 h-24 md:-top-14 md:-left-8 md:w-28 md:h-28 rounded-full border-4 border-background" />
          <h2 class="text-2xl pl-24">Qui suis-je ?</h2>
        </div>
      </template>
      <template #content>
        <div class="bg-primary mx-5 rounded-lg p-4">
          <h3 class="text-xl mb-2">En quelques mots</h3>
          <p class="text-sm space-y-2">
            <span class="block indent-4">
              Salut, moi c'est Yassin, j'ai 24 ans et je suis un développeur
              sympa 😄
            </span>
            <span class="block">
              Cela fait maintenant 4 ans que je suis développeur dans le monde
              du travail. Dont une année en alternance
            </span>
            <span class="block">
              Durant ces 4 dernières années j'ai pu voir et approfondir tout
              pleins de notions en
              <a class="font-semibold">gestion et développement d'application</a>. Qu'il soit technique ou
              "transversale". Que ça soit de
              <a class="font-semibold">l'analyse du besoin</a> client, gestion
              de projet, conception et mise en place de base de données,
              développement d'interfaces graphiques
              <a class="font-semibold">logiciel et web </a>, développement
              back-end. <br />
              Il est possible d'en voir plus sur mon profil et mon parcours
              <a class="text-action" href="/my/profil">ici</a>
            </span>
          </p>
        </div>
      </template>
    </Card>

    <MyProjects data-aos="fade-left" data-aos-duration="1000" />

    <MyExperiences />

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
