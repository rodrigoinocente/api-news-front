import axios from "axios";

const baseUrl = import.meta.env.VITE_API_INTERACT_URL

export interface ISendComment {
    content: string;
}

////////COMMENT////////
export function getComments(newsId: string, limit: number, offset: number) {
    const response = axios.get(`${baseUrl}/comment/commentPage/${newsId}`, { params: { limit, offset }, withCredentials: true })
    return response
}

export function sendComment(newsId: string, data: ISendComment) {
    const response = axios.post(`${baseUrl}/comment/${newsId}`, data, { withCredentials: true })
    return response
}

export function deleteComment(dataCommentId: string, commentId: string) {
    const response = axios.delete(`${baseUrl}/comment/deleteComment/${dataCommentId}/${commentId}`, { withCredentials: true })
    return response
}

export function likeComment(dataCommentId: string, commentId: string) {
    const response = axios.post(`${baseUrl}/comment/likeComment/${dataCommentId}/${commentId}`, {}, { withCredentials: true })
    return response
}

////////REPLY////////
export function sendReply(dataCommentId: string, commentId: string, data: ISendComment) {
    const response = axios.post(`${baseUrl}/reply/${dataCommentId}/${commentId}`, data, { withCredentials: true })
    return response
}

export function getReplies(dataCommentId: string, commentId: string, limit: number, offset:number) {
    const response = axios.get(`${baseUrl}/reply/replyPage/${dataCommentId}/${commentId}`, { params: { limit, offset }, withCredentials: true })
    return response
}

export function deleteReply(dataReplyId: string, replyId: string) {
    const response = axios.delete(`${baseUrl}/reply/deleteReply/${dataReplyId}/${replyId}`, { withCredentials: true })
    return response
}