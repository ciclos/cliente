<script setup>
import { ref, computed } from 'vue'

const password = ref('')

const tieneLongitudMinima = computed(() => password.value.length >= 8)
const tieneMayuscula = computed(() => /[A-Z]/.test(password.value))
const tieneNumero = computed(() => /[0-9]/.test(password.value))
const tieneEspecial = computed(() => /[^A-Za-z0-9]/.test(password.value))

const puntuacion = computed(() => {
    let puntos = 0
    if (password.value) {
        if (tieneLongitudMinima.value) puntos += 25
        if (tieneMayuscula.value) puntos += 25
        if (tieneNumero.value) puntos += 25
        if (tieneEspecial.value) puntos += 25
    }
    return puntos
})

const estadoSeguridad = computed(() => {
    if (puntuacion.value <= 25) return { texto: 'Muy débil', claseColor: 'bg-danger', textClass: 'text-danger' }
    if (puntuacion.value <= 50) return { texto: 'Débil', claseColor: 'bg-warning', textClass: 'text-warning' }
    if (puntuacion.value <= 75) return { texto: 'Media', claseColor: 'bg-info', textClass: 'text-info' }
    return { texto: 'Fuerte / Segura', claseColor: 'bg-success', textClass: 'text-success' }
})
</script>

<template>
    <div class="card shadow-sm">
        <div class="card-body">
            <h5 class="card-title text-primary mb-3">Comprobador de Seguridad de Contraseña</h5>

            <div class="mb-3">
                <label class="form-label fw-semibold">Introduce tu clave:</label>
                <input v-model="password" type="password" class="form-control" placeholder="Escribe aquí tu clave..." />
            </div>

            <div class="mb-3">
                <div class="d-flex justify-content-between mb-1 small fw-bold">
                    <span>Nivel de seguridad:</span>
                    <span :class="estadoSeguridad.textClass">{{ password ? estadoSeguridad.texto : 'Sin datos' }}</span>
                </div>
                <div class="progress" style="height: 10px;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated"
                        :class="estadoSeguridad.claseColor" role="progressbar" :style="{ width: puntuacion + '%' }">
                    </div>
                </div>
            </div>

            <ul class="list-unstyled small mb-0">
                <li :class="tieneLongitudMinima ? 'text-success fw-semibold' : 'text-muted'">
                    {{ tieneLongitudMinima ? '✓' : '✗' }} Mínimo 8 caracteres
                </li>
                <li :class="tieneMayuscula ? 'text-success fw-semibold' : 'text-muted'">
                    {{ tieneMayuscula ? '✓' : '✗' }} Al menos una letra mayúscula
                </li>
                <li :class="tieneNumero ? 'text-success fw-semibold' : 'text-muted'">
                    {{ tieneNumero ? '✓' : '✗' }} Al menos un número
                </li>
                <li :class="tieneEspecial ? 'text-success fw-semibold' : 'text-muted'">
                    {{ tieneEspecial ? '✓' : '✗' }} Al menos un carácter especial (@, $, !, %, etc.)
                </li>
            </ul>
        </div>
    </div>
</template>