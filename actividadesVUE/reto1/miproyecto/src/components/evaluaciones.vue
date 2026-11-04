<script setup>
    import CalificacionExamen from './calificacionExamen.vue';

    const examenes=[40,70,10,0];
</script>

<template>
    <CalificacionExamen  
        v-for="examen in examenes"
        :evaluacion="0"
        :nota="examen"
        @actualizar-nota=""
    />
</template>