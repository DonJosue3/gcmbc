<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-shape"></div>

    <div class="hero-content">
      <div class="hero-badge">✦ Burundi · BTP depuis 2023</div>

      <h1 class="hero-title">
        Bâtir avec<br/>
        <em>Précision,</em><br/>
        Livrer avec Fierté
      </h1>

      <p class="hero-desc">
        GCMBC Group — architecture, génie civil, plans de maisons et vente de matériaux de construction. Votre partenaire du projet à la livraison clé en main.
      </p>

      <div class="hero-actions">
        <router-link to="/services" class="btn-yellow">Nos services</router-link>
        <router-link to="/projets"  class="btn-outline-white">Voir nos réalisations</router-link>
      </div>
    </div>

    <div class="hero-scroll">
      <div class="scroll-line"></div>
      Défiler
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(110deg, rgba(26,58,107,0.93) 0%, rgba(26,58,107,0.72) 55%, rgba(26,58,107,0.32) 100%),
    url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80') center/cover no-repeat;
  animation: heroZoom 16s ease-in-out infinite alternate;
}
@keyframes heroZoom { from{transform:scale(1)} to{transform:scale(1.05)} }

.hero-shape {
  position: absolute;
  bottom: 0; right: 0;
  width: 45%; height: 100%;
  background: var(--yellow);
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
  opacity: 0.07;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 5vw;
  max-width: 780px;
  padding-top: 72px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--yellow);
  color: var(--blue);
  padding: 7px 18px;
  font-family: var(--font-cond);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  opacity: 0;
  animation: fadeUp 0.7s 0.3s forwards;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.5vw, 5.5rem);
  font-weight: 900;
  line-height: 1.06;
  color: var(--white);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.5s forwards;
}
.hero-title em { font-style: normal; color: var(--yellow); }

.hero-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.75);
  max-width: 500px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.7s forwards;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.8s 0.9s forwards;
}

.hero-scroll {
  position: absolute;
  bottom: 2.5rem; left: 5vw;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.45);
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  z-index: 2;
  opacity: 0;
  animation: fadeUp 0.7s 1.2s forwards;
}
.scroll-line {
  width: 40px; height: 1px;
  background: rgba(255,255,255,0.25);
  position: relative; overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute; left: -100%; top: 0;
  width: 100%; height: 100%;
  background: var(--yellow);
  animation: slide 1.8s 1.5s ease infinite;
}
@keyframes slide { 0%{left:-100%} 100%{left:100%} }
@keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
</style>
