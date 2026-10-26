<script setup>

</script>

<template>
  <h1>Solucion a los ejercicios de VUE</h1>
  <ul>
    <li>
      <router-link to="/">Inicio</router-link>
    </li>
    <li>
      <router-link to="/interruptor">Vamos a interruptor</router-link>
    </li>
    <li>
      <router-link to="/examen">Vamos a examen</router-link>
    </li>
    <li>
      <router-link to="/listaTareas">Vamos lista de tareas</router-link>
    </li>
    <li>
      <router-link to="/tablaCatalogo">Vamos a catalago</router-link>
    </li>
    <li>
      <router-link to="/gestorInvitados">Vamos gestor de invitados</router-link>
    </li>
    <li>
      <router-link to="/filtrarAlumnos">Vamos a filtrar alumnos</router-link>
    </li>
    <li>
      <router-link to="/carrito">Vamos a carrito</router-link>
    </li>
     <li>
      <router-link to="/pass">Vamos a pass</router-link>
    </li>
        <li>
      <router-link to="/bloc">Vamos a bloc</router-link>
    </li>
  </ul>
  <router-view />

</template>
