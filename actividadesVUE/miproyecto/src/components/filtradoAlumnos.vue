<script setup>
import { ref, computed } from 'vue'

const busqueda = ref('')
const ordenDescendente = ref(false)

const estudiantes = ref([
  { id: 1, nombre: 'Laura Sanz', nota: 8.5 },
  { id: 2, nombre: 'Marcos Alonso', nota: 4.2 },
  { id: 3, nombre: 'Sara Nieto', nota: 9.7 },
  { id: 4, nombre: 'Javier Vega', nota: 6.8 }
])

const estudiantesFiltrados = computed(() => {
  let resultado = estudiantes.value.filter(est => 
    est.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )

  if (ordenDescendente.value) {
    resultado = [...resultado].sort((a, b) => b.nota - a.nota)
  }

  return resultado
})
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-primary mb-3">Buscador de Calificaciones</h5>
      
      <div class="row g-2 mb-3">
        <div class="col-12 col-md-8">
          <input 
            v-model="busqueda" 
            class="form-control"
            placeholder="Buscar alumno por nombre..." 
          />
        </div>
        <div class="col-12 col-md-4 d-grid">
          <button 
            class="btn" 
            :class="ordenDescendente ? 'btn-dark' : 'btn-outline-dark'"
            @click="ordenDescendente = !ordenDescendente">
            {{ ordenDescendente ? 'Orden original' : 'Ordenar por nota' }}
          </button>
        </div>
      </div>

      <ul class="list-group">
        <li 
          v-for="est in estudiantesFiltrados" 
          :key="est.id"
          class="list-group-item d-flex justify-content-between align-items-center">
          <span class="fw-semibold">{{ est.nombre }}</span>
          <span 
            class="badge fs-6" 
            :class="est.nota >= 5 ? 'bg-success' : 'bg-danger'">
            {{ est.nota.toFixed(1) }}
          </span>
        </li>
      </ul>

      <div v-if="estudiantesFiltrados.length === 0" class="alert alert-secondary mt-3 mb-0">
        No se encontraron coincidencias para la búsqueda.
      </div>
    </div>
  </div>
</template>