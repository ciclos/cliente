<script setup>
import {ref} from 'vue'
import Cabecera from './components/cabecera.vue'
import Inicio from './components/inicio.vue'
import Modelos from './components/modelos.vue'
import Pie from './components/pie.vue'
import Catalogo from './components/catalogo.vue'

const mostrarCatalogo = ref(false)
</script>

<template>
  <Cabecera @abrir-modelos="mostrarCatalogo = true"/>
  <main><Inicio @abrir-modelos="mostrarCatalogo = true"/><Modelos /></main>
  <Pie />

  <Catalogo :visible="mostrarCatalogo" @cerrar="mostrarCatalogo = false" />
</template>