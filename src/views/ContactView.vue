<template>
  <main>
    <PageHeader
      title="Nous Contacter"
      subtitle="Notre équipe est disponible du lundi au samedi pour répondre à toutes vos questions."
      img="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80"
    />

    <section class="contact-section">
      <div class="contact-grid">
        <!-- Infos -->
        <div class="contact-info reveal">
          <div class="section-tag">Coordonnées</div>
          <h2 class="section-title">Parlons de<br/>votre Projet</h2>
          <p class="section-desc">
            Que ce soit pour un renseignement, un devis ou pour démarrer un projet, notre équipe est prête à vous accueillir et vous accompagner.
          </p>

          <div class="info-cards">
            <div class="info-card" v-for="c in contactInfos" :key="c.label">
              <div class="info-icon" v-html="c.icon"></div>
              <div>
                <div class="info-label">{{ c.label }}</div>
                <div class="info-val">{{ c.val }}</div>
              </div>
            </div>
          </div>

          <div class="social-section">
            <div class="social-title">Suivez-nous</div>
            <div class="social-btns">
              <a href="#" class="soc-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href="#" class="soc-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="#" class="soc-btn" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="reveal d1">
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- MAP SECTION -->
    <section class="map-section">
      <div class="map-header reveal text-center">
        <div class="section-tag" style="justify-content:center">Localisation</div>
        <h2 class="section-title">Notre Bureau</h2>
        <p class="section-desc mx-auto">Venez nous rendre visite à notre siège de Bujumbura, ouvert du lundi au samedi de 8h à 18h.</p>
      </div>
      <div class="map-placeholder">
        <div class="map-pin">📍</div>
        <div class="map-info">
          <strong>GCMBC Group – Siège Social</strong>
          <p>EN démenagement</p>
          <a href="https://maps.google.com" target="_blank" class="btn-primary" style="margin-top:1rem;display:inline-block">
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="faq-header reveal text-center">
        <div class="section-tag" style="justify-content:center">FAQ</div>
        <h2 class="section-title">Questions Fréquentes</h2>
      </div>
      <div class="faq-grid">
        <div
          class="faq-item reveal"
          :class="`d${i % 2}`"
          v-for="(f, i) in faqs"
          :key="f.q"
          @click="f.open = !f.open"
        >
          <div class="faq-q">
            <span>{{ f.q }}</span>
            <span class="faq-icon">{{ f.open ? '−' : '+' }}</span>
          </div>
          <div class="faq-a" v-show="f.open">{{ f.a }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { contactInfos } from '@/data/index.js'
import { useReveal } from '@/composables/useReveal.js'
import PageHeader   from '@/components/PageHeader.vue'
import ContactForm  from '@/components/ContactForm.vue'

useReveal()

const faqs = reactive([
  { q: "Quel est le délai pour obtenir un devis ?",                  a: "Nous vous fournissons un devis détaillé dans les 48h suivant votre demande, après un premier échange téléphonique ou en agence.", open: false },
  { q: "Proposez-vous des plans de maisons personnalisés ?",         a: "Oui, en plus de notre catalogue de 200+ plans prêts à l'emploi, nos architectes conçoivent des plans sur mesure adaptés à votre terrain et vos besoins.", open: false },
  { q: "Livrez-vous les matériaux en province ?",                    a: "Oui, nous livrons sur tout le territoire burundais. Les délais varient de J+1 pour Bujumbura à J+3 pour les provinces les plus éloignées.", open: false },
  { q: "Quelle garantie offrez-vous sur les constructions ?",        a: "Toutes nos constructions bénéficient d'une garantie décennale couvrant les défauts de structure majeurs pendant 10 ans après la livraison.", open: false },
  { q: "Puis-je visiter un chantier en cours ?",                     a: "Bien sûr ! Sur rendez-vous, nous pouvons organiser une visite d'un chantier en cours pour vous permettre d'observer notre méthode de travail.", open: false },
  { q: "Comment se passe le financement d'un projet de construction ?", a: "Nous acceptons un paiement en plusieurs tranches : 30% à la signature, 40% à mi-chantier et 30% à la livraison. Nous pouvons aussi vous orienter vers des partenaires financiers.", open: false },
])
</script>

<style scoped>
/* CONTACT GRID */
.contact-section { padding: 5rem 5vw; background: var(--white); }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;
}

.info-cards {
  display: flex; flex-direction: column; gap: 1.5rem;
  margin-top: 2.5rem; margin-bottom: 2.5rem;
}
.info-card { display: flex; align-items: flex-start; gap: 1.2rem; }
.info-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: var(--blue-pale);
  display: flex; align-items: center; justify-content: center;
}
.info-icon :deep(svg) {
  width: 18px; height: 18px;
  stroke: var(--blue-mid); fill: none; stroke-width: 1.8;
}
.info-label {
  font-size: 0.68rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--blue-mid);
  margin-bottom: 3px; font-weight: 600;
}
.info-val { font-size: 0.9rem; color: var(--gray-700); line-height: 1.5; }

.social-title {
  font-family: var(--font-cond);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gray-500); margin-bottom: 1rem;
}
.social-btns { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.soc-btn {
  display: flex; align-items: center; gap: 8px;
  background: var(--off-white);
  border: 1px solid var(--gray-200);
  color: var(--gray-700);
  padding: 8px 16px;
  font-size: 0.82rem; font-weight: 500;
  text-decoration: none;
  transition: all 0.25s;
}
.soc-btn svg {
  width: 15px; height: 15px;
  stroke: var(--gray-500); fill: none; stroke-width: 2;
  transition: stroke 0.25s;
}
.soc-btn:hover {
  background: var(--blue);
  border-color: var(--blue);
  color: var(--white);
}
.soc-btn:hover svg { stroke: var(--white); }

/* MAP */
.map-section { background: var(--off-white); padding: 5rem 5vw; }
.map-header { margin-bottom: 3rem; }
.map-placeholder {
  background: var(--blue-pale);
  border: 2px dashed var(--gray-200);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 3rem;
}
.map-pin { font-size: 3rem; }
.map-info strong { font-family: var(--font-cond); font-size: 1.2rem; font-weight: 700; color: var(--blue); }
.map-info p { color: var(--gray-500); font-size: 0.9rem; margin-top: 0.3rem; }

/* FAQ */
.faq-section { background: var(--white); padding: 5rem 5vw; }
.faq-header { margin-bottom: 3.5rem; }
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--gray-200);
}
.faq-item {
  background: var(--white);
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: background 0.25s;
}
.faq-item:hover { background: var(--off-white); }
.faq-q {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 1rem;
  font-weight: 600; font-size: 0.92rem;
  color: var(--blue); line-height: 1.4;
}
.faq-icon {
  font-size: 1.4rem; font-weight: 300;
  color: var(--yellow); flex-shrink: 0; line-height: 1;
}
.faq-a {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.75;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-100);
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .faq-grid { grid-template-columns: 1fr; }
}
</style>
