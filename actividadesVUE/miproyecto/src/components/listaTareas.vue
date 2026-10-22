<script setup>
import { ref } from 'vue'

const tareas = ref([
  'Repasar directivas de Vue.js',
  'Completar ejercicios prácticos',
  'Diseñar interfaz con Bootstrap 5',
  'Subir proyecto al repositorio'
])
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Mis Tareas del Día</h5>
    </div>

    <div class="card-body">
      <ul v-if="tareas.length > 0" class="list-group list-group-flush">
        <li 
          v-for="(tarea, index) in tareas" 
          :key="index" 
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ tarea }}</span>
          <span class="badge bg-primary rounded-pill">#{{ index + 1 }}</span>
        </li>
      </ul>
      <div v-else class="alert alert-info mb-0">
        🎉 ¡Genial! No tienes tareas pendientes.
      </div>
    </div>
  </div>
</template>