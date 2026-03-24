<template>
  <div class="page-header">
    <div class="ph-bg" :style="bgStyle"></div>
    <div class="ph-overlay"></div>
    <div class="ph-content">
      <div class="ph-breadcrumb">
        <router-link to="/">Accueil</router-link>
        <span>/</span>
        <span>{{ title }}</span>
      </div>
      <h1 class="ph-title">{{ title }}</h1>
      <p v-if="subtitle" class="ph-sub">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  img:      { type: String, default: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80' },
})
const bgStyle = computed(() => ({ backgroundImage: `url('${props.img}')` }))
</script>

<style scoped>
.page-header {
  position: relative;
  height: 340px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  margin-top: 72px;
}
.ph-bg {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  animation: zoom 16s ease-in-out infinite alternate;
}
@keyframes zoom { from{transform:scale(1)} to{transform:scale(1.04)} }

.ph-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(100deg, rgba(26,58,107,0.88) 0%, rgba(26,58,107,0.55) 100%);
}
.ph-content {
  position: relative;
  z-index: 2;
  padding: 0 5vw 3rem;
  width: 100%;
}
.ph-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}
.ph-breadcrumb a {
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.25s;
}
.ph-breadcrumb a:hover { color: var(--yellow); }
.ph-breadcrumb span:last-child { color: var(--yellow); }

.ph-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.1;
}
.ph-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  margin-top: 0.6rem;
  max-width: 560px;
  line-height: 1.7;
}
</style>
