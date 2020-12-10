import { http } from './http_service'

export function listar() {
    return http().get('/persona');
}

export function guardar(datos) {
    return http().post('/persona', datos);
}

export function mostrar(id) {
    return http().get('/persona/'+id);
}

export function modificar(datos, id) {
    return http().put('/persona/'+id, datos);
}

export function eliminar(id) {
    return http().delete('/persona/'+id);
}