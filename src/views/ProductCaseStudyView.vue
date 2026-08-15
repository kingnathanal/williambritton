<script setup>
import { contactLinks, experience, projects } from '../data/profile'

const metrics = [
  ['100s', 'microservices supported'],
  ['Azure', 'multi-tenant platform'],
  ['Go', 'infrastructure automation']
]
</script>

<template>
  <section class="product-page">
    <header class="product-nav">
      <a class="brand" href="#top">will britton<span>/</span>systems</a>
      <div class="nav-links">
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
        <a :href="contactLinks[2].href">Contact</a>
      </div>
    </header>

    <main id="top">
      <section class="product-hero">
        <div>
          <p class="eyebrow">Platform engineering · systems, reliability, and developer enablement</p>
          <h1>Build the platform.<br /><span>Make the path clear.</span></h1>
          <p class="lede">
            I’m Will, a Staff Software Engineer at General Motors. I lead cloud-platform strategy
            for internal Azure systems that support 400+ microservices.
          </p>
          <div class="actions">
            <a class="action primary" :href="contactLinks[0].href" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
            <a class="action" :href="contactLinks[1].href" target="_blank" rel="noreferrer">See GitHub ↗</a>
          </div>
        </div>
        <div class="hero-window" aria-label="A diagram of platform layers">
          <div class="window-top"><span></span><span></span><span></span><p>atmos.systems / overview</p></div>
          <div class="layers">
            <div class="layer app"><strong>Engineering teams</strong><span>services · APIs · workloads</span></div>
            <div class="layer mesh"><strong>Platform guardrails</strong><span>service mesh · CI/CD · observability</span></div>
            <div class="layer cloud"><strong>Azure foundation</strong><span>AKS · network · identity · IaC</span></div>
          </div>
        </div>
      </section>

      <section class="metrics" aria-label="Platform facts">
        <div v-for="metric in metrics" :key="metric[1]">
          <strong>{{ metric[0] }}</strong>
          <span>{{ metric[1] }}</span>
        </div>
      </section>

      <section id="work" class="case-study">
        <div class="case-intro">
          <p class="eyebrow">Featured work</p>
          <h2>A platform should remove friction, not invent new ceremonies.</h2>
          <p>
            These are the systems I use to turn complex cloud requirements into dependable ways of working.
          </p>
        </div>
        <article v-for="(project, index) in projects.slice(0, 3)" :key="project.name" class="case-card">
          <div class="case-number">0{{ index + 1 }}</div>
          <div>
            <p class="case-type">{{ project.tags.join(' / ') }}</p>
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
          </div>
          <a href="#notes" aria-label="Read more about the project">Open case study <span>→</span></a>
        </article>
      </section>

      <section id="notes" class="notes">
        <div class="notes-intro">
          <p class="eyebrow">Notes from the lab</p>
          <h2>Engineering, AI, and the useful kind of curiosity.</h2>
          <p>
            Alongside platform work, I completed a Master’s in Computer Science focused on digital forensics,
            AI/ML, and systems architecture. I write, diagram, prototype, and sometimes turn an idea into a physical object.
          </p>
          <a class="action" :href="contactLinks[3].href" target="_blank" rel="noreferrer">Visit HyyerCode photo work ↗</a>
        </div>
        <div class="note-grid">
          <article><span>01</span><h3>AI experiments</h3><p>Hands-on work with Ollama, local models, and practical automation.</p></article>
          <article><span>02</span><h3>Systems diagrams</h3><p>Making complex cloud concepts more legible for people who need to use them.</p></article>
          <article><span>03</span><h3>Creative tooling</h3><p>Photography, 3D printing, and side projects under the HyyerCode banner.</p></article>
        </div>
      </section>

      <section class="experience">
        <p class="eyebrow">Experience</p>
        <div v-for="role in experience.slice(0, 3)" :key="role.name" class="role">
          <div><h3>{{ role.position }}</h3><p>{{ role.name }}</p></div>
          <p>{{ role.years }}</p>
        </div>
      </section>
    </main>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.product-page { min-height: 100%; color: #132321; background: #f8fbf9; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
.product-nav { display: flex; justify-content: space-between; align-items: center; padding: 22px clamp(22px, 5vw, 82px); color: #f8fbf9; background: #163e3a; }
.brand { color: inherit; text-decoration: none; font-weight: 800; letter-spacing: -0.04em; }.brand span { color: #bedb44; }
.nav-links { display: flex; gap: 20px; }.nav-links a { color: inherit; text-decoration: none; font-size: 0.88rem; font-weight: 700; }
main { padding: 0 clamp(22px, 5vw, 82px) 80px; }
.product-hero { display: grid; grid-template-columns: 1fr 0.9fr; align-items: center; gap: clamp(40px, 8vw, 130px); min-height: 640px; }
.eyebrow { margin: 0 0 16px; color: #57716d; font: 0.68rem 'DM Mono', monospace; letter-spacing: 0.11em; text-transform: uppercase; }
h1,h2,h3,p { margin: 0; } h1 { color: #163e3a; font-size: clamp(3.2rem, 6vw, 6.4rem); line-height: 0.94; letter-spacing: -0.075em; } h1 span { color: #68a094; }
.lede { max-width: 590px; margin-top: 28px; color: #47605c; font-size: 1.1rem; line-height: 1.7; }
.actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }.action { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 15px; color: #163e3a; border: 1px solid #9bb2ae; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 700; }.action.primary { color: #f9fcfa; background: #163e3a; border-color: #163e3a; }
.hero-window { overflow: hidden; border: 1px solid #a9c0bb; border-radius: 12px; background: #e5efec; box-shadow: 14px 14px 0 #bedb44; }.window-top { display: flex; align-items: center; gap: 6px; height: 43px; padding: 0 14px; border-bottom: 1px solid #b5ccc7; background: #f6fbf9; }.window-top span { width: 7px; height: 7px; background: #6e8883; border-radius: 50%; }.window-top p { margin-left: 8px; color: #58716c; font: 0.65rem 'DM Mono', monospace; }
.layers { padding: 24px; }.layer { display: grid; gap: 8px; padding: 18px; border: 1px solid #99b6b0; border-radius: 7px; }.layer + .layer { margin-top: 10px; }.layer strong { font-size: 1rem; }.layer span { color: #48615d; font: 0.69rem 'DM Mono', monospace; }.app { background: #f8fbf9; }.mesh { background: #d7e8e2; }.cloud { color: #f8fbf9; background: #246258; border-color: #246258; }.cloud span { color: #d5ede5; }
.metrics { display: grid; grid-template-columns: repeat(3, 1fr); margin-bottom: 120px; border-top: 1px solid #b9d1cb; border-bottom: 1px solid #b9d1cb; }.metrics > div { display: grid; gap: 5px; padding: 21px 0; }.metrics > div + div { padding-left: 24px; border-left: 1px solid #b9d1cb; }.metrics strong { color: #163e3a; font-size: 1.6rem; letter-spacing: -0.06em; }.metrics span { color: #5d7772; font-size: 0.8rem; }
.case-study { display: grid; grid-template-columns: minmax(260px, 0.8fr) 1.2fr; gap: 10vw; }.case-intro h2, .notes-intro h2 { color: #163e3a; font-size: clamp(2rem, 3.4vw, 3.7rem); line-height: 1; letter-spacing: -0.065em; }.case-intro > p:last-child, .notes-intro > p { margin-top: 20px; color: #4e6964; line-height: 1.65; }
.case-card { display: grid; grid-template-columns: 42px 1fr auto; gap: 16px; align-items: start; padding: 25px 0; border-top: 1px solid #b9d1cb; }.case-card:last-child { border-bottom: 1px solid #b9d1cb; }.case-number { color: #638079; font: 0.7rem 'DM Mono', monospace; }.case-type { color: #68837e; font: 0.68rem 'DM Mono', monospace; text-transform: uppercase; }.case-card h3 { margin: 8px 0; font-size: 1.35rem; letter-spacing: -0.04em; }.case-card p:not(.case-type) { color: #4e6964; line-height: 1.55; }.case-card a { color: #163e3a; text-decoration: none; font-size: 0.78rem; font-weight: 700; white-space: nowrap; }.case-card a span { color: #5e8b80; font-size: 1.1rem; }
.notes { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 10vw; margin-top: 130px; padding: 90px 0; border-top: 1px solid #b9d1cb; }.notes-intro .action { margin-top: 22px; }.note-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }.note-grid article { min-height: 220px; padding: 16px; color: #f3fbf7; background: #163e3a; border-radius: 8px; }.note-grid article:nth-child(2) { color: #163e3a; background: #bedb44; }.note-grid span { color: #9ebeb7; font: 0.67rem 'DM Mono', monospace; }.note-grid article:nth-child(2) span { color: #55716b; }.note-grid h3 { margin: 44px 0 8px; font-size: 1rem; }.note-grid p { font-size: 0.78rem; line-height: 1.55; opacity: 0.8; }
.experience { padding-top: 60px; }.role { display: flex; justify-content: space-between; gap: 20px; padding: 18px 0; border-top: 1px solid #b9d1cb; }.role:last-child { border-bottom: 1px solid #b9d1cb; }.role h3 { font-size: 1rem; }.role div p,.role > p { margin-top: 4px; color: #638079; font-size: 0.82rem; }
@media (max-width: 800px) { .product-hero, .case-study, .notes { grid-template-columns: 1fr; }.product-hero { min-height: 0; padding: 80px 0; }.metrics { margin-bottom: 80px; }.case-study,.notes { gap: 38px; }.notes { margin-top: 80px; }.note-grid { grid-template-columns: 1fr; }.note-grid article { min-height: 150px; }.note-grid h3 { margin-top: 24px; } }
@media (max-width: 560px) { .product-nav { align-items: flex-start; }.nav-links { gap: 12px; flex-wrap: wrap; justify-content: end; }.metrics { grid-template-columns: 1fr; }.metrics > div + div { padding-left: 0; border-left: 0; border-top: 1px solid #b9d1cb; }.case-card { grid-template-columns: 34px 1fr; }.case-card a { grid-column: 2; } }
</style>
