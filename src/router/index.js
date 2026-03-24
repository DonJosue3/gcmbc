import { createRouter, createWebHistory } from 'vue-router'
import HomeView      from '@/views/HomeView.vue'
import ServicesView  from '@/views/ServicesView.vue'
import PlansView     from '@/views/PlansView.vue'
import MateriauxView from '@/views/MateriauxView.vue'
import ProjetsView   from '@/views/ProjetsView.vue'
import AProposView   from '@/views/AProposView.vue'
import ContactView   from '@/views/ContactView.vue'

const routes = [
  { path: '/',          name: 'home',      component: HomeView },
  { path: '/services',  name: 'services',  component: ServicesView },
  { path: '/plans',     name: 'plans',     component: PlansView },
  { path: '/materiaux', name: 'materiaux', component: MateriauxView },
  { path: '/projets',   name: 'projets',   component: ProjetsView },
  { path: '/a-propos',  name: 'apropos',   component: AProposView },
  { path: '/contact',   name: 'contact',   component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})

export default router
