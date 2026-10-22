<script setup>

</script>

<template>
  <h1>Solucion a los ejercicios de VUE</h1>
  <ul>
    <li><router-link class="marca" to="/interruptor">A1.1. Interrruptor de visibilidad</router-link>
    </li>
    <li><router-link class="marca" to="/examen">A1.2. Calificador examen</router-link>
    </li>
    <li><router-link class="marca" to="/listaTareas">A2.1. Lista de tareas</router-link>
    </li>
    <li><router-link class="marca" to="/tablaCatalogo">A2.2. Tabla catalogo</router-link>
    </li>
    <li><router-link class="marca" to="/gestorInvitados">A3.1. Gestor de invitados</router-link>
    </li>
    
  </ul>
  <router-view />

</template>
