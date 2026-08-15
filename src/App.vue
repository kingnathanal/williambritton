<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const showConceptNav = computed(() => route.name !== 'quiet-systems')
</script>

<template>
  <div class="shell">
    <header v-if="showConceptNav" class="topbar">
      <RouterLink class="brand" to="/concepts">William Britton — Portfolio Concepts</RouterLink>
      <nav class="nav">
        <RouterLink to="/concepts">Concepts</RouterLink>
        <RouterLink to="/quiet-systems">Quiet Systems</RouterLink>
        <RouterLink to="/product-case-study">Product Case Study</RouterLink>
        <RouterLink to="/field-notes">Field Notes</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #05070c;
  color: #e9edf2;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 7, 12, 0.9);
  backdrop-filter: blur(8px);
}

.brand {
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8ee0ff;
}

.nav {
  display: flex;
  gap: 14px;
  font-size: 0.95rem;
}

.nav a {
  padding: 8px 12px;
  border-radius: 10px;
  color: #cdd7e5;
}

.nav a.router-link-exact-active {
  background: linear-gradient(120deg, #7a5cff, #00d5ff);
  color: #05070c;
  font-weight: 700;
}

main {
  flex: 1;
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .nav {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
