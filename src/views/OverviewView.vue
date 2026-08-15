<script setup>
import { RouterLink } from 'vue-router'
import { experience, skills, contactLinks } from '../data/profile'
</script>

<template>
  <section class="overview">
    <div class="hero-card">
      <p class="eyebrow">Choose a concept</p>
      <h1>Three modern directions for Will’s personal site</h1>
      <p class="lede">
        Same profile, three different points of view. The question is whether the site should feel
        like a systems journal, a polished product case study, or a creative field notebook.
      </p>
      <div class="actions">
        <RouterLink to="/quiet-systems" class="btn primary">Quiet Systems</RouterLink>
        <RouterLink to="/product-case-study" class="btn ghost">Product Case Study</RouterLink>
        <RouterLink to="/field-notes" class="btn ghost">Field Notes</RouterLink>
      </div>
    </div>

    <div class="pillars">
      <div class="pillar">
        <h3>Recent Roles</h3>
        <ul>
          <li v-for="job in experience.slice(0, 3)" :key="job.name">
            <span class="job-title">{{ job.position }}</span>
            <span class="job-meta">{{ job.name }} · {{ job.years }}</span>
          </li>
        </ul>
      </div>
      <div class="pillar">
        <h3>Core Capabilities</h3>
        <div class="chips">
          <span v-for="item in skills['Cloud & Infra']" :key="item" class="chip">{{ item }}</span>
          <span v-for="item in skills['DevOps & Delivery']" :key="item" class="chip">{{ item }}</span>
        </div>
      </div>
      <div class="pillar">
        <h3>Contact</h3>
        <div class="contacts">
          <a v-for="link in contactLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer"
            >{{ link.label }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  min-height: calc(100vh - 70px);
  padding: 60px clamp(18px, 4vw, 60px) 80px;
  background: radial-gradient(circle at 20% 20%, rgba(122, 92, 255, 0.16), transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(0, 213, 255, 0.18), transparent 40%),
    #05070c;
  color: #e9edf2;
}

.hero-card {
  max-width: 840px;
  padding: 32px;
  background: rgba(12, 18, 32, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
}

.eyebrow {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8ee0ff;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  margin-bottom: 14px;
  color: #ffffff;
}

.lede {
  max-width: 650px;
  color: #b7c1d1;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #e9edf2;
}

.btn.primary {
  background: linear-gradient(120deg, #7a5cff, #00d5ff);
  color: #05070c;
  border: none;
}

.btn.ghost {
  background: transparent;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.pillar {
  padding: 22px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.pillar h3 {
  margin-bottom: 10px;
  color: #ffffff;
  letter-spacing: 0.02em;
}

.pillar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.job-title {
  display: block;
  font-weight: 700;
  color: #e9edf2;
}

.job-meta {
  color: #7c879a;
  font-size: 0.9rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #cdd7e5;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
}

.contacts {
  display: grid;
  gap: 8px;
}

.contacts a {
  color: #8ee0ff;
  font-weight: 600;
}

@media (max-width: 640px) {
  .hero-card {
    padding: 24px;
  }
}
</style>
