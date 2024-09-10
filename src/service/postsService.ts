import axios from "axios"

const baseUrl = "http://localhost:3000"

export function getAllPosts() {
    const response = axios.get(`${baseUrl}/news/findAll`)
    return response
}