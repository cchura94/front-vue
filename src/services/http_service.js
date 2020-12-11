import axios from 'axios'
import { getHeader, urlbase } from './../config'

export function http(){
    
    return axios.create({
        baseURL: urlbase,
        headers:getHeader()
    })
}

export function httpFile(){
    return axios.create({
        baseURL: urlbase,
        headers:getHeader(),
        /*headers: {
            'Content-Type': 'multipart/form-data'
        }*/
    })
}