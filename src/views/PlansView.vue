<template>
  <main>
    <PageHeader
      title="Plans de Maisons"
      subtitle="Choisissez parmi 200+ plans architecturaux ou commandez votre plan sur mesure."
      img="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400&q=80"
    />

    <section class="plans-section">
      <!-- Filters -->
      <div class="filters-bar reveal">
        <div class="filters-left">
          <div class="section-tag">Catalogue</div>
          <h2 class="section-title">Nos Plans Disponibles</h2>
        </div>
        <div class="filters-right">
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
      <div class="plans-grid">
        <PlanCard
          v-for="(p, i) in filteredPlans"
          :key="p.id"
          :plan="p"
          :delay="i % 3"
        />
      </div>

      <div v-if="filteredPlans.length === 0" class="empty">
        Aucun plan trouvé pour ce filtre.
      </div>
    </section>

    <!-- Sur mesure -->
    <section class="custom-section">
      <div class="custom-inner reveal">
        <div class="custom-text">
          <div class="section-tag">Plan sur mesure</div>
          <h2 class="section-title">Vous ne trouvez pas<br/>ce qu'il vous faut ?</h2>
          <p class="section-desc">
            Nos architectes peuvent concevoir un plan entièrement personnalisé, adapté à votre terrain, vos besoins et votre budget. Devis gratuit et sans engagement.
          </p>
          <ul class="custom-list">
            <li>Consultation initiale gratuite</li>
            <li>Avant-projet en 7 jours ouvrables</li>
            <li>3 révisions incluses dans le prix</li>
            <li>Livraison PDF + DWG AutoCAD</li>
          </ul>
          <router-link to="/contact" class="btn-primary mt-4">Demander un plan sur mesure</router-link>
        </div>
        <div class="custom-img"></div>
      </div>
    </section>

    <CtaBand
      title="Un plan, un rêve, une construction"
      subtitle="Commandez votre plan et obtenez un devis de construction dès la semaine suivante."
    />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { plans } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader from '@/components/PageHeader.vue'
import PlanCard   from '@/components/PlanCard.vue'
import CtaBand    from '@/components/CtaBand.vue'

useReveal()

const filters = ['Tous', 'Plain-pied', 'R+1', 'R+2']
const activeFilter = ref('Tous')

const filteredPlans = computed(() => {
  if (activeFilter.value === 'Tous') return plans
  return plans.filter(p => p.niveaux === activeFilter.value)
})
</script>

<style scoped>
.plans-section {
  padding: 5rem 5vw;
  background: var(--off-white);
}
.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}
.filters-right {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.filter-btn {
  background: var(--white);
  border: 1px solid var(--gray-200);
  color: var(--gray-700);
  padding: 8px 20px;
  font-family: var(--font-cond);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s;
}
.filter-btn.active,
.filter-btn:hover {
  background: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.empty {
  text-align: center;
  padding: 4rem;
  color: var(--gray-500);
  font-size: 1rem;
}

/* CUSTOM */
.custom-section {
  background: var(--white);
  padding: 5rem 5vw;
}
.custom-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.custom-img {
  height: 420px;
  background: url('https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=900&q=80') center/cover;
  box-shadow: var(--shadow-lg);
}
.custom-list {
  list-style: none; margin-top: 1.5rem;
  display: flex; flex-direction: column; gap: 0.7rem;
}
.custom-list li {
  display: flex; align-items: center; gap: 0.8rem;
  font-size: 0.9rem; color: var(--gray-500);
}
.custom-list li::before {
  content: '✓';
  display: flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  background: var(--yellow);
  color: var(--blue);
  font-size: 0.75rem; font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .plans-grid { grid-template-columns: 1fr 1fr; }
  .custom-inner { grid-template-columns: 1fr; }
  .custom-img { height: 280px; }
}
@media (max-width: 640px) {
  .plans-grid { grid-template-columns: 1fr; }
}
</style>
