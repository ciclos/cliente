<script setup>
import TarjetaUsuario from './tarjetaHijo.vue'
</script>

<template>
  <div class="container py-4" style="max-width: 600px;">
    <h3 class="mb-4 text-primary">Equipo de Trabajo</h3>
    <TarjetaUsuario nombre="Lucía Mendez" rol="Frontend Lead" :activo="true" />
    <TarjetaUsuario nombre="Pablo Ramos" rol="Diseñador UI/UX" :activo="true" />
    <TarjetaUsuario nombre="Marta Gil" rol="QA Tester" :activo="false" />
  </div>
</template>