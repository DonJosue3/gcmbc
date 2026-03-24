<template>
  <main>
    <PageHeader
      title="Nos Services"
      subtitle="Une offre complète pour tous vos projets de construction, de la conception à la livraison."
      img="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
    />

    <!-- INTRO -->
    <section class="intro">
      <div class="intro-text reveal">
        <div class="section-tag">Ce que nous faisons</div>
        <h2 class="section-title">Des Expertises<br/>Complémentaires</h2>
        <p class="section-desc">
          GCMBC Group regroupe en un seul partenaire toutes les compétences dont vous avez besoin pour réaliser votre projet de construction, du premier coup de crayon jusqu'à la remise des clés.
        </p>
      </div>
      <div class="intro-stats reveal d1">
        <div class="istat" v-for="s in stats" :key="s.label">
          <div class="istat-num">{{ s.num }}</div>
          <div class="istat-label">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- SERVICES DÉTAILLÉS -->
    <section class="services-detail">
      <div
        class="service-row reveal"
        v-for="(s, i) in services"
        :key="s.id"
        :class="{ reverse: i % 2 !== 0 }"
      >
        <div class="sr-img">
          <img :src="s.img" :alt="s.title" loading="lazy" />
          <div class="sr-badge" :style="{ background: i % 2 === 0 ? 'var(--blue)' : 'var(--yellow)' }">
            <span v-html="s.icon" :style="{ color: i % 2 === 0 ? 'var(--yellow)' : 'var(--blue)' }"></span>
          </div>
        </div>
        <div class="sr-text">
          <div class="service-num-label">0{{ s.id }}</div>
          <div class="section-tag">{{ s.short }}</div>
          <h2 class="section-title">{{ s.title }}</h2>
          <p class="section-desc">{{ s.desc }}</p>
          <ul class="feature-list">
            <li v-for="f in s.features" :key="f">{{ f }}</li>
          </ul>
          <router-link to="/contact" class="btn-primary mt-4">Demander un devis</router-link>
        </div>
      </div>
    </section>

    <CtaBand
      title="Prêt à démarrer votre projet ?"
      subtitle="Notre équipe est disponible pour étudier votre demande dès aujourd'hui."
    />
  </main>
</template>

<script setup>
import { services, stats } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader from '@/components/PageHeader.vue'
import CtaBand    from '@/components/CtaBand.vue'

useReveal()
</script>

<style scoped>
/* INTRO */
.intro {
  padding: 5rem 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: var(--white);
}
.intro-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--gray-200);
}
.istat {
  background: var(--off-white);
  padding: 2rem;
  text-align: center;
}
.istat-num {
  font-family: var(--font-display);
  font-size: 2.5rem; font-weight: 700;
  color: var(--blue); line-height: 1;
}
.istat-label {
  font-size: 0.72rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--gray-500); margin-top: 5px;
}

/* SERVICES ROWS */
.services-detail {
  background: var(--off-white);
  padding: 4rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.service-row {
  background: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
}
.service-row.reverse { direction: rtl; }
.service-row.reverse > * { direction: ltr; }

.sr-img {
  position: relative;
  overflow: hidden;
  min-height: 300px;
}
.sr-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.service-row:hover .sr-img img { transform: scale(1.04); }
.sr-badge {
  position: absolute; top: 2rem; right: 2rem;
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-md);
}
.sr-badge :deep(svg) {
  width: 26px; height: 26px;
  stroke: currentColor; fill: none; stroke-width: 1.8;
}

.sr-text {
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.service-num-label {
  font-family: var(--font-display);
  font-size: 4rem; font-weight: 900;
  color: var(--gray-100);
  line-height: 1; margin-bottom: -1rem;
}

.feature-list {
  list-style: none; margin-top: 1.5rem;
  display: flex; flex-direction: column; gap: 0.7rem;
}
.feature-list li {
  display: flex; align-items: flex-start; gap: 0.9rem;
  font-size: 0.88rem; color: var(--gray-500); line-height: 1.5;
}
.feature-list li::before {
  content: '';
  display: block; flex-shrink: 0;
  width: 8px; height: 8px;
  background: var(--yellow);
  border-radius: 50%; margin-top: 5px;
}

@media (max-width: 1024px) {
  .intro { grid-template-columns: 1fr; }
  .service-row { grid-template-columns: 1fr; }
  .service-row.reverse { direction: ltr; }
  .sr-img { min-height: 250px; }
  .sr-text { padding: 2rem; }
}
</style>
