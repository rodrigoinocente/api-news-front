import axios from "axios"
import { AuthData } from "../vite-env"

const baseUrl = "https://api-news-interact.onrender.com/api-interact"

export function singUp(data: AuthData) {
    delete data.confirmPassword
    const body = {
        ...data,
        username: generateUsername(data.name as string)
    }
    const response = axios.post(`${baseUrl}/user`, body, { withCredentials: true })
    return response
}

function generateUsername(name: string) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`
}

export function singIn(data: AuthData) {
    const response = axios.post(`${baseUrl}/auth`, data, { withCredentials: true })
    return response
}

export function userLogged() {
    const response = axios.get(`${baseUrl}/user/me`, { withCredentials: true })
    return response
}

export function logout() {
    const response = axios.delete(`${baseUrl}/auth/logout`, { withCredentials: true })
    return response
}

export function updateUser(userId: string, data: Partial<AuthData>) {
    const response = axios.patch(`${baseUrl}/user/${userId}`, data, { withCredentials: true })
    return response
}