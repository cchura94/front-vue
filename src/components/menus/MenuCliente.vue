<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <MenuCliente :model="items">
      <template #start>
          <img alt="logo" src="../../assets/logo.png" height="40" class="p-mr-2">
      </template>
      <template #end>
          PERFIL
      </template>
  </MenuCliente>

</template>

<script>
export default {
data() {
        return {
            visible: true,
            items: [
                {
                   label:'INICIO',
                   icon:'pi pi-fw pi-home',
                   url: '/'
                },
                {
                   label:'PRODUCTOS',
                   icon:'pi pi-fw pi-product',
                   items:[
                      {
                         label:'Lo Nuevo',
                         icon:'pi pi-fw pi-user-plus',
                         url: '/productos'
                      },
                      {
                         label:'Destacados',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Categorias',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Buscar',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'Lista de categorias'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'EVENTOS',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'INGRESAR',
                   icon:'pi pi-fw pi-power-off'
                }
             ]
        }
    },
}
</script>

<style>

</style>