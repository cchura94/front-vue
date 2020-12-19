<template>
  
  <MenuCliente :model="items" style="background-color:#2196F3;">
    <template #start>
      <img alt="logo" src="../../assets/logo.png" height="40" class="p-mr-2" />

        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" v-if="$route.meta.requireAuth" />


    </template>
    <template #end v-if="usuario">
      
      <Button @click="openPerfil">{{ usuario.correo }}</Button>

    </template>
  </MenuCliente>

<Sidebar v-model:visible="visibleLeft" style="background-color: #2196F3">
	
  <div class="perfil">
        <img alt="user header" src="../../assets/logo.png" class="img-perfil" width="30%" style="border-radius:75%">
    
        <p>cristian@gmail.com</p> 
    
        <Button icon="pi pi-check" label="Perfil" />
        <Button icon="pi pi-fw pi-power-off" label="Salir" class="p-button-secondary" style="margin-left: .5em" />
   

  </div>
        

  <PanelMenu :model="items_admin" />

</Sidebar>


</template>

<script>
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu';


export default {
  components: {
    Sidebar,
    PanelMenu,
  },
  mounted(){
//this.usuario = JSON.parse(atob(localStorage.getItem("token"))).usuario
  },
  data() {
    return {
      usuario: {},
      visible: true,
      visibleLeft: false,
      items: [
        {
          label: "INICIO",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "PRODUCTOS",
          icon: "pi pi-fw pi-product",
          items: [
            {
              label: "Lo Nuevo",
              icon: "pi pi-fw pi-user-plus",
              to: "/productos",
            },
            {
              label: "Destacados",
              icon: "pi pi-fw pi-user-minus",
            },
          ],
        },
        {
          label: "NOSOTROS",
          icon: "pi pi-fw pi-calendar",
          to: '/acerca'
        },
        {
          label: "INGRESAR",
          icon: "pi pi-fw pi-power-off",
          
          command: (event) => {
            // event.originalEvent: Browser event
            // event.item: Menuitem instance
            console.log(event.item)
           
        }, 
        to: "/login"         

        },
      ],
      items_admin:  [
                {
                   label: 'ADMINISTRADOR',
                   icon:'pi pi-fw pi-file',
                   to: "/admin"
                },
                {
                   label: 'PRODUCTO',
                   icon:'pi pi-fw pi-pencil',
                   items: [
                      {
                         label: 'Lista de Producto',
                         icon:'pi pi-fw pi-align-left',
                         to: "/admin/producto"
                      },
                      {
                         label: 'Right',
                         icon:'pi pi-fw pi-align-right'
                      }
                   ]
                },
                {
                   label: 'CLIENTES',
                   icon:'pi pi-fw pi-user',
                   items: [
                      {
                         label: 'Nuevo Cliente',
                         icon:'pi pi-fw pi-user-plus',
                         to:"/admin/cliente/nuevo"

                      },
                      {
                         label: 'Lista Clientes',
                         icon:'pi pi-fw pi-user-minus',
                         to: "/admin/cliente"
                      },
                   ]
                },
                {
                   label: 'PEDIDO',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Nuevo Pedido',
                         icon:'pi pi-fw pi-pencil',
                         to: "/admin/pedido/nuevo"
                      },
                      {
                         label: 'Lista Pedidos',
                         icon:'pi pi-fw pi-calendar-times',
                         to: "/admin/pedido"
                      }
                   ]
                },
                {
                   label: 'USUARIOS',
                   icon:'pi pi-fw pi-calendar',
                   items: [
                      {
                         label: 'Nuevo Usuario',
                         icon:'pi pi-fw pi-pencil',
                         to: "/admin/pedido/nuevo"
                      },
                      {
                         label: 'Lista Usuarios',
                         icon:'pi pi-fw pi-calendar-times',
                         to: "/admin/pedido"
                      }
                   ]
                }
             ]
    }
  },
  methods:{
    openPerfil(){
      this.$router.push({name: "Perfil"})
    }
  }
};
</script>

<style>
.img-perfil {
    width: 56px;
    margin: 10px;
}
.perfil{
  text-align: center;
  background-color: "#ccc";
  color: "#fff"
}
</style>
