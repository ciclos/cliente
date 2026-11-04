<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { UMBRALES } from '../utils/calculos';

const props = defineProps({
  evaluacion: {
    type: Number,
    required: true
  },
  nota: {
    type: Number,
    required: true
  },
})


const mensaje = computed(() => {
  let texto = "aprobado";

  if (props.nota < UMBRALES[props.evaluacion]) {
    texto = "suspenso";
  }

  return texto;
});

const emit = defineEmits(['actualizaExamen'])

</script>

<template>
  <div class="card p-4 shadow-sm">

    <div class="mb-3">
      <div class="examen">Examen {{  }}</div>

      <input 
        id="notaInput" 
        type="number"
        :class="nota >= UMBRALES[props.evaluacion] ? 'is-valid' : 'is-invalid'" 
        min="0" max="10" 
        step="0.1" 
        class="form-control"
        :value="nota"
        @input="cambiarExamen(indice, $event)" />
      <div class="examen">{{ mensaje }}</div>
    </div>
  </div>
</template>

<style scoped>
div.examen {
  text-align: left;
}
</style>