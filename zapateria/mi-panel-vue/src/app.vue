<script setup>
import {ref} from 'vue'
import Cabecera from './components/cabecera.vue'
import Pie from './components/pie.vue'
import Catalogo from './components/catalogo.vue'

const mostrarCatalogo = ref(false)
</script>

<template>
  <Cabecera @abrir-modelos="mostrarCatalogo = true"/>
    
  <router-view @abrir-modelos="mostrarCatalogo = true" />

  <Pie />

  <Catalogo :visible="mostrarCatalogo" @cerrar="mostrarCatalogo = false" />
</template>