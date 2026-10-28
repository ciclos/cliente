<script setup>
import AlertaMensaje from './alertaMensaje.vue'
</script>

<template>
  <div class="container py-4" style="max-width: 600px;">
    <h3 class="mb-4 text-primary">Notificaciones del Sistema</h3>
    <AlertaMensaje tipo="exito" mensaje="Tu perfil ha sido actualizado con éxito." />
    <AlertaMensaje tipo="peligro" mensaje="El espacio de almacenamiento está casi lleno." />
    <AlertaMensaje tipo="info" mensaje="Hay mantenimiento programado para este fin de semana." />
  </div>
</template>