<template>
  <h1>Gestión Productos</h1>
  <Button label="Nuevo Producto" icon="pi pi-external-link" @click="modalNuevoProducto" />

<Dialog header="Nuevo Producto" v-model:visible="display_nuevo_producto" :style="{width: '50vw'}">
   
<div class="p-grid p-fluid">
    <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
        </span>
            <InputText placeholder="Titulo" v-model="producto.titulo" />
        </div>
    </div>

    <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">Bs.</span>
            <InputText placeholder="Precio" v-model="producto.precio" />
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>

    <div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">Nro</span>
            <InputText placeholder="Cantidad" v-model="producto.cantidad" />
        </div>
    </div>
</div>



    
    <template #footer>
        <Button label="Cerrar" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
        <Button label="Guardar" icon="pi pi-check" @click="guardarProducto" autofocus />
    </template>
</Dialog>
<DataTable :value="productos" >
    <Column field="titulo" header="Titulo"></Column>
    <Column field="precio" header="Precio"></Column>
    <Column field="cantidad" header="Cantidad"></Column>
    <Column :exportable="false">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
        </Column>
</DataTable>


  
</template>

<script>
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import * as productoService from './../../services/productoService'

export default {
  components:{
    Dialog,
    InputText,
    DataTable,
Column,
  },
  data(){
    return {
      productos: [],
      display_nuevo_producto: false,
      producto: {
        titulo: '',
        precio: 0,
        cantidad: 0
      }
    }
  },
  async mounted(){
    let datos = await productoService.listar();
    this.productos = datos.data
  },
  methods: {

    modalNuevoProducto() {
        this.display_nuevo_producto = true;
    },
     closeBasic() {
        this.display_nuevo_producto = false;
    },
    async guardarProducto(){
      var formData = new FormData();
      formData.append("titulo", this.producto.titulo);
      formData.append("precio", this.producto.precio);
      formData.append("cantidad", this.producto.cantidad);

      var dato = await productoService.guardar(formData);
      console.log(dato);
      this.closeBasic();

    }

  }

}
</script>

<style>

</style>