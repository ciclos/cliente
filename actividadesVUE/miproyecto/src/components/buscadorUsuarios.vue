<script setup>
import { ref, watch } from 'vue'

const terminoBusqueda = ref('')
const cargando = ref(false)
const resultados = ref([])
const historialConsultas = ref([])

const baseDatosMock = ['Carlos Gómez', 'Carmen Ruiz', 'Cristina López', 'David Morales', 'Elena Navarro', 'Fernando Gil']

let debounceTimer = null

watch(terminoBusqueda, (nuevoTermino, viejoTermino) => {
  if (viejoTermino !== undefined) {
    historialConsultas.value.unshift({
      fecha: new Date().toLocaleTimeString(),
      anterior: viejoTermino || '(vacío)',
      actual: nuevoTermino || '(vacío)'
    })
  }

  if (!nuevoTermino.trim()) {
    resultados.value = []
    cargando.value = false
    return
  }

  cargando.value = true
  if (debounceTimer) clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    resultados.value = baseDatosMock.filter(nombre => 
      nombre.toLowerCase().includes(nuevoTermino.toLowerCase())
    )
    cargando.value = false
  }, 400)
})
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-primary mb-3">🔎 Búsqueda de Usuarios Asíncrona con Auditoría</h5>

      <div class="mb-3 position-relative">
        <label class="form-label fw-semibold">Término de búsqueda:</label>
        <input 
          v-model="terminoBusqueda" 
          type="text" 
          class="form-control" 
          placeholder="Escribe un nombre (ej. 'Car', 'el')..." 
        />
      </div>

      <div v-if="cargando" class="d-flex align-items-center text-primary my-3">
        <div class="spinner-border spinner-border-sm me-2" role="status"></div>
        <span>Consultando servidor...</span>
      </div>

      <div v-else class="mb-4">
        <h6 class="fw-bold text-secondary">Resultados:</h6>
        <ul v-if="resultados.length > 0" class="list-group list-group-flush border rounded">
          <li v-for="(item, idx) in resultados" :key="idx" class="list-group-item">
            👤 {{ item }}
          </li>
        </ul>
        <p v-else-if="terminoBusqueda.trim()" class="text-muted small mb-0">
          No se encontraron usuarios que coincidan con la búsqueda.
        </p>
        <p v-else class="text-muted small mb-0">
          Escribe algo para ver los resultados.
        </p>
      </div>

      <div class="card bg-light border-0">
        <div class="card-body p-3">
          <h6 class="card-subtitle mb-2 text-muted fw-bold">Historial observado por watch():</h6>
          <ul v-if="historialConsultas.length > 0" class="list-group list-group-sm small">
            <li 
              v-for="(log, i) in historialConsultas.slice(0, 5)" 
              :key="i" 
              class="list-group-item d-flex justify-content-between align-items-center bg-white">
              <span>Cambio de <code>"{{ log.anterior }}"</code> a <code class="text-primary">"{{ log.actual }}"</code></span>
              <span class="badge bg-secondary">{{ log.fecha }}</span>
            </li>
          </ul>
          <small v-else class="text-muted">Aún no se han producido cambios en el input.</small>
        </div>
      </div>
    </div>
  </div>
</template>