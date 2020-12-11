<template>
  <h1>Productos</h1>
  {{ productos }}
</template>

<script>

import { listar } from './../../services/productoService'

export default {
  data(){
    return {
      productos: []
    }
  },
  async mounted(){
    let datos = await listar();
    this.productos = datos.data
  }

}
</script>

<style>

</style>