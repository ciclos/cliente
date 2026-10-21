<script setup>
import { ref } from 'vue'

const nuevoNombre = ref('')
const invitados = ref(['Ana Martínez', 'Carlos Gómez', 'Elena Ruiz'])

function anadirInvitado() {
  const nombreLimpio = nuevoNombre.value.trim()
  if (nombreLimpio !== '') {
    invitados.value.push(nombreLimpio)
    nuevoNombre.value = ''
  }
}

function eliminarInvitado(indice) {
  invitados.value.splice(indice, 1)
}
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-primary mb-3">Lista de Asistencia</h5>

      <div class="input-group mb-3">
        <input 
          v-model="nuevoNombre" 
          type="text"
          class="form-control"
          placeholder="Nombre del invitado..." 
          @keyup.enter="anadirInvitado"
        />
        <button class="btn btn-primary" @click="anadirInvitado">
          Añadir
        </button>
      </div>

      <ul class="list-group">
        <li 
          v-for="(invitado, index) in invitados" 
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ invitado }}</span>
          <button 
            class="btn btn-outline-danger btn-sm" 
            @click="eliminarInvitado(index)">
            Eliminar
          </button>
        </li>
      </ul>

      <p v-if="invitados.length === 0" class="text-muted fst-italic mt-3 mb-0">
        No hay invitados registrados en la lista.
      </p>
    </div>
  </div>
</template>