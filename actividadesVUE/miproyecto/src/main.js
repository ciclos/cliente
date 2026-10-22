import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

// Importar CSS de Bootstrap (e iconos opcionales)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Importar JS de Bootstrap (para modales, tooltips, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')