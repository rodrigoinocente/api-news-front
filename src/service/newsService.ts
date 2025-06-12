import axios from "axios"

const baseUrl = import.meta.env.VITE_API_BACK_URL

export function getDataHome() {
    const response = axios.get(`${baseUrl}/newsPublic/home`)
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

export function getNewsByJournalist(journalistId: string, limit: number, offset: number) {
    const response = axios.get(`${baseUrl}/newsPublic/newsByJournalist/${journalistId}`, { params: { limit, offset } })
    return response
}

export function getJournalistById(journalistId: string) {
    const response = axios.get(`${baseUrl}/newsPublic/journalist/${journalistId}`)
    return response
}