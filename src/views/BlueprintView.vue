<script setup>
import { contactLinks, experience, projects, skills } from '../data/profile'
</script>

<template>
  <section class="blueprint">
    <div class="grid-overlay"></div>
    <div class="wrapper">
      <header class="masthead">
        <div>
          <p class="eyebrow">Blueprint</p>
          <h1>Architecture-first layout with diagrammatic lines and callouts.</h1>
          <p class="lede">
            Dark, technical palette with neon highlights, anchored by a scroll-spy sidebar feel.
            Each block is framed like a schematic component.
          </p>
        </div>
        <div class="contacts">
          <a v-for="link in contactLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer"
            >{{ link.label }}</a
          >
        </div>
      </header>

      <div class="columns">
        <div class="column">
          <div class="panel">
            <div class="panel-head">
              <span class="label">Capabilities</span>
              <span class="dot"></span>
            </div>
            <div class="skill-groups">
              <div v-for="(items, group) in skills" :key="group" class="skill">
                <p class="group">{{ group }}</p>
                <div class="items">
                  <span v-for="item in items" :key="item">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-head">
              <span class="label">Projects</span>
              <span class="dot"></span>
            </div>
            <div class="project-list">
              <div v-for="project in projects" :key="project.name" class="project">
                <p class="project-name">{{ project.name }}</p>
                <p class="project-summary">{{ project.summary }}</p>
                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="panel stacked">
            <div class="panel-head">
              <span class="label">Experience</span>
              <span class="dot"></span>
            </div>
            <div class="timeline">
              <div v-for="role in experience" :key="role.name" class="role">
                <div class="role-head">
                  <div>
                    <p class="role-title">{{ role.position }}</p>
                    <p class="role-meta">{{ role.name }} · {{ role.years }}</p>
                  </div>
                  <div class="side-badge">Impact</div>
                </div>
                <ul>
                  <li v-for="item in role.highlights" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-card">
          <p class="overline">Call to action</p>
          <h3>Ready to collaborate on architecture, delivery, or creative work.</h3>
          <div class="footer-actions">
            <a class="btn primary" :href="contactLinks[2].href">Email</a>
            <a class="btn ghost" :href="contactLinks[0].href" target="_blank" rel="noreferrer"
              >LinkedIn</a
            >
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap');

.blueprint {
  position: relative;
  min-height: calc(100vh - 70px);
  background: #05070c;
  color: #e5f0ff;
  font-family: 'Manrope', 'Segoe UI', Arial, sans-serif;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.4;
  pointer-events: none;
}

.wrapper {
  position: relative;
  padding: 48px clamp(16px, 4vw, 60px) 80px;
}

.masthead {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.eyebrow {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #7bd7ff;
  font-size: 0.82rem;
}

h1 {
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.2;
  margin: 10px 0 12px;
}

.lede {
  max-width: 760px;
  color: #adc4da;
  line-height: 1.6;
}

.contacts {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contacts a {
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #8fe0ff;
  font-weight: 700;
}

.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.column {
  display: grid;
  gap: 18px;
}

.panel {
  position: relative;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(20, 35, 55, 0.85), rgba(10, 18, 32, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.panel::after {
  content: '';
  position: absolute;
  inset: 14px;
  border: 1px dashed rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  pointer-events: none;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}

.label {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  color: #8fe0ff;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7a5cff;
  box-shadow: 0 0 12px rgba(122, 92, 255, 0.8);
}

.skill-groups {
  display: grid;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.skill {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.group {
  font-weight: 700;
  color: #e5f0ff;
  margin-bottom: 6px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.items span {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #b7c7db;
  font-size: 0.9rem;
}

.project-list {
  display: grid;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.project {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
}

.project-name {
  font-weight: 700;
  color: #e5f0ff;
}

.project-summary {
  color: #9cb3c9;
  margin: 6px 0 8px;
  line-height: 1.5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(122, 92, 255, 0.18);
  color: #e5ddff;
  border: 1px solid rgba(122, 92, 255, 0.3);
  font-size: 0.85rem;
}

.timeline {
  display: grid;
  gap: 14px;
  position: relative;
  z-index: 1;
}

.role {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
}

.role-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}

.role-title {
  font-weight: 700;
  color: #e5f0ff;
}

.role-meta {
  color: #93acc3;
  font-size: 0.95rem;
}

.side-badge {
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 213, 255, 0.3);
  color: #9feaff;
  font-weight: 700;
  font-size: 0.85rem;
}

.role ul {
  margin: 10px 0 0;
  padding-left: 18px;
  color: #c7d7eb;
  line-height: 1.6;
}

.footer {
  margin-top: 28px;
}

.footer-card {
  padding: 18px;
  border-radius: 14px;
  background: linear-gradient(120deg, rgba(0, 213, 255, 0.14), rgba(122, 92, 255, 0.14));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.overline {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a7e5ff;
  font-size: 0.78rem;
}

.footer-card h3 {
  margin: 8px 0 14px;
  color: #e5f0ff;
}

.footer-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #e5f0ff;
}

.btn.primary {
  background: #7a5cff;
  color: #05070c;
  border: none;
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 640px) {
  .panel::after {
    inset: 10px;
  }
}
</style>
