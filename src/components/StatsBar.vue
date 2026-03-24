<template>
  <div class="stats-bar">
    <div
      v-for="(s, i) in stats"
      :key="i"
      class="stat-item reveal"
      :class="`d${i}`"
    >
      <div class="stat-num">{{ s.num }}</div>
      <div class="stat-label">{{ s.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { stats } from '@/data/index.js'
</script>

<style scoped>
.stats-bar {
  background: var(--blue);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat-item {
  padding: 2.5rem 2rem;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.stat-item:last-child { border-right: none; }
.stat-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--yellow);
  line-height: 1;
}
.stat-label {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-top: 6px;
}
@media (max-width: 600px) {
  .stats-bar { grid-template-columns: 1fr 1fr; }
  .stat-item:nth-child(2) { border-right: none; }
}
</style>
