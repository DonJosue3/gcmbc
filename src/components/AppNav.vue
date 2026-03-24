<template>
  <nav :class="['navbar', { scrolled, 'on-hero': isHero && !scrolled }]">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <div class="logo-icon">
        <span>GC</span>
        <div class="logo-bar"></div>
      </div>
      <div class="logo-text">
        <span class="logo-name">GCMBC GROUP</span>
        <span class="logo-sub">Architecture &amp; Génie Civil</span>
      </div>
    </router-link>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li v-for="l in navLinks" :key="l.to">
        <router-link
          :to="l.to"
          :class="['nav-link', { 'nav-cta': l.cta }]"
          @click="mobileOpen = false"
        >{{ l.label }}</router-link>
      </li>
    </ul>

    <!-- Hamburger -->
    <button class="hamburger" @click="mobileOpen = true" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="mobileOpen" class="mobile-overlay" @click.self="mobileOpen = false">
        <div class="mobile-drawer">
          <button class="drawer-close" @click="mobileOpen = false">✕</button>
          <div class="drawer-logo">
            <span class="logo-name">GCMBC GROUP</span>
          </div>
          <nav class="drawer-links">
            <router-link
              v-for="l in navLinks"
              :key="l.to"
              :to="l.to"
              :class="['drawer-link', { 'drawer-cta': l.cta }]"
              @click="mobileOpen = false"
            >{{ l.label }}</router-link>
          </nav>
          <div class="drawer-contact">
            <p>📞 +257 71 395 044</p>
            <p>✉️ gcmbcgroupe@gmail.com</p>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '@/data/index.js'

const scrolled    = ref(false)
const mobileOpen  = ref(false)
const route       = useRoute()

const isHero = computed(() => route.path === '/')

const onScroll = () => {
  if (mobileOpen.value) return
  scrolled.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* ── NAVBAR ── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 72px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s, box-shadow 0.4s;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.97);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
}
.navbar.on-hero {
  background: transparent;
}

/* ── LOGO ── */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.logo-icon {
  width: 40px; height: 40px;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.logo-bar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 5px;
  background: var(--yellow);
}
.logo-icon span {
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  padding-bottom: 4px;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.logo-name {
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  color: var(--blue);
  transition: color 0.3s;
}
.logo-sub {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-500);
  transition: color 0.3s;
}
.on-hero .logo-name { color: var(--white); }
.on-hero .logo-sub  { color: rgba(255,255,255,0.6); }

/* ── NAV LINKS ── */
.nav-links {
  display: flex;
  gap: 1.8rem;
  list-style: none;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  font-size: 0.83rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--gray-700);
  position: relative;
  padding-bottom: 2px;
  transition: color 0.25s;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  height: 2px; width: 0;
  background: var(--yellow);
  transition: width 0.3s;
}
.nav-link:hover,
.nav-link.router-link-active { color: var(--blue); }
.nav-link.router-link-active::after,
.nav-link:hover::after { width: 100%; }

.on-hero .nav-link { color: rgba(255,255,255,0.85); }
.on-hero .nav-link:hover { color: var(--white); }

/* CTA button */
.nav-cta {
  background: var(--yellow) !important;
  color: var(--blue) !important;
  padding: 9px 22px !important;
  font-family: var(--font-cond) !important;
  font-weight: 700 !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.1em;
  transition: background 0.25s !important;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover  { background: var(--yellow-dark) !important; }

/* ── HAMBURGER ── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--blue);
  transition: all 0.3s;
}
.on-hero .hamburger span { background: var(--white); }

/* ── MOBILE DRAWER ── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,58,107,0.4);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
}
.mobile-drawer {
  width: 300px;
  max-width: 90vw;
  height: 100%;
  background: var(--white);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}
.drawer-close {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray-700);
  cursor: pointer;
  line-height: 1;
}
.drawer-logo .logo-name {
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
  color: var(--blue);
}
.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.drawer-link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-700);
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--gray-100);
  transition: color 0.25s;
}
.drawer-link:hover { color: var(--blue); }
.drawer-link.router-link-active { color: var(--blue); font-weight: 600; }
.drawer-cta {
  margin-top: 1rem;
  background: var(--yellow);
  color: var(--blue) !important;
  text-align: center;
  padding: 0.9rem !important;
  border-bottom: none !important;
  font-weight: 700 !important;
  font-family: var(--font-cond);
  letter-spacing: 0.1em;
}
.drawer-contact {
  margin-top: auto;
  font-size: 0.85rem;
  color: var(--gray-500);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ── TRANSITIONS ── */
.drawer-enter-active,
.drawer-leave-active { transition: opacity 0.25s; }
.drawer-enter-from,
.drawer-leave-to     { opacity: 0; }
.drawer-enter-active .mobile-drawer,
.drawer-leave-active .mobile-drawer { transition: transform 0.3s ease; }
.drawer-enter-from .mobile-drawer  { transform: translateX(100%); }
.drawer-leave-to .mobile-drawer    { transform: translateX(100%); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .nav-links  { display: none; }
  .hamburger  { display: flex; }
}
</style>
