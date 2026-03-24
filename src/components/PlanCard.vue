<template>
  <div class="plan-card reveal" :class="`d${delay}`">
    <div class="plan-img">
      <img :src="plan.img" :alt="plan.name" loading="lazy" />
      <div class="plan-badge">{{ plan.badge }}</div>
    </div>
    <div class="plan-body">
      <div class="plan-type">{{ plan.type }}</div>
      <h3 class="plan-name">{{ plan.name }}</h3>
      <div class="plan-specs">
        <span class="spec">🏠 <b>{{ plan.surface }}</b></span>
        <span class="spec">🛏 <b>{{ plan.chambres }}</b> ch.</span>
        <span class="spec">📐 <b>{{ plan.niveaux }}</b></span>
      </div>
      <div class="plan-footer">
        <div>
          <div class="plan-price">{{ plan.prix }}</div>
          <div class="plan-unit">prix du plan</div>
        </div>
        <router-link to="/contact" class="plan-btn">Commander</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan:  { type: Object, required: true },
  delay: { type: Number, default: 0 },
})
</script>

<style scoped>
.plan-card {
  background: var(--white);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.plan-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }

.plan-img { height: 220px; overflow: hidden; position: relative; }
.plan-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.plan-card:hover .plan-img img { transform: scale(1.06); }

.plan-badge {
  position: absolute; top: 1rem; left: 1rem;
  background: var(--yellow);
  color: var(--blue);
  font-family: var(--font-cond);
  font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 5px 12px;
}

.plan-body { padding: 1.6rem; }

.plan-type {
  font-size: 0.68rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--blue-mid);
  margin-bottom: 0.4rem; font-weight: 600;
}
.plan-name {
  font-family: var(--font-cond);
  font-size: 1.25rem; font-weight: 700;
  color: var(--blue); margin-bottom: 0.9rem;
  letter-spacing: 0.04em;
}
.plan-specs { display: flex; gap: 1.2rem; flex-wrap: wrap; }
.spec { font-size: 0.8rem; color: var(--gray-500); }
.spec b { color: var(--gray-700); font-weight: 600; }

.plan-footer {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: 1.2rem; padding-top: 1rem;
  border-top: 1px solid var(--gray-100);
}
.plan-price {
  font-family: var(--font-display);
  font-size: 1.25rem; font-weight: 700;
  color: var(--blue-mid);
}
.plan-unit { font-size: 0.72rem; color: var(--gray-500); }

.plan-btn {
  background: var(--blue);
  color: var(--white);
  border: none; cursor: pointer;
  padding: 8px 18px;
  font-family: var(--font-cond);
  font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  transition: background 0.25s;
}
.plan-btn:hover { background: var(--blue-mid); }
</style>
