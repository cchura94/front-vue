import { httpFile } from './http_service'


export function listar() {
    return httpFile().get('/producto');
}

export function guardar(datos) {
    return httpFile().post('/producto', datos);
}

//pendiente
export function modificar(datos, id) {
    return httpFile().put('/producto', datos);
}