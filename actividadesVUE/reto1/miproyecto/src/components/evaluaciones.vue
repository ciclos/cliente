<script setup>
import CalificacionExamen from './calificacionExamen.vue';
import { porcentajeAprobado } from '../utils/calculos.js';

const examenes = [40, 70, 10, 0];

</script>

<template>
    <CalificacionExamen 
        v-for="examen in examenes" 
        :evaluacion="0" 
        :nota="examen" 
        @actualizar-nota="" />

    <div class="progress" style="height: 10px;">
        <div class="progress-bar progress-bar-striped progress-bar-animated" 
             role="progressbar" :style="{ width: porcentajeAprobado(0,examenes) + '%' }">
        </div>
    </div>
</template>