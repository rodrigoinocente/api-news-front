import axios from "axios"

const baseUrl = "http://localhost:3000"

export function getAllNews() {
    const response = axios.get(`${baseUrl}/newsPublic/findAll`)
    return response
}

export function getTopNews() {
    const response = axios.get(`${baseUrl}/newsPublic/top`)
    return response
}

export function searchNews(title: string) {
    const response = axios.get(`${baseUrl}/newsPublic/search?title=${title}`)
    return response
}

export function getNewsByCategory(category: string, limit: number, offset: number,) {
    const response = axios.get(`${baseUrl}/newsPublic/category/${category}`, { params: { limit, offset } });
    return response;
}

export function getNewsById(newsId: string) {
    const response = axios.get(`${baseUrl}/newsPublic/id/${newsId}`)
    return response
}