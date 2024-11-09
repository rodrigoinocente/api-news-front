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

export interface ITextLimitProps {
  text: string;
  limit: number;
}

export interface ISearchNews {
  title: string;
}

export interface AuthData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}