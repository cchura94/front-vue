<template>
  
  <Sidebar v-model:visible="carritoPanel" position="right">

    <Card>
      <template #title>
        Total: Bs. {{ total }}
        <Button label="Realizar Pedido" @click="realizarPedido" />
    </template>
    </Card>

  <Card v-for="(c,index) in carrito" :key="index">

    <template #content>
        {{ c.titulo }} - Bs. {{ c.precio }}
    </template>
    <template #footer>
        <Button label="x" @click="quitarCarrito(c, index)" />
    </template>
</Card>
</Sidebar>

<Button icon="pi pi-arrow-left" @click="carritoPanel = true" />
  <div class="p-grid">
	<div class="p-col-4" v-for="(prod, index) in productos" :key="index">
<Card >

    <template #header v-if="prod.imagen">
        <img alt="imagen" :src="'//127.0.0.1:3000/imagenes/'+ prod.imagen">
    </template>
    <template #title>
        {{ prod.titulo }}
    </template>
    <template #content>
      {{ prod.descripcion }}
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="carrito" @click="addCarrito(prod)" />
    </template>
</Card>

  </div>
</div>

{{ ped }}
<Toast />
</template>

<script>
import Card from 'primevue/card';
// @ is an alias to /src
import * as inicioService from './../services/inicioService'
import * as clienteService from "./../services/clienteService"
import * as pedidoService from "./../services/pedidoService"

import Sidebar from 'primevue/sidebar';
import Toast from 'primevue/toast';
export default {
  name: 'Home',
  components: {
    Card,
    Sidebar,
    Toast
  },
  data(){
    return {
      productos: [],
      carrito: [],
      carritoPanel:false,
      total: 0,
      usuario: {},
      ped: {}
    }
  },
  async mounted(){
     let datos = await inicioService.listar();
     console.log(datos)
     this.productos = datos.data

     this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
        let d = await clienteService.verificar_datos_cliente(this.usuario.id);
        this.usuario.cliente = d.data;
        console.log(this.usuario.cliente);

    if(!localStorage.getItem("carrito")){
      localStorage.setItem("carrito","[]")
    }
  },
  methods:{
    addCarrito(prod){      
      this.carrito = JSON.parse(localStorage.getItem("carrito"));
      this.carrito.push(prod);
      this.total += prod.precio
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
      this.$toast.add({severity: 'success', summary: 'Agregado al carrito', detail: 'Producto Agregado al carrito', life: 3000});
      
    },
    quitarCarrito(carr, index){
      this.carrito = JSON.parse(localStorage.getItem("carrito"));
      this.carrito.splice(index, 1);
      this.total -= carr.precio
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
    },
    async realizarPedido(){
      //this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
      let prod = [];
      this.carrito.forEach
      this.carrito.forEach(p => {
        prod.push(p.id);
      });

      this.ped = {
        fecha: "11-23-20",
        precio_total: this.total,
        persona_id: this.usuario.cliente.id,
        productos: prod
      }
      let resp = await pedidoService.guardar(this.ped);
      console.log(resp)
    }
  }
}
</script>
