<template>
  <h1>Inciar sesion</h1>

  <div class="p-grid">
    <div class="p-col">1</div>
    <div class="p-col">
      <span class="p-float-label">
      <InputText id="email" type="email" v-model="correo" />
      <label for="email">Ingrese su Correo</label>
    </span>

    <span class="p-float-label">
      <InputText id="password" type="password" v-model="password" />
      <label for="password">Ingrese su Contraseña</label>
    </span>

    <Button label="ingresar" />

    </div>
    <div class="p-col">3</div>
  </div>




</template>

<script>

import InputText from 'primevue/inputtext';


export default {
  components:{
    InputText
  },
  data: () => ({
    correo: ''
  }),
}
</script>

<style>

</style>