<template>
  <main>
    <HeroSection />
    <StatsBar />

    <!-- SERVICES APERÇU -->
    <section class="section-services">
      <div class="services-header">
        <div>
          <div class="section-tag">Ce que nous offrons</div>
          <h2 class="section-title">Des Services<br/>Complets &amp; Intégrés</h2>
        </div>
        <p class="section-desc">
          De l'étude technique à la livraison clé en main, nous maîtrisons l'ensemble des étapes de la construction.
        </p>
      </div>
      <div class="services-grid">
        <ServiceCard
          v-for="(s, i) in services"
          :key="s.id"
          :service="s"
          :index="i"
          :delay="i % 3"
          :show-link="true"
        />
      </div>
      <div class="section-cta">
        <router-link to="/services" class="btn-outline-blue">Voir tous les services</router-link>
      </div>
    </section>

    <!-- À PROPOS APERÇU -->
    <section class="section-about">
      <div class="about-visual reveal">
        <div class="about-img-main"></div>
        <div class="about-img-accent"></div>
        <div class="about-badge">
          <div class="badge-num">3+</div>
          <div class="badge-txt">Années<br/>d'expertise</div>
        </div>
      </div>
      <div class="about-text reveal d1">
        <div class="section-tag">Notre identité</div>
        <h2 class="section-title">GCMBC Group,<br/>L'excellence burundaise<br/>en construction</h2>
        <p class="section-desc">
          Fondé à Bujumbura, GCMBC Group s'est imposé comme un référent incontournable du secteur BTP. Nous conjuguons rigueur technique et sens de l'esthétique pour réaliser des projets qui durent.
        </p>
        <ul class="about-list">
          <li>Bureau d'études intégré avec architectes certifiés</li>
          <li>Équipes terrain expérimentées sur tout le territoire</li>
          <li>Catalogue de 200+ plans de maisons adaptables</li>
          <li>Stock permanent de matériaux certifiés</li>
          <li>Garantie décennale sur toutes nos constructions</li>
        </ul>
        <router-link to="/a-propos" class="btn-primary mt-4">Découvrir l'entreprise →</router-link>
      </div>
    </section>

    <!-- PLANS APERÇU -->
    <section class="section-plans">
      <div class="plans-header reveal text-center">
        <div class="section-tag">Catalogue</div>
        <h2 class="section-title">Plans de Maisons</h2>
        <p class="section-desc mx-auto">
          Sélectionnez parmi nos modèles ou commandez un plan entièrement sur mesure.
        </p>
      </div>
      <div class="plans-grid">
        <PlanCard
          v-for="(p, i) in plans.slice(0, 3)"
          :key="p.id"
          :plan="p"
          :delay="i"
        />
      </div>
      <div class="section-cta">
        <router-link to="/plans" class="btn-primary">Voir tous les plans</router-link>
      </div>
    </section>

    <!-- PROJETS APERÇU -->
    <section class="section-projets">
      <div class="proj-header reveal">
        <div class="section-tag">Réalisations</div>
        <h2 class="section-title">Nos Projets Accomplis</h2>
        <p class="section-desc">Un aperçu de nos chantiers réalisés avec fierté à travers tout le Burundi.</p>
      </div>
      <div class="proj-grid">
        <div
          class="proj-card reveal"
          :class="`d${i % 3}`"
          v-for="(p, i) in projects.slice(0, 6)"
          :key="p.id"
        >
          <img :src="p.img" :alt="p.name" loading="lazy" />
          <div class="proj-info">
            <div class="proj-cat">{{ p.cat }}</div>
            <div class="proj-name">{{ p.name }}</div>
            <div class="proj-lieu">📍 {{ p.lieu }}</div>
          </div>
        </div>
      </div>
      <div class="section-cta">
        <router-link to="/projets" class="btn-outline-blue" style="border-color:rgba(255,255,255,0.4);color:#fff">Voir tous les projets</router-link>
      </div>
    </section>

    <!-- TEMOIGNAGES -->
    <section class="section-testi">
      <div class="testi-header reveal text-center">
        <div class="section-tag">Témoignages</div>
        <h2 class="section-title">La confiance de<br/>nos clients</h2>
      </div>
      <div class="testi-grid">
        <TestimonialCard
          v-for="(t, i) in temoignages"
          :key="t.name"
          :testi="t"
          :delay="i"
        />
      </div>
    </section>

    <CtaBand />
  </main>
</template>

<script setup>
import { services, plans, projects, temoignages } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'

import HeroSection     from '@/components/HeroSection.vue'
import StatsBar        from '@/components/StatsBar.vue'
import ServiceCard     from '@/components/ServiceCard.vue'
import PlanCard        from '@/components/PlanCard.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import CtaBand         from '@/components/CtaBand.vue'

useReveal()
</script>

<style scoped>
/* ── SERVICES ── */
.section-services {
  background: var(--off-white);
  padding: 6rem 5vw;
}
.services-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3.5rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* ── ABOUT ── */
.section-about {
  padding: 6rem 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  background: var(--white);
}
.about-visual {
  position: relative;
  height: 520px;
}
.about-img-main {
  position: absolute; top: 0; left: 0;
  width: 82%; height: 86%;
  background: url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80') center/cover;
  box-shadow: var(--shadow-lg);
}
.about-img-accent {
  position: absolute; bottom: 0; right: 0;
  width: 50%; height: 46%;
  background: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80') center/cover;
  border: 6px solid var(--white);
  box-shadow: var(--shadow-md);
}
.about-badge {
  position: absolute; bottom: 70px; left: -16px;
  background: var(--blue);
  color: var(--white);
  padding: 1.2rem 1.6rem;
  z-index: 2;
  box-shadow: var(--shadow-md);
}
.badge-num {
  font-family: var(--font-display);
  font-size: 2.2rem; font-weight: 900;
  color: var(--yellow); line-height: 1;
}
.badge-txt {
  font-size: 0.68rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  opacity: 0.8; margin-top: 3px;
}
.about-list {
  list-style: none; margin-top: 1.6rem;
  display: flex; flex-direction: column; gap: 0.8rem;
}
.about-list li {
  display: flex; align-items: flex-start; gap: 0.9rem;
  font-size: 0.9rem; color: var(--gray-500); line-height: 1.6;
}
.about-list li::before {
  content: '';
  display: block; flex-shrink: 0;
  width: 8px; height: 8px;
  background: var(--yellow);
  border-radius: 50%; margin-top: 6px;
}

/* ── PLANS ── */
.section-plans {
  background: var(--off-white);
  padding: 6rem 5vw;
}
.plans-header { margin-bottom: 3.5rem; }
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ── PROJETS ── */
.section-projets {
  background: var(--blue);
  padding: 6rem 5vw;
}
.section-projets .section-tag { color: var(--yellow); }
.section-projets .section-tag::before { background: var(--yellow); }
.section-projets .section-title { color: var(--white); }
.section-projets .section-desc { color: rgba(255,255,255,0.6); }
.proj-header { margin-bottom: 3rem; }
.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.proj-card {
  position: relative;
  overflow: hidden;
  height: 280px;
  cursor: pointer;
}
.proj-card img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.proj-card:hover img { transform: scale(1.08); }
.proj-info {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(26,58,107,0.95) 0%, transparent 55%);
  padding: 1.5rem;
  display: flex; flex-direction: column; justify-content: flex-end;
  opacity: 0; transition: opacity 0.3s;
}
.proj-card:hover .proj-info { opacity: 1; }
.proj-cat {
  font-size: 0.65rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--yellow);
  margin-bottom: 0.3rem; font-weight: 600;
}
.proj-name {
  font-family: var(--font-cond);
  font-size: 1.15rem; font-weight: 700; color: var(--white);
  margin-bottom: 0.25rem;
}
.proj-lieu { font-size: 0.75rem; color: rgba(255,255,255,0.6); }

/* ── TESTI ── */
.section-testi {
  background: var(--off-white);
  padding: 6rem 5vw;
}
.testi-header { margin-bottom: 3.5rem; }
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ── SHARED ── */
.section-cta { text-align: center; margin-top: 3rem; }

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .services-grid,
  .plans-grid,
  .proj-grid,
  .testi-grid { grid-template-columns: 1fr 1fr; }
  .section-about { grid-template-columns: 1fr; gap: 3rem; }
  .about-visual { height: 360px; }
}
@media (max-width: 640px) {
  .services-grid,
  .plans-grid,
  .proj-grid,
  .testi-grid { grid-template-columns: 1fr; }
}
</style>
