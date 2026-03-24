<template>
  <main>
    <PageHeader
      title="Matériaux de Construction"
      subtitle="Une gamme complète de matériaux certifiés, disponibles en stock permanent avec livraison sur chantier."
      img="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
    />

    <!-- INTRO AVANTAGES -->
    <section class="avantages">
      <div class="av-grid">
        <div class="av-card reveal" v-for="(a, i) in avantages" :key="a.title" :class="`d${i}`">
          <div class="av-icon">{{ a.icon }}</div>
          <h3 class="av-title">{{ a.title }}</h3>
          <p class="av-desc">{{ a.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CATALOGUE MATÉRIAUX -->
    <section class="mat-section">
      <div class="mat-header reveal">
        <div>
          <div class="section-tag">En stock</div>
          <h2 class="section-title">Notre Catalogue<br/>de Matériaux</h2>
        </div>
        <p class="section-desc">
          Tous nos matériaux sont sélectionnés auprès de fournisseurs agréés et respectent les normes de construction en vigueur au Burundi.
        </p>
      </div>

      <div class="mat-grid">
        <div
          class="mat-card reveal"
          :class="`d${i % 4}`"
          v-for="(m, i) in materiaux"
          :key="m.name"
        >
          <div class="mat-icon">{{ m.icon }}</div>
          <h3 class="mat-name">{{ m.name }}</h3>
          <p class="mat-desc">{{ m.desc }}</p>
          <router-link to="/contact" class="mat-link">Demander un devis →</router-link>
        </div>
      </div>
    </section>

    <!-- LIVRAISON -->
    <section class="livraison">
      <div class="liv-text reveal">
        <div class="section-tag">Logistique</div>
        <h2 class="section-title">Livraison Directe<br/>sur votre Chantier</h2>
        <p class="section-desc">
          Notre flotte de véhicules assure la livraison de vos matériaux sur toute l'étendue du territoire burundais. Commandez aujourd'hui, recevez demain.
        </p>
        <ul class="liv-list">
          <li><span>🚛</span> Bujumbura et grande banlieue : livraison J+1</li>
          <li><span>🚛</span> Provinces : livraison J+2 à J+3</li>
          <li><span>📦</span> Commande minimum : 50 000 Fbu</li>
          <li><span>✅</span> Suivi de commande en temps réel</li>
          <li><span>📞</span> Service client disponible 6j/7</li>
        </ul>
        <router-link to="/contact" class="btn-primary mt-4">Commander des matériaux</router-link>
      </div>
      <div class="liv-img reveal d1"></div>
    </section>

    <CtaBand
      title="Besoin d'un devis pour vos matériaux ?"
      subtitle="Obtenez un devis détaillé avec livraison incluse sous 24h."
      btnLabel="Obtenir un devis matériaux →"
    />
  </main>
</template>

<script setup>
import { materiaux } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader from '@/components/PageHeader.vue'
import CtaBand    from '@/components/CtaBand.vue'

useReveal()

const avantages = [
  { icon: '🏆', title: 'Matériaux certifiés', desc: 'Tous nos produits répondent aux normes en vigueur et proviennent de fournisseurs agréés.' },
  { icon: '📦', title: 'Stock permanent',     desc: 'Nos entrepôts sont constamment approvisionnés pour éviter toute rupture sur vos chantiers.' },
  { icon: '🚛', title: 'Livraison rapide',    desc: 'Service de livraison sur chantier disponible sur tout le territoire burundais.' },
  { icon: '💰', title: 'Prix compétitifs',    desc: "Grâce à nos volumes d'achat, nous offrons les meilleurs tarifs du marché." },
]
</script>

<style scoped>
/* AVANTAGES */
.avantages {
  background: var(--blue);
  padding: 4rem 5vw;
}
.av-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.av-card {
  text-align: center;
  padding: 1.5rem;
}
.av-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.av-title {
  font-family: var(--font-cond);
  font-size: 1rem; font-weight: 700;
  color: var(--yellow); text-transform: uppercase;
  letter-spacing: 0.08em; margin-bottom: 0.5rem;
}
.av-desc { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

/* MATÉRIAUX */
.mat-section { padding: 5rem 5vw; background: var(--off-white); }
.mat-header {
  display: flex; justify-content: space-between;
  align-items: flex-end; flex-wrap: wrap;
  gap: 2rem; margin-bottom: 3.5rem;
}
.mat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.mat-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
}
.mat-card:hover {
  border-color: var(--blue-light);
  background: var(--blue-pale);
  transform: translateY(-4px);
  box-shadow: var(--shadow-sm);
}
.mat-icon { font-size: 2.4rem; margin-bottom: 1rem; }
.mat-name {
  font-family: var(--font-cond);
  font-size: 0.95rem; font-weight: 700;
  color: var(--blue); text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 0.4rem;
}
.mat-desc { font-size: 0.8rem; color: var(--gray-500); line-height: 1.55; margin-bottom: 1rem; }
.mat-link {
  font-size: 0.78rem; font-weight: 600;
  color: var(--blue-mid); text-decoration: none;
  letter-spacing: 0.05em; transition: color 0.25s;
}
.mat-link:hover { color: var(--blue); }

/* LIVRAISON */
.livraison {
  background: var(--white);
  padding: 5rem 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.liv-img {
  height: 440px;
  background: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80') center/cover;
  box-shadow: var(--shadow-lg);
}
.liv-list {
  list-style: none; margin-top: 1.5rem;
  display: flex; flex-direction: column; gap: 0.8rem;
}
.liv-list li {
  display: flex; align-items: center; gap: 0.9rem;
  font-size: 0.9rem; color: var(--gray-500);
}
.liv-list li span { font-size: 1.1rem; }

@media (max-width: 1024px) {
  .av-grid  { grid-template-columns: 1fr 1fr; }
  .mat-grid { grid-template-columns: repeat(2, 1fr); }
  .livraison { grid-template-columns: 1fr; }
  .liv-img { height: 280px; }
}
@media (max-width: 640px) {
  .mat-grid { grid-template-columns: 1fr 1fr; }
}
</style>
