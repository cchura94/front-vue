import { httpFile } from './http_service'


export function listar() {
    return httpFile().get('/pagina');
}