<template>
  <main>
    <PageHeader
      title="À Propos de GCMBC Group"
      subtitle="15 ans d'excellence au service de la construction au Burundi."
      img="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=80"
    />

    <!-- HISTOIRE -->
    <section class="histoire">
      <div class="hist-text reveal">
        <div class="section-tag">Notre histoire</div>
        <h2 class="section-title">Bâtisseurs depuis<br/>2023 au Burundi</h2>
        <p class="section-desc">
          Fondé à Bujumbura en 2023 par des ingénieurs et architectes passionnés, GCMBC Group a débuté avec une vision claire : offrir au Burundi des constructions de qualité internationale, à des prix accessibles.
        </p>
        <p class="section-desc" style="margin-top:1rem">
          Aujourd'hui, avec plus de 50 projets réalisés et une équipe d'experts, nous sommes devenus le partenaire de confiance des particuliers, des entreprises et des institutions pour tous leurs projets de construction.
        </p>
      </div>
      <div class="hist-visual reveal d1">
        <div class="hist-img"></div>
        <div class="hist-badge">
          <div class="hb-num">2023</div>
          <div class="hb-txt">Année de fondation</div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <div class="stats-band">
      <div class="sb-item reveal" :class="`d${i}`" v-for="(s, i) in stats" :key="s.label">
        <div class="sb-num">{{ s.num }}</div>
        <div class="sb-label">{{ s.label }}</div>
      </div>
    </div>

    <!-- VALEURS -->
    <section class="valeurs">
      <div class="val-header reveal text-center">
        <div class="section-tag" style="justify-content:center">Ce qui nous guide</div>
        <h2 class="section-title">Nos Valeurs Fondamentales</h2>
        <p class="section-desc mx-auto">Ces principes sont le fondement de chaque décision que nous prenons chez GCMBC Group.</p>
      </div>
      <div class="val-grid">
        <div class="val-card reveal" :class="`d${i}`" v-for="(v, i) in valeurs" :key="v.title">
          <div class="val-icon">{{ v.icon }}</div>
          <h3 class="val-title">{{ v.title }}</h3>
          <p class="val-desc">{{ v.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ÉQUIPE -->
    <section class="equipe">
      <div class="eq-header reveal">
        <div class="section-tag">Notre équipe</div>
        <h2 class="section-title">Les Experts<br/>GCMBC Group</h2>
        <p class="section-desc">Une équipe de professionnels qualifiés, passionnés par leur métier et dévoués à vos projets.</p>
      </div>
      <div class="eq-grid">
        <div class="eq-card reveal" :class="`d${i}`" v-for="(m, i) in equipe" :key="m.name">
          <div class="eq-img">
            <img :src="m.img" :alt="m.name" loading="lazy" />
          </div>
          <div class="eq-info">
            <div class="eq-initials">{{ m.initials }}</div>
            <h3 class="eq-name">{{ m.name }}</h3>
            <div class="eq-role">{{ m.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEMOIGNAGES -->
    <section class="testi-sect">
      <div class="testi-header reveal text-center">
        <div class="section-tag" style="justify-content:center">Témoignages</div>
        <h2 class="section-title">Ils nous font confiance</h2>
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

    <CtaBand
      title="Faites partie de l'aventure GCMBC"
      subtitle="Confiez-nous votre prochain projet et rejoignez notre famille de clients satisfaits."
    />
  </main>
</template>

<script setup>
import { stats, valeurs, equipe, temoignages } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader     from '@/components/PageHeader.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import CtaBand        from '@/components/CtaBand.vue'

useReveal()
</script>

<style scoped>
/* HISTOIRE */
.histoire {
  padding: 6rem 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  background: var(--white);
}
.hist-visual { position: relative; height: 460px; }
.hist-img {
  width: 100%; height: 100%;
  background: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80') center/cover;
  box-shadow: var(--shadow-lg);
}
.hist-badge {
  position: absolute; bottom: -20px; left: -20px;
  background: var(--yellow);
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow-md);
}
.hb-num {
  font-family: var(--font-display);
  font-size: 2.5rem; font-weight: 900;
  color: var(--blue); line-height: 1;
}
.hb-txt {
  font-size: 0.72rem; font-weight: 600;
  color: var(--blue); text-transform: uppercase;
  letter-spacing: 0.1em; opacity: 0.7; margin-top: 3px;
}

/* STATS BAND */
.stats-band {
  background: var(--blue);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.sb-item {
  padding: 2.8rem 2rem; text-align: center;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.sb-item:last-child { border-right: none; }
.sb-num {
  font-family: var(--font-display);
  font-size: 2.8rem; font-weight: 700;
  color: var(--yellow); line-height: 1;
}
.sb-label {
  font-size: 0.72rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.6); margin-top: 6px;
}

/* VALEURS */
.valeurs { background: var(--off-white); padding: 5rem 5vw; }
.val-header { margin-bottom: 3.5rem; }
.val-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.val-card {
  background: var(--white);
  padding: 2.5rem 1.8rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s, transform 0.3s;
}
.val-card:hover { border-color: var(--yellow); transform: translateY(-4px); }
.val-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.val-title {
  font-family: var(--font-cond);
  font-size: 1.1rem; font-weight: 700;
  color: var(--blue); text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 0.7rem;
}
.val-desc { font-size: 0.88rem; color: var(--gray-500); line-height: 1.7; }

/* ÉQUIPE */
.equipe { background: var(--white); padding: 5rem 5vw; }
.eq-header { margin-bottom: 3.5rem; }
.eq-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.eq-card {
  background: var(--off-white);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.eq-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.eq-img { height: 240px; overflow: hidden; }
.eq-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.eq-card:hover .eq-img img { transform: scale(1.06); }
.eq-info { padding: 1.5rem; text-align: center; }
.eq-initials {
  display: none;
}
.eq-name {
  font-family: var(--font-cond);
  font-size: 1.05rem; font-weight: 700;
  color: var(--blue); letter-spacing: 0.04em;
  margin-bottom: 0.3rem;
}
.eq-role { font-size: 0.8rem; color: var(--gray-500); line-height: 1.4; }

/* TESTI */
.testi-sect { background: var(--off-white); padding: 5rem 5vw; }
.testi-header { margin-bottom: 3.5rem; }
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .histoire { grid-template-columns: 1fr; gap: 3rem; }
  .hist-visual { height: 320px; }
  .stats-band { grid-template-columns: 1fr 1fr; }
  .val-grid { grid-template-columns: 1fr 1fr; }
  .eq-grid { grid-template-columns: 1fr 1fr; }
  .testi-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .val-grid { grid-template-columns: 1fr; }
  .eq-grid { grid-template-columns: 1fr 1fr; }
  .testi-grid { grid-template-columns: 1fr; }
}
</style>
