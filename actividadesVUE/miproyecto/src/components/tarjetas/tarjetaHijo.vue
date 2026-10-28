<script setup>
defineProps({
  nombre: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="card shadow-sm mb-3" :class="{ 'opacity-50 bg-light': !activo }">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="card-title mb-1">{{ nombre }}</h5>
        <p class="card-text text-muted mb-0 small">Puesto: <strong>{{ rol }}</strong></p>
      </div>
      <span 
        class="badge" 
        :class="activo ? 'bg-success' : 'bg-secondary'">
        {{ activo ? 'Activo' : 'Suspendido' }}
      </span>
    </div>
  </div>
</template>