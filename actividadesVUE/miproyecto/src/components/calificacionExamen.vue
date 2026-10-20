<script setup>
import { ref } from 'vue'

const nota = ref(7.5)
</script>

<template>
  <div class="card p-4 shadow-sm">
    <div class="mb-3">
      <label for="notaInput" class="form-label fw-semibold">Introduce la nota del examen (0-10):</label>
      <input 
        id="notaInput"
        v-model.number="nota" 
        type="number" 
        min="0" 
        max="10" 
        step="0.1" 
        class="form-control"
      />
    </div>

    <div>
      <div v-if="nota < 0 || nota > 10 || isNaN(nota)" class="alert alert-danger mb-0" role="alert">
        ❌ La nota introducida no es válida (debe estar comprendida entre 0 y 10).
      </div>
      <div v-else-if="nota < 5" class="alert alert-warning mb-0" role="alert">
        ⚠️ Insuficiente ({{ nota }}). Debes recuperar la materia.
      </div>
      <div v-else-if="nota < 9" class="alert alert-primary mb-0" role="alert">
        ✅ Aprobado / Notable ({{ nota }}). ¡Buen trabajo!
      </div>
      <div v-else class="alert alert-success mb-0" role="alert">
        🌟 Sobresaliente ({{ nota }}). ¡Excelente resultado!
      </div>
    </div>
  </div>
</template>