import { createRouter, createWebHistory } from 'vue-router'
import Evaluaciones from './components/evaluaciones.vue'


const routes = [
  { path: '/', name: 'inicio', component: Evaluaciones }, 
    
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router