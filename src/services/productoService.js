import { httpFile } from './http_service'


export function listar() {
    return httpFile().get('/producto/1');
}

export function guardar(datos) {
    return httpFile().post('/producto', datos);
}

//pendiente
export function modificar(datos, id) {
    return httpFile().put('/producto/'+id, datos);
}

export function eliminar(id) {
    return httpFile().delete('/producto/'+id);
}


