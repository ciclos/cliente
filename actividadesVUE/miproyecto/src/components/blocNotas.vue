<script setup>
import { ref, watch, onMounted } from 'vue'

const nota = ref('')
const estadoGuardado = ref('Todo al día')
let temporizador = null

onMounted(() => {
  const notaGuardada = localStorage.getItem('dwec_nota_rapida')
  if (notaGuardada) {
    nota.value = notaGuardada
  }
})

watch(nota, (nuevoValor) => {
  estadoGuardado.value = 'Guardando cambios...'
  
  if (temporizador) clearTimeout(temporizador)
  
  temporizador = setTimeout(() => {
    localStorage.setItem('dwec_nota_rapida', nuevoValor)
    estadoGuardado.value = 'Guardado en LocalStorage ✓'
  }, 500)
})

function limpiarNota() {
  nota.value = ''
  localStorage.removeItem('dwec_nota_rapida')
  estadoGuardado.value = 'Nota eliminada'
}
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
      <span class="fw-bold">📝 Bloc de Notas con Auto-guardado</span>
      <span class="badge bg-secondary">{{ estadoGuardado }}</span>
    </div>

    <div class="card-body">
      <div class="mb-3">
        <textarea 
          v-model="nota" 
          rows="5" 
          class="form-control" 
          placeholder="Escribe tus apuntes aquí... se guardarán solos.">
        </textarea>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">Longitud: {{ nota.length }} caracteres</small>
        <button class="btn btn-outline-danger btn-sm" @click="limpiarNota" :disabled="!nota">
          Borrar contenido
        </button>
      </div>
    </div>
  </div>
</template>