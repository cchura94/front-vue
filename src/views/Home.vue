<template>
  
  <Sidebar v-model:visible="carritoPanel" position="right">

  <Card v-for="(c,index) in carrito" :key="index">

    <template #content>
        {{ c.titulo }} - Bs. {{ c.precio }}
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="x" @click="quitarCarrito(c, index)" />
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


</template>

<script>
import Card from 'primevue/card';
// @ is an alias to /src
import * as inicioService from './../services/inicioService'
import Sidebar from 'primevue/sidebar';
export default {
  name: 'Home',
  components: {
    Card,
    Sidebar
  },
  data(){
    return {
      productos: [],
      carrito: [],
      carritoPanel:false
    }
  },
  async mounted(){
     let datos = await inicioService.listar();
     console.log(datos)
     this.productos = datos.data
    if(!localStorage.getItem("carrito")){
      localStorage.setItem("carrito","[]")
    }
  },
  methods:{
    addCarrito(prod){      
      this.carrito = JSON.parse(localStorage.getItem("carrito"));
      this.carrito.push(prod);
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
    },
    quitarCarrito(carr, index){
      this.carrito = JSON.parse(localStorage.getItem("carrito"));
      this.carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
    }
  }
}
</script>
