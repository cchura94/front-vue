<template>
  <h1>Mi Perfil</h1>
  <h1>Datos de usuario</h1>
  <code>
      {{ usuario }}
  </code>
<h1>Datos de Cliente</h1>
<code>
 {{ usuario.cliente }}

</code>
</template>

<script>

import * as clienteService from "./../../services/clienteService"
export default {
    data(){
        return {
            usuario: {},

        }
    },
    async mounted(){
        this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
        let datos = await clienteService.verificar_datos_cliente(this.usuario.id);
        this.usuario.cliente = datos.data;
        console.log(this.usuario.cliente);
    }

}
</script>

<style>

</style>