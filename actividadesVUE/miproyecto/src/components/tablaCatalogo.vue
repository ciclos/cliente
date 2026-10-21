<script setup>
import { ref } from 'vue'

const articulos = ref([
  { id: 101, nombre: 'Portátil Pro 15"', categoria: 'Informática', precio: 899.99 },
  { id: 102, nombre: 'Ratón Inalámbrico', categoria: 'Accesorios', precio: 24.50 },
  { id: 103, nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 65.00 },
  { id: 104, nombre: 'Monitor 27" 4K', categoria: 'Monitores', precio: 279.00 }
])
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header bg-dark text-white">
      <h5 class="mb-0">Catálogo de Artículos</h5>
    </div>
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered mb-0 align-middle">
          <thead class="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Artículo</th>
              <th scope="col">Categoría</th>
              <th scope="col" class="text-end">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in articulos" :key="item.id">
              <td class="text-muted">#{{ item.id }}</td>
              <td class="fw-bold">{{ item.nombre }}</td>
              <td>
                <span class="badge bg-info text-dark">{{ item.categoria }}</span>
              </td>
              <td class="text-end fw-semibold text-primary">{{ item.precio.toFixed(2) }} €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>