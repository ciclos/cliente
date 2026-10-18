import { createRouter, createWebHistory } from 'vue-router'
import Principal from './components/principal.vue'
import Contacto from './components/contacto.vue'

const routes = [
  { path: '/', name: 'inicio', component: Principal },
  { path: '/contacto', name: 'contacto', component: Contacto }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

