<script setup>
import { bio, contactLinks, experience, projects, skills } from '../data/profile'
</script>

<template>
  <section class="design">
    <div class="hero">
      <div class="headline">
        <p class="eyebrow">Design Forward</p>
        <h1>Intentional, bold, portfolio that feels editorial.</h1>
        <p class="lede">
          Will Britton is a Staff Software Engineer and platform leader in Metro Detroit. He shapes
          large-scale cloud platforms at GM (Atmos on Azure/AKS), designs resilient architectures,
          and lifts teams through strong technical ownership.
        </p>
        <div class="buttons">
          <a class="btn primary" :href="contactLinks[2].href">Email</a>
          <a class="btn ghost" :href="contactLinks[0].href" target="_blank" rel="noreferrer"
            >LinkedIn</a
          >
        </div>
        <div class="tags">
          <span>Solutions Architect</span>
          <span>DevOps</span>
          <span>Cloud</span>
          <span>Photography</span>
        </div>
      </div>
      <div class="hero-card">
        <div class="stat">
          <h3>Platform Modernization</h3>
          <p>Container-first blueprints, CI/CD, SSO, and observability uplift.</p>
        </div>
        <div class="stat">
          <h3>Delivery Lead</h3>
          <p>Guided teams building Spring Boot services and frontends in Vue/React.</p>
        </div>
        <div class="stat">
          <h3>Infra & Security</h3>
          <p>GitHub Actions/Jenkins pipelines, policy gates, and cloud hardening.</p>
        </div>
      </div>
    </div>

    <div class="feature-grid">
      <div class="feature-card about">
        <div class="overline">About</div>
        <p class="bio">
          {{ bio }}
        </p>
        <div class="meta-row">
          <span>Staff Software Engineer · Cloud Platform Engineering</span>
          <span>Azure · AKS · Terraform · GitHub Actions · Istio/Consul</span>
        </div>
      </div>
      <div class="feature-card accent">
        <div class="overline">Current Focus</div>
        <h2>{{ experience[0].position }}</h2>
        <p class="meta">{{ experience[0].name }} · {{ experience[0].years }}</p>
        <ul>
          <li v-for="item in experience[0].highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="feature-card">
        <div class="overline">Capabilities</div>
        <div class="pill-group">
          <span v-for="(items, group) in skills" :key="group" class="pill">
            <strong>{{ group }}</strong>
            <small>{{ items.slice(0, 3).join(', ') }}</small>
          </span>
        </div>
      </div>
      <div class="feature-card">
        <div class="overline">Projects</div>
        <div class="project-grid">
          <div v-for="project in projects" :key="project.name" class="project">
            <p class="project-name">{{ project.name }}</p>
            <p class="project-summary">{{ project.summary }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-head">
        <div>
          <div class="overline">Experience</div>
          <h2>Roles that shaped my approach</h2>
        </div>
        <a class="btn ghost" :href="contactLinks[1].href" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div class="timeline-items">
        <div v-for="role in experience" :key="role.name" class="timeline-card">
          <div class="card-top">
            <div>
              <p class="role">{{ role.position }}</p>
              <p class="company">{{ role.name }}</p>
            </div>
            <p class="years">{{ role.years }}</p>
          </div>
          <ul>
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

.design {
  font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #fef8ff 0%, #f2fbff 35%, #f8fafc 70%, #ffffff 100%);
  color: #0f172a;
  min-height: calc(100vh - 70px);
  padding: 40px clamp(16px, 4vw, 64px) 80px;
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  align-items: center;
  padding: clamp(16px, 3vw, 32px);
  border-radius: 24px;
  background: radial-gradient(circle at 30% 20%, rgba(122, 92, 255, 0.22), transparent 40%),
    radial-gradient(circle at 80% 30%, rgba(0, 213, 255, 0.18), transparent 40%),
    #0b1222;
  color: #e9edf2;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.35);
}

.headline h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  margin: 8px 0 12px;
  color: #ffffff;
}

.eyebrow {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: #9fe0ff;
}

.lede {
  color: #cbd5e1;
  max-width: 640px;
  line-height: 1.7;
}

.buttons {
  display: flex;
  gap: 12px;
  margin: 16px 0;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 16px;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e9edf2;
}

.btn.primary {
  background: linear-gradient(120deg, #7a5cff, #00d5ff);
  color: #0b1222;
  border: none;
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.08);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tags span {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  font-size: 0.9rem;
  color: #cfd8e5;
}

.hero-card {
  display: grid;
  gap: 14px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  backdrop-filter: blur(12px);
}

.stat {
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.stat h3 {
  margin-bottom: 6px;
  color: #ffffff;
}

.stat p {
  color: #cbd5e1;
  line-height: 1.5;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.feature-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 22px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08);
}

.feature-card.about {
  grid-column: 1 / -1;
  background: linear-gradient(130deg, #f4f0ff, #e8f7ff);
}

.feature-card.accent {
  background: linear-gradient(160deg, #e9ddff, #dff5ff);
  color: #0f172a;
}

.overline {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 8px;
}

.feature-card ul {
  margin: 14px 0 0;
  padding-left: 18px;
  color: #1f2937;
  line-height: 1.6;
}

.bio {
  color: #1f2937;
  line-height: 1.7;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
  color: #374151;
  font-weight: 600;
}

.meta {
  color: #374151;
  margin-bottom: 6px;
}

.pill-group {
  display: grid;
  gap: 10px;
}

.pill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px dashed #d0d7e6;
  background: #f8fafc;
  color: #0f172a;
  font-size: 0.95rem;
}

.pill strong {
  font-weight: 700;
}

.pill small {
  color: #6b7280;
  margin-left: 8px;
}

.project-grid {
  display: grid;
  gap: 12px;
}

.project {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
}

.project-name {
  font-weight: 700;
  color: #0f172a;
}

.project-summary {
  color: #475569;
  margin: 6px 0 8px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: #e2e8f0;
  color: #0f172a;
  font-size: 0.85rem;
}

.timeline {
  margin-top: 40px;
  padding: 22px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}

.timeline-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.timeline-head h2 {
  margin-top: 4px;
  color: #0f172a;
}

.timeline-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.timeline-card {
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
}

.card-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.role {
  font-weight: 700;
  color: #0f172a;
}

.company {
  color: #4b5563;
}

.years {
  color: #6b7280;
  font-size: 0.9rem;
}

.timeline-card ul {
  margin: 10px 0 0;
  padding-left: 18px;
  color: #1f2937;
  line-height: 1.6;
}

@media (max-width: 720px) {
  .timeline-head {
    align-items: flex-start;
  }
}
</style>
