<script setup>
import ProjectShowcase from '../components/ProjectShowcase.vue'
import portraitPhoto from '../assets/portrait-smile-v2.png'
import {
  contactLinks,
  conferenceResearch,
  credentials,
  earlierExperience,
  experience,
  photographyProject,
  professionalSummary,
  skills,
  teamEnablement
} from '../data/profile'

const platformSkills = Object.entries(skills)
</script>

<template>
  <section class="quiet-systems">
    <header class="site-header">
      <p>Staff Software Engineer · Distributed Systems & Cloud Platforms</p>
      <a :href="contactLinks[2].href">Start a conversation ↗</a>
    </header>

    <main id="top">
      <section class="hero section-rule">
        <div class="hero-copy">
          <p class="kicker">01 / Platform engineering</p>
          <h1>William Britton Jr</h1>
          <p class="hero-statement">I build platforms that help people build.</p>
          <p class="intro">{{ professionalSummary }}</p>
          <div class="hero-links">
            <a href="#icmla">ICMLA 2026 research ↓</a>
            <a href="#projects">Projects ↓</a>
            <a :href="contactLinks[0].href" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a :href="contactLinks[1].href" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a :href="contactLinks[4].href" target="_blank" rel="noreferrer">Writing ↗</a>
          </div>
        </div>

        <figure class="hero-portrait">
          <img :src="portraitPhoto" alt="William Britton Jr" width="1024" height="1536" fetchpriority="high" decoding="async" />
        </figure>
      </section>

      <section id="icmla" class="conference section-rule" aria-labelledby="conference-title">
        <div class="conference-intro">
          <p class="kicker">02 / ICMLA 2026</p>
          <p class="conference-status">{{ conferenceResearch.status }}</p>
          <p class="conference-session">{{ conferenceResearch.session }}</p>
        </div>
        <article class="conference-paper">
          <h2 id="conference-title">{{ conferenceResearch.title }}</h2>
          <p class="conference-authors">{{ conferenceResearch.authors }}</p>
          <p>{{ conferenceResearch.summary }}</p>
          <p class="conference-time">{{ conferenceResearch.presentation }}</p>
          <div class="hero-links">
            <a :href="conferenceResearch.programUrl" target="_blank" rel="noreferrer">Official program ↗</a>
            <a :href="conferenceResearch.paperListingUrl" target="_blank" rel="noreferrer">Accepted paper listing ↗</a>
          </div>
        </article>
      </section>

      <section class="professional-experience section-rule" aria-labelledby="experience-title">
        <div class="experience-heading">
          <p class="kicker">03 / Professional experience</p>
          <h2 id="experience-title">Technical leadership.<br />Hands-on engineering.</h2>
        </div>
        <article v-for="role in experience" :key="`${role.name}-${role.years}`" class="experience-row">
          <header class="experience-role">
            <p class="experience-years">{{ role.years }}</p>
            <h3>{{ role.position }}</h3>
            <p class="experience-company">{{ role.name }}</p>
            <p v-if="role.context" class="experience-context">{{ role.context }}</p>
          </header>
          <ul class="experience-highlights">
            <li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </article>
        <div class="earlier-career">
          <p class="credentials-label">Earlier experience</p>
          <article v-for="role in earlierExperience" :key="role.company">
            <p class="experience-years">{{ role.years }}</p>
            <h3>{{ role.role }}</h3>
            <p class="experience-company">{{ role.company }}</p>
          </article>
        </div>
      </section>

      <section class="enablement section-rule">
        <div class="enablement-copy">
          <p class="kicker">04 / How I help teams move</p>
          <h2>Good platform work makes the next right thing easier.</h2>
          <p>
            I help tenant teams adopt the platform through reusable infrastructure, clear operational
            standards, and hands-on support.
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
          <p class="kicker">05 / Capabilities</p>
          <h2>Cloud platforms, automation, and the systems in between.</h2>
          <p>
            Tools and practices from my platform work, with personal and research technologies
            identified separately.
          </p>
        </div>
        <div>
          <div class="capabilities">
            <div v-for="([group, items], index) in platformSkills" :key="group" class="capability">
              <span>0{{ index + 1 }}</span>
              <h3>{{ group }}</h3>
              <p>{{ items.join(' · ') }}</p>
            </div>
          </div>
          <div class="credentials">
            <p class="credentials-label">Selected credentials</p>
            <p v-for="credential in credentials" :key="credential">{{ credential }}</p>
          </div>
        </div>
      </section>

      <section class="research section-rule">
        <div class="research-intro">
          <p class="kicker">06 / Outside the terminal</p>
          <h2>Curiosity, beyond the screen.</h2>
          <p>
            Photography, 3D printing, and tinkering keep me curious. I like making things,
            figuring out how they work, and seeing familiar places a little differently.
          </p>
          <a :href="contactLinks[4].href" target="_blank" rel="noreferrer">Read on Medium ↗</a>
        </div>
        <div class="research-content">
          <article class="research-project">
            <p>{{ photographyProject.tags.join(' · ') }}</p>
            <h3>{{ photographyProject.name }}</h3>
            <p class="research-project-summary">{{ photographyProject.summary }}</p>
            <a class="research-project-link" :href="contactLinks[3].href" target="_blank" rel="noopener noreferrer">Visit photography portfolio ↗</a>
          </article>
        </div>
      </section>
      <ProjectShowcase />
    </main>

    <footer>
      <p>William Britton Jr / HyyerCode</p>
      <p>Engineering systems. Building odd little ideas. Taking photos.</p>
      <a :href="contactLinks[2].href">Get in touch ↗</a>
    </footer>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

.quiet-systems {
  --ink: #f3f0e8;
  --paper: #0b1528;
  --muted: #adbdd0;
  --surface: #101f35;
  --surface-raised: #172940;
  --accent: #67b9e8;
  --accent-ink: #081a2b;
  --line: rgba(219, 232, 247, 0.2);
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
.site-header p { color: var(--muted); }
.site-header a { white-space: nowrap; }
a:hover { color: var(--accent); }

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
  color: var(--muted);
  font: 600 0.7rem Manrope, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

h1, h2, h3, p { margin: 0; }
h1, h2 { font-family: Manrope, Arial, sans-serif; font-weight: 600; }
h1 { max-width: 680px; font-size: clamp(3rem, 5.2vw, 5.4rem); line-height: 1.04; letter-spacing: -0.055em; }
.hero-statement { max-width: 490px; margin-top: 26px; color: var(--accent); font-size: clamp(1.2rem, 1.7vw, 1.6rem); line-height: 1.4; letter-spacing: -0.025em; }
.intro { max-width: 540px; margin-top: 20px; color: var(--muted); font-size: 1rem; line-height: 1.75; }

.hero-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px; }
.hero-links a { border-bottom: 1px solid var(--line); padding: 10px 0 6px; min-height: 44px; font-size: 0.92rem; }
.hero-links a:hover, .site-header a:hover { color: var(--accent); }

.hero-portrait { position: relative; align-self: center; justify-self: end; width: min(100%, 430px); aspect-ratio: 1; margin: 0; overflow: hidden; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.hero-portrait img { position: absolute; display: block; width: 134.737%; max-width: none; height: auto; left: -19.737%; top: -38.158%; }

.conference { display: grid; grid-template-columns: 0.7fr 1fr; gap: 40px; padding: clamp(36px, 5vw, 64px) 0; scroll-margin-top: 24px; }
.conference-status { display: inline-block; margin: 16px 0; padding: 8px 10px; background: #12334c; color: var(--accent); border: 1px solid #387da7; border-radius: 4px; font-size: 0.85rem; font-weight: 700; }
.conference-session { max-width: 340px; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
.conference-paper h2 { font-size: clamp(1.7rem, 2.6vw, 2.7rem); line-height: 1.12; letter-spacing: -0.035em; }
.conference-paper > p { margin-top: 16px; line-height: 1.65; }
.conference-authors { font-weight: 600; }
.conference-time { font-size: 0.92rem; font-weight: 700; }
a:focus-visible { outline: 2px solid var(--accent); outline-offset: 5px; }

.professional-experience { padding: clamp(56px, 8vw, 100px) 0; }
.experience-heading { display: grid; grid-template-columns: 0.7fr 1fr; gap: 40px; margin-bottom: 38px; }
.experience-heading h2 { font-size: clamp(2.15rem, 3.3vw, 3.5rem); line-height: 1.04; letter-spacing: -0.045em; }
.experience-row { display: grid; grid-template-columns: minmax(0, 0.7fr) minmax(0, 1fr); gap: 40px; padding: 28px 0; border-top: 1px solid var(--line); }
.experience-years { color: var(--muted); font-size: 0.78rem; font-weight: 600; }
.experience-role h3 { margin-top: 10px; font-size: 1.25rem; font-weight: 600; line-height: 1.35; }
.experience-company { margin-top: 6px; font-size: 0.92rem; line-height: 1.5; }
.experience-context { max-width: 320px; margin-top: 8px; color: var(--muted); font-size: 0.83rem; line-height: 1.6; }
.experience-highlights { display: grid; gap: 12px; margin: 0; padding-left: 18px; font-size: 0.92rem; line-height: 1.65; }
.experience-highlights li { padding-left: 5px; }
.experience-highlights li::marker { color: var(--muted); }
.earlier-career { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px 40px; padding-top: 28px; border-top: 1px solid var(--line); }
.earlier-career > p { grid-column: 1 / -1; }
.earlier-career h3 { margin-top: 8px; font-size: 1rem; line-height: 1.5; }

.enablement, .practice { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 12vw; padding: clamp(56px, 8vw, 100px) 0; }
.enablement h2, .practice h2, .research h2 { font-size: clamp(2.15rem, 3.3vw, 3.5rem); line-height: 1.04; letter-spacing: -0.045em; }
.enablement-copy > p:last-child, .practice-copy > p:last-child { max-width: 460px; margin-top: 23px; line-height: 1.7; }
.enablement-list { border-top: 1px solid var(--line); }
.enablement-item { display: grid; grid-template-columns: 42px 1fr; gap: 14px; padding: 20px 0; border-bottom: 1px solid var(--line); }
.enablement-item > span { color: var(--muted); font-size: 0.68rem; font-weight: 600; }
.enablement-item h3 { font-size: 1.08rem; }
.enablement-item p { max-width: 550px; margin-top: 7px; color: var(--muted); font-size: 0.92rem; line-height: 1.62; }
.capabilities { border-top: 1px solid var(--line); }
.capability { display: grid; grid-template-columns: 42px 1fr; gap: 6px 14px; padding: 18px 0; border-bottom: 1px solid var(--line); }
.capability > span { grid-row: span 2; color: var(--muted); font: 600 0.68rem Manrope, Arial, sans-serif; }
.capability h3 { font-size: 1rem; }
.capability p { color: var(--muted); font-size: 0.9rem; line-height: 1.5; }

.research { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 12vw; padding: clamp(56px, 8vw, 100px) 0; }
.research-intro > p:not(.kicker) { max-width: 470px; margin-top: 22px; line-height: 1.7; }
.research-intro a { display: inline-block; margin-top: 23px; padding-bottom: 4px; color: inherit; border-bottom: 1px solid var(--ink); font-size: 0.9rem; text-decoration: none; }
.research-content { border-top: 1px solid var(--line); }
.research-project { padding: 19px 0; border-bottom: 1px solid var(--line); }
.research-project > p:first-child, .credentials-label { color: var(--muted); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
.research-project h3 { margin-top: 8px; font-size: 1.08rem; }
.research-project-summary { max-width: 610px; margin-top: 7px; color: var(--muted); font-size: 0.92rem; line-height: 1.58; }
.research-project-link { display: inline-flex; align-items: center; min-height: 44px; margin-top: 10px; color: inherit; font-size: 0.9rem; text-decoration: underline; text-underline-offset: 5px; }
.credentials { display: grid; gap: 9px; padding: 22px 0 4px; }
.credentials p:not(.credentials-label) { font-size: 0.84rem; }
footer { border: 0; background: var(--surface); color: var(--muted); }
footer a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--accent); padding-bottom: 4px; }

@media (max-width: 760px) {
  .site-header, footer { flex-wrap: wrap; }
  .site-header p { max-width: 100%; }
  .hero, .conference, .enablement, .practice, .research, .experience-heading, .experience-row, .earlier-career { grid-template-columns: 1fr; }
  .hero { gap: 0; }
  .hero-copy { display: contents; }
  .hero-portrait { grid-row: 4; justify-self: start; width: 100%; max-width: 430px; margin: 28px 0; }
  .intro { margin-top: 0; }
  .experience-heading { gap: 18px; }
  .experience-row { gap: 22px; }
}
</style>
