<script setup>
import { ref } from 'vue'
import FormularioProducto from './formularioProducto.vue'

const productos = ref([
  { id: 1, nombre: 'Sudadera Urban', precio: 39.99 }
])

function agregarProducto(nuevoItem) {
  productos.value.push(nuevoItem)
}
</script>

<template>
  <main class="container py-4" style="max-width: 600px;">
    <h3 class="mb-3 text-primary">Gestión de Inventario</h3>
    
    <FormularioProducto @producto-creado="agregarProducto" />

    <div class="card shadow-sm">
      <div class="card-header bg-light d-flex justify-content-between align-items-center">
        <span class="fw-bold">Productos actuales</span>
        <span class="badge bg-secondary">{{ productos.length }}</span>
      </div>
      <ul class="list-group list-group-flush">
        <li 
          v-for="prod in productos" 
          :key="prod.id"
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ prod.nombre }}</span>
          <span class="fw-bold text-primary">{{ prod.precio.toFixed(2) }} €</span>
        </li>
      </ul>
    </div>
  </main>
</template>