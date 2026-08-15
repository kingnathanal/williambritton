<script setup>
import {
  careerArc,
  contactLinks,
  credentials,
  projects,
  skills,
  teamEnablement
} from '../data/profile'

const platformProjects = projects.slice(0, 3)
const researchProjects = projects.slice(1)
const platformSkills = Object.entries(skills)
</script>

<template>
  <section class="quiet-systems">
    <header class="site-header">
      <a class="wordmark" href="#top">WB<span>·</span>Systems</a>
      <p>Staff Software Engineer · Cloud Platform Engineering</p>
      <a :href="contactLinks[2].href">Start a conversation ↗</a>
    </header>

    <main id="top">
      <section class="hero section-rule">
        <div class="hero-copy">
          <p class="kicker">01 / Platform engineering</p>
          <h1>I build systems the way I built my career: <em>with consistency.</em></h1>
          <p class="intro">
            The road here included full-time work, family, and returning to school. I finished my
            M.S. in Computer Science by not quitting; today, I lead cloud-platform engineering at
            General Motors for systems that support 400+ microservices.
          </p>
          <div class="hero-links">
            <a :href="contactLinks[0].href" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a :href="contactLinks[1].href" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a :href="contactLinks[4].href" target="_blank" rel="noreferrer">Writing ↗</a>
            <a :href="contactLinks[3].href" target="_blank" rel="noreferrer">Photo work ↗</a>
          </div>
        </div>

        <figure class="system-diagram" aria-label="Simplified Atmos platform architecture diagram">
          <div class="diagram-title">ATMOS / PLATFORM MAP</div>
          <div class="diagram-grid">
            <div class="node primary">Atmos<br /><span>A multi-tenant platform for engineering teams</span></div>
            <div class="node">Product workloads<br /><span>Microservices · APIs · delivery pipelines</span></div>
            <div class="node">Platform foundation<br /><span>Azure · AKS · service mesh · Terraform</span></div>
          </div>
          <figcaption>One platform, clearer paths for teams.</figcaption>
        </figure>
      </section>

      <section class="selected section-rule">
        <div class="section-label">
          <p class="kicker">02 / Selected systems</p>
          <p>Architecture, automation, and the occasionally stubborn reality of production.</p>
        </div>
        <article v-for="(project, index) in platformProjects" :key="project.name" class="project-row">
          <p class="project-number">0{{ index + 1 }}</p>
          <div>
            <h2>{{ project.name }}</h2>
            <p>{{ project.summary }}</p>
          </div>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </section>

      <section class="enablement section-rule">
        <div class="enablement-copy">
          <p class="kicker">03 / How I help teams move</p>
          <h2>Good platform work makes the next right thing easier.</h2>
          <p>
            The goal is not to create another team everyone has to wait on. It is to build clear,
            resilient paths that let people make progress with more confidence.
          </p>
        </div>
        <div class="enablement-list">
          <article v-for="(item, index) in teamEnablement" :key="item.title" class="enablement-item">
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="practice section-rule">
        <div class="practice-copy">
          <p class="kicker">04 / Capabilities</p>
          <h2>Cloud platforms, automation, and the systems in between.</h2>
          <p>
            The working toolkit behind the platform work: infrastructure, delivery, application
            engineering, data, and the operational layers that connect them.
          </p>
        </div>
        <div class="capabilities">
          <div v-for="([group, items], index) in platformSkills" :key="group" class="capability">
            <span>0{{ index + 1 }}</span>
            <h3>{{ group }}</h3>
            <p>{{ items.join(' · ') }}</p>
          </div>
        </div>
      </section>

      <section class="career section-rule">
        <div class="career-intro">
          <p class="kicker">05 / Career arc</p>
          <h2>From building applications to shaping the platforms behind them.</h2>
        </div>
        <div class="career-list">
          <article v-for="role in careerArc" :key="`${role.years}-${role.role}`" class="career-row">
            <p>{{ role.years }}</p>
            <div>
              <h3>{{ role.role }}</h3>
              <p class="career-company">{{ role.company }}</p>
            </div>
            <p class="career-focus">{{ role.focus }}</p>
          </article>
        </div>
      </section>

      <section class="research section-rule">
        <div class="research-intro">
          <p class="kicker">06 / Research, writing, & making</p>
          <h2>The curiosity that feeds the day job.</h2>
          <p>
            Beyond platform engineering, I completed graduate research in unsupervised machine
            learning for gray-failure detection and build small systems that connect cloud,
            automation, and visual storytelling.
          </p>
          <a :href="contactLinks[4].href" target="_blank" rel="noreferrer">Read on Medium ↗</a>
        </div>
        <div class="research-content">
          <article v-for="project in researchProjects" :key="project.name" class="research-project">
            <p>{{ project.tags.join(' · ') }}</p>
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
          </article>
          <div class="credentials">
            <p class="credentials-label">Selected credentials</p>
            <p v-for="credential in credentials" :key="credential">{{ credential }}</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Will Britton / HyyerCode</p>
      <p>Engineering systems. Building odd little ideas. Taking photos.</p>
      <a href="/v1/">View the original site ↗</a>
    </footer>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

.quiet-systems {
  --ink: #1e2726;
  --paper: #f1eee5;
  --acid: #d8e84b;
  --line: rgba(30, 39, 38, 0.25);
  min-height: 100%;
  color: var(--ink);
  background: var(--paper);
  font-family: Manrope, Arial, sans-serif;
}

.site-header,
footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 19px clamp(20px, 4vw, 64px);
  border-bottom: 1px solid var(--line);
  font: 600 0.73rem/1.2 Manrope, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.site-header a,
.hero-links a { color: inherit; text-decoration: none; }
.wordmark { font-weight: 700; }
.wordmark span { color: #658184; }

main { padding: 0 clamp(20px, 4vw, 64px); }
.section-rule { border-bottom: 1px solid var(--line); }

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
  gap: clamp(30px, 7vw, 100px);
  padding: clamp(44px, 7vw, 88px) 0 clamp(36px, 5vw, 62px);
}

.kicker {
  margin-bottom: 20px;
  color: #65787a;
  font: 600 0.7rem Manrope, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

h1, h2, h3, p { margin: 0; }
h1, h2 { font-family: Manrope, Arial, sans-serif; font-weight: 600; }
h1 { max-width: 650px; font-size: clamp(2.65rem, 4.5vw, 4.7rem); line-height: 1.04; letter-spacing: -0.055em; }
h1 em { color: #567376; font-style: normal; }
.intro { max-width: 540px; margin-top: 22px; font-size: 1rem; line-height: 1.65; }

.hero-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px; }
.hero-links a { border-bottom: 1px solid var(--ink); padding-bottom: 4px; font-size: 0.92rem; }

.system-diagram { align-self: end; margin: 0; padding: 15px; background: var(--ink); color: #e8ebe1; }
.diagram-title { font: 600 0.68rem Manrope, Arial, sans-serif; letter-spacing: 0.11em; }
.diagram-grid { display: grid; gap: 8px; margin: 22px 0 14px; }
.node { min-height: 60px; display: grid; align-content: center; gap: 3px; padding: 10px; border: 1px solid rgba(232, 235, 225, 0.35); font: 600 0.76rem/1.4 Manrope, Arial, sans-serif; }
.node span { color: #afbbb7; font-size: 0.67rem; font-weight: 500; }
.node.primary { min-height: 76px; background: var(--acid); color: var(--ink); border: none; }
.node.primary span { color: #4f5c24; }
figcaption { color: #afbbb7; font-size: 0.76rem; }

.selected { padding: 34px 0 14px; }
.section-label { display: grid; grid-template-columns: 0.7fr 1fr; gap: 24px; margin-bottom: 36px; }
.section-label > p:last-child { max-width: 430px; font-size: 0.98rem; line-height: 1.6; }
.project-row { display: grid; grid-template-columns: 64px minmax(0, 1fr) minmax(180px, 0.4fr); gap: 22px; padding: 24px 0; border-top: 1px solid var(--line); }
.project-number { color: #65787a; font: 600 0.72rem Manrope, Arial, sans-serif; }
.project-row h2 { font-size: clamp(2rem, 3vw, 3.1rem); line-height: 0.96; }
.project-row h2 + p { max-width: 630px; margin-top: 12px; line-height: 1.55; }
.project-tags { display: flex; align-content: start; flex-wrap: wrap; gap: 6px; }
.project-tags span { padding: 6px 8px; border: 1px solid var(--line); font: 600 0.66rem Manrope, Arial, sans-serif; }

.enablement, .practice { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 12vw; padding: clamp(56px, 8vw, 100px) 0; }
.enablement h2, .practice h2, .career h2, .research h2 { font-size: clamp(2.15rem, 3.3vw, 3.5rem); line-height: 1.04; letter-spacing: -0.045em; }
.enablement-copy > p:last-child, .practice-copy > p:last-child { max-width: 460px; margin-top: 23px; line-height: 1.7; }
.enablement-list { border-top: 1px solid var(--line); }
.enablement-item { display: grid; grid-template-columns: 42px 1fr; gap: 14px; padding: 20px 0; border-bottom: 1px solid var(--line); }
.enablement-item > span { color: #65787a; font-size: 0.68rem; font-weight: 600; }
.enablement-item h3 { font-size: 1.08rem; }
.enablement-item p { max-width: 550px; margin-top: 7px; color: #65787a; font-size: 0.92rem; line-height: 1.62; }
.capabilities { border-top: 1px solid var(--line); }
.capability { display: grid; grid-template-columns: 42px 1fr; gap: 6px 14px; padding: 18px 0; border-bottom: 1px solid var(--line); }
.capability > span { grid-row: span 2; color: #65787a; font: 600 0.68rem Manrope, Arial, sans-serif; }
.capability h3 { font-size: 1rem; }
.capability p { color: #65787a; font-size: 0.9rem; line-height: 1.5; }

.career { padding: clamp(56px, 8vw, 100px) 0; }
.career-intro { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 12vw; margin-bottom: 38px; }
.career-list { border-top: 1px solid var(--line); }
.career-row { display: grid; grid-template-columns: 160px minmax(220px, 0.9fr) 1.1fr; gap: 22px; padding: 20px 0; border-bottom: 1px solid var(--line); }
.career-row > p:first-child { color: #65787a; font-size: 0.78rem; font-weight: 600; }
.career-row h3 { font-size: 1rem; }
.career-company { margin-top: 4px; color: #65787a; font-size: 0.86rem; line-height: 1.45; }
.career-focus { color: #526563; font-size: 0.92rem; line-height: 1.58; }

.research { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 12vw; padding: clamp(56px, 8vw, 100px) 0; }
.research-intro > p:not(.kicker) { max-width: 470px; margin-top: 22px; line-height: 1.7; }
.research-intro a { display: inline-block; margin-top: 23px; padding-bottom: 4px; color: inherit; border-bottom: 1px solid var(--ink); font-size: 0.9rem; text-decoration: none; }
.research-content { border-top: 1px solid var(--line); }
.research-project { padding: 19px 0; border-bottom: 1px solid var(--line); }
.research-project > p:first-child, .credentials-label { color: #65787a; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
.research-project h3 { margin-top: 8px; font-size: 1.08rem; }
.research-project > p:last-child { max-width: 610px; margin-top: 7px; color: #526563; font-size: 0.92rem; line-height: 1.58; }
.credentials { display: grid; gap: 9px; padding: 22px 0 4px; }
.credentials p:not(.credentials-label) { font-size: 0.84rem; }
footer { border: 0; background: var(--ink); color: #e8ebe1; }
footer a { color: inherit; text-decoration: none; border-bottom: 1px solid var(--acid); padding-bottom: 4px; }

@media (max-width: 760px) {
  .site-header, footer { flex-wrap: wrap; }
  .site-header p { order: 3; width: 100%; }
  .hero, .enablement, .practice, .career-intro, .research { grid-template-columns: 1fr; }
  .section-label { grid-template-columns: 1fr; }
  .project-row { grid-template-columns: 34px 1fr; }
  .project-tags { grid-column: 2; }
  .career-row { grid-template-columns: 1fr; gap: 7px; }
}
</style>
