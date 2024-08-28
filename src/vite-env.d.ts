/// <reference types="vite/client" />

export interface INews {
    title: string;
    text: string;
    banner: string;
    user: IUser;
    likeCount: number;
    commentCount: number;
  }
  
  export interface IUser {
    name: string;
    username: string;
  }
