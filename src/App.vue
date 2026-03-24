<template>
  <div>
    <AppNav />

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <AppFooter />

    <button
      class="back-to-top"
      :class="{ visible: showTop }"
      @click="scrollTop"
      aria-label="Retour en haut"
    >↑</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppNav    from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

const showTop = ref(false)

const onScroll = () => { showTop.value = window.scrollY > 500 }
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 46px;
  height: 46px;
  background: var(--blue);
  color: var(--yellow);
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.3s;
  z-index: 500;
}
.back-to-top.visible {
  opacity: 1;
  pointer-events: auto;
  transform: none;
}
.back-to-top:hover { background: var(--blue-mid); }
</style>
