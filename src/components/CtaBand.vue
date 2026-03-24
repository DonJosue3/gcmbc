<template>
  <div class="cta-band">
    <div class="cta-text">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <router-link to="/contact" class="cta-btn">{{ btnLabel }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  title:    { type: String, default: 'Votre projet commence ici' },
  subtitle: { type: String, default: 'Contactez-nous pour un devis gratuit et sans engagement.' },
  btnLabel: { type: String, default: 'Obtenir un devis gratuit →' },
})
</script>

<style scoped>
.cta-band {
  background: var(--yellow);
  padding: 4rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.cta-text h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-weight: 700;
  color: var(--blue);
  line-height: 1.2;
}
.cta-text p {
  color: var(--blue);
  opacity: 0.7;
  font-size: 0.95rem;
  margin-top: 0.4rem;
}
.cta-btn {
  background: var(--blue);
  color: var(--white);
  padding: 15px 40px;
  font-family: var(--font-cond);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.25s, transform 0.2s;
}
.cta-btn:hover { background: var(--dark); transform: translateY(-2px); }

@media (max-width: 640px) {
  .cta-band { flex-direction: column; text-align: center; }
}
</style>
