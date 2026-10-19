<script setup>
import { ref, computed } from 'vue'

const soloDisponibles = ref(false)
const productos = ref([
  { id: 1, nombre: 'Urban Flow', precio: 79.99, disponible: true, categoria: 'Running' },
  { id: 2, nombre: 'Trail Force', precio: 109.99, disponible: false, categoria: 'Trail' },
  { id: 3, nombre: 'Sprint One', precio: 94.99, disponible: true, categoria: 'Sprint' }
])

const productosFiltrados = computed(() => {
  return soloDisponibles.value 
    ? productos.value.filter(p => p.disponible) 
    : productos.value
})
</script>

<template>
  <div class="container py-4">
    <header class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
      <h1 class="h3 text-primary mb-0">
        <i class="bi bi-shop me-2"></i>Catálogo StepUp
      </h1>
      <button 
        class="btn btn-outline-primary btn-sm"
        @click="soloDisponibles = !soloDisponibles">
        {{ soloDisponibles ? 'Ver todas' : 'Solo en stock' }}
      </button>
    </header>

    <!-- Rejilla responsiva de Bootstrap combinada con v-for -->
    <div class="row g-4">
      <div 
        v-for="producto in productosFiltrados" 
        :key="producto.id" 
        class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title mb-0">{{ producto.nombre }}</h5>
              <span 
                class="badge" 
                :class="producto.disponible ? 'bg-success' : 'bg-secondary'">
                {{ producto.disponible ? 'En stock' : 'Agotado' }}
              </span>
            </div>
            <p class="text-muted small mb-3">Categoría: {{ producto.categoria }}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="fs-5 fw-bold text-dark">{{ producto.precio }} €</span>
              <button 
                class="btn btn-primary btn-sm" 
                :disabled="!producto.disponible">
                <i class="bi bi-cart-plus me-1"></i>Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>