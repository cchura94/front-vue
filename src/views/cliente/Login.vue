<template>
  <h1>Inciar sesion</h1>

  <div class="p-grid">
    <div class="p-col">1</div>
    <div class="p-col">
      <span class="p-float-label">
        <InputText id="email" type="email" v-model="usuario.correo" />
        <label for="email">Ingrese su Correo</label>
      </span>

      <span class="p-float-label">
        <InputText id="password" type="password" v-model="usuario.password" />
        <label for="password">Ingrese su Contraseña</label>
      </span>

      <Button label="ingresar" v-on:click="ingresar()" />
    </div>
    <div class="p-col">{{ usuario }}</div>
  </div>
  <Toast />
</template>

<script>
import InputText from "primevue/inputtext";
// import Toast from 'primevue/toast';
import { ingresar } from "./../../services/loginService";

import Toast from 'primevue/toast';

export default {
  components: {
    InputText,
    Toast
  },
  data: () => ({
    usuario: {
      correo: "",
      password: "",
    },
  }),
  methods: {
    async ingresar() {
      try {
        let resp = await ingresar(this.usuario);
        console.log(resp.data);
        localStorage.setItem(
          "token",
          btoa(JSON.stringify(resp.data.data.datos))
        );

         this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        this.$router.push({name: "Admin"}) //redireccionar
      } catch (e) {
        this.$toast.add({severity: 'error', summary: 'Error de Autenticacion', detail: 'Ocurrio un problema al iniciar sesion', life: 3000});
      
        console.log(e);
        localStorage.clear();
      }
    },
  },
};
</script>

<style></style>
