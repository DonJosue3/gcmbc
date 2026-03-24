<template>
  <div class="service-card reveal" :class="`d${delay}`">
    <span class="service-num">0{{ index + 1 }}</span>
    <div class="service-icon" v-html="service.icon"></div>
    <h3 class="service-title">{{ service.title }}</h3>
    <p class="service-desc">{{ service.desc }}</p>
    <router-link v-if="showLink" to="/services" class="service-link">
      En savoir plus →
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  service: { type: Object, required: true },
  index:   { type: Number, default: 0 },
  delay:   { type: Number, default: 0 },
  showLink:{ type: Boolean, default: false },
})
</script>

<style scoped>
.service-card {
  background: var(--white);
  padding: 2.8rem 2.2rem;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid transparent;
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
  cursor: default;
}
.service-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--yellow);
  transform: translateY(-4px);
}
.service-num {
  position: absolute;
  top: 1.5rem; right: 1.8rem;
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--gray-100);
  line-height: 1;
  user-select: none;
}
.service-icon {
  width: 54px; height: 54px;
  background: var(--blue-pale);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.6rem;
  transition: background 0.3s;
}
.service-card:hover .service-icon { background: var(--blue); }
.service-icon :deep(svg) {
  width: 24px; height: 24px;
  stroke: var(--blue-mid);
  transition: stroke 0.3s;
}
.service-card:hover .service-icon :deep(svg) { stroke: var(--yellow); }
.service-title {
  font-family: var(--font-cond);
  font-size: 1.2rem; font-weight: 700;
  color: var(--blue); text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 0.9rem;
}
.service-desc {
  font-size: 0.88rem;
  color: var(--gray-500);
  line-height: 1.75;
}
.service-link {
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--blue-mid);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.25s;
}
.service-link:hover { color: var(--blue); }
</style>
