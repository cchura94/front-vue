<template>
  <h1>Clientes</h1>
</template>

<script>
import { listar } from "./../../services/clienteService"
export default {

 async mounted(){
    let datos = await listar();
    console.log(datos)
  }
}
</script>

<style>

</style>