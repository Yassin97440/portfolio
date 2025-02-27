<template>
  <div class="p-5 md:p-14 lg:p-28">
    <Card>
      <template #title>
        <h2 class="text-3xl font-bold">Contactez-moi</h2>
      </template>
      <template #content>
        <BaseSubCard>
          <p>
            Que ça soit pour un projet, une mission, une question ou simplement pour discuter, n'hésitez pas à me
            contacter 😊
          </p>
          <div class="flex items-center gap-2 my-4">
            <a href="mailto:yassinabdulla7@gmail.com" class="flex items-center gap-2 text-action ">
              <EnvelopeIcon class="h-6 w-6" />
              <span>yassinabdulla7@gmail.com</span>
            </a>
          </div>
          <div class="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/yassin-abdulla97440/" target="_blank"
              class="flex items-center gap-2 text-action hover:text-blue-600">
              <img src="/icons/linkedin.svg" class="h-6 w-6" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/votre-username" target="_blank"
              class="flex items-center gap-2 text-action hover:text-gray-900">
              <img src="/icons/github.svg" class="h-6 w-6" alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </BaseSubCard>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
</script>
