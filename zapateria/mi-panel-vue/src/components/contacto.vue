<script setup>
import { reactive, ref } from 'vue'

const formulario = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

const enviado = ref(false)

function enviarFormulario() {
  enviado.value = true
  formulario.nombre = ''
  formulario.email = ''
  formulario.asunto = ''
  formulario.mensaje = ''
}
</script>

<template>
  <section class="contacto-seccion">
    <div class="contenedor">
      <div class="cabecera-contacto">
        <p class="etiqueta">ATENCIÓN AL CLIENTE</p>
        <h1>Contáctanos</h1>
        <p class="descripcion">
          ¿Tienes dudas sobre tallas, pedidos o envíos? Escríbenos y te responderemos lo antes posible.
        </p>
      </div>

      <div v-if="enviado" class="mensaje-exito">
        <h3>¡Mensaje enviado con éxito!</h3>
        <p>Gracias por contactar con STEPUP. Te responderemos a la brevedad.</p>
        <button type="button" @click="enviado = false">Enviar otro mensaje</button>
      </div>

      <form v-else class="formulario" @submit.prevent="enviarFormulario">
        <div class="grupo">
          <label for="nombre">Nombre completo</label>
          <input
            id="nombre"
            v-model="formulario.nombre"
            type="text"
            required
            placeholder="Ej. María García"
          >
        </div>

        <div class="grupo">
          <label for="email">Correo electrónico</label>
          <input
            id="email"
            v-model="formulario.email"
            type="email"
            required
            placeholder="ejemplo@correo.com"
          >
        </div>

        <div class="grupo">
          <label for="asunto">Asunto</label>
          <input
            id="asunto"
            v-model="formulario.asunto"
            type="text"
            required
            placeholder="Consulta sobre un pedido, modelo, etc."
          >
        </div>

        <div class="grupo">
          <label for="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            v-model="formulario.mensaje"
            rows="5"
            required
            placeholder="Escribe aquí tu consulta..."
          ></textarea>
        </div>

        <button type="submit" class="boton-enviar">Enviar mensaje</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contacto-seccion {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 24px;
}

.contenedor {
  background: white;
  border-radius: 18px;
  padding: 36px;
  box-shadow: 0 4px 20px rgba(23, 32, 51, 0.08);
}

.cabecera-contacto {
  text-align: center;
  margin-bottom: 30px;
}

.etiqueta {
  color: #2563eb;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 0 0 8px;
}

h1 {
  color: #172033;
  font-size: 32px;
  margin: 0 0 12px;
}

.descripcion {
  color: #64748b;
  font-size: 16px;
  margin: 0;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grupo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  color: #172033;
  font-weight: 600;
  font-size: 14px;
}

input,
textarea {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 15px;
  font-family: inherit;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #2563eb;
}

.boton-enviar {
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 8px;
}

.boton-enviar:hover {
  background: #1d4ed8;
}

.mensaje-exito {
  text-align: center;
  padding: 30px;
  background: #eff6ff;
  border-radius: 12px;
}

.mensaje-exito h3 {
  color: #2563eb;
  margin-top: 0;
}

.mensaje-exito p {
  color: #172033;
  margin-bottom: 20px;
}

.mensaje-exito button {
  background: #172033;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
