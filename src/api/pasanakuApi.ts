import axios from 'axios'

export const pasanakuApi = axios.create({
  baseURL: "http://localhost:3000/api"
})
