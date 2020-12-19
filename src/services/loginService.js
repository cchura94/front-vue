import { http } from './http_service'

export function ingresar(datos) {
    return http().post('/login', datos);
}

export function verificaAuthToken(){
    return http().get('/');
}