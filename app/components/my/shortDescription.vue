<template>
  <Card class="bg-background rounded-lg mb-20 overflow-visible text-text" data-aos="fade-up" data-aos-duration="800">
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
          <p class="text-sm text-secondary space-y-2">
            <span class="block indent-4">
              Salut, moi c'est Yassin, j'ai 24 ans et je suis un développeur
              sympa 😄
            </span>
            <span class="block">
              Fort de 4 années d'expérience en tant que développeur, je suis aujourd'hui prêt à mettre mes compétences
              et mon expertise au service d'entreprises. Et dans les valeurs qui me correspondent.
              Ayant évolué en tant que lead développeur, puis chef de projet et d'équipe, j'ai acquis non seulement des
              compétences techniques solides, mais aussi des soft skills qui me permettent de répondre efficacement à
              vos besoins dans les meilleurs délais.

              N'hésitez pas à me contacter pour discuter de votre projet !
              <a class="text-action" href="/my/profil">ici</a>
            </span>
          </p>
        </div>
      </template>
    </Card>
</template>

<script lang="ts" setup>
import { useMyStrapiContentStore } from '~/stores/strapi-content';
import { StrapiTypes } from '~~/services/strapi/StrapiTypes';
const profil = ref<any>(null);

const strapi = useStrapi();
const store = useMyStrapiContentStore()

onMounted(async () => {
  const response = await strapi.find(StrapiTypes.MY_PROFIL);
  profil.value = response.data;
  console.log("🚀 ~ onMounted ~  profil.value:",  profil.value)

})
</script>

<style>

</style>