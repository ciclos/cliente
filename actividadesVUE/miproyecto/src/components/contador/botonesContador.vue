<script setup>
const emit = defineEmits(['incrementar', 'decrementar'])

function sumar() {
  emit('incrementar')
}

function restar() {
  emit('decrementar')
}
</script>

<template>
  <div class="btn-group shadow-sm" role="group">
    <button type="button" class="btn btn-danger" @click="restar">
      - 1
    </button>
    <button type="button" class="btn btn-success" @click="sumar">
      + 1
    </button>
  </div>
</template>