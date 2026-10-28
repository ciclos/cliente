import { createRouter, createWebHistory } from 'vue-router'
import Interruptor from './components/interruptorVisibilidad.vue'
import Examen from './components/calificacionExamen.vue'
import ListaTareas from './components/listaTareas.vue'
import TablaCatalogo from './components/tablaCatalogo.vue'
import GestorInvitados from './components/gestorInvitados.vue'
import FiltrarAlumnos from './components/filtradoAlumnos.vue'
import Carrito from './components/carrito.vue'
import Pass from './components/pass.vue'
import Bloc from './components/blocNotas.vue'
import Busqueda from './components/buscadorUsuarios.vue'
import Tarjeta from './components/tarjetas/tarjeta.vue'
import Alerta from './components/alerta.vue'
import Contador from './components/contador/contador.vue'
import Producto from './components/producto/producto.vue'



const routes = [
  { path: '/', name: 'inicio', component: Interruptor },
  { path: '/interruptor', name: 'interruptor', component: Interruptor },
  { path: '/examen', name: 'examen', component: Examen },
  { path: '/listaTareas', name: 'listaTareas', component: ListaTareas },  
  { path: '/tablaCatalogo', name: 'tablaCatalogo', component: TablaCatalogo },  
  { path: '/gestorInvitados', name: 'gestorInvitados', component: GestorInvitados },  
  { path: '/filtrarAlumnos', name: 'filtrarAlumnos', component: FiltrarAlumnos },  
  { path: '/carrito', name: 'carrito', component: Carrito },  
   { path: '/pass', name: 'pass', component: Pass },  
   { path: '/bloc', name: 'bloc', component: Bloc },  
  { path: '/buscarUsuarios', name: 'busqueda', component: Busqueda },  
    { path: '/tarjeta', name: 'tarjeta', component: Tarjeta },  
    { path: '/alerta', name: 'alerta', component: Alerta },  
    { path: '/contador', name: 'contador', component: Contador },  
        { path: '/producto', name: 'producto', component: Producto },  
    
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

