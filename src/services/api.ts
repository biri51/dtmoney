import axios from 'axios'; //fiz yarn add axios

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', //endereço que se repete em todas as requisições
})