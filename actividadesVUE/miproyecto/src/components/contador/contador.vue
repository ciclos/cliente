<script setup>
import { ref } from 'vue'
import BotonesContador from './botonesContador.vue'

const cuenta = ref(0)
</script>

<template>
  <div class="container py-5 text-center" style="max-width: 400px;">
    <div class="card p-4 shadow-sm">
      <h2 class="display-5 fw-bold mb-3">{{ cuenta }}</h2>
      <div class="d-flex justify-content-center">
        <BotonesContador 
          @incrementar="cuenta++" 
          @decrementar="cuenta--" 
        />
      </div>
    </div>
  </div>
</template>