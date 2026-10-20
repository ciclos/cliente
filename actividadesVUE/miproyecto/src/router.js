import { createRouter, createWebHistory } from 'vue-router'
import Interruptor from './components/interruptorVisibilidad.vue'
import Examen from './components/calificacionExamen.vue'


const routes = [
  { path: '/', name: 'inicio', component: Interruptor },
  { path: '/interruptor', name: 'interruptor', component: Interruptor },
  { path: '/examen', name: 'examen', component: Examen },
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

