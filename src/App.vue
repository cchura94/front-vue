<template>
   <Menu />
   
{{ usuario }}
  <router-view />

   <Footer></Footer>

    
</template>

<script>
import Menu from "@/components/menus/MenuCliente"
import Footer from "@/components/menus/PiePagina.vue"


import { verificaAuthToken } from './services/loginService'
export default {
   components:{
      Menu,
      Footer,
      
   },
   data(){
      return {

         usuario: {},
         
      }
   },
   async mounted(){
      // verificar el token valido
      try{
         
         let respuesta = await verificaAuthToken();
         console.log(respuesta)
this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
         
      }catch(error){
         console.log(error);
         localStorage.clear();
      }
    
  }
    
}
</script>

<style>
body{
   margin: 0;
}
</style>
