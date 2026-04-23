<template>
  <div class="min-h-screen flex flex-col bg-background">
    <header class="landing-header">
      <div class="landing-header__inner">
        <div class="landing-brand">
          <span class="landing-brand__name">Yassin Abdulla</span>
          <span class="landing-brand__role">Freelance digital · La Réunion 974</span>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="landing-footer">
      <p class="text-xs opacity-70">
        © {{ new Date().getFullYear() }} Yassin Abdulla · Micro-entrepreneur · La Réunion (974)
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.landing-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.08);
}

.landing-header__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.landing-brand {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.landing-brand__name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
}

.landing-brand__role {
  font-size: 0.8rem;
  opacity: 0.75;
  color: var(--text);
}

.landing-footer {
  padding: 1.25rem;
  text-align: center;
  border-top: 1px solid rgba(var(--text-rgb, 255, 255, 255), 0.08);
}
</style>
