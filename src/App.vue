<template>
   <Menu />
{{ usuario }}
  <router-view />

   <Footer></Footer>
  
    
</template>

<script>
import Menu from "@/components/menus/MenuCliente"
import Footer from "@/components/menus/PiePagina.vue"


export default {
   components:{
      Menu,
      Footer
   },
   data(){
      return {

         usuario: {}
      }
   },
     mounted(){
    this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
  }
    
}
</script>

<style>
body{
   margin: 0;
}
</style>
