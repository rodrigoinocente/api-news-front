import axios from "axios"

const baseUrl = "http://localhost:3000"

export function getColumnByJournalist(journalistId: string, limit: number, offset: number) {
    const response = axios.get(`${baseUrl}/columnPublic/columnByJournalist/${journalistId}`, { params: { limit, offset } })
    return response
}

export function getColumnByCategory(category: string, limit: number, offset: number) {
    const response = axios.get(`${baseUrl}/columnPublic/columnByCategory/${category}`, { params: { limit, offset } })
    return response
}