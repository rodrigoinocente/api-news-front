import axios from "axios"

const baseUrl = "https://nginx-75mn.onrender.com/api-back"

export function getColumnByJournalist(journalistId: string, limit: number, offset: number) {
    const response = axios.get(`${baseUrl}/columnPublic/columnByJournalist/${journalistId}`, { params: { limit, offset } })
    return response
}

export function getColumnByCategory(category: string, limit: number, offset: number, forWideCard: boolean) {
    const response = axios.get(`${baseUrl}/columnPublic/columnByCategory/${category}`, { params: { limit, offset, forWideCard } })
    return response
}

export function getColumnById(columnId: string) {
    const response = axios.get(`${baseUrl}/columnPublic/id/${columnId}`)
    return response
}