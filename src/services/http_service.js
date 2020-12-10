import axios from 'axios'

export function http(){
    return axios.create({
        baseURL: "http://127.0.0.1:3000"
    })
}

export function httpFile(){
    return axios.create({
        baseURL: "http://127.0.0.1:3000",
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}