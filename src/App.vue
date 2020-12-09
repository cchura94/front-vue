<template>
   <Menu />

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
   }
    
}
</script>

<style>

</style>
