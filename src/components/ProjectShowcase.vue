<script setup>
import { personalProjects } from '../data/profile'
</script>

<template>
  <section id="projects" class="projects-showcase" aria-labelledby="projects-title">
    <div class="projects-heading">
      <div>
        <p class="projects-kicker">08 / Projects</p>
        <h2 id="projects-title">Small tools.<br />Personal curiosity.</h2>
      </div>
      <p class="projects-intro">
        Things I build outside the day job: a budgeting app, a Raspberry Pi CLI, and a searchable
        technical bookshelf.
      </p>
    </div>

    <div class="projects-grid">
      <article
        v-for="(project, index) in personalProjects"
        :key="project.id"
        class="personal-project"
        :aria-labelledby="`${project.id}-title`"
      >
        <div class="project-art" :class="`project-art-${project.id}`" aria-hidden="true">
          <div class="art-label">
            <span>0{{ index + 1 }} / {{ project.category }}</span>
          </div>

          <svg v-if="project.id === 'freshlybudgets'" viewBox="0 0 360 170" fill="none">
            <rect x="48" y="23" width="264" height="124" rx="7" class="art-outline" />
            <path d="M48 53H312" class="art-outline" />
            <circle cx="62" cy="38" r="3" class="art-accent" />
            <circle cx="73" cy="38" r="3" class="art-muted" />
            <circle cx="84" cy="38" r="3" class="art-muted" />
            <rect x="65" y="70" width="66" height="59" rx="3" class="art-soft" />
            <rect x="147" y="86" width="66" height="43" rx="3" class="art-soft" />
            <rect x="229" y="62" width="66" height="67" rx="3" class="art-accent" />
            <path d="M76 117H120M158 117H202M240 117H284" class="art-bar" />
          </svg>

          <svg v-else-if="project.id === 'pictl'" viewBox="0 0 360 170" fill="none">
            <rect x="42" y="23" width="276" height="124" rx="7" class="art-outline" />
            <path d="M42 53H318" class="art-outline" />
            <circle cx="56" cy="38" r="3" class="art-accent" />
            <circle cx="67" cy="38" r="3" class="art-muted" />
            <circle cx="78" cy="38" r="3" class="art-muted" />
            <text x="62" y="80" class="terminal-command">$ pictl ping</text>
            <text x="62" y="104" class="terminal-command">$ pictl info</text>
            <text x="62" y="128" class="terminal-command">$ pictl check</text>
            <path
              d="M262 75L266 79L274 71M262 99L266 103L274 95M262 123L266 127L274 119"
              class="art-check"
            />
          </svg>

          <svg v-else viewBox="0 0 360 170" fill="none">
            <rect x="51" y="30" width="71" height="110" rx="4" class="art-outline" />
            <rect x="135" y="20" width="71" height="120" rx="4" class="art-accent" />
            <rect x="219" y="38" width="90" height="102" rx="4" class="art-outline" />
            <path d="M64 46H109M64 55H97M232 55H296M232 64H277" class="art-outline" />
            <path d="M148 38H193M148 47H181" class="art-bar" />
            <path d="M51 125H122M135 125H206M219 125H309" class="art-outline" />
            <circle cx="264" cy="92" r="13" class="art-outline" />
            <path d="M274 102L284 112" class="art-check" />
          </svg>
        </div>

        <div class="project-copy">
          <p class="project-category">{{ project.category }}</p>
          <h3 :id="`${project.id}-title`">{{ project.name }}</h3>
          <p class="personal-project-summary">{{ project.summary }}</p>
          <ul class="personal-project-tags" aria-label="Technologies">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
          <div class="project-footer">
            <p class="project-availability">{{ project.availability }}</p>
            <a
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${link.label} (${project.name}, opens in a new tab)`"
            >
              {{ link.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-showcase {
  padding: clamp(56px, 8vw, 100px) 0;
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 24px;
}

.projects-heading {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 12vw;
  align-items: end;
  margin-bottom: 38px;
}

.projects-kicker,
.project-category,
.art-label,
.project-availability {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.projects-kicker {
  margin: 0 0 20px;
  color: #526563;
  letter-spacing: 0.12em;
}

.projects-heading h2 {
  margin: 0;
  font-size: clamp(2.15rem, 3.3vw, 3.5rem);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.045em;
}

.projects-intro {
  max-width: 470px;
  margin: 0;
  line-height: 1.7;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.personal-project {
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  border: 1px solid var(--line);
}

.project-art {
  padding: 16px 18px 0;
  color: #e8ebe1;
  background: var(--ink);
}

.project-art-freshlybudgets {
  background: #32483f;
}

.project-art-bookshelf {
  background: #384848;
}

.art-label {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.57rem;
}

.project-art svg {
  display: block;
  width: 100%;
  height: 166px;
}

.art-outline {
  stroke: #afbbb7;
  stroke-width: 1.5;
}

.art-accent {
  fill: var(--acid);
}

.art-muted {
  fill: #afbbb7;
}

.art-soft {
  fill: #657b6b;
}

.art-bar {
  stroke: #32483f;
  stroke-width: 2;
}

.art-check {
  stroke: var(--acid);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.terminal-command {
  fill: #e8ebe1;
  font:
    13px ui-monospace,
    SFMono-Regular,
    Consolas,
    monospace;
}

.project-copy {
  display: flex;
  flex-direction: column;
  padding: 25px 24px 24px;
}

.project-category {
  margin: 0 0 10px;
  color: #526563;
  font-size: 0.62rem;
}

.project-copy h3 {
  margin: 0;
  font-size: clamp(1.45rem, 2vw, 1.8rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.personal-project-summary {
  margin: 16px 0 0;
  color: #526563;
  font-size: 0.92rem;
  line-height: 1.65;
}

.personal-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 20px 0 28px;
  padding: 0;
  list-style: none;
}

.personal-project-tags li {
  padding: 5px 8px;
  border: 1px solid var(--line);
  font-size: 0.65rem;
  font-weight: 600;
}

.project-footer {
  display: grid;
  grid-template-rows: auto 44px;
  align-content: start;
  gap: 12px;
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.project-availability {
  margin: 0;
  color: #526563;
  font-size: 0.6rem;
  letter-spacing: 0.05em;
}

.project-footer a {
  display: inline-flex;
  justify-self: start;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  color: var(--ink);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
}

.project-footer a:hover {
  color: #455f40;
}

.project-footer a:focus-visible {
  outline: 2px solid var(--ink);
  outline-offset: 5px;
}

@media (max-width: 1100px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .personal-project {
    grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
    grid-template-rows: auto;
  }

  .project-art {
    display: flex;
    flex-direction: column;
  }

  .project-art svg {
    flex: 1;
    min-height: 166px;
    max-height: 280px;
    margin: auto 0;
  }

  .project-footer {
    grid-template-rows: auto;
  }
}

@media (max-width: 760px) {
  .projects-heading {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 600px) {
  .personal-project {
    grid-template-columns: 1fr;
  }

  .project-art svg {
    flex: none;
    height: 166px;
  }

  .project-copy {
    padding: 24px 20px;
  }
}
</style>
