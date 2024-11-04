import axios from "axios"

const baseUrl = "https://api-news-pzgk.onrender.com"

export function getAllNews() {
    const response = axios.get(`${baseUrl}/news/findAll`)
    return response
}

export function getTopNews() {
    const response = axios.get(`${baseUrl}/news/top`)
    return response
}