<script setup>
import Inicio from './inicio.vue'
import Modelos from './modelos.vue'

defineEmits(['abrir-modelos'])
</script>

<template>
  <main>
    <Inicio @abrir-modelos="$emit('abrir-modelos')" />
    <Modelos />
  </main>
</template>
