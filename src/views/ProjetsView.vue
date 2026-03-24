<template>
  <main>
    <PageHeader
      title="Nos Réalisations"
      subtitle="Un aperçu de nos projets accomplis avec fierté à travers tout le Burundi."
      img="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
    />

    <section class="projets-section">
      <!-- Filters -->
      <div class="filters-wrap reveal">
        <div class="section-tag">Portfolio</div>
        <h2 class="section-title">50+ Projets Réalisés</h2>
        <div class="filter-btns">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >{{ f }}</button>
        </div>
      </div>

      <!-- Grid -->
      <div class="proj-grid">
        <div
          class="proj-card"
          v-for="p in filteredProjs"
          :key="p.id"
        >
          <img :src="p.img" :alt="p.name" loading="lazy" />
          <div class="proj-overlay">
            <div class="proj-cat">{{ p.cat }}</div>
            <div class="proj-name">{{ p.name }}</div>
            <div class="proj-lieu">📍 {{ p.lieu }}</div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjs.length === 0" class="empty">
        Aucun projet dans cette catégorie.
      </div>
    </section>

    <!-- PROCESSUS -->
    <section class="processus">
      <div class="proc-header reveal text-center">
        <div class="section-tag" style="justify-content:center">Notre méthode</div>
        <h2 class="section-title">Du Projet à la Livraison</h2>
        <p class="section-desc mx-auto">Un processus rigoureux en 5 étapes pour garantir la réussite de chaque chantier.</p>
      </div>
      <div class="proc-steps">
        <div class="proc-step reveal" :class="`d${i}`" v-for="(s, i) in steps" :key="s.title">
          <div class="step-num">{{ String(i+1).padStart(2,'0') }}</div>
          <div class="step-icon">{{ s.icon }}</div>
          <h3 class="step-title">{{ s.title }}</h3>
          <p class="step-desc">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Votre projet sera notre prochaine réalisation"
      subtitle="Rejoignez nos 50+ clients satisfaits à travers tout le Burundi."
    />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader from '@/components/PageHeader.vue'
import CtaBand    from '@/components/CtaBand.vue'

useReveal()

const filters = ['Tous', 'Résidentiel', 'Commercial', 'Infrastructure']
const activeFilter = ref('Tous')

const filteredProjs = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.tag === activeFilter.value)
})

const steps = [
  { icon: '💬', title: 'Consultation',   desc: "Échange gratuit pour comprendre vos besoins et définir le cadre du projet." },
  { icon: '📐', title: 'Étude & Devis',  desc: "Analyse technique, plans préliminaires et devis détaillé sans engagement." },
  { icon: '✍️', title: 'Validation',     desc: "Signature du contrat, planning de chantier et lancement officiel des travaux." },
  { icon: '🏗️', title: 'Construction',   desc: "Exécution rigoureuse avec suivi qualité hebdomadaire et rapports réguliers." },
  { icon: '🔑', title: 'Livraison',      desc: "Réception des travaux, remise des clés et garantie décennale activée." },
]
</script>

<style scoped>
.projets-section {
  background: var(--off-white);
  padding: 5rem 5vw;
}
.filters-wrap { margin-bottom: 2.5rem; }
.filter-btns {
  display: flex; flex-wrap: wrap; gap: 0.7rem;
  margin-top: 1.5rem;
}
.filter-btn {
  background: var(--white);
  border: 1px solid var(--gray-200);
  color: var(--gray-700);
  padding: 9px 22px;
  font-family: var(--font-cond);
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  cursor: pointer; transition: all 0.25s;
}
.filter-btn.active,
.filter-btn:hover { background: var(--blue); border-color: var(--blue); color: var(--white); }

.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.proj-card {
  position: relative; overflow: hidden; height: 280px; cursor: pointer;
}
.proj-card img {
  width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;
}
.proj-card:hover img { transform: scale(1.08); }
.proj-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(26,58,107,0.95) 0%, transparent 55%);
  padding: 1.5rem;
  display: flex; flex-direction: column; justify-content: flex-end;
  opacity: 0; transition: opacity 0.3s;
}
.proj-card:hover .proj-overlay { opacity: 1; }
.proj-cat {
  font-size: 0.65rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--yellow);
  margin-bottom: 0.3rem; font-weight: 600;
}
.proj-name {
  font-family: var(--font-cond);
  font-size: 1.15rem; font-weight: 700; color: var(--white); margin-bottom: 0.25rem;
}
.proj-lieu { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
.empty { text-align: center; padding: 4rem; color: var(--gray-500); }

/* PROCESSUS */
.processus { background: var(--white); padding: 5rem 5vw; }
.proc-header { margin-bottom: 4rem; }
.proc-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: var(--gray-200);
}
.proc-step {
  background: var(--white);
  padding: 2.5rem 1.8rem;
  text-align: center;
  position: relative;
}
.proc-step::after {
  content: '';
  position: absolute;
  bottom: 0; left: 50%; transform: translateX(-50%);
  width: 0; height: 3px;
  background: var(--yellow);
  transition: width 0.4s;
}
.proc-step:hover::after { width: 60%; }
.step-num {
  font-family: var(--font-display);
  font-size: 3rem; font-weight: 900;
  color: var(--gray-100); line-height: 1;
  margin-bottom: -0.5rem;
}
.step-icon { font-size: 2rem; margin-bottom: 0.8rem; }
.step-title {
  font-family: var(--font-cond);
  font-size: 1rem; font-weight: 700;
  color: var(--blue); text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 0.6rem;
}
.step-desc { font-size: 0.82rem; color: var(--gray-500); line-height: 1.6; }

@media (max-width: 1024px) {
  .proj-grid { grid-template-columns: 1fr 1fr; }
  .proc-steps { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .proj-grid { grid-template-columns: 1fr; }
  .proc-steps { grid-template-columns: 1fr; }
}
</style>
