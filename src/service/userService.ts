import axios from "axios"
import { AuthData } from "../vite-env"
import Cookies from "js-cookie"

const baseUrl = "https://api-news-pzgk.onrender.com"

export function singup(data: AuthData) {

    delete data.confirmPassword
    const body = {
        ...data,
        username: generateUsername(data.name as string)
    }
    const response = axios.post(`${baseUrl}/user`, body)
    return response
}

function generateUsername(name: string) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`
}

export function singin(data: AuthData) {
    const response = axios.post(`${baseUrl}/auth`, data)
    return response
}

export function userLogged(){
    const response = axios.get(`${baseUrl}/user/me`, {
        headers:{
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}