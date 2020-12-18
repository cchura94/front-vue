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
            <span class="p-inputgroup-addon">Cantidad</span>
            <InputText placeholder="Cantidad" v-model="producto.cantidad" />
        </div>
    </div>
    <div class="p-col-12 p-md-6">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">Imagen</span>
            <input type="file" @change="onImagenSeleccionado">
        </div>
    </div>
    <div class="p-col-12 p-md-6">
        <div class="p-inputgroup">
          
          <img :src="'http://127.0.0.1:3000/imagenes/'+ producto.imagen" alt="" width="300">
        </div>
    </div>
</div>



    
    <template #footer>
        <Button label="Cerrar" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
        <Button :label="display_modificar_producto?'Modificar':'Guardar'" icon="pi pi-check" @click="guardarProducto" autofocus />
    </template>
</Dialog>
<DataTable :value="productos" >
    <Column field="titulo" header="Titulo"></Column>
    <Column field="precio" header="Precio"></Column>
    <Column field="cantidad" header="Cantidad"></Column>
    <Column :exportable="false">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editarProducto(slotProps.data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="openEliminar(slotProps.data)" />
            </template>
        </Column>
</DataTable>

{{producto}}

<Dialog header="Header" v-model:visible="displayEliminar" :style="{width: '50vw'}">
    <p>¿Está seguro de Eliminar el Producto?.</p>
    <template #footer>
        <Button label="No" icon="pi pi-times" @click="closeEliminar" class="p-button-text"/>
        <Button label="Si" icon="pi pi-check" @click="eliminarProducto" autofocus />
    </template>
</Dialog>
  
  <Toast />

</template>

<script>
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Toast from 'primevue/toast';

import * as productoService from './../../services/productoService'

export default {
  components:{
    Dialog,
    InputText,
    DataTable,
Column,
Toast
  },
  data(){
    return {
      productos: [],
      display_nuevo_producto: false,
      display_modificar_producto: false,
      producto: {
        titulo: '',
        precio: 0,
        cantidad: 0
      },
      displayEliminar: false,
      imagenSeccionada: null
    }
  },
  async mounted(){
    //this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
            
    try {
      let datos = await productoService.listar();
      this.productos = datos.data
    } catch (error) {
      console.log(error);
      this.$router.push({name: "Login"}) //redireccionar
      localStorage.removeItem("token");
    }
    
  },
  methods: {

    modalNuevoProducto() {
        this.display_nuevo_producto = true;
        this.producto = {}
    },
     closeBasic() {
        this.display_nuevo_producto = false;
        this.display_modificar_producto = false
    },
    onImagenSeleccionado(event){
      //console.log("imagen seleccionado", event)

      this.imagenSeccionada = event.target.files[0]
      console.log(this.imagenSeccionada);
    },
    async guardarProducto(){
      if(this.display_modificar_producto){
        //modificar

         var formData2 = new FormData();
      formData2.append("titulo", this.producto.titulo);
      formData2.append("precio", this.producto.precio);
      formData2.append("cantidad", this.producto.cantidad);
      formData2.append("imagen", this.imagenSeccionada, this.imagenSeccionada.name);

      try{
          var dato2 = await productoService.modificar(formData2, this.producto.id);
            console.log(dato2);
            
            this.closeBasic();
            //this.productos.push(this.producto);
      }catch(err){
      // toast (mensaje de error)
      console.log(err)
      }

      }else{
        //Nuevo Producto
         var formData = new FormData();
      formData.append("titulo", this.producto.titulo);
      formData.append("precio", this.producto.precio);
      formData.append("cantidad", this.producto.cantidad);
formData.append("imagen", this.imagenSeccionada, this.imagenSeccionada.name);

      try{
          var dato = await productoService.guardar(formData);
            console.log(dato);
            this.$toast.add({severity: 'success', summary: 'Producto registrado', detail: 'El producto se ha registrado correctamente', life: 3000});
            
            this.closeBasic();
            this.productos.push(this.producto);
      }catch(err){
      // toast (mensaje de error)
      console.log(err)
      }
      }
     
      
    },
    editarProducto(dato){
      console.log(dato.titulo);
      this.producto = dato;
      this.display_modificar_producto = true
      this.display_nuevo_producto = true;
    },
    openEliminar(dato){
      this.displayEliminar = true
      this.producto = dato
      console.log(dato);
    },
    closeEliminar(){
      this.displayEliminar = false
    },
    async eliminarProducto(){
      try{
          var dato = await productoService.eliminar(this.producto.id);
            console.log(dato);
            
            this.closeEliminar();
      }catch(err){
      // toast (mensaje de error)
      console.log(err)
      }

    }


  }

}
</script>

<style>

</style>