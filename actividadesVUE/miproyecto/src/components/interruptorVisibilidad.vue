<script setup>
import { ref } from 'vue'

const mostrarInfo = ref(false)

function toggleDetalles() {
  mostrarInfo.value = !mostrarInfo.value
}
</script>

<template>
  <div class="card shadow-sm mb-3">
    <div class="card-body">
      <h5 class="card-title text-primary">Información del Sistema</h5>
      
      <button 
        class="btn btn-sm mb-3" 
        :class="mostrarInfo ? 'btn-outline-secondary' : 'btn-primary'"
        @click="toggleDetalles">
        {{ mostrarInfo ? 'Ocultar detalles' : 'Mostrar detalles' }}
      </button>

      <div v-if="mostrarInfo" class="alert alert-success mb-0" role="alert">
        <h6 class="alert-heading fw-bold">Detalles técnicos:</h6>
        <p class="mb-1"><strong>Estado del servidor:</strong> Operativo</p>
        <p class="mb-1"><strong>Versión:</strong> v3.4.2</p>
        <p class="mb-0"><strong>Última sincronización:</strong> Hace 5 minutos</p>
      </div>

      <p v-else class="text-muted small fst-italic mb-0">
        Haz clic en el botón superior para consultar los detalles técnicos.
      </p>
    </div>
  </div>
</template>