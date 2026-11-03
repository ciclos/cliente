<script setup>
  import { ref } from 'vue';
  import { computed } from 'vue';
  import { UMBRALES } from '../utils/calculos';

  const nota = ref(7.5)

  const mensaje = computed(() => {
    let texto = "aprobado";

    if ( nota < UMBRALES[0]){
      texto = "suspenso";
    }

    return texto;
  });

  const evaluacion=[50,71,100,0];

</script>

<template>
  <div class="card p-4 shadow-sm">

    <div v-for="nota in evaluacion" class="mb-3">
      <div class="examen">Examen 1</div>
      <input 
        id="notaInput"
        v-model.number="nota" 
        type="number" 
        :class="nota >= UMBRALES[0] ? 'is-valid' : 'is-invalid'"
        min="0" 
        max="10" 
        step="0.1" 
        class="form-control"
      />
      <div class="examen">{{ mensaje }}</div>
    </div>
  </div>
</template>

<style scoped>
  div.examen{
    text-align: left;
  }
</style>