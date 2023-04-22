import axios from 'axios'
import { API_BASE_URL } from '../config'

export const userLogin = async (email: string, password: string) => {
    try {
        const res = await axios.post(API_BASE_URL + '/login', { email, password })
        const response = res.data
        const { user } = response
        return saveLocalUser(user)
    } catch (error) {
        console.log("Couldn't log in user ===> ", error)
    }

}

export const userRegister = async (email: string, password: string, username: string) => {
    return await axios.post(API_BASE_URL + '/register', { email, password, username })
}

// TODO send this constant somewhere else
const STORAGE_KEY_LOGGEDIN_USER: string = "user"

export function saveLocalUser(user: any) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

export function getLoggedinUser() {
    const user = sessionStorage.getItem('user')
    return JSON.parse(user!)
}