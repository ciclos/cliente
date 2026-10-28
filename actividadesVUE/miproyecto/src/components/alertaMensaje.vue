<script setup>
import { computed } from 'vue'

const props = defineProps({
  mensaje: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    default: 'info',
    validator(value) {
      return ['info', 'exito', 'peligro'].includes(value)
    }
  }
})

// Mapeo entre las props recibidas y las clases de Bootstrap 5
const claseAlerta = computed(() => {
  const mapa = {
    info: 'alert-info',
    exito: 'alert-success',
    peligro: 'alert-danger'
  }
  return mapa[props.tipo] || 'alert-info'
})
</script>

<template>
  <div class="alert d-flex align-items-center mb-3" :class="claseAlerta" role="alert">
    <span class="me-2">
      <template v-if="tipo === 'exito'">✅</template>
      <template v-else-if="tipo === 'peligro'">⚠️</template>
      <template v-else>ℹ️</template>
    </span>
    <div>{{ mensaje }}</div>
  </div>
</template>