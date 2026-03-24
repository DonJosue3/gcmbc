<template>
  <div class="testi-card reveal" :class="`d${delay}`">
    <div class="stars">{{ '★'.repeat(testi.stars) }}</div>
    <p class="testi-text">« {{ testi.text }} »</p>
    <div class="testi-author">
      <div class="avatar">{{ testi.initials }}</div>
      <div>
        <div class="author-name">{{ testi.name }}</div>
        <div class="author-role">{{ testi.role }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testi: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})
</script>

<style scoped>
.testi-card {
  background: var(--white);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
  border-top: 4px solid var(--yellow);
  transition: box-shadow 0.3s, transform 0.3s;
}
.testi-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.stars { color: var(--yellow); font-size: 1rem; letter-spacing: 3px; margin-bottom: 1.2rem; }
.testi-text {
  font-size: 0.9rem; line-height: 1.8;
  color: var(--gray-500); font-style: italic;
  margin-bottom: 1.5rem;
}
.testi-author { display: flex; align-items: center; gap: 1rem; }
.avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--blue);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-cond);
  font-weight: 700; color: var(--yellow); font-size: 1rem;
  flex-shrink: 0;
}
.author-name {
  font-family: var(--font-cond);
  font-weight: 700; color: var(--blue);
  font-size: 1rem; letter-spacing: 0.04em;
}
.author-role { font-size: 0.75rem; color: var(--gray-500); }
</style>
