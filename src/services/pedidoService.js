import { httpFile, http } from './http_service'


export function listar() {
    return http().get('/pedido');
}

export function guardar(datos) {
    return http().post('/pedido/nuevo-pedido', datos);
}

//pendiente
export function modificar(datos, id) {
    return httpFile().put('/producto/'+id, datos);
}

export function eliminar(id) {
    return httpFile().delete('/producto/'+id);
}


