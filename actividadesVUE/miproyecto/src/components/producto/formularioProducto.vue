<script setup>
import { ref } from 'vue'

const emit = defineEmits(['producto-creado'])

const nombre = ref('')
const precio = ref(0)

function guardarProducto() {
  if (nombre.value.trim() === '' || precio.value <= 0) {
    alert('Por favor introduce un nombre válido y un precio mayor a 0')
    return
  }

  emit('producto-creado', {
    id: Date.now(),
    nombre: nombre.value,
    precio: precio.value
  })

  nombre.value = ''
  precio.value = 0
}
</script>

<template>
  <form @submit.prevent="guardarProducto" class="card card-body shadow-sm mb-4">
    <h5 class="card-title text-primary mb-3">Dar de alta producto</h5>
    
    <div class="mb-3">
      <label class="form-label">Nombre:</label>
      <input 
        v-model="nombre" 
        class="form-control" 
        placeholder="Ej: Camiseta básica" 
        required 
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Precio (€):</label>
      <input 
        v-model.number="precio" 
        type="number" 
        step="0.5" 
        class="form-control" 
        required 
      />
    </div>

    <button type="submit" class="btn btn-primary">
      Añadir al inventario
    </button>
  </form>
</template>