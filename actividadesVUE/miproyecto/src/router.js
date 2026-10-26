import { createRouter, createWebHistory } from 'vue-router'
import Interruptor from './components/interruptorVisibilidad.vue'
import Examen from './components/calificacionExamen.vue'
import ListaTareas from './components/listaTareas.vue'
import TablaCatalogo from './components/tablaCatalogo.vue'
import GestorInvitados from './components/gestorInvitados.vue'
import FiltrarAlumnos from './components/filtradoAlumnos.vue'

const routes = [
  { path: '/', name: 'inicio', component: Interruptor },
  { path: '/interruptor', name: 'interruptor', component: Interruptor },
  { path: '/examen', name: 'examen', component: Examen },
  { path: '/listaTareas', name: 'listaTareas', component: ListaTareas },  
  { path: '/tablaCatalogo', name: 'tablaCatalogo', component: TablaCatalogo },  
  { path: '/gestorInvitados', name: 'gestorInvitados', component: GestorInvitados },  
  { path: '/filtrarAlumnos', name: 'filtrarAlumnos', component: FiltrarAlumnos },  
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

