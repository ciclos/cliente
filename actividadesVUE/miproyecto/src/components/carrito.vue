<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, nombre: 'Teclado Mecánico RGB', precio: 59.99, cantidad: 1 },
  { id: 2, nombre: 'Ratón Ergonómico Inalámbrico', precio: 29.50, cantidad: 2 },
  { id: 3, nombre: 'Alfombrilla XXL Desk Mat', precio: 15.00, cantidad: 1 }
])

const subtotal = computed(() => {
  return items.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
})

const iva = computed(() => {
  return subtotal.value * 0.21
})

const total = computed(() => {
  return subtotal.value + iva.value
})

const cantidadTotalArticulos = computed(() => {
  return items.value.reduce((acc, item) => acc + item.cantidad, 0)
})

function aumentarCantidad(item) {
  item.cantidad++
}

function disminuirCantidad(item) {
  if (item.cantidad > 1) {
    item.cantidad--
  }
}
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 class="mb-0">🛒 Resumen de Compra</h5>
      <span class="badge bg-light text-primary">{{ cantidadTotalArticulos }} artículos</span>
    </div>

    <div class="card-body">
      <table class="table table-hover align-middle mb-4">
        <thead class="table-light">
          <tr>
            <th>Producto</th>
            <th class="text-end">Precio unitario</th>
            <th class="text-center" style="width: 160px;">Cantidad</th>
            <th class="text-end">Total línea</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="fw-semibold">{{ item.nombre }}</td>
            <td class="text-end">{{ item.precio.toFixed(2) }} €</td>
            <td class="text-center">
              <div class="btn-group btn-group-sm" role="group">
                <button 
                  class="btn btn-outline-secondary" 
                  @click="disminuirCantidad(item)" 
                  :disabled="item.cantidad <= 1">
                  -
                </button>
                <span class="btn btn-outline-secondary disabled text-dark px-3">
                  {{ item.cantidad }}
                </span>
                <button class="btn btn-outline-secondary" @click="aumentarCantidad(item)">
                  +
                </button>
              </div>
            </td>
            <td class="text-end fw-bold">
              {{ (item.precio * item.cantidad).toFixed(2) }} €
            </td>
          </tr>
        </tbody>
      </table>

      <div class="row justify-content-end">
        <div class="col-md-5">
          <div class="list-group list-group-flush">
            <div class="list-group-item d-flex justify-content-between px-0">
              <span class="text-muted">Subtotal:</span>
              <span class="fw-semibold">{{ subtotal.toFixed(2) }} €</span>
            </div>
            <div class="list-group-item d-flex justify-content-between px-0">
              <span class="text-muted">IVA (21%):</span>
              <span class="fw-semibold">{{ iva.toFixed(2) }} €</span>
            </div>
            <div class="list-group-item d-flex justify-content-between px-0 border-top border-2">
              <span class="fs-5 fw-bold text-dark">Total a pagar:</span>
              <span class="fs-5 fw-bold text-primary">{{ total.toFixed(2) }} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>