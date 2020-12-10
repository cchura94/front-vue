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
</template>

<script>
import InputText from "primevue/inputtext";
// import Toast from 'primevue/toast';
import { ingresar } from "./../../services/loginService";

export default {
  components: {
    InputText,
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
        console.log(resp.data.data.datos);
        localStorage.setItem(
          "token",
          btoa(JSON.stringify(resp.data.data.datos))
        );

         this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        this.$router.push({name: "Admin"}) //redireccionar
      } catch (e) {
        console.log(e);
        localStorage.clear();
      }
    },
  },
};
</script>

<style></style>
