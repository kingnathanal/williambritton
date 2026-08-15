<script setup>
import { contactLinks, projects } from '../data/profile'

const notes = [
  ['Cloud / 01', 'Atmos is platform work at human scale: boundaries, defaults, and enough room for teams to move.'],
  ['AI / 02', 'I use experiments with local models and automation to turn curiosity into useful prototypes.'],
  ['Making / 03', 'HyyerCode is where systems thinking meets photography, design, 3D printing, and playful proof.']
]
</script>

<template>
  <section class="field-notes">
    <header>
      <a href="#top" class="mark">W/B</a>
      <p>Field notes from a technical life</p>
      <a :href="contactLinks[2].href">Say hello ↗</a>
    </header>

    <main id="top">
      <section class="cover">
        <div class="cover-art" aria-label="Abstract orange, cobalt, and black field note artwork">
          <div class="sun"></div><div class="horizon"></div><div class="frame"></div><div class="stamp">HYYERCODE<br />FIELD NOTE 01</div>
        </div>
        <div class="cover-copy">
          <p class="issue">Issue 01 · Cloud systems / creative practice</p>
          <h1>Systems,<br /><em>stories,</em><br />and the space between.</h1>
          <p>
            I’m Will Britton: Staff Software Engineer, technical leader, photographer, builder of things that should probably have stayed sketches.
          </p>
          <div class="cover-links">
            <a :href="contactLinks[0].href" target="_blank" rel="noreferrer">LinkedIn</a>
            <a :href="contactLinks[1].href" target="_blank" rel="noreferrer">GitHub</a>
            <a :href="contactLinks[3].href" target="_blank" rel="noreferrer">Photography</a>
          </div>
        </div>
      </section>

      <section class="manifesto">
        <p class="index">A / WHY</p>
        <p class="big-copy">
          I build large-scale cloud platforms at General Motors, lead engineering strategy for Atmos,
          and keep a parallel practice of learning, making, and noticing.<span> That last part matters.</span>
        </p>
      </section>

      <section class="notes-grid">
        <article v-for="([label, copy], index) in notes" :key="label" class="note-card" :class="`note-${index + 1}`">
          <div class="card-art"><span>{{ index + 1 }}</span></div>
          <p class="index">{{ label }}</p>
          <p>{{ copy }}</p>
        </article>
      </section>

      <section class="work">
        <div class="work-title"><p class="index">B / SELECTED WORK</p><h2>Useful systems.<br />Interesting edges.</h2></div>
        <article v-for="project in projects" :key="project.name" class="work-item">
          <div><p>{{ project.tags.join(' · ') }}</p><h3>{{ project.name }}</h3></div>
          <p>{{ project.summary }}</p>
        </article>
      </section>

      <section class="closing">
        <p class="index">C / OPEN THREADS</p>
        <div>
          <h2>Cloud architecture. AI experiments. Family stories. Better diagrams. More photos.</h2>
          <p>
            I completed a Master’s in Computer Science with a focus on digital forensics, AI/ML, and systems architecture.
            The current working theory is that a technical career should leave room for the rest of your life.
          </p>
          <a :href="contactLinks[3].href" target="_blank" rel="noreferrer">Step into the photo archive ↗</a>
        </div>
      </section>
    </main>

    <footer><span>© Will Britton</span><span>Built under the HyyerCode flag</span><span>2026</span></footer>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Space+Grotesk:wght@500;600;700&display=swap');
.field-notes { min-height: 100%; color: #ebe7d8; background: #161617; font-family: 'Space Grotesk', Arial, sans-serif; }
header,footer { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; padding: 16px clamp(18px, 3vw, 50px); border-bottom: 1px solid rgba(235,231,216,.23); font: .7rem 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .08em; } header a { color: inherit; text-decoration: none; } header > a:last-child { text-align: right; }.mark { color: #f05d2d; font-weight: 700; font-size: 1rem; } header p { margin: 0; color: #bdb9ae; }
main { padding: 0 clamp(18px, 3vw, 50px); }.cover { display: grid; grid-template-columns: 1.05fr .95fr; min-height: 76vh; border-bottom: 1px solid rgba(235,231,216,.23); }.cover-art { position: relative; min-height: 560px; overflow: hidden; background: #e7d7b2; }.sun { position: absolute; width: 52%; aspect-ratio: 1; top: 12%; left: 25%; border-radius: 50%; background: #ed542c; }.horizon { position: absolute; right: -8%; bottom: 19%; left: -8%; height: 23%; transform: rotate(-6deg); background: #143c66; }.frame { position: absolute; inset: 8%; border: 1px solid rgba(22,22,23,.7); }.stamp { position: absolute; left: 11%; bottom: 10%; color: #161617; font: .7rem/1.45 'DM Mono', monospace; letter-spacing: .08em; }.cover-copy { display: flex; flex-direction: column; justify-content: end; padding: clamp(34px, 6vw, 88px); border-left: 1px solid rgba(235,231,216,.23); }.issue,.index { margin: 0; color: #bdb9ae; font: .68rem 'DM Mono', monospace; letter-spacing: .12em; text-transform: uppercase; }.cover h1,.work h2,.closing h2 { margin: 22px 0; font-family: Fraunces, Georgia, serif; font-weight: 500; letter-spacing: -.055em; }.cover h1 { font-size: clamp(3.5rem, 6.5vw, 6.8rem); line-height: .9; }.cover h1 em { color: #f05d2d; }.cover-copy > p:not(.issue) { max-width: 430px; color: #c3c0b6; line-height: 1.65; }.cover-links { display: flex; flex-wrap: wrap; gap: 13px; margin-top: 30px; }.cover-links a,.closing a { color: #ebe7d8; text-decoration: none; border-bottom: 1px solid #f05d2d; padding-bottom: 4px; font-size: .83rem; }
.manifesto { display: grid; grid-template-columns: 22% 1fr; gap: 20px; padding: clamp(70px, 10vw, 150px) 0; border-bottom: 1px solid rgba(235,231,216,.23); }.big-copy { max-width: 1050px; margin: 0; font-family: Fraunces, Georgia, serif; font-size: clamp(2.1rem, 4.4vw, 5rem); line-height: 1.05; letter-spacing: -.052em; }.big-copy span { color: #f05d2d; }
.notes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 10px 0 80px; border-bottom: 1px solid rgba(235,231,216,.23); }.note-card { padding: 12px; min-height: 360px; background: #252526; }.card-art { position: relative; height: 180px; overflow: hidden; margin-bottom: 18px; background: #294c50; }.card-art span { position: absolute; right: 12px; bottom: -32px; color: rgba(235,231,216,.85); font: 12rem/.7 Fraunces, Georgia, serif; }.note-2 .card-art { background: #ed542c; }.note-2 .card-art::after { content: ''; position: absolute; width: 80%; height: 11px; left: -12%; top: 48%; transform: rotate(-27deg); background: #161617; }.note-3 .card-art { background: #e7d7b2; }.note-3 .card-art::after { content: ''; position: absolute; width: 40%; aspect-ratio: 1; top: 18%; left: 28%; border-radius: 50%; background: #143c66; }.note-card > p:last-child { margin: 18px 0 0; color: #c3c0b6; line-height: 1.6; }
.work { display: grid; grid-template-columns: .72fr 1.28fr; gap: 8vw; padding: clamp(70px, 9vw, 125px) 0; border-bottom: 1px solid rgba(235,231,216,.23); }.work h2 { font-size: clamp(2.9rem, 4.5vw, 5.2rem); line-height: .9; }.work-item { display: grid; grid-template-columns: 1fr .9fr; gap: 20px; padding: 22px 0; border-top: 1px solid rgba(235,231,216,.23); }.work-item:last-child { border-bottom: 1px solid rgba(235,231,216,.23); }.work-item div > p { margin: 0; color: #f05d2d; font: .67rem 'DM Mono', monospace; }.work-item h3 { margin: 8px 0 0; font-size: 1.15rem; }.work-item > p { margin: 0; color: #bdb9ae; line-height: 1.5; font-size: .9rem; }
.closing { display: grid; grid-template-columns: 22% 1fr; gap: 20px; padding: clamp(70px, 10vw, 150px) 0; }.closing h2 { max-width: 900px; font-size: clamp(2.5rem, 5vw, 5.7rem); line-height: .95; }.closing div > p { max-width: 560px; margin: 28px 0; color: #bdb9ae; line-height: 1.7; }footer { color: #bdb9ae; border-bottom: 0; }footer span:last-child { text-align: right; }
@media (max-width: 750px) { header,footer { grid-template-columns: 1fr auto; } header p,footer span:nth-child(2) { display: none; }.cover,.manifesto,.work,.closing { grid-template-columns: 1fr; }.cover-copy { border-left: 0; border-top: 1px solid rgba(235,231,216,.23); }.cover-art { min-height: 420px; }.notes-grid { grid-template-columns: 1fr; }.note-card { min-height: 0; }.work { gap: 38px; }.work-item { grid-template-columns: 1fr; }.closing { gap: 28px; } }
</style>
