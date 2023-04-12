import axios from 'axios'
import { API_BASE_URL } from '../config'

export const userLogin = async (email: string, password: string) => {
    return await axios.post(API_BASE_URL + '/login', { email, password })
}

export const userRegister = async (email: string, password: string, username: string) => {
    return await axios.post(API_BASE_URL + '/register', { email, password, username })
}