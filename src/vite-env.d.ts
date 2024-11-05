/// <reference types="vite/client" />

export interface INews {
    _id: string;
    title: string;
    text: string;
    banner: string;
    user: IUser;
    likeCount: number;
    commentCount: number;
    top?: boolean
  }
  
  export interface IUser {
    name: string;
    username: string;
  }

  export interface TextLimitProps {
    text: string;
    limit: number;
  }
      
  interface SearchNews {
    title: string;
}