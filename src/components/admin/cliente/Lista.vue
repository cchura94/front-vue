<template>
  {{ clientes }}
  <Button router-Link="/admin/cliente/nuevo">Nuevo Cliente</Button>
  <table border="1">
    <thead>
      <tr>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>ESTADO</th>
        <th>ACCIONES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, index) in clientes" :key="index">
        <td>{{ p.nombres }}</td>
        <td>{{ p.apellidos }}</td>
        <td>{{ p.estado }}</td>
        <td></td>
      </tr>
    </tbody>

  </table>
</template>

<script>
import { listar } from "./../../../services/clienteService"
export default {
data(){
    return {
      clientes: []

    }
  },

 async mounted(){
    let datos = await listar();
    console.log(datos.data)
    this.clientes = datos.data;
  }
}
</script>

<style>

</style>